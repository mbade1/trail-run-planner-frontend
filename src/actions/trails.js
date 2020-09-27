export const fetchCityAndTrails = (city = "Foresta", statee = "CA") => {
    return (dispatch) => {
        fetch(`https://api.geocod.io/v1.6/geocode?q=${city}%2c+${statee}&api_key=fc2c5a56d555f92a9adc9526f2a5daa15a6a53a`)
        .then(resp => resp.json())
        .then(coordinates => fetchTrails(coordinates))
    

        const fetchTrails = (coordinates) => {
        fetch(`https://www.hikingproject.com/data/get-trails?lat=${coordinates['results'][0]['location']['lat']}&lon=${coordinates['results'][0]['location']['lng']}&key=200922216-abc9f3b851d5d8ddadbd0acb2322cefe`)
        .then(resp => resp.json())
        .then(trails => dispatch({
            type: 'FETCH_TRAILS',
            payload: trails
        }))      
        } 
    }
}

// dispatch({type: 'ADD_TRAILS', trails})


  //   //fetch to convert zip code or City, STATE(2-letter abbreviation) into long/lat
  //     //Option to send JUST Zip Code: 
  //       //https://api.geocod.io/v1.6/geocode?q=22201&api_key=YOUR_API_KEY
  //   //Option to send City+State:
  //   fetch('https://api.geocod.io/v1.6/geocode?q=San+Marcos%2c+TX&api_key=fc2c5a56d555f92a9adc9526f2a5daa15a6a53a')
  //   .then(resp => resp.json())
  //   .then(data => console.log(data['results'][0]['location']))

  //   //fetch to get trails with converted long/lat fetch from above. 
  //   //Below example maps over array of trails from SM and console.logs the name of each trail
  //   fetch('https://www.hikingproject.com/data/get-trails?lat=29.972907&lon=-97.997166&maxDistance=10&key=200922216-abc9f3b851d5d8ddadbd0acb2322cefe')
  //   .then(resp => resp.json())
  //   .then(trails => console.log(trails['trails'].map(trail => trail.name)))
  // }