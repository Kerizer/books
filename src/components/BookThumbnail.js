import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

const Container = styled.div`
	flex: 1;
	padding:0 10px;
	margin: 15px 0;
`;

const ContainerInnerContent = styled.div`
	width: 300px;
	margin: 0 auto;
	height: 100%;
	display: flex;
    justify-content: space-between;
    flex-direction: column;
`;

const BookImage = styled.img`
	display: block;
	margin: auto;
	max-width: 100%;
`;

const BookTitle = styled.h5`
	text-align: center;
`;

const BookDescription = styled.p`

`;

const BookActions = styled.div`
	display: flex;
	justify-content: space-between;
`;

const MoreLink = styled(Link)`
	text-align: left;
`;

const BuyBookLink = styled.a`
	text-align: right;
`;

class BookThumbnail extends React.Component {
	render() {
		console.log(this.props);
		return <Container>
			<ContainerInnerContent>
				<BookImage src={this.props.book_image} alt="Book image" />
				<div>
					<BookTitle>{this.props.title}</BookTitle>
					<BookDescription>{this.props.description}</BookDescription>
					<BookActions>
						<MoreLink to={`/book/${this.props.primary_isbn13}`}>More</MoreLink>
						<BuyBookLink href={this.props.amazon_product_url} target="_blank">Buy on Amazon</BuyBookLink>
					</BookActions>
				</div>
			</ContainerInnerContent>
		</Container>
	}
}

export default BookThumbnail;