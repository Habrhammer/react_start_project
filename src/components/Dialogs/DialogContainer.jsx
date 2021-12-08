import React from "react";
import {
  requestUserMessages,
  sendMessageHOC,
} from "../../redux/dialogs-reducer";
import Dialog from "./Dialog";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router";

class DialogContainer extends React.Component {
  componentDidMount() {
    this.props.getUserMessages(this.props.match.params.userId);
  }

  render() {
    return <Dialog state={this.props.dialogsPage} {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    dialogsPage: state.dialogsPage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    sendMessage: (userId, newMessageBody) => {
      dispatch(sendMessageHOC(userId, newMessageBody));
    },
    getUserMessages: (userId) => {
      dispatch(requestUserMessages(userId));
    },
  };
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(DialogContainer);
