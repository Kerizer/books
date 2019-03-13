import { connect } from 'react-redux';
import { getBookReviews } from '../../actions/bookReviews';
import { getBookInfo } from '../../actions/singleBookInfo';
import SingleBook from './SingleBook';

const mapStateToProps = (state, ownProps) => ({
	reviews: state.Reviews.reviews[ownProps.match.params.isbn],
	bookInfo: state.SingleBook.books[ownProps.match.params.isbn],
	isLoading: state.SingleBook.isLoading && state.Reviews.isLoading
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	getReviews: (isbn) => { dispatch(getBookReviews(isbn ? isbn : ownProps.match.params.isbn)) },
	getBookInfo: (isbn) => { dispatch(getBookInfo(isbn ? isbn : ownProps.match.params.isbn)) },
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleBook);