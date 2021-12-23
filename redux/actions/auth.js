import { authTypes } from "../types";

export const signUp = (email, password) => async (dispatch) => {
  try {
    const clientID = "AIzaSyBzm8c_6vYzk9PAsHslUa2s7lf8cMBc5Lg";

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
    // console.log(resdata);
    dispatch({
      type: authTypes.AUTH_USER,
    });
  } catch (error) {}
};
