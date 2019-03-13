import BestSellersList from './BestSellersLists';
import { getBestSellersList } from '../../actions/bestSellersLists';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
	bestSellersLists: state.BestSellersLists.lists
});

const mapDispatchToProps = dispatch => ({
	getBestSellersList: () => dispatch(getBestSellersList())
});

export default connect(mapStateToProps, mapDispatchToProps)(BestSellersList);
