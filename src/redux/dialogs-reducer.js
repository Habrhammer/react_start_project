const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

export function dialogsReducer(state, action) {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessageObj = {
        id: Date.now(),
        message: state.newMessageText,
      };
      state.messages.push(newMessageObj);
      state.newMessageText = "";
      return state;
    case UPDATE_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;
    default:
      return state;
  }
}


export function sendMessageCreator() {
   return {
     type: SEND_MESSAGE,
   };
 }
 export function updateMessageTextCreator(text) {
   return {
     type: UPDATE_MESSAGE_TEXT,
     newText: text,
   };
 }