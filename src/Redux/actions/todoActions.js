
//ACTIONS
export const ADD_TODO = "Add TODO";
export const TOGGLE_TODO = "Toggle ToDo";


// ACTION CREATOR
export const addToDo = (text) => ({ text: text, type: ADD_TODO });
export const toggleToDo = (index) => ({ index: index, type: TOGGLE_TODO });