const initialState = {
  prompt: "",
  textContent: "",
  displayAlert: false,
  alert: {message: "", buttons: []} 
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case "setPrompt": {
    return {
      ...state,
      prompt: action.payload
    };
  }
  case "setTextContent": {
    return {
      ...state,
      textContent: action.payload
    };
  }
  case "setDisplayAlert": {
    return {
      ...state,
      displayAlert: action.payload
    };
  }
  case "setAlert": {
    const { message, buttons } = action.payload;
    return {
      ...state,
      alert: {message, buttons }
    };
  }
  case "newFile": {
    return {
      ...state,
      prompt: "",
      textContent: ""
    };
  }
  default: {
    return state;
  }
  }
}