import Axios from "axios";

export const FETCHING_DATA_START = "FETCHING_DATA_START";
export const FETCHING_DATA_SUCCESS = "FETCHING_DATA_SUCCESS";
export const FETCHING_DATA_FAILD = "FETCHING_DATA_FAILED";
export const CARDCLICKED ="CardClicked"

export const FetchData = () => dispatch => {
  dispatch({ type: FETCHING_DATA_START });
  Axios.get("https://api.jikan.moe/v3/top/anime")
    .then(res => {
      dispatch({ type: FETCHING_DATA_SUCCESS, payload: res.data.top });
      console.log("res = ", res.data.top);
    })
    .catch(err => {
      dispatch({ type: FETCHING_DATA_FAILD });
    });
};

export const CardClicked = (name) => {
  return {type: CARDCLICKED, payload:name}
}