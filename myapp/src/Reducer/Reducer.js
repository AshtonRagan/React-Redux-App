import {
  FETCHING_DATA_START,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILD,
  CARDCLICKED
} from "./Actions";

export const initiState = {
  isLoading: false,
  Data: null,
  err: ""
};

export const Reducer = (state = initiState, action) => {
  switch (action.type) {
    case FETCHING_DATA_START:
      return {
        ...state,
        isLoading: true
      };
    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        Data: action.payload
      };
    case FETCHING_DATA_FAILD:
      console.log("It did not work!");

      return;
    case CARDCLICKED:
      alert("you clicked " + action.payload);
      return state;

    default:
      return state;
  }
};
