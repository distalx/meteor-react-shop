import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class NameAndEmail extends Component {
  constructor(props) {
    super(props)
  }

  changeName(event) {
    const name = event.target.value;
    this.checkFilled()
  }

  changeEmail(event) {
    const email = event.target.value;
    this.checkFilled()
  }

  checkFilled() {
    const name = ReactDOM.findDOMNode(this.refs.nameInput).value.trim()
    const email = ReactDOM.findDOMNode(this.refs.emailInput).value.trim()
    this.props.changeNameAndEmailNoticeState(name, email)
  }

  render(){
    return(
      <div className="row" id="step-1">
        <div className="col-xs-12">
          <div className="col-md-12">
            <h3> Name and Email</h3>
            <div className="form-group">
              <input
                maxlength="100"
                type="text"
                className="form-control"
                placeholder="First and Last"
                ref="nameInput"
                onChange={this.changeName.bind(this)}
              />
            </div>
            <div className="form-group">
              <input
                maxlength="100"
                type="text"
                required="required"
                className="form-control"
                placeholder="Email"
                ref="emailInput"
                onChange={this.changeEmail.bind(this)}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NameAndEmail
