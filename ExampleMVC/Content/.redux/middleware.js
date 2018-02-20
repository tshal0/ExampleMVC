import {
    actions,

    newMessage
} from '_redux/actions';

var assign = require('object.assign');

export default hub => {
    return {
        /**
         * Anything the client can send to the server should go through here
         */
        sender: store => next => action => {
            console.log("sender (MIDDLEWARE)");
            switch(action.type) {
                case "hold":
                    next(action.action);
                    break;

                case actions.NEW_MESSAGE:
                    hub.server.send(action.message.name, action.message.text);
                    break;

                default:
                    next(action);
            }
        },

        /**
         * Anything the server can send to the client should go through here
         */
        receiver: store => {
            console.log("receiver (MIDDLEWARE)");
            /**
             * Used to prevent a cascading landslide of server calls
             */
            var safeDispatch = action => {
                console.log("safeDispatch (MIDDLEWARE)");
                store.dispatch(assign({}, {action, type: "hold"}));
            };

            hub.client.newMessage = (name, text) => {
                console.log("hub.client.newMessage MIDDLEWARE");
                console.log(name, text);
                safeDispatch(newMessage({name, text}));
            };

            hub.client.allMessages = (messages) => {
                console.log("ALL_MESSAGES");    
                console.log(messages);
            };
        }
    }
};