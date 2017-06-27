//React
import React, {Component} from 'react';
import {} from 'prop-types';
//Redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as wineActions from '../actions/wineActions';
//Components
import Wine from '../components/wine/Wine';

class WineScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        //const {} = this.props;

        return (
            <Wine />
        );
    }
}

WineScreen.propTypes = {};

function mapStateToProps(state) {
    return {
        state: state,
    };
}

function MapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(wineActions, dispatch)
    };
}

export default connect(mapStateToProps, MapDispatchToProps)(WineScreen)
