import { computed } from 'vue'
import { useStore } from 'vuex'

const useCategory = () => {
    
    const store = useStore()

    const getListCategories = async() => {
        const resp = await store.dispatch('category/list' )
        return resp
    }

    const selectCategory = async( id ) => {
        const resp = await store.dispatch('category/current', id )
        return resp
    }
    const createCategory = async( data ) => {
        const resp = await store.dispatch('category/create', data )
        return resp
    }

    const updateCategory = async( data ) => {
        const resp = await store.dispatch('category/update', data )
        return resp
    }

    
    return {
        createCategory,
        getListCategories,
        selectCategory,
        updateCategory,
        

        listCategories: computed(()=> store.getters['category/list']),
        currentCategory: computed(() => store.getters['category/currentCategory'] )
        //category: computed(()=> store.getters['category/get'])
    }
}

export default useCategory