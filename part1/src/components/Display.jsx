import PropTypes from 'prop-types';

const Display = ({value}) => <div>Number: {value}</div>

Display.propTypes = {
    value: PropTypes.number.isRequired
}

export default Display