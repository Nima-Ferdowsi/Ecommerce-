export const user = (state = {}, action) => {
    switch (action.type) {
      case "NEWUSER":
        return { ...action.payLoad };
      default:
        return state;
    }
  };
  
  export const firstname = (state = "", action) => {
    switch (action.type) {
      case "changeFirst":
        return action.payLoad;
      case "CLEAR_FIRST":
        return action.payLoad;
      default:
        return state;
    }
  };
  
  export const lastname = (state = {}, action) => {
    switch (action.type) {
      case "changeLast":
        return action.payLoad;
      case "CLEAR_LAST":
        return action.payLoad;
      default:
        return state;
    }
  };
  export const pass = (state = "", action) => {
    switch (action.type) {
      case "changePass":
        return action.payLoad;
      case "CLEAR_PASS":
        return action.payLoad;
      default:
        return state;
    }
  };
  export const email = (state = {}, action) => {
    switch (action.type) {
      case "changeEmail":
        return action.payLoad;
      case "CLEAR_EMAIL":
        return action.payLoad;
      default:
        return state;
    }
  };
  