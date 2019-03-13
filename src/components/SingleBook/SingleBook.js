import React from 'react';
import styled from 'styled-components/macro';

class SingleBook extends React.Component {
	componentDidMount() {
		this.props.getReviews();
		this.props.getBookInfo();
	}

	render() {
		let {reviews, bookInfo} = this.props;
		if (!bookInfo && !this.props.isLoading) {
			return <div>Can't find info about book with isbn {this.props.match.params.isbn} on Google Books</div>
		}
		return <div>

			<div>
				Reviews: {reviews && reviews.map(review => <div key={review.uuid}>
					<span>{review.byline}({review.publication_dt}): {review.summary}</span>
				</div>)}
			</div>
		</div>
	}
};

export default SingleBook;