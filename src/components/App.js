import React from 'react';
import './App.scss';
import { Switch, Route, HashRouter } from 'react-router-dom/cjs/react-router-dom.min';

import MainPage from './MainPage';
import CvPage from './CvPage';
import MainHeader from './MainHeader';
import Footer from './Footer';

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = { socials: [], profile: {} }
        fetch(`${process.env.PUBLIC_URL}/data/socials.json`).then(res => res.json()).then(result => this.setState({ socials: result }))
        fetch(`${process.env.PUBLIC_URL}/data/profile.json`).then(res => res.json()).then(result => this.setState({ profile: result }))
    }

    render() {
        return (
            <div className="App">
                <header>
                    <HashRouter basename="/">
                    <Switch>
                        <Route exact path="/">
                            <MainHeader socials={this.state.socials} profile={this.state.profile} className="header-large" />
                        </Route>
                        <Route path="/cv">
                            <MainHeader socials={this.state.socials} profile={this.state.profile} className="header-cv" />
                        </Route>
                        <Route path="/(.+)">
                            <MainHeader socials={this.state.socials} profile={this.state.profile} className="header-default" />
                        </Route>
                    </Switch>
                    </HashRouter>
                </header>

                <main>
                    <HashRouter basename="/">
                        <Route exact path="/">
                            <MainPage />
                        </Route>
                        <Route path="/cv">
                            <CvPage profile={this.state.profile} />
                        </Route>
                    </HashRouter>
                </main>

                <footer>
                    <Footer socials={this.state.socials} profile={this.state.profile} />
                </footer>
            </div>
        );
    }
}

export default App;
