import React, { useState } from 'react'

const Login = () => {
    const [loggedIn, setLoggedIn] = useState(false)

    return (
        <div>
            <h1>Login button</h1>
            <button onClick={() => setLoggedIn(!loggedIn)}>
                {loggedIn ? 'Log out' : 'Log in'}
            </button>
            {loggedIn ? <h2>Welcome, Elías</h2> : <h3>Please log in</h3>}
        </div>
    )
}

export default Login