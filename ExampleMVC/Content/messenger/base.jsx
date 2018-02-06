/*********************
 * Redux / SignalR Setup
*********************/
import { 
    createStore, 
    applyMiddleware
} from 'redux';
import {Provider} from 'react-redux';

import app from '_redux/reducers';
import reduxMiddleware from '_redux/middleware';

var hub = $.connection.messengerHub; // Creates client's hub connection

var middleware = reduxMiddleware(hub); // Creates an instance of the middleware
const store = createStore(app, applyMiddleware(middleware.sender)); // Creates store (where redux keeps it's state)
middleware.receiver(store); // Sets up the receivers to get data from server

$.connection.hub.start().done(() => {
    // Anything do run once the server connects
});

/*********************
 * Redux / SignalR Setup End
*********************/

import History from './history';
import Send from './send';
import User from './user';

class Base extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div className="Base">
                    <User />
                    <History />
                    <Send />
                </div>
            </Provider>
        )
    }
}

export default Base;