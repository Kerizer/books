import React from 'react';
import { Link } from 'react-router-dom';
class Header extends React.Component {
	render() {
		return <header className="App-header">
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
			</ul>
		</header>
	}
}

export default Header;