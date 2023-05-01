import {api, getSignature} from '../../../api/authApi'

export const createUser = async ({ commit }, data ) => {
    try {
        const signature = await getSignature();
        const res = await api.post('register', { ...data, ...signature})
        console.log({res});
        const {user, token} = res.data
        delete user.password
        delete user.password_confirmation
        console.log({user, token});
        commit('loginUser', { user, token })

        return { ok: true }

    } catch (error) {
        return { ok: false, message: error.response.data.message }
    }

}


// export const signInUser = async ({ commit }, user ) => {

//     const { email, password } = user

//     try {
        
//         const { data } = await authApi.post(':signInWithPassword', { email, password, returnSecureToken: true })
//         const { displayName, idToken, refreshToken } = data
        
//         user.name = displayName

//         commit('loginUser', { user, idToken, refreshToken })

//         return { ok: true }

//     } catch (error) {
//         return { ok: false, message: error.response.data.error.message }
//     }

// }


// export const checkAuthentication = async ({ commit }) => {

//     const idToken      = localStorage.getItem('idToken')
//     const refreshToken = localStorage.getItem('refreshToken')

//     if( !idToken ) {
//         commit('logout')
//         return { ok: false, message: 'No hay token' }
//     }

//     try {
        
//         const { data } = await authApi.post(':lookup', { idToken })
//         // console.log(data)
//         const { displayName, email } = data.users[0]

//         const user = {
//             name: displayName,
//             email
//         }

//         commit('loginUser', { user, idToken, refreshToken })

//         return { ok: true }

//     } catch (error) {
//         commit('logout')
//         return { ok: false, message: error.response.data.error.message }
//     }

// }