import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DeleteButton from "./DeleteButton";

const DisplayPlayer = () => {
    const [player, setPlayer] = useState([]);
    const [message, setMessage] = useState(""); // Success message state
    const navigate = useNavigate();

    // Fetch authors once on mount
    useEffect(() => {
        fetchPlayer();
    }, []);


    const fetchPlayer = () => {
        axios
            .get("http://localhost:8000/api/players")
            .then((res) => setPlayer(res.data))
            .catch((err) => console.error("Error fetching player", err));
    };

    const removePlayerFromList = (id) => {
        setPlayer(player.filter(player => player._id !== id));
    };


    // Show success message for 2 seconds
    const showMessage = (msg) => {
        setMessage(msg);
        setTimeout(() => setMessage(""), 1000);
    };

    return (
        <div className="container mt-4">
            <h2>Player List</h2>

            {message && (
                <div className="alert alert-success" role="alert">
                    {message}
                </div>
            )}

            <Link to="/create/player" className="btn btn-warning btn-sm me-2">
                Add Player
            </Link>

            <table className="table table-striped table-bordered mt-3">
                <thead className="table-dark">
                    <tr>
                        <th>Player:</th>
                        <th>Preferred Position:</th>
                        <th className="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {player.length === 0 ? (
                        <tr>
                            <td colSpan="2" className="text-center">
                                No player found.
                            </td>
                        </tr>
                    ) : (
                        player.map((player) => (
                            <tr key={player._id}>
                                <td>{player.playername}</td>
                                <td>{player.preferredposition}</td>
                                <td className="text-center">
                                    <Link
                                        to={`/edit/${player._id}`}
                                        className="btn btn-warning btn-sm me-2"
                                    >
                                        Edit
                                    </Link>
                                    <DeleteButton
                                        playerId={player._id}
                                        onDeleteSuccess={() => {
                                            removePlayerFromList(player._id);
                                            showMessage("player deleted successfully!");
                                        }}
                                    />
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default DisplayPlayer;
