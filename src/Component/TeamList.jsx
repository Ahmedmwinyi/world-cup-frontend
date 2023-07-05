import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { listTeams, deleteTeam } from "../Service/TeamService";

const TeamList = () => {

    const [teams, setTeams] = useState ([])

    const navigate = useNavigate()

    useEffect(() => {
        getAllTeams();
    }, [])

    const getAllTeams = async() => {
        const response = await listTeams();
        setTeams(response.data);
    }

    const removeTeam = async(id) => {
       const response = await deleteTeam(id);
       setTeams(response.data);
    }

    function addNewTeam() {
        navigate ('/add-team')
    }

    const updateTeam = (id) => {
        navigate(`/edit-team/${id}`)
    }

    return (
        <div className = "container">
            <h2 className = "text-center"> List Teams </h2>
            <button className = "btn btn-primary mb-2" onClick={addNewTeam}>Add Team</button>
            <table className="table table-bordered table-striped">
                <thead>
                    <th> S/N </th>
                    <th> Team Name </th>
                    <th> Continent </th>
                    <th> Title </th>
                    <th> Coach Name </th>
                    <th> Key Player</th>
                    <th> Action: </th>
                </thead>
                <tbody>
                    {
                        teams.map(
                            team =>
                            <tr> 
                                <td> {team.id} </td>
                                <td> {team.name} </td>
                                <td> {team.cont} </td>
                                <td> {team.title} </td>
                                <td>{team.coach}</td>
                                <td>{team.keyplayer}</td>
                                <td>
                                    <button className="btn btn-info" onClick={() => updateTeam(team.id)} >Update</button>
                                    <button className = "btn btn-danger" onClick = {() => removeTeam(team.id)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TeamList;