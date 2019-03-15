import React, { Component } from 'react';
import Header from './components/Header';
import BestSellersList from './components/BestSellersLists';
import SingleBestSellersList from './components/SingleBestSellersList';
import SingleBook from './components/SingleBook';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
	}
`;
class App extends Component {
  render() {
    return (
		<div className="App">
			<GlobalStyle />
			<Router>
				<div>
					<Header />
					<Route path="/" exact component={BestSellersList} />
					<Route path="/list/:listNameEncoded" component={SingleBestSellersList} />
					<Route path="/book/:isbn" component={SingleBook} />
					{/* TODO: find a good api for searching books by isbn GoogleBooks and OpenLibrary only returns ~35% of books */}
				</div>
			</Router>
		</div>
    );
  }
}

export default App;
