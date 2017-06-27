//React
import React, {Component} from 'react';
import {} from 'prop-types';
//Redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as wineActions from '../actions/wineActions';
//Components
import WineList from '../components/wine/WineList';

class WineScreen extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.actions.fetchWines()
    }

    render() {
        const { wines } = this.props;

        return (
            <WineList wines={wines} />
        );
    }
}

WineScreen.propTypes = {};

function mapStateToProps(state) {
    return {
        wines: state.wine.wines,
    };
}

function MapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(wineActions, dispatch)
    };
}

export default connect(mapStateToProps, MapDispatchToProps)(WineScreen)
