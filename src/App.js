import React, { Component } from 'react';
import Header from './components/Header';
import BestSellersList from './components/BestSellersLists';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
		<div className="App">
			<Router>
				<div>
					<Header />
					<Route path="/" exact component={BestSellersList} />
					<Route path="/list/:listNameEncoded" component={BestSellersList} />
				</div>
			</Router>
		</div>
    );
  }
}

export default App;
