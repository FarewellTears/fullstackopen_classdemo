import PropTypes from 'prop-types';

const Note = ({ note }) => {
    return (
        <div className="note">
            <p>{note.content}</p>
            <small><strong>{note.user}</strong> {note.date}</small>
        </div>
    );
};

Note.propTypes = {
    note: PropTypes.object.isRequired
};

export default Note;