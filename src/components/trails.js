import React from 'react'
import Trail from './trail'
import Iframe from 'react-iframe'


class Trails extends React.Component {
    constructor() {
        super();
        this.state = {
            journal: '',
            dateOfRun: ''
        }
    }

    handleChange = (event) => {
        console.log(event)
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log(event)
        debugger
        
    }
    
    render() {
        return (
            <div>
                {this.props.trails.map(trail => 
                <div key={trail.id} className='trail'>
                    
                <h1>{trail.name}</h1>
                    <img src={trail.imgMedium}/>
                    <br />
                    <p>
                    {trail.summary}<br/><br/>  
                    <b>Difficulty</b>: {trail.difficulty}<br/><br />  
                    <b>Length</b>: {trail.length} miles &nbsp; 
                    <b>Ascent</b>: {trail.ascent} &nbsp;
                    <b>Descent</b>: {trail.descent}
                    <br/><br/>
                    <b>Highest point</b>: {trail.high} feet
                    <b>Lowest point</b>: {trail.low} feet
                    </p>
                    <h3>Conditions</h3>
                    <p>
                    <b>Status of this trail</b>: {trail.conditionStatus}&nbsp;
                    <b>Status details</b>: {trail.conditionDetails}&nbsp;
                    <b>Date of update</b>: {trail.conditionDate}    
                    </p>
                    <br/>
                    <br/>
                    <form onSubmit={this.handleSubmit}>
                        <b>Date of Run:</b><input type="datetime-local" name="dateOfRun" onChange={(event) => this.handleChange(event)} value={this.state.dateOfRun} />
                        <br/><br/>
                        <input type="hidden" name={trail.id}/>
                        <input type="submit"  value={`Add ${trail.name} to your journal`} ></input>
                    </form>
                </div>
                )}
                {/* <Trail trails={props.trails}/> */}
            </div>
          )

    }
    
}

export default Trails