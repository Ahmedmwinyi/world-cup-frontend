import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';

export default function UpdateTeam() {


    const navigate =useNavigate();
    const {id} = useParams();
    const [team, setTeam] = useState({
        name:"",
        cont:"",
        title:"",
        coach:"",
        keyplayer:""
    })

    const{name, cont, title, coach, keyplayer} = team

    const onInputChange = (e) => {


        setTeam({...team,[e.target.id]:e.target.value})
    };

    useEffect(() => {
        loadTeam()
    }, [id]);


    const onSubmit = async (e) => {
        e.preventDefault();

        await axios.put(`http://localhost:8080/api/v1/save/${id}`, team);
        navigate("/")
    }

    const loadTeam = async () => {

        const results = await axios.put(`http://localhost:8080/api/v1/save/${id}`, team);
        setTeam(results.data);
    }



  return (
    <div>
            <br/><br/>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <h2>Edit Team</h2>
                        <div className='card-body'>
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Team Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter team name"
                                        name = "name"
                                        className = "form-control"
                                        value = {name}
                                        onChange = {(e) => onInputChange(e.target.value)}
                                    >
                                            </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Continent :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter continet"
                                        name = "cont"
                                        className = "form-control"
                                        value = {cont}
                                        onChange = {(e) => onInputChange(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Title :</label>
                                    <input
                                        type = "number"
                                        placeholder = "Enter team titles"
                                        name = "title"
                                        className = "form-control"
                                        value = {title}
                                        onChange = {(e) => onInputChange(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Coach Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter coach name"
                                        name = "coach"
                                        className = "form-control"
                                        value = {coach}
                                        onChange = {(e) => onInputChange(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Key Player :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter key player name"
                                        name = "keyplayer"
                                        className = "form-control"
                                        value = {keyplayer}
                                        onChange = {(e) => onInputChange(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button type='submit' className='btn btn-outline-primary'>Submit</button>
                                <Link to="/teams" className="btn btn-danger"> Cancel </Link>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
