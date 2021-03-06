import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

class ShippingAddress extends Component {
  constructor(props) {
    super(props);

    this.changeAddress= this.changeAddress.bind(this);
    this.changeAddress2 = this.changeAddress2.bind(this);
    this.changeState = this.changeState.bind(this);
    this.changeZip = this.changeZip.bind(this);
    this.changeCity = this.changeCity.bind(this);
    this.changeCountry = this.changeCountry.bind(this);
  }

  changeAddress(event) {
    const address = event.target.value;
    this.checkFilled();
  }

  changeAddress2(event) {
    const address2 = event.target.value;
    this.checkFilled();
  }

  changeCity(event) {
    const city = event.target.value;
    this.checkFilled();
  }

  changeState(event) {
    const state = event.target.value;
    this.checkFilled();
  }

  changeZip(event) {
    const zip = event.target.value;
    this.checkFilled();
  }

  changeCountry(event) {
    const county = event.target.value;
  }

  checkFilled() {
    const address = ReactDOM.findDOMNode(this.refs.address).value.trim();
    const address2 = ReactDOM.findDOMNode(this.refs.address2).value.trim();
    const city = ReactDOM.findDOMNode(this.refs.city).value.trim();
    const state = ReactDOM.findDOMNode(this.refs.state).value.trim();
    const zip = ReactDOM.findDOMNode(this.refs.zip).value.trim();

    this.props.changeAddressNoticeState(address, address2, city, state, zip);
  }

  render() {
    return(
      <div className="row" id="step-2">
        <div className="col-xs-12">
          <div className="col-md-12">
            <h3>Shipping Address</h3>
            <div className="form-group">
              <input type="text" placeholder="Address Line 1" ref="address" className="form-control" onChange={this.changeAddress} />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Address Line 2" ref="address2" className="form-control" onChange={this.changeAddress2}/>
            </div>
            <div className="form-group">
              <input type="text" placeholder="City" className="form-control" ref="city" onChange={this.changeCity} />
            </div>
            <div className="form-group">
              <div className="row">
                <div className="col-md-2">
                  <input type="text" placeholder="State" className="form-control" ref="state" onChange={this.changeState} />
                </div>
                <div className="col-md-2">
                  <input type="text" placeholder="Post Code" className="form-control" ref="zip" onChange={this.changeZip} />
                </div>
              </div>
            </div>
            <div className="form-group ">
              <select name="country" ref="country" className="form-control" placeholder="country" defaultValue="US" onChange={this.changeCountry} >
                <option value="AR">Argentina</option>
                <option value="AU">Australia</option>
                <option value="AT">Austria</option>
                <option value="BY">Belarus</option>
                <option value="BE">Belgium</option>
                <option value="BA">Bosnia and Herzegovina</option>
                <option value="BR">Brazil</option>
                <option value="BG">Bulgaria</option>
                <option value="CA">Canada</option>
                <option value="CL">Chile</option>
                <option value="CN">China</option>
                <option value="CO">Colombia</option>
                <option value="CR">Costa Rica</option>
                <option value="HR">Croatia</option>
                <option value="CU">Cuba</option>
                <option value="CY">Cyprus</option>
                <option value="CZ">Czech Republic</option>
                <option value="DK">Denmark</option>
                <option value="DO">Dominican Republic</option>
                <option value="EG">Egypt</option>
                <option value="EE">Estonia</option>
                <option value="FI">Finland</option>
                <option value="FR">France</option>
                <option value="GE">Georgia</option>
                <option value="DE">Germany</option>
                <option value="GI">Gibraltar</option>
                <option value="GR">Greece</option>
                <option value="HK">Hong Kong S.A.R., China</option>
                <option value="HU">Hungary</option>
                <option value="IS">Iceland</option>
                <option value="IN">India</option>
                <option value="ID">Indonesia</option>
                <option value="IR">Iran</option>
                <option value="IQ">Iraq</option>
                <option value="IE">Ireland</option>
                <option value="IL">Israel</option>
                <option value="IT">Italy</option>
                <option value="JM">Jamaica</option>
                <option value="JP">Japan</option>
                <option value="KZ">Kazakhstan</option>
                <option value="KW">Kuwait</option>
                <option value="KG">Kyrgyzstan</option>
                <option value="LA">Laos</option>
                <option value="LV">Latvia</option>
                <option value="LB">Lebanon</option>
                <option value="LT">Lithuania</option>
                <option value="LU">Luxembourg</option>
                <option value="MK">Macedonia</option>
                <option value="MY">Malaysia</option>
                <option value="MT">Malta</option>
                <option value="MX">Mexico</option>
                <option value="MD">Moldova</option>
                <option value="MC">Monaco</option>
                <option value="ME">Montenegro</option>
                <option value="MA">Morocco</option>
                <option value="NL">Netherlands</option>
                <option value="NZ">New Zealand</option>
                <option value="NI">Nicaragua</option>
                <option value="KP">North Korea</option>
                <option value="NO">Norway</option>
                <option value="PK">Pakistan</option>
                <option value="PS">Palestinian Territory</option>
                <option value="PE">Peru</option>
                <option value="PH">Philippines</option>
                <option value="PL">Poland</option>
                <option value="PT">Portugal</option>
                <option value="PR">Puerto Rico</option>
                <option value="QA">Qatar</option>
                <option value="RO">Romania</option>
                <option value="RU">Russia</option>
                <option value="SA">Saudi Arabia</option>
                <option value="RS">Serbia</option>
                <option value="SG">Singapore</option>
                <option value="SK">Slovakia</option>
                <option value="SI">Slovenia</option>
                <option value="ZA">South Africa</option>
                <option value="KR">South Korea</option>
                <option value="ES">Spain</option>
                <option value="LK">Sri Lanka</option>
                <option value="SE">Sweden</option>
                <option value="CH">Switzerland</option>
                <option value="TW">Taiwan</option>
                <option value="TH">Thailand</option>
                <option value="TN">Tunisia</option>
                <option value="TR">Turkey</option>
                <option value="UA">Ukraine</option>
                <option value="AE">United Arab Emirates</option>
                <option value="GB">United Kingdom</option>
                <option value="US">USA</option>
                <option value="UZ">Uzbekistan</option>
                <option value="VN">Vietnam</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ShippingAddress.propTypes = {
  changeAddressNoticeState: PropTypes.func
};

export default ShippingAddress;
