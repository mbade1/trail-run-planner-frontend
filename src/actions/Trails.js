export const fetchCityAndTrails = (city = "Foresta", statee = "CA") => {
    return (dispatch) => {
        fetch(`https://api.geocod.io/v1.6/geocode?q=${city}%2c+${statee}&api_key=fc2c5a56d555f92a9adc9526f2a5daa15a6a53a`)
        .then(resp => resp.json())
        .then(coordinates => fetchTrails(coordinates))
    

        const fetchTrails = (coordinates) => {
        fetch(`https://www.hikingproject.com/data/get-trails?lat=${coordinates['results'][0]['location']['lat']}&lon=${coordinates['results'][0]['location']['lng']}&maxResults=50&key=200922216-abc9f3b851d5d8ddadbd0acb2322cefe`)
        .then(resp => resp.json())
        .then(trails => dispatch({
            type: 'FETCH_TRAILS',
            payload: trails
        }))      
        } 
    }
}