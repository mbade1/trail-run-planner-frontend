const LogOutFetch = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('state');
}


export default LogOutFetch