import {api, getSignature} from '../../../api/authApi'

export const create = async ({ commit, state, rootState }, data ) => {
    try {
        const signature = await getSignature();
        console.log(data);
        const res = await api.post('v1/categoria/create', { nombre:data.name, ...signature}, {headers: {'Authorization': 'Bearer '+rootState.auth.token} })
        
        commit('addCategory', { category:res.data.categoria })

        return { ok: true }

    } catch (error) {
        console.log( error.response.data.message);
        return { ok: false, message: error.response.data.message }
    }

}


export const update = async ({ commit, state }, user ) => {
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


export const current = async ({ commit, state, rootState }) => {

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