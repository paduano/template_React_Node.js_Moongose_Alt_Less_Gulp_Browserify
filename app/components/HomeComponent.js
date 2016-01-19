import React from 'react';

import Actions from '../actions/Actions';
import Store from '../stores/Store';

var js = require('../../custom_modules/jsUtils');

//------------------------------
// React components
//------------------------------
import Component from './Component';


class HomeComponent extends React.Component {

    constructor(props) {

        super(props);
        this.state = Store.getState();
        this.onChange = this.onChange.bind(this);

    }

    componentDidMount() {

        Store.listen(this.onChange);

    }

    componentWillUnmount() {

    }

    onChange(state) {

        this.setState(state);

    }

    render() {

        return (
            <Component className='Component'>

            </Component>
        );

    }
}

export default HomeComponent;