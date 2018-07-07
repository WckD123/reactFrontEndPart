import React, {Component} from 'react';
import {Modal , Grid,Row,Col } from 'react-bootstrap';
import './AddSOP.css';
import Axios from 'axios';

//ADD SOP, Fellowship and Interview have almost identical code


class AddSOP extends Component {

    state = {
        Docs : {
            University: null,
            Country: "United States",
            Department: null,
            Degree: null,
            PriceBand : 1.5,
            QuesAnswers: this.QuesAns,
            IsClicked:false,
            type:"SOP"
        },
        QID : 1,
        UploadedDocs: null
    }

    componentDidMount(){
        Axios.get('https://gettin-4d3a5.firebaseio.com/Users/0/UploadedDocs.json').then(response =>
        {
            this.setState({UploadedDocs:response.data})
        }
    )
    }

    onChangedHandler = (event, argument) => {
        const tempVar = {...this.state.Docs.QuesAnswers}

        console.log("On changed handler");
    }

    onUniChangedHandler = (event) => {
        const tempVar = {...this.state.Docs}
        tempVar.University = event.target.value;
        this.setState({Docs :tempVar});
        console.log(this.state);
    }

    onDepChangedHandler = (event) => {
        const tempVar = {...this.state.Docs}
        tempVar.Department = event.target.value;
        this.setState({Docs :tempVar});
        console.log(this.state);
    }

    onDegChangedHandler = (event) => {
        const tempVar = {...this.state.Docs}
        tempVar.Degree = event.target.value;
        this.setState({Docs :tempVar});
        console.log(this.state);
    }

    onPriceChangedHandler = (event) => {
        const tempVar = {...this.state.Docs}
        tempVar.PriceBand = parseInt(event.target.value);
        this.setState({Docs :tempVar});
        console.log(this.state);
    }

    onCountryChangedHandler = (event) => {
        console.log(event.target.value);
        const tempVar = {...this.state.Docs}
        tempVar.Country = event.target.value;
        this.setState({Docs :tempVar});
        console.log(this.state);
    }

    onQAChangeHandler = (event) => {
        console.log("QA me change hua hai BC!!")
    }

    submit = (event) => {
        //uploadedArray.push(this.state.UploadedDocs);
        //console.log(uploadedArray);
        let uploadedArray = this.state.Docs;
        console.log(uploadedArray);
        //Axios.post('https://gettin-4d3a5.firebaseio.com/Users/0/UploadedDocs.json', uploadedArray);
        Axios.post('http://localhost:4000/uploadDocument', uploadedArray,{headers: {'content-type': 'application/json'}});

    }

    //An array of Question Answers. To be displayed. Have added 1 div as default

    QuesAns = [<Row>
                        <Col xs={12} lg={12} className="Top-margin">
                            <Row>
                                <Col md={2} xs={0}>
                                </Col>  
                                <Col md={3} xs={12}>
                                <h5>SOP question </h5>
                                </Col>
                                <Col md={7} xs={12}>
                                    <input type = "text" name = "SOPQ" id="SOPQ" placeholder= "SOP Question" onChange={this.onChangedHandler} /> 
                                </Col> 
                            </Row>
                        </Col>
                        <Col xs={12} lg={12} className="Top-margin">
                            <Row>
                                <Col md={2} xs={0}>
                                    
                                </Col>  
                                <Col md={3} xs={12}>
                                <h5>Answer </h5>
                                </Col>
                                <Col md={7} xs={12}>
                                <textarea class="form-control" name="Ans" rows="5" id="Answer" onChange={this.onChangedHandler}></textarea> 
                                </Col> 
                            </Row>
                        </Col>
                    </Row>];

    //Contains 1 div that is appended in the QuesAns array to display more than 1 QA

    QA = <Row>
            <Col xs={12} lg={12} className="Top-margin">
                <Row>
                    <Col md={2} xs={0}>
                    </Col>  
                    <Col md={3} xs={12}>
                    <h5>SOP question </h5>
                    </Col>
                    <Col md={7} xs={12}>
                        <input type = "text" name = "SOPQ" id="SOPQ" placeholder= "SOP Question"  onChange={this.onChangedHandler}/> 
                    </Col> 
                </Row>
            </Col>
            <Col xs={12} lg={12} className="Top-margin">
                <Row>
                    <Col md={2} xs={0}>
                        
                    </Col>  
                    <Col md={3} xs={12}>
                    <h5>Answer </h5>
                    </Col>
                    <Col md={7} xs={12}>
                    <textarea class="form-control" name="ans" rows="5" id="Answer" onChange={this.onChangedHandler}></textarea> 
                    </Col> 
                </Row>
            </Col>
        </Row>


