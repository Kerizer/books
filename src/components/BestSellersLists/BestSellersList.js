import React from 'react';
import { Link } from 'react-router-dom';

class BestSellersList extends React.Component {
	componentDidMount() {
		this.props.getBestSellersList();
	}

	render() {
		return <div>
			{this.props.bestSellersLists.map(item => <div key={item.list_name_encoded}>
				<Link to={`list/${item.list_name_encoded}`}>{item.display_name}</Link>
			</div>)}
		</div>
	}
}

export default BestSellersList;