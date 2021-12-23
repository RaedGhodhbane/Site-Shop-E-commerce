import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Text,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  Alert,
} from "react-native";
import Colors from "../../global/Colors";
// import { signUp } from "../../redux/actions/auth";
import { authTypes } from "../../redux/types";
import { useDispatch } from "react-redux";
const Authscreen = (props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState();
  const [isLogged, setLogged] = useState(false);

  useEffect(() => {
    if (isLogged) {
      props.navigation.navigate("Shop");
    }
  }, [isLogged]);
  //   const onChange = (value) => {
  //     setFormData({ ...formData, [value]: value });
  //   };
  const signUpUser = async () => {
    if (email === "" || password === "") {
      return Alert.alert("ERROR", "The field is empty", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
      ]);
    }

    const clientID = "AIzaSyBzEFYJJuJlb7-DirN4x8K_t6beizlw0KQ";

    const res = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${clientID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      }
    );
    const resdata = await res.json();

    try {
      if (!resdata.ok) {
        return Alert.alert("ERROR", resdata.error.message, [
          {
            text: "ok",
            onPress: () => console.log("Cancel Pressed"),
            style: "ok",
          },
        ]);
      }
      console.log(resdata);
      dispatch({
        type: authTypes.LOG_USER,
      });
    } catch (error) {
      setErrors(error.message);
    }
  };

  const signInUser = async () => {
    const clientID = "AIzaSyBzEFYJJuJlb7-DirN4x8K_t6beizlw0KQ";
    if (email === "" || password === "") {
      return Alert.alert("ERROR", "The field is empty", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
      ]);
    }
    const res = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${clientID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      }
    );

    const resdata = await res.json();
    setLogged(true);
    try {
      if (!resdata.ok) {
        return Alert.alert("ERROR", resdata.error.message, [
          {
            text: "ok",
            onPress: () => console.log("Cancel Pressed"),
            style: "ok",
          },
        ]);
      }
      console.log("test");
    } catch (error) {
      setErrors(error.message);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={css.container}>
        <View style={css.image}>
          <Image
            style={css.login}
            resizeMode="contain"
            source={{
              uri:
                "https://static3.depositphotos.com/1005574/224/v/950/depositphotos_2240334-stock-illustration-login-icon-button.jpg",
            }}
          />
        </View>
        <View style={css.inputGroup}>
          <Text style={css.text}>Email:</Text>
          <TextInput
            id="email"
            keyboardType="email-address"
            style={css.email}
            placeholder="example@gmail.com"
            value={email}
            onChangeText={(value) => setEmail(value)}
          />
        </View>
        <View style={css.inputGroup}>
          <Text style={css.text}>Password:</Text>
          <TextInput
            id="password"
            secureTextEntry
            keyboardType="default"
            style={css.password}
            placeholder="*****"
            value={password}
            onChangeText={(value) => setPassword(value)}
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Button title="Sign in" color={Colors.orange} onPress={signInUser} />
        </View>
        <View>
          <Button title="Sign up" color={Colors.gray} onPress={signUpUser} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const css = StyleSheet.create({
  container: {
    shadowColor: Colors.black,
    shadowRadius: 8,
    shadowOpacity: 0.26,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    elevation: 3,
    borderRadius: 10,
    backgroundColor: Colors.white,
    margin: 18,
    padding: 18,
    marginTop: 60,
  },
  image: {
    height: 50,
    width: "100%",
    alignItems: "center",
  },
  login: {
    height: 50,
    width: "100%",
  },
  inputGroup: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  text: {
    width: "30%",
    color: Colors.orange,
    fontSize: 16,
  },
  email: {
    borderBottomWidth: 1,
    width: "70%",
    paddingHorizontal: 5,
    borderColor: Colors.yellow,
  },
  password: {
    borderBottomWidth: 1,
    width: "70%",
    paddingHorizontal: 5,
    borderColor: Colors.yellow,
  },
});
export default Authscreen;
