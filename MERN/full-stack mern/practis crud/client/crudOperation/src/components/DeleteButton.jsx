import axios from "axios"

const DeleteButton = ({ productId, onSuccess }) => {
    const handelDelete = () => {
        axios.delete(`http://localhost:8000/api/product/${productId}`)
            .then(() => {
                if (onSuccess) onSuccess();
            })
            .catch((err) => {
                console.error("❌ Delete error:", err);
            })
    }
    return (
        <button
            className="btn btn-sm btn-outline-danger"
            onClick={handelDelete}>
            Delete
        </button>
    )

}
export default DeleteButton;