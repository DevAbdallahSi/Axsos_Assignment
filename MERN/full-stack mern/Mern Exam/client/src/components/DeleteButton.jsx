import axios from "axios";

const DeleteButton = ({ userId, onDeleteSuccess }) => {
    const handleDelete = () => {
        if (!window.confirm("Are you sure you want to delete this user?")) return;

        axios
            .delete(`http://localhost:8000/api/user/${userId}`)
            .then(() => onDeleteSuccess(userId))
            
            .catch(err => console.error("❌ Delete error:", err));
    };

    return (
        <button className="btn btn-danger btn-sm" onClick={handleDelete}>
            Delete
        </button>
    );
};

export default DeleteButton;