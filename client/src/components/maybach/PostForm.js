import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//	layout
import Alert from '../layout/Alert';
//actions
import { addPost } from '../../actions/post';

const PostForm = ({ addPost }) => {
	const [ text, setText ] = useState('');
	const onSubmit = (e) => {
		e.preventDefault();
		addPost({ text });
		setText('');
	};
	return (
		<Fragment>
			<div className="post-form">
				<h3>Start a Conversation</h3>
				<form className="form" onSubmit={onSubmit}>
					<textarea
						name="text"
						cols="30"
						rows="5"
						placeholder="start a discussion..."
						value={text}
						onChange={(e) => setText(e.target.value)}
						required
					/>
					<input type="submit" className="btn" value="Post!" />
				</form>
			</div>
			<Alert />
		</Fragment>
	);
};

PostForm.propTypes = {
	addPost: PropTypes.func.isRequired
};

export default connect(null, { addPost })(PostForm);
