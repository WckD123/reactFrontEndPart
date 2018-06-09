import React , { Component } from 'react';
import Modal from '../../hoc/Modal/Modal';
import './LoginModal.css';
import Nav from '../Nav/Nav';

class LoginModal extends Component{

    state = {
        show : false
    }

    hideModalHandler = () => {
        this.setState( { show : false } );
    }

    showModalHandler = () => {
        this.setState( { show : true } );
    }

    render(){
        return (
               <div>
                   <Nav 
                        show={this.state.show} showModal={this.showModalHandler}
                   />
                   <Modal show={this.state.show} modalClosed={this.hideModalHandler} > 
                       <div className = "container">
                           <div className = "row">
                                 <h3>Why Upload on Gettin</h3>                                 
                           </div>
                           <div className = "row">
                               <div className = "col-md-4 col-xs-12"> 
                                   <div className = "row">
                                   <div className="LoginModalSquare" />
                                   </div> 
                                   <div className = "row">
                                       <h4> A </h4>
                                   </div> 
                               </div>  
                               <div className = "col-md-4 col-xs-12">  
                                   <div className = "row">
                                   <div className="LoginModalSquare" />
                                   </div> 
                                   <div className = "row">
                                       <h4> B </h4>
                                   </div> 
                               </div> 
                               <div className = "col-md-4 col-xs-12">  
                                   <div className = "row">
                                   <div className="LoginModalSquare" />
                                   </div> 
                                   <div className = "row">
                                       <h4> C </h4>
                                   </div> 
                               </div>                                
                           </div>
                           <div className = "row">
                                  <div className ="LoginModalRectangle">
                                       <div>
                                           <h4> Login via linkedIn </h4>
                                       </div>
                                  </div>                                
                           </div>
                       </div>
                       
                   </Modal>
               </div>
           );
    }
};

export default LoginModal;