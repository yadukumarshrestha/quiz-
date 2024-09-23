// AdminApp.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard'; // Assuming you create a Dashboard component
import Login from './Login'; // Assuming you create a Login component

const AdminApp = () => {
    return (
        <Router>
            <Switch>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/login" component={Login} />
                {/* Add more routes as needed */}
            </Switch>
        </Router>
    );
};

export default AdminApp;
