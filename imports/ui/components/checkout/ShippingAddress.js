import React, { Component } from 'react'

class ShippingAddress extends Component {
  render() {
    return(
      <div className="row" id="step-2">
        <div className="col-xs-12">
          <div className="col-md-12">
            <h3>Shipping Address</h3>
            <div className="form-group">
              <input type="text" placeholder="Address Line 1" name="address" className="form-control" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Address Line 2" name="address2" className="form-control" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="City" className="form-control" name="city" />
            </div>
            <div className="form-group">
              <div className="row">
                <div className="col-md-2">
                  <input type="text" placeholder="State" className="form-control" name="state" />
                </div>
                <div className="col-md-2">
                  <input type="text" placeholder="Post Code" className="form-control" name="zip" />
                </div>
              </div>
            </div>
            <div className="form-group ">
              <select name="country" id="country" className="form-control" placeholder="country" defaultValue="US" >
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
    )
  }
}

export default ShippingAddress