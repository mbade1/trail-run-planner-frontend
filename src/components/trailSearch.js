import React from 'react'

class TrailSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {city: '', statee: '' };
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        //if the name of the city has a space in it, split the city string into an array and join with +.
        let splitted = this.state.city.split(" ").join("+")
        this.props.fetchCityAndTrails(splitted, this.state.statee)
        this.setState({
            value: '', 
            city: '', 
            statee: ''
        })
    }

    render() {
        return (
            <div className="trail-search">
                <h1>Trail Search</h1>
                <form onSubmit={this.handleSubmit}>
                    <b>City</b>: <input type="text" name="city" onChange={(event) => this.handleChange(event)} value={this.state.city} />
                    &nbsp;
                    <b>State</b>: <input type="text" name="statee" onChange={(event) => this.handleChange(event)} value={this.state.statee}/> 
                    &nbsp;
                    <input type="submit" value="Search for trails!"></input>
                </form>
                <p><i>Enter your city and State initials. Ex: City: "Foresta" State: "CA"</i></p>
            </div>
        )
    }
}

export default TrailSearch