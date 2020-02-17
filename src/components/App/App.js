import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../elements/Header/Header';
import Home from '../Home/Home';
import Movie from '../Movie/Movie';
import NotFound from '../elements/NotFound/NotFound';

const App = () => {
    return (
        <BrowserRouter>
            <React.Fragment> {/* No need for div wrapper */}
                <Header />
                <Switch>
                    <Route path="/:movieid" component={Movie} exact />
                    <Route path="/" component={Home} exact />
                    <Route component={NotFound} />
                </Switch>
            </React.Fragment>
        </BrowserRouter>
    )
}

export default App;