    //Function to add new QA in the QuesAns Array

    addNewDiv = () => {
        const qid = this.state.QID;
        console.log(this.QA);
        //let inputEl = this.QA.Document.getElementById("SOPQ")
        //inputEl.id = "SOPQ1";
        this.QuesAns.push(this.QA);
        //console.log(this.QuesAns);
        //Set State is called to re-render the element :: NOTE : Find another way if possible ::
        this.setState(this.state);
    }
    
    render(){
        return (
            <div>
                <Modal
                        animation={false}
                        show={this.props.show} 
                        onHide={this.props.hideModal}
                        backdropClassName="Backdrop"
                        bsSize="large"
                        >
                    <Modal.Header>
                        <center>
                            <Modal.Title>Admission SOP</Modal.Title>
                        </center>
                    </Modal.Header>
                    <Grid>
                        <Row>
                            <Col xs={12} md={12} className="Top-margin">
                                <Row>
                                    <Col md={5} xs={12} lg={6}>
                                        <center>
                                            <h6>Name of the University</h6>
                                        </center>
                                    </Col>
                                    <Col md={6} xs={12} lg={6}>
                                        <center>
                                            <input type = "text" name = "University" value={this.state.Docs.University} onChange={this.onUniChangedHandler} placeholder= "University..." />
                                        </center>
                                    </Col>
    
                                </Row>
                            </Col>
                            <Col xs={12} md={12} className="Top-margin">
                                <Row>
                                    <Col md={5} xs={12} lg={6}>
                                        <center>
                                            <h6>Country</h6>
                                        </center>
                                    </Col>
                                    <Col md={6} xs={12} lg={6}>
                                        <center>
                                        <select value={this.state.Docs.Country} onChange={this.onCountryChangedHandler} name="countries">
                                            <option value="United States">United States</option> 
                                            <option value="United Kingdom">United Kingdom</option> 
                                            <option value="Afghanistan">Afghanistan</option> 
                                            <option value="Albania">Albania</option> 
                                            <option value="Algeria">Algeria</option> 
                                            <option value="American Samoa">American Samoa</option> 
                                            <option value="Andorra">Andorra</option> 
                                            <option value="Angola">Angola</option> 
                                            <option value="Anguilla">Anguilla</option> 
                                            <option value="Antarctica">Antarctica</option> 
                                            <option value="Antigua and Barbuda">Antigua and Barbuda</option> 
                                            <option value="Argentina">Argentina</option> 
                                            <option value="Armenia">Armenia</option> 
                                            <option value="Aruba">Aruba</option> 
                                            <option value="Australia">Australia</option> 
                                            <option value="Austria">Austria</option> 
                                            <option value="Azerbaijan">Azerbaijan</option> 
                                            <option value="Bahamas">Bahamas</option> 
                                            <option value="Bahrain">Bahrain</option> 
                                            <option value="Bangladesh">Bangladesh</option> 
                                            <option value="Barbados">Barbados</option> 
                                            <option value="Belarus">Belarus</option> 
                                            <option value="Belgium">Belgium</option> 
                                            <option value="Belize">Belize</option> 
                                            <option value="Benin">Benin</option> 
                                            <option value="Bermuda">Bermuda</option> 
                                            <option value="Bhutan">Bhutan</option> 
                                            <option value="Bolivia">Bolivia</option> 
                                            <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option> 
                                            <option value="Botswana">Botswana</option> 
                                            <option value="Bouvet Island">Bouvet Island</option> 
                                            <option value="Brazil">Brazil</option> 
                                            <option value="British Indian Ocean Territory">British Indian Ocean Territory</option> 
                                            <option value="Brunei Darussalam">Brunei Darussalam</option> 
                                            <option value="Bulgaria">Bulgaria</option> 
                                            <option value="Burkina Faso">Burkina Faso</option> 
                                            <option value="Burundi">Burundi</option> 
                                            <option value="Cambodia">Cambodia</option> 
                                            <option value="Cameroon">Cameroon</option> 
                                            <option value="Canada">Canada</option> 
                                            <option value="Cape Verde">Cape Verde</option> 
                                            <option value="Cayman Islands">Cayman Islands</option> 
                                            <option value="Central African Republic">Central African Republic</option> 
                                            <option value="Chad">Chad</option> 
                                            <option value="Chile">Chile</option> 
                                            <option value="China">China</option> 
                                            <option value="Christmas Island">Christmas Island</option> 
                                            <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option> 
                                            <option value="Colombia">Colombia</option> 
                                            <option value="Comoros">Comoros</option> 
                                            <option value="Congo">Congo</option> 
                                            <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option> 
                                            <option value="Cook Islands">Cook Islands</option> 
                                            <option value="Costa Rica">Costa Rica</option> 
                                            <option value="Cote D'ivoire">Cote D'ivoire</option> 
                                            <option value="Croatia">Croatia</option> 
                                            <option value="Cuba">Cuba</option> 
                                            <option value="Cyprus">Cyprus</option> 
                                            <option value="Czech Republic">Czech Republic</option> 
                                            <option value="Denmark">Denmark</option> 
                                            <option value="Djibouti">Djibouti</option> 
                                            <option value="Dominica">Dominica</option> 
                                            <option value="Dominican Republic">Dominican Republic</option> 
                                            <option value="Ecuador">Ecuador</option> 
                                            <option value="Egypt">Egypt</option> 
                                            <option value="El Salvador">El Salvador</option> 
                                            <option value="Equatorial Guinea">Equatorial Guinea</option> 
                                            <option value="Eritrea">Eritrea</option> 
                                            <option value="Estonia">Estonia</option> 
                                            <option value="Ethiopia">Ethiopia</option> 
                                            <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option> 
                                            <option value="Faroe Islands">Faroe Islands</option> 
                                            <option value="Fiji">Fiji</option> 
                                            <option value="Finland">Finland</option> 
                                            <option value="France">France</option> 
                                            <option value="French Guiana">French Guiana</option> 
                                            <option value="French Polynesia">French Polynesia</option> 
                                            <option value="French Southern Territories">French Southern Territories</option> 
                                            <option value="Gabon">Gabon</option> 
                                            <option value="Gambia">Gambia</option> 
                                            <option value="Georgia">Georgia</option> 
                                            <option value="Germany">Germany</option> 
                                            <option value="Ghana">Ghana</option> 
                                            <option value="Gibraltar">Gibraltar</option> 
                                            <option value="Greece">Greece</option> 
                                            <option value="Greenland">Greenland</option> 
                                            <option value="Grenada">Grenada</option> 
                                            <option value="Guadeloupe">Guadeloupe</option> 
                                            <option value="Guam">Guam</option> 
                                            <option value="Guatemala">Guatemala</option> 
                                            <option value="Guinea">Guinea</option> 
                                            <option value="Guinea-bissau">Guinea-bissau</option> 
                                            <option value="Guyana">Guyana</option> 
                                            <option value="Haiti">Haiti</option> 
                                            <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option> 
                                            <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option> 
                                            <option value="Honduras">Honduras</option> 
                                            <option value="Hong Kong">Hong Kong</option> 
                                            <option value="Hungary">Hungary</option> 
                                            <option value="Iceland">Iceland</option> 
                                            <option value="India">India</option> 
                                            <option value="Indonesia">Indonesia</option> 
                                            <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option> 
                                            <option value="Iraq">Iraq</option> 
                                            <option value="Ireland">Ireland</option> 
                                            <option value="Israel">Israel</option> 
                                            <option value="Italy">Italy</option> 
                                            <option value="Jamaica">Jamaica</option> 
                                            <option value="Japan">Japan</option> 
                                            <option value="Jordan">Jordan</option> 
                                            <option value="Kazakhstan">Kazakhstan</option> 
                                            <option value="Kenya">Kenya</option> 
                                            <option value="Kiribati">Kiribati</option> 
                                            <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option> 
                                            <option value="Korea, Republic of">Korea, Republic of</option> 
                                            <option value="Kuwait">Kuwait</option> 
                                            <option value="Kyrgyzstan">Kyrgyzstan</option> 
                                            <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option> 
                                            <option value="Latvia">Latvia</option> 
                                            <option value="Lebanon">Lebanon</option> 
                                            <option value="Lesotho">Lesotho</option> 
                                            <option value="Liberia">Liberia</option> 
                                            <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option> 
                                            <option value="Liechtenstein">Liechtenstein</option> 
                                            <option value="Lithuania">Lithuania</option> 
                                            <option value="Luxembourg">Luxembourg</option> 
                                            <option value="Macao">Macao</option> 
                                            <option value="Macedonia">Macedonia</option> 
                                            <option value="Madagascar">Madagascar</option> 
                                            <option value="Malawi">Malawi</option> 
                                            <option value="Malaysia">Malaysia</option> 
                                            <option value="Maldives">Maldives</option> 
                                            <option value="Mali">Mali</option> 
                                            <option value="Malta">Malta</option> 
                                            <option value="Marshall Islands">Marshall Islands</option> 
                                            <option value="Martinique">Martinique</option> 
                                            <option value="Mauritania">Mauritania</option> 
                                            <option value="Mauritius">Mauritius</option> 
                                            <option value="Mayotte">Mayotte</option> 
                                            <option value="Mexico">Mexico</option> 
                                            <option value="Micronesia, Federated States of">Micronesia, Federated States of</option> 
                                            <option value="Moldova, Republic of">Moldova, Republic of</option> 
                                            <option value="Monaco">Monaco</option> 
                                            <option value="Mongolia">Mongolia</option> 
                                            <option value="Montserrat">Montserrat</option> 
                                            <option value="Morocco">Morocco</option> 
                                            <option value="Mozambique">Mozambique</option> 
                                            <option value="Myanmar">Myanmar</option> 
                                            <option value="Namibia">Namibia</option> 
                                            <option value="Nauru">Nauru</option> 
                                            <option value="Nepal">Nepal</option> 
                                            <option value="Netherlands">Netherlands</option> 
                                            <option value="Netherlands Antilles">Netherlands Antilles</option> 
                                            <option value="New Caledonia">New Caledonia</option> 
                                            <option value="New Zealand">New Zealand</option> 
                                            <option value="Nicaragua">Nicaragua</option> 
                                            <option value="Niger">Niger</option> 
                                            <option value="Nigeria">Nigeria</option> 
                                            <option value="Niue">Niue</option> 
                                            <option value="Norfolk Island">Norfolk Island</option> 
                                            <option value="Northern Mariana Islands">Northern Mariana Islands</option> 
                                            <option value="Norway">Norway</option> 
                                            <option value="Oman">Oman</option> 
                                            <option value="Pakistan">Pakistan</option> 
                                            <option value="Palau">Palau</option> 
                                            <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option> 
                                            <option value="Panama">Panama</option> 
                                            <option value="Papua New Guinea">Papua New Guinea</option> 
                                            <option value="Paraguay">Paraguay</option> 
                                            <option value="Peru">Peru</option> 
                                            <option value="Philippines">Philippines</option> 
                                            <option value="Pitcairn">Pitcairn</option> 
                                            <option value="Poland">Poland</option> 
                                            <option value="Portugal">Portugal</option> 
                                            <option value="Puerto Rico">Puerto Rico</option> 
                                            <option value="Qatar">Qatar</option> 
                                            <option value="Reunion">Reunion</option> 
                                            <option value="Romania">Romania</option> 
                                            <option value="Russian Federation">Russian Federation</option> 
                                            <option value="Rwanda">Rwanda</option> 
                                            <option value="Saint Helena">Saint Helena</option> 
                                            <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option> 
                                            <option value="Saint Lucia">Saint Lucia</option> 
                                            <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option> 
                                            <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option> 
                                            <option value="Samoa">Samoa</option> 
                                            <option value="San Marino">San Marino</option> 
                                            <option value="Sao Tome and Principe">Sao Tome and Principe</option> 
                                            <option value="Saudi Arabia">Saudi Arabia</option> 
                                            <option value="Senegal">Senegal</option> 
                                            <option value="Serbia and Montenegro">Serbia and Montenegro</option> 
                                            <option value="Seychelles">Seychelles</option> 
                                            <option value="Sierra Leone">Sierra Leone</option> 
                                            <option value="Singapore">Singapore</option> 
                                            <option value="Slovakia">Slovakia</option> 
                                            <option value="Slovenia">Slovenia</option> 
                                            <option value="Solomon Islands">Solomon Islands</option> 
                                            <option value="Somalia">Somalia</option> 
                                            <option value="South Africa">South Africa</option> 
                                            <option value="South Georgia">South Georgia</option> 
                                            <option value="Spain">Spain</option> 
                                            <option value="Sri Lanka">Sri Lanka</option> 
                                            <option value="Sudan">Sudan</option> 
                                            <option value="Suriname">Suriname</option> 
                                            <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option> 
                                            <option value="Swaziland">Swaziland</option> 
                                            <option value="Sweden">Sweden</option> 
                                            <option value="Switzerland">Switzerland</option> 
                                            <option value="Syrian Arab Republic">Syrian Arab Republic</option> 
                                            <option value="Taiwan, Province of China">Taiwan, Province of China</option> 
                                            <option value="Tajikistan">Tajikistan</option> 
                                            <option value="Tanzania, United Republic of">Tanzania, United Republic of</option> 
                                            <option value="Thailand">Thailand</option> 
                                            <option value="Timor-leste">Timor-leste</option> 
                                            <option value="Togo">Togo</option> 
                                            <option value="Tokelau">Tokelau</option> 
                                            <option value="Tonga">Tonga</option> 
                                            <option value="Trinidad and Tobago">Trinidad and Tobago</option> 
                                            <option value="Tunisia">Tunisia</option> 
                                            <option value="Turkey">Turkey</option> 
                                            <option value="Turkmenistan">Turkmenistan</option> 
                                            <option value="Turks and Caicos Islands">Turks and Caicos Islands</option> 
                                            <option value="Tuvalu">Tuvalu</option> 
                                            <option value="Uganda">Uganda</option> 
                                            <option value="Ukraine">Ukraine</option> 
                                            <option value="United Arab Emirates">United Arab Emirates</option> 
                                            <option value="United Kingdom">United Kingdom</option> 
                                            <option value="United States">United States</option> 
                                            <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option> 
                                            <option value="Uruguay">Uruguay</option> 
                                            <option value="Uzbekistan">Uzbekistan</option> 
                                            <option value="Vanuatu">Vanuatu</option> 
                                            <option value="Venezuela">Venezuela</option> 
                                            <option value="Viet Nam">Viet Nam</option> 
                                            <option value="Virgin Islands, British">Virgin Islands, British</option> 
                                            <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option> 
                                            <option value="Wallis and Futuna">Wallis and Futuna</option> 
                                            <option value="Western Sahara">Western Sahara</option> 
                                            <option value="Yemen">Yemen</option> 
                                            <option value="Zambia">Zambia</option> 
                                            <option value="Zimbabwe">Zimbabwe</option>
                                        </select>
                                        </center>
                                    </Col>
    
                                </Row>
                            </Col>
                            <Col xs={12} md={12} className="Top-margin">
                                <Row>
                                    <Col md={5} xs={12} lg={6}>
                                        <center>
                                            <h6>Department</h6>
                                        </center>
                                    </Col>
                                    <Col md={6} xs={12} lg={6}>
                                        <center>
                                            <input type = "text" name = "Department" value={this.state.Docs.Department} onChange={this.onDepChangedHandler} placeholder= "Department..." />
                                        </center>
                                    </Col>
    
                                </Row>
                            </Col>
                            <Col xs={12} md={12} className="Top-margin">
                                <Row>
                                    <Col md={5} xs={12} lg={6}>
                                        <center>
                                            <h6>Degree</h6>
                                        </center>
                                    </Col>
                                    <Col md={6} xs={12} lg={6}>
                                        <center>
                                            <input type = "text" value={this.state.Docs.Degree} onChange={this.onDegChangedHandler} name = "Degree" placeholder= "Degree..." />
                                        </center>
                                    </Col>
    
                                </Row>
                            </Col>
                            <Col xs={12} md={12} className="Top-margin">
                                <Row>
                                    <Col md={5} xs={12} lg={6}>
                                        <center>
                                            <h6>Price Band</h6>
                                        </center>
                                    </Col>
                                    <Col md={6} xs={12} lg={6}>
                                        <center>
                                        <select name="price" value={this.state.Docs.PriceBand} onChange={this.onPriceChangedHandler} >
                                            <option value="1.5">$1.5</option>
                                            <option value="2">$2</option>
                                            <option value="3">$3</option>
                                            <option value="100">$100</option>
                                        </select>
                                        </center>
                                    </Col>
    
                                </Row>
                            </Col>
                        </Row>
                        <hr />
                        <span onChange={this.onQAChangeHandler}>{this.QuesAns.map(Q => Q)}</span>
                        <hr />
                        <Row>
                            <Col xs={12} lg={12} className="Top-margin">
                                <center> 
                                    <button className="btn btn-primary" onClick={this.addNewDiv}>
                                        Add question
                                    </button>
                                </center>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={2} xs={0}>
                            </Col>
                            <Col md={2} xs={12} className="btn btn-success" onClick={this.submit}>
                            Submit
                            </Col>
                            <Col md={2} xs={0}>
                            </Col>
                            <Col md={2} xs={0}>
                            </Col>
                            <Col md={2} xs={12} className="btn btn-danger"  onClick={this.props.hideModal}>
                                Cancel
                            </Col>
                            <Col md={2} xs={0}>
                            </Col>
                        </Row>
                        <br />
                    </Grid>
                </Modal>
            </div>
        );
    }
    
};

export default AddSOP;