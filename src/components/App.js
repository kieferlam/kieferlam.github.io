import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';

import MainPage from './MainPage';
import CvPage from './CvPage';
import MainHeader from './MainHeader';

class App extends React.Component {

    setTheme(theme) {
        this.setState({ theme: theme })
    }

    render() {
        return (
            <div className="App">
                <header>
                    <Switch>
                        <Route exact path="/">
                            <MainHeader className="header-large" />
                        </Route>
                        <Route path="*">
                            <MainHeader className="header-default" />
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
}

export default App;
