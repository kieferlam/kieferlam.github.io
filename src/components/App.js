import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';

import MainPage from './MainPage';
import CvPage from './CvPage';

function App() {
    return (
        <div className="App">
            <header>
                <Switch>
                    <Route exact path="/">
                        Header 1
                    </Route>
                    <Route path="*">
                        Header 2
                    </Route>
                </Switch>
            </header>

            <main>
                <Switch>
                    <Route exact path="/">
                        <MainPage />
                    </Route>
                    <Route path="/cv">
                        <CvPage />
                    </Route>
                </Switch>
            </main>

            <footer>
                Footer
            </footer>
        </div>
    );
}

export default App;
