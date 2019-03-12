import React from 'react';

class BestSellersList extends React.Component {
	constructor(props) {
		super(props);
		
		this.loadLists = this.loadLists.bind(this);	
	}

	loadLists() {
		this.props.getBestSellersList();
	}

	render() {
		return <div>
			<button onClick={this.loadLists}>Load</button>
		</div>
	}
}

export default BestSellersList;