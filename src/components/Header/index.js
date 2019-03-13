import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from './../BackButton';
class Header extends React.Component {
	render() {
		return <header className="App-header">
			<BackButton />
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
			</ul>
		</header>
	}
}

export default Header;