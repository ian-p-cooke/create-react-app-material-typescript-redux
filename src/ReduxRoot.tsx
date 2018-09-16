import * as React from 'react';
import App from './App';
import {
    createStore,
    applyMiddleware,
    Store,
} from 'redux';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer, { RootState } from './reducers';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from './epics';

const logger = (createLogger as any)();

const epicMiddleware = createEpicMiddleware();

let middleware = applyMiddleware(logger, epicMiddleware);

if (process.env.NODE_ENV === 'development') {
    middleware = composeWithDevTools(middleware);
}

const store = createStore(rootReducer, {}, middleware) as Store<RootState>;

epicMiddleware.run(rootEpic);

class ReduxRoot extends React.Component {

    state = {
        mobileOpen: true,
    };

    render() {

        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

export default ReduxRoot;
