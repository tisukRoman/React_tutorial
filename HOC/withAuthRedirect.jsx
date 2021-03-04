import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const mapStateToProps = (state) =>{
    return{
        isAuthorized: state.authReducer.isAuthorized
    }
}

export const withAuthRedirect = (Component) =>{

    class RedirectComponent extends React.Component{
        render(){
            /* if(!this.props.isAuthorized) return <Redirect to='/login'/>   */
            return <Component {...this.props}/>
        }
    }

    const connectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return connectedRedirectComponent;
    
}