import React from 'react'
import HomeScreen from '../pages/HomeScreen/HomeScreen'
import CartScreen from '../pages/CartScreen/CartScreen'
import DetailsScreen from '../pages/DetailsScreen/DetailsScreen'
import Navbar from "../components/Navbar/Navbar"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

export default class Routes extends React.Component {
    render(): JSX.Element {
        return (
            <div>
                <Router>
                    <Navbar />
                    <Switch>
                        <Route path="/" exact component={HomeScreen} />
                        <Route path="/cart" component={CartScreen} />
                        <Route exact path="/details/:id" component={DetailsScreen} />
                    </Switch>
                </Router>
            </div>

        )
    }
}