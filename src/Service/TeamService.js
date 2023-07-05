import axios from 'axios'

const TEAM_API_URL = 'http://localhost:8080/api/v1/teams';

export const listTeams = () => {
    return axios.get(TEAM_API_URL)
}

export const createTeam = (team) => {
    return axios.post(TEAM_API_URL, team)
}

export const getTeamById = (teamId) => {
    return axios.get(TEAM_API_URL + '/' + teamId);
}

export const updateTeam = (teamId, team) => {
    return axios.put(TEAM_API_URL + '/' + teamId, team);
}

export const deleteTeam = (id) => {
    return axios.delete(TEAM_API_URL + '/' + id);
}
