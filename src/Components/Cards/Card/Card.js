import React, { Component } from 'react';
//import { Route, Link, Switch, Redirect } from 'react-router-dom';
import Auxil from '../../../hoc/Auxil/Auxil';
import './Card.css';
import SellerModal from '../../SellerModal/SellerModal';

class Card extends Component {

    state = {
        showSellerModal : this.props.showModal
    }

    hideModalHandler = () => {
        this.setState( { showSellerModal : false } );
    }

    showModalHandler = () => {
        this.setState( { showSellerModal : true } );
    }

    //componentDidMount = () => {
    //    this.setState({showSellerModal : this.props.showModal})
    //}

    render(){
        return (
            <Auxil>
            {/*console.log(this.state)*/}
            <div className="Card">
                <div className="row">
                    <div className="col-xs-4 col-md-4">
                        <div className="avatar"></div>
                    </div>
                    <div className="col-xs-8 col-md-8">
                        <div className="row">
                            <h4>{this.props.firstName} {this.props.lastName}</h4>
                        </div>
                        <div className="row">
                            <p>{this.props.experience}</p>
                        </div>
                        <div className="row">
                            <h5><a href={this.props.linkedIn}>LinkedIn profile Link</a></h5>
                        </div>                                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 col-xs-2"></div>
                    <div className="col-md-6 col-xs-8">
                        <hr></hr>
                        <a href="#"><center><h4 onClick={this.showModalHandler}>View Profile</h4></center></a>
                    </div>
                </div>
            </div>
            <SellerModal
                    getFunc = {this.props.getFunc}
                    earnings = {this.props.earnings}
                    id = {this.props.id}
                    uploadedDocs = {this.props.uploadedDocs}
                    linkedIn = {this.props.linkedIn}
                    experience = {this.props.experience}
                    firstName={this.props.firstName} 
                    lastName={this.props.lastName} 
                    show={this.state.showSellerModal} 
                    showModal={this.showModalHandler}
                    hideModal={this.hideModalHandler}
                />
            </Auxil>
        );
    }
    
};

export default Card;