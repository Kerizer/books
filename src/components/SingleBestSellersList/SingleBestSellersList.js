import React from 'react';
// import { Link } from 'react-router-dom';

class SingleBestSellersList extends React.Component {
	componentDidMount() {
		this.props.getSingleBestSellersListInfo(this.props.match.params.listNameEncoded);
	}

	render() {
		let { listInfo } = this.props;
		if (!listInfo) {
			return <div>TODO: if isLoading false - handle somehow</div>;
		}
		return <div>
			<h3>{listInfo.display_name}</h3>
			{listInfo.books.map(book => <div key={book.primary_isbn13}>
				<h4>{book.title}</h4>
				<p>{book.description}</p>
			</div>)}
		</div>
	}
}

export default SingleBestSellersList;