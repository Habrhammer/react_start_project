import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  };
  activateEditMode = () => {
     this.setState((state)=>{
        return state.editMode = true 
     })
  };

  deactivateEditMode = ()=>{
   this.setState((state)=>{
      return state.editMode = false 
   })
   this.props.updateStatus(this.state.status)
  };

  onStatusChange = (e)=>{
    this.setState({
      status: e.currentTarget.value
    })
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevProps.status !== this.props.status) {
        this.setState({
            status: this.props.status
        });
    }
   
}

  render() {
    return (
      <div>
        {this.state.editMode ? (
          <div  onBlur= {this.deactivateEditMode} className="input">
            <input onChange={this.onStatusChange} autoFocus={true} value={this.state.status}  type="text" />
          </div>
        ) : (
          <div onDoubleClick ={this.activateEditMode} className="status">{this.props.status || "----------------"}</div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
