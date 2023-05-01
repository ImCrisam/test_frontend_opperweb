import { createStore } from 'vuex'

import auth from '../modules/auth/store'
import category from '../modules/dashboard/store'


const store = createStore({
    modules: {
        auth,
        category
    }
})




export default store