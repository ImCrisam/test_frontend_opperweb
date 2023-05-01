
export const list= ( state ) => {
    return state.list
}

export const current = ( state ) => {
    return state.current
}
export const currentCategory = ( state ) => {
    return state.list.find((item) => item.id===state.current)
}



