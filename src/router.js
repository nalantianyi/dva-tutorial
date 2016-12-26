import React from 'react';
import {Router, Route} from 'dva/router';

function RouterConfig({history}) {
    return (
        <Router history={history}>
            <Route path="/users" component={Users}/>
        </Router>
    );
}

export default RouterConfig;
