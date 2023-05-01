import { computed } from 'vue'
import { useStore } from 'vuex'

const useAuth = () => {
    
    const store = useStore()

    const createUser = async( user ) => {
        const resp = await store.dispatch('auth/createUser', user )
        return resp
    }

    const loginUser = async( user ) => {
        const resp = await store.dispatch('auth/signInUser', user )
        return resp
    }
    
    const logout = () => {
        store.commit('auth/logout')
    }
    
    return {
        createUser,
        loginUser,
        logout,

        authStatus: computed(()=> store.getters['auth/currentState']),
        username: computed(()=> store.getters['auth/username'])
    }
}

export default useAuth