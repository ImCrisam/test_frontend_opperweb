
// export const myGetter = ( state ) => {
//  return state
// }


export const currentAuth= ( state ) => {
    return state.auth
}

export const username = ( state ) => {
    return state.user?.name || ''
}



