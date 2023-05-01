
export const setLists = ( state, { list }) => {
    console.log("setLists");
    state.list = list
}
export const addCategory = ( state, { category }) => {
    console.log("addCategory");
    console.log({category});
    console.log(state.list);
    state.list.push(category)
}
export const setCurrent= ( state, { id }) => {
    console.log("setCurrent");
    state.current = id
}
