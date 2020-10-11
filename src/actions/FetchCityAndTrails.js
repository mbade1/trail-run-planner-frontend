const REACT_APP_GEO_API = process.env['REACT_APP_GEO_API'];
const REACT_APP_HIKING_API = process.env['REACT_APP_HIKING_API']

export const fetchCityAndTrails = (city = "Foresta", statee = "CA") => {
  return (dispatch) => {
    fetch(`https://api.geocod.io/v1.6/geocode?q=${city}%2c+${statee}&api_key=${REACT_APP_GEO_API}`)
    .then(resp => resp.json())
    .then(coordinates => fetchTrails(coordinates))
    
    const fetchTrails = (coordinates) => {
      fetch(`https://www.hikingproject.com/data/get-trails?lat=${coordinates['results'][0]['location']['lat']}&lon=${coordinates['results'][0]['location']['lng']}&maxResults=50&key=${REACT_APP_HIKING_API}`)
      .then(resp => resp.json())
      .then(trails => dispatch({
        type: 'FETCH_TRAILS',
        payload: trails
      }))      
    } 
  }
}
