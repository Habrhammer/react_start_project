import React from "react";
import {sendMessageCreator,updateMessageTextCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";


function mapStateToProps(state){

  return {
    dialogsPage: state.dialogsPage
  }
}

function mapDispatchToProps(dispatch){

  return {
    updateNewMessageBody: (body)=> {
      dispatch(updateMessageTextCreator(body));
      
    },
    sendMessage: () => {
      dispatch(sendMessageCreator())
    }
  }
}


const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);


export default DialogsContainer;
