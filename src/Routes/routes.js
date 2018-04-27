import React, { Component } from 'react';
import { BrowserRouter as Router,Route, Link} from 'react-router-dom';
import AboutUsPage from "../Component/AboutUsPage";
import Test from "../Component/Test";

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Test}/>
                    <Route path="/about" component={AboutUsPage}/>
                </div>

            </Router>
        )
    }
}