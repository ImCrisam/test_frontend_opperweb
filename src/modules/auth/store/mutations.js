
export const loginUser = ( state, { user, token }) => {

    if ( token ) {
        localStorage.setItem( 'token', token )
        state.token = token
    }

    state.user = user
    state.auth = true
}


export const logout = (state) => {
    
    state.user = null
    state.token = null
    state.auth = false
    localStorage.removeItem('token')
}
