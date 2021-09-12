import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAlert, setDisplayAlert } from "../store/actions";
import { getAlert, getDisplayAlert } from "../store/selectors";
import store from "../store/store";
import "./Alert.css";

const AlertBox = () => {
  const displayAlert = useSelector(getDisplayAlert);
  const {message, buttons} = useSelector(getAlert);
  const dispatch = useDispatch();
  if (displayAlert) {
    return (
      <div id="overlay">
        <div id="alert">
          <div>{message}</div>
          <div className="row">
            {buttons.map(button => (
              <button onClick={() => {
                dispatch(setDisplayAlert(false));
                button.onClick();
              }} key={button.text}>{button.text}</button>
            ))}
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default AlertBox;

export const alert = (message, buttons) => {
  store.dispatch(setAlert({ message, buttons }));
  store.dispatch(setDisplayAlert(true));
};