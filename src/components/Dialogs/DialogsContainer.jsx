import React from "react";
import {
  getDialogItems,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { withRouter } from "react-router";

class DialogsContainer extends React.Component {
  componentDidMount() {
    this.props.getDialogItems();
  }
  render() {
    return <Dialogs {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    dialogsPage: state.dialogsPage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getDialogItems: () => {
      dispatch(getDialogItems());
    },
  };
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(DialogsContainer);
