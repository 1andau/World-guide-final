 
const initialState = {
    category: null,
    sortBy: 'popular',
}

const filters = (state = initialState, action) =>{
if (action.type === 'SET_SORT_BY'){
return{
    ...state,
    sortBy: action.payload,
};
}
if (action.type === 'SET_CATEGORY') {
    return {
      ...state,
      category: action.payload,
    };
  }

  if (action.type === 'SET_CATEGORY_RECOM') {
    return {
      ...state,
      category: action.payload,
    };
  }
  if (action.type === 'SET_CATEGORY_UNUSUAL') {
    return {
      ...state,
      category: action.payload,
    };
  }
return state; //если ниче не нужно менять, верни state
}

export default filters;

