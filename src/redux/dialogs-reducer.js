import { dialogsAPI } from "../api/api";

const SEND_MESSAGE = "SEND-MESSAGE";
const SET_MESSAGES = "SET_MESSAGES";
const SET_DIALOGS = "SET_DIALOGS";


let initialState = {
  dialogs: [
    {
      id: 1,
      name: "John",
      avatar:
        "https://images.generated.photos/REFe5-foHQv2xx1RBHm9JqaoRoNHraztJAQFEuWNCLQ/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzIwNDc4LmpwZw.jpg",
    },
 
  ],
  messages: [
  

  ],
  // newMessageText: "New message...",
};

export function dialogsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MESSAGES:{
      return {
        ...state,
        messages: action.messages
      }
    }
    case SEND_MESSAGE: {
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            
            body: action.newMessageText,
          },
        ],
       
      };
    }
    case SET_DIALOGS: {
      return {
        ...state,
        dialogs: action.dialogs
      }
    }

    default:
      return state;
  }
}


export function sendMessageCreator(newMessageText) {
  return {
    type: SEND_MESSAGE,
    newMessageText
  };
}

export function setMessagesCreator(messages){
  return {
    type: SET_MESSAGES,
    messages
  }
}

export function setDialogsCreator(dialogs){
  return {
    type: SET_DIALOGS,
    dialogs
  }
}



export function requestUserMessages(userId) {
  return (dispatch) => {
    return dialogsAPI.getListMessages(userId).then((data) => {
      console.log(data);
      dispatch(setMessagesCreator(data.data.items));
      // dispatch(setTotalUsersCount(data.totalCount));
    });
  };
}

export function sendMessageHOC(userId, body){
  return (dispatch)=>{
    dialogsAPI.sendMessage(userId, body).then((response)=>{
    console.log(response);
        dispatch(sendMessageCreator(response.data.data.message.body))
    
      
    })
  }
}



export function getDialogItems(){
  return (dispatch=>{
    return dialogsAPI.getDialogs().then((response)=>{
      console.log(response);
      dispatch(setDialogsCreator(response.data))
    })
  })
}
