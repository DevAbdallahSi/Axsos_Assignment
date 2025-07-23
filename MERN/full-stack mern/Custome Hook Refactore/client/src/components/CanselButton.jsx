import { useNavigate } from "react-router-dom";

const CancelButton = ({ to = "/", label = "Cancel" }) => {
    const navigate = useNavigate();

    return (
        <button
            type="button"
            className="btn btn-secondary ms-2"
            onClick={() => navigate(to)}
        >
            {label}
        </button>
    );
};

export default CancelButton;