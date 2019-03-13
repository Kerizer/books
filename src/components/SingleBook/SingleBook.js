import React from 'react';
import styled from 'styled-components/macro';

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
			return <div>Can't find info about book with isbn {this.props.match.params.isbn} on Google Books</div>
		} 
		return <div>

			<div>
				<img src={bookInfo.cover && bookInfo.cover.large} alt="Book thumbnail" />
				<h4>{bookInfo.title}</h4>
			</div>
			<div>
				Reviews: {reviews && reviews.map(review => <div key={review.uuid}>
					<span>{review.byline}({review.publication_dt}): {review.summary}</span>
				</div>)}
			</div>
		</div>
	}
};

export default SingleBook;