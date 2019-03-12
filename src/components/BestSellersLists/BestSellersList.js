import React from 'react';

class BestSellersList extends React.Component {
	componentDidMount() {
		this.props.getBestSellersList();
	}

	render() {
		return <div>
			{this.props.bestSellersLists.map(item => <div key={item.list_name_encoded}>
				<h5>{item.display_name}</h5>
			</div>)}
		</div>
	}
}

export default BestSellersList;