import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import {setAuthThunk} from '../Redux/authReducer';

class HeaderContainer extends React.Component{
    componentDidMount(){
        this.props.setAuthThunk()
    }

    render(){
        return <Header isAuthorized={this.props.isAuthorized} 
        login={this.props.login}/>
    }
}


///////////////////////////////////////

let mapStateToProps = (state) =>{
    return{
        isAuthorized: state.authReducer.isAuthorized,
        login: state.authReducer.login
    }
}

export default connect(mapStateToProps, {setAuthThunk})(HeaderContainer)

