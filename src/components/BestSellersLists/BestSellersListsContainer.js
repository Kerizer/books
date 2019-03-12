import BestSellersList from './BestSellersList';
import { getBestSellersList } from './../../actions/bestSellersList';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
	bestSellersLists: state.BestSellersLists.lists
});

const mapDispatchToProps = dispatch => ({
	getBestSellersList: () => dispatch(getBestSellersList())
});

export default connect(mapStateToProps, mapDispatchToProps)(BestSellersList);
