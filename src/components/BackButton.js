import React from 'react';
import {withRouter} from 'react-router-dom';

class BackButton extends React.Component {
	constructor(props) {
		super(props);
		this.goBack = this.goBack.bind(this);
	}
	goBack() {
		this.props.history.goBack();
	}
	render() {
		return <button
			onClick={this.goBack}>
			Back
		</button>
	}
}

export default withRouter(BackButton);