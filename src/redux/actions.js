import { INCREMENT, DECREMENT, CHANGE_TEME, DISABLE_BUTTONS, ENABLE_BUTTONS } from "./types";

export function increment() {
 return {
  type: INCREMENT
 }
};

export function decrement() {
 return {
  type: DECREMENT
 }
};

export function disableButtons() {
 return {
  type: DISABLE_BUTTONS
 }
};

export function enableButtons() {
 return {
  type: ENABLE_BUTTONS
 }
};

export function changeTehme(newTheme) {
 return {
  type: CHANGE_TEME,
  payload: newTheme
 }
};

export function asyncIncrement() {
 return function(dispatch) {
  dispatch(disableButtons())
  setTimeout(() => {
   dispatch(increment())
   dispatch(enableButtons())
  }, 5000)
 }
};

