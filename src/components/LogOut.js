import React from 'react'
import LogOutFetch from '../actions/LogOut'

const LogOut = ({ to = "/login", history }) => {
    
    return (
        <div onClick={() => {
            LogOutFetch();
        }}>
            Log Out
        </div>
    )
}

export default LogOut


