import React from 'react';
import BookThumbnail from './../BookThumbnail';
import styled from 'styled-components/macro';
// import { Link } from 'react-router-dom';

const BooksThumbnailContainer = styled.div`
	display:flex;
	flex-wrap: wrap;
`;

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
			<BooksThumbnailContainer>
				{listInfo.books.map(book => <BookThumbnail {...book} key={book.primary_isbn13} />)}
			</BooksThumbnailContainer>
		</div>
	}
}

export default SingleBestSellersList;