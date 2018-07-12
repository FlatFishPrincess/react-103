const initialState = {
  wine: {
    id:"initialId",
    appellation:{
      name:"initialName",
      region:"initialRegion"
    },
    grapes:["Cabernet Sauvignon", "Merlot", "Cabernet Franc"],
    name: "initialName",
    type:"initalType"
  },
  comments: [],
  liked: false
};

export const currentWine = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_CURRENT_WINE':
        console.log('reducer wine',action.wine , action.wine.appellation)
        return Object.assign({}, state, { wine: action.wine, liked: true });
      case 'SET_CURRENT_COMMENTS':
        return Object.assign({}, state, { comments: action.comments });
      case 'SET_CURRENT_LIKED':
        return Object.assign({}, state, { liked: action.liked });
      default:
        return state;
    }
  }

