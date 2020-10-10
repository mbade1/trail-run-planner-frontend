export const fetchIndividualTrail = (trailId) => {
    fetch('https://www.hikingproject.com/data/get-trails-by-id?ids=7001635,&key=200922216-abc9f3b851d5d8ddadbd0acb2322cefe')
    .then(resp => resp.json())
    .then(trail => console.log(trail))
}