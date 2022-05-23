import PropTypes from 'prop-types';

export const choicePropType = PropTypes.shape({
	id: PropTypes.string,
	text: PropTypes.string
});
export const questionPropType = PropTypes.shape({
	id: PropTypes.string,
	title: PropTypes.string,
	desc: PropTypes.string,
	choices: PropTypes.arrayOf(choicePropType)
});

export const responsePropType = PropTypes.shape({
	userName: PropTypes.string,
	responseData: PropTypes.array
});
