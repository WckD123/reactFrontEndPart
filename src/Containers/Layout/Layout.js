import React, { Component } from 'react';
// import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Nav from '../../Components/Nav/Nav';
import Aux from '../../hoc/Aux';
import Footer from '../../Components/Footer/Footer';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Profile from '../../Components/PersonProfile/PersonProfile';
import Home from '../Home/Home';
import LoginModal from '../../Components/LoginModal/LoginModal';
import { Connect } from 'react-redux';
import AddSOP from '../../Components/AddSOPModal/AddSOP';



class Layout extends Component {

//Defining the State here

    state = {
        showLoginModal : false,
        showAddSOPModal : false
    }

    hideModalHandler = () => {
        this.setState( { showLoginModal : false } );
    }

    showModalHandler = () => {
        this.setState( { showLoginModal : true } );
    }

    hideAddSOPHandler = () => {
        this.setState( { showLoginModal : false } );
    }

    showAddSOPHandler = () => {
        this.setState( { showLoginModal : true } );
    }

    
    render() {
        return(
            <Aux>
                {/*Navigation is always fixed in the layout*/}
                <Nav
                    showModal={this.showModalHandler}
                />
                {this.state.showLoginModal ? <LoginModal 
                    show={this.state.showLoginModal} 
                    showModal={this.showModalHandler}
                    hideModal={this.hideModalHandler}
                /> : null}
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/profile" component={Profile} />   
                </Switch>
                {/*<Route path="/login" component={LoginModal} exact />
                Footer is always fixed in the layout*/}
                <Footer />
            </Aux>
        ); 
    }
}

export default Layout;