import React from 'react';

class SingleBookInfo extends React.Component {
	render() {
		const { bookInfo } = this.props;
		return <div>
			<img src={bookInfo.covers.s} alt="Book thumbnail" />
			<h4>{bookInfo.title}</h4>
		</div>
	}
}

export default SingleBookInfo;