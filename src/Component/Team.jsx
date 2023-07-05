import React, {useState, useEffect} from 'react'
import {useNavigate, useParams } from 'react-router-dom';
import { updateTeam, createTeam, getTeamById } from '../Service/TeamService';
import { Link } from 'react-router-dom';
import axios from 'axios'

const Team = () => {

    const [name, setName] = useState('')
    const [title, setTitle] = useState('')
    const [cont, setCont] = useState('')
    const [coach, setCoach] = useState('')
    const [keyplayer, setKeyplayer] = useState('')


    const navigate =useNavigate();
    const {id} = useParams();

    const saveOrUpdateTeam = async(e) => {
        e.preventDefault();

        const team = {
            name:name,
            title:title,
            cont:cont,
            coach:coach,
            keyplayer:keyplayer
        };
        await axios.post("http://localhost:8080/api/v1/save", team);

        console.log(team)

        if (id) {
            updateTeam(team, id).then((response) =>{
                console.log(response.data)
                navigate('/teams');
            }).catch(error => {
                console.log(error)
            })

        } else {
            createTeam(team).then((response) =>{
                console.log(response.data)
                navigate('/');
            }).catch(error => {
                console.log(error)
            })
        }
    }

    useEffect(() => {
        if (id) {
            getTeamById(id).then((response) =>{
                setName(response.data.name)
                setCont(response.data.cont)
                setTitle(response.data.title)
                setCoach(response.data.coach)
                setKeyplayer(response.data.keyplayer)
            }).catch(error => {
                console.log(error)
            })
        }

    }, [id])


    const pageTitle = () => {
        if (id) {
            return <h2 className='text-center'> Update Team </h2>
        } else {
            return <h2 className='text-center'> Add Team </h2>
        }
    }

    return (
        <div>
            <br/><br/>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        {
                            pageTitle()
                        }
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
                                        onChange = {(e) => setName(e.target.value)}
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
                                        onChange = {(e) => setCont(e.target.value)}
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
                                        onChange = {(e) => setTitle(e.target.value)}
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
                                        onChange = {(e) => setCoach(e.target.value)}
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
                                        onChange = {(e) => setKeyplayer(e.target.value)}
                                    >
                                    </input>
                                </div>

                            <button className = "btn btn-success" onClick = {(e) => saveOrUpdateTeam(e)} >Submit </button>
                            <Link to="/teams" className="btn btn-danger"> Cancel </Link>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team;