import React from 'react';

import Actions from '../actions/Actions';
import Store from '../stores/Store';

var js = require('../../custom_modules/jsUtils');

//------------------------------
// React components
//------------------------------

class Component extends React.Component {

    constructor(props) {

        super(props);
        this.state = Store.getState();
        this.onChange = this.onChange.bind(this);

    }

    componentDidMount() {

        Store.listen(this.onChange);

    }

    componentWillUnmount() {

        Store.unlisten(this.onChange);

    }

    onChange(state) {

        this.setState(state);

    }


    render() {

        return (
            <div className='Component'>
                hello
            </div>
        );

    }
}

export default Component;