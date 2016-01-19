import alt from '../alt';
import Actions from '../actions/Actions';

class Store {

    constructor() {

        this.bindActions(Actions);
        this.state = {};

    }

    onActionSuccess(data) {

    }

    onActionFail() {

    }

}

export default alt.createStore(Store);