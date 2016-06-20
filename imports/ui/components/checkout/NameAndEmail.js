import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class NameAndEmail extends Component {
  constructor(props){
    super(props)

    this.state = {
      hasName: false,
      hasEmail: false
    }
  }

  changeName() {
    const name = ReactDOM.findDOMNode(this.refs.nameInput).value.trim()

    ReactDOM.findDOMNode(this.refs.nameInput).value = name

    if(name){
      this.setState({hasName: true})
    } else {
      this.setState({hasName: false})
    }
  }

  changeEmail() {
    const email = ReactDOM.findDOMNode(this.refs.emailInput).value.trim()

    ReactDOM.findDOMNode(this.refs.emailInput).vaule = email

    if(email){
      this.setState({hasEmail: true})
    } else {
      this.setState({hasEmail: false})
    }
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
