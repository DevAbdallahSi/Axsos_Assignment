import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PlayerForm = ({ initialData, onSubmitProps }) => {
    const [formData, setFormData] = useState(initialData);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();


    useEffect(() => {
        setFormData(initialData);
    }, [initialData]);
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validatForm = () => {
        const formErrors = {};

        // Validate playername
        if (!formData.playername.trim()) {
            formErrors.playername = "Player name is required";
        } else if (formData.playername.trim().length < 3) {
            formErrors.playername = "Player name must be at least 3 characters";
        }

        // Validate preferred position
        if (!formData.preferredposition.trim()) {
            formErrors.preferredposition = "Preferred position is required";
        } else if (formData.preferredposition.trim().length < 3) {
            formErrors.preferredposition = "Preferred position must be at least 3 characters";
        }

        return formErrors;
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const clientErrors = validatForm();
        if (Object.keys(clientErrors).length > 0) {
            setErrors(clientErrors);
            return;
        }
        onSubmitProps(formData, setErrors, setFormData);
    };

    return (
        <form className="p-4 shadow bg-white rounded" onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: 'auto' }}>
            <h3 className="text-center mb-4">{initialData && initialData._id ? "Edit Player" : "Create Player"}</h3>

            <div className="mb-3">
                <label className="form-label">Player Name</label>
                <input type="text" name="playername" value={formData.playername} onChange={handleChange} className="form-control" />
                {errors.playername && <div className="text-danger">{errors.playername}</div>}
            </div>

            <div className="mb-3">
                <label className="form-label">Preferred Bosition</label>
                <input type="text" name="preferredposition" value={formData.preferredposition} onChange={handleChange} className="form-control" />
                {errors.preferredposition && <div className="text-danger">{errors.preferredposition}</div>}
            </div>
            <button className="btn btn-primary w-100"> {initialData && initialData._id ? "Update" : "Create"}</button>
        </form>
    );
};

export default PlayerForm;
