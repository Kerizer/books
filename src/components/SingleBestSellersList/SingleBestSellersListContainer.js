import { connect } from 'react-redux';
import { getSingleBestSellersList } from '../../actions/singleBestSellersList';
import SingleBestSellersList from './SingleBestSellersList';

const mapStateToProps = (state, ownProps) => ({
	listInfo: state.BestSellersLists.listInfo[ownProps.match.params.listNameEncoded]
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	getSingleBestSellersListInfo: (list) => { dispatch(getSingleBestSellersList(list ? list : ownProps.match.params.listNameEncoded)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleBestSellersList);