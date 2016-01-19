import alt from '../alt';

class DomainActions {

    constructor() {
        this.generateActions(
            'getActionSuccess',
            'getActionFail'
        );
    }

    getAction(params) {
        $.ajax({
                url: '/api/',
                type: 'POST',
                'data' : {
                    params: params
                },
                dataType: 'json'
            })
            .done((data) => {
                this.actions.getActionSuccess(data)
            })
            .fail((jqXhr) => {
                this.actions.getActionFail(jqXhr)
            });
    }

}

export default alt.createActions(DomainActions);