// PlayerForm.tsx
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// ✅ Types
interface Player {
  _id?: string;
  playername: string;
  preferredposition: string;
}

interface PlayerFormProps {
  initialData: Player;
  onSubmitProps: (
    data: Player,
    setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>,
    setFormData: React.Dispatch<React.SetStateAction<Player>>
  ) => void;
}

const PlayerForm: React.FC<PlayerFormProps> = ({ initialData, onSubmitProps }) => {
  const [formData, setFormData] = useState<Player>(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});
//   const navigate = useNavigate();

  // Pure function for validation
  const validateForm = (data: Player): Record<string, string> => {
    const formErrors: Record<string, string> = {};

    if (!data.playername.trim()) {
      formErrors.playername = "Player name is required";
    } else if (data.playername.trim().length < 3) {
      formErrors.playername = "Player name must be at least 3 characters";
    }

    if (!data.preferredposition.trim()) {
      formErrors.preferredposition = "Preferred position is required";
    } else if (data.preferredposition.trim().length < 3) {
      formErrors.preferredposition = "Preferred position must be at least 3 characters";
    }

    return formErrors;
  };

  useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const clientErrors = validateForm(formData);
    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors);
      return;
    }
    onSubmitProps(formData, setErrors, setFormData);
  };

  return (
    <form
      className="p-4 shadow bg-white rounded"
      onSubmit={handleSubmit}
      style={{ maxWidth: '500px', margin: 'auto' }}
    >
      <h3 className="text-center mb-4">
        {initialData && initialData._id ? "Edit Player" : "Create Player"}
      </h3>

      <div className="mb-3">
        <label className="form-label">Player Name</label>
        <input
          type="text"
          name="playername"
          value={formData.playername}
          onChange={handleChange}
          className="form-control"
        />
        {errors.playername && <div className="text-danger">{errors.playername}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Preferred Position</label>
        <input
          type="text"
          name="preferredposition"
          value={formData.preferredposition}
          onChange={handleChange}
          className="form-control"
        />
        {errors.preferredposition && <div className="text-danger">{errors.preferredposition}</div>}
      </div>

      <button className="btn btn-primary w-100">
        {initialData && initialData._id ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default PlayerForm;
