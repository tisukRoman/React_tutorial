import React from 'react';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../HOC/withAuthRedirect';
import { compose } from 'redux';

class DialogsC extends React.Component {
    render() {
        return <Dialogs contactData={this.props.contactData} />
    }
}

////////////////////////////////////////////////////////////////////

let mapStateToProps = (state) => {
    return {
        contactData: state.contactDataReducer.contactData,
    }
}

export default compose(      //DialogsContainer
    connect(mapStateToProps),
    withAuthRedirect
)(DialogsC);


