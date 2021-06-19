export const newUser = (user) => {
    return async (dispatch) => {
      await dispatch({ type: "NEWUSER", payLoad: user });
    };
  };
  
  export const changeFirst = (value) => {
    return async (dispatch) => {
      await dispatch({ type: "changeFirst", payLoad: value });
    };
  };
  export const changeLast = (value) => {
    return async (dispatch) => {
      await dispatch({ type: "changeLast", payLoad: value });
    };
  };
  export const changePass = (value) => {
    return async (dispatch) => {
      await dispatch({ type: "changePass", payLoad: value });
    };
  };
  export const changeEmail = (value) => {
    return async (dispatch) => {
      await dispatch({ type: "changeEmail", payLoad: value });
    };
  };
  
  export const reset = (type) => {
    return async (dispatch) => {
      switch (type) {
        case "first":
          await dispatch({ type: "CLEAR_FIRST", payLoad: "" });
          break;
        case "last":
          await dispatch({ type: "CLEAR_LAST", payLoad: "" });
          break;
        case "pass":
          await dispatch({ type: "CLEAR_PASS", payLoad: "" });
          break;
        case "email":
          await dispatch({ type: "CLEAR_EMAIL", payLoad: "" });
          break;
      }
    };
  };