//React
import React from 'react';
//Routing
import { Switch, Route } from 'react-router-dom'
//Component
import WineScreen from '../../containers/WineScreen';

const App = () => (
    <main>
        <Switch>
            <Route exact path='/' component={WineScreen}/>
        </Switch>
    </main>
);

export default App