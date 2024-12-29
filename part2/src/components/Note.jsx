import PropTypes from 'prop-types';

const Note = ({ note, toggleImportance }) => {
    const label = note.important
        ? 'make not important' : 'make important';

    return (
        <div className="note">
            <p>{note.content}</p>
            <small><strong>{note.user}</strong> {note.date}</small>
            <button onClick={toggleImportance}>{label}</button>
        </div>
    );
};

Note.propTypes = {
    note: PropTypes.object.isRequired,
    toggleImportance: PropTypes.func.isRequired,
};

export default Note;