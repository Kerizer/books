import React from 'react';
// import { Link } from 'react-router-dom';

class SingleBestSellersList extends React.Component {
	componentDidMount() {
		this.props.getSingleBestSellersListInfo(this.props.match.params.listNameEncoded);
	}

	render() {
		return <div>
			<h3>{this.props.listInfo && this.props.listInfo.display_name}</h3>
		</div>
	}
}

export default SingleBestSellersList;