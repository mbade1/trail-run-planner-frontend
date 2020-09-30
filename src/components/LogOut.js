import React from 'react'
import LogOutFetch from '../fetchCalls/LogOut'
import { withRouter } from 'react-router';


const LogOut = ({ to = "/", history }) => {
    
    return (
        <div>
            {/* <br/>
            <h1>Are you sure you want to Log Out?</h1>
            <div onClick={() => {
            LogOutFetch();
            history.push(to);
        }}>
            <p>If yes, click here.</p> 
        </div> */}
        </div>
        

    )
}

export default withRouter(LogOut)


