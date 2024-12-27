import PropTypes from 'prop-types';

const History = (props) => {

    console.log('props value is', props)

    if (props.allClicks.length === 0) {
        return (
        <div>
            the app is used by pressing the buttons
        </div>
        )
    }
    return (
        <div>
            button press history: {props.allClicks.join(' ')}
        </div>
    )
}

History.propTypes = {
    allClicks: PropTypes.array.isRequired
}

export default History