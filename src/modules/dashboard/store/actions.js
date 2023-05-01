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

export const list = async ({ commit, state, rootState } ) => {
    try {
        const signature = await getSignature();
        const res = await api.get('v1/categoria', { params: {...signature}, headers: {'Authorization': 'Bearer '+rootState.auth.token} })
        commit('setLists', { list:res.data.categorias })
        return { ok: true }

    } catch (error) {
        return { ok: false, message: error.response.data.status }
    }

}


export const update = async ({ commit, state, rootState }, data ) => {
    try {
        const signature = await getSignature();
        console.log(state.current);
        const res = await api.put(`v1/categoria/update/${state.current}`, { nombre:data.name, ...signature}, {headers: {'Authorization': 'Bearer '+rootState.auth.token} })
        return { ok: true }

    } catch (error) {
        console.log( error.response.data.message);
        return { ok: false, message: error.response.data.message }
    }

}


export const current = async ({ commit}, id) => {
        commit('setCurrent', {id})
        return { ok: true }
}