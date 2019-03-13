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
`;

const BookImage = styled.img`
	display: block;
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
		return <Container>
			<ContainerInnerContent>
				<BookImage src={this.props.book_image} alt="Book image" />
				<BookTitle>{this.props.title}</BookTitle>
				<BookDescription>{this.props.description}</BookDescription>
				<BookActions>
					<MoreLink to="">More</MoreLink>
					<BuyBookLink href={this.props.amazon_product_url} target="_blank">Buy on Amazon</BuyBookLink>
				</BookActions>
			</ContainerInnerContent>
		</Container>
	}
}

export default BookThumbnail;