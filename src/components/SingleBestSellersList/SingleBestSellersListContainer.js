import { connect } from 'react-redux';
import { getSingleBestSellersList } from '../../actions/singleBestSellersList';
import SingleBestSellersList from './SingleBestSellersList';

const mapStateToProps = (state, ownProps) => {
	let {listNameEncoded} = ownProps.match.params;
	let listInfo = state.BestSellersLists.listInfo[listNameEncoded];
	return {
		listInfo: listInfo ? listInfo.items : {books:[]},
		numResults: listInfo ? listInfo.numResults : 0,
	}
}

const mapDispatchToProps = (dispatch, ownProps) => ({
	getSingleBestSellersListInfo: (list) => { dispatch(getSingleBestSellersList(list ? list : ownProps.match.params.listNameEncoded)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleBestSellersList);