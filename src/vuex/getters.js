export const getTeams = ({ teams }) => teams.teams

export const getMyTeams = ({ teams }) => teams.myTeams

export const getTeam = ({ teams })  => (key) => teams.teams.find(team => team.Key === key) || teams.myTeams.find(team => team.Key === key)
