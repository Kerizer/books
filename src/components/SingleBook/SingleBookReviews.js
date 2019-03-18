import React from 'react';

class SingleBookReviews extends React.Component {
	render() {
		return <div>
		Reviews: {this.props.reviews.map(review => <div key={review.uuid}>
			<span>{review.byline}({review.publication_dt}): {review.summary}</span>
		</div>)}
	</div>
	}
};

export default SingleBookReviews;