
export const setLists = ( state, { list }) => {
    state.list = list
}
export const addCategory = ( state, { category }) => {
    console.log({category});
    console.log(state.list);
    state.list.push(category)
}
export const setCurrent= ( state, { id }) => {
    state.current = id
}
