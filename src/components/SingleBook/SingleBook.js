import React from 'react';
import SingleBookInfo from './SingleBookInfo';
import SingleBookReviews from './SingleBookReviews';

class SingleBook extends React.Component {
	componentDidMount() {
		this.props.getReviews();
		this.props.getBookInfo();
	}

	render() {
		let {reviews, bookInfo} = this.props;
		if (!bookInfo) {
			return <div>Loading</div>
		}
		if (bookInfo.error === "NotFound") {
			return <div>Can't find info about book with isbn {this.props.match.params.isbn}. Checked on {bookInfo.checkedServices.join(', ')}</div>
		} 
		return <div>

			<SingleBookInfo bookInfo={bookInfo} />
			{reviews && <SingleBookReviews reviews={reviews} />}
		</div>
	}
};

export default SingleBook;