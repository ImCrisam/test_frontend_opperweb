import {api, getSignature} from '../../../api/authApi'

export const createUser = async ({ commit }, data ) => {
    try {
        const signature = await getSignature();
        const res = await api.post('register', { ...data, ...signature})
        const {user, token} = res.data
        delete user.password
        delete user.password_confirmation
        commit('loginUser', { user, token })

        return { ok: true }

    } catch (error) {
        return { ok: false, message: error.response.data.message }
    }

}


export const signInUser = async ({ commit, state }, user ) => {
    try {
        const signature = await getSignature();
        const {data} = await api.post('login', { ...user, ...signature})
        const token = data.access_token
        
        const res= await api.get('v1/me', { params: {...signature}, headers: {'Authorization': 'Bearer '+token} })
        
        commit('loginUser', { user:res.data, token })
        return { ok: true }

    } catch (error) {
        return { ok: false, message: error.response.data.message }
    }

}


export const checkAuthentication = async ({ commit, state }) => {

    const token = localStorage.getItem('token')
    if( !token ) {
        console.log("no token");
        commit('logout')
        return { ok: false, message: 'No hay token' }
    }

    try {
        const signature = await getSignature();
        const token = localStorage.getItem("token")
        const res = await api.get('v1/me', { params: {...signature}, headers: {'Authorization': 'Bearer '+token} })

        commit('loginUser', { user:res.data, token })

        return { ok: true }

    } catch (error) {
        commit('logout')
        return { ok: false, message: error.response.data.message }
    }

}