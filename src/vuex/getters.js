export const getTeams = ({ teams }) => teams.teams

export const getTeam = ({ teams })  => (key) => teams.teams.find(team => team.Key === key)
