import axios from "axios";

const DeleteButton = ({ authorId, onSuccess }) => {
    const handleDelete = () => {
        if (!window.confirm("Are you sure you want to delete this player?")) return;

        axios
            .delete(`http://localhost:8000/api/player/${authorId}`)
            .then(() => {
                if (onSuccess) onSuccess();
            })
            .catch((err) => {
                console.error("❌ Delete error:", err);
            });
    };

    return (
        <button className="btn btn-danger btn-sm" onClick={handleDelete}>
            Delete
        </button>
    );
};

export default DeleteButton;
