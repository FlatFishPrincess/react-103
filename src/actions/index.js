import * as WinesService from '../services/Wines';

//-------------------http loading--------------------//
export const setHttpLoading = () => {
    return {
      type: 'HTTP_LOADING',
    };
  }
  
  export const setHttpLoaded = () => {
    return {
      type: 'HTTP_LOADED',
    };
  }
  
  export const setHttpError = (error) => {
    return {
      type: 'HTTP_ERROR',
      error
    };
  }

// -------------- set wines ------------//
  export const setRegions = (regions) => {
    return {
      type: 'SET_REGIONS',
      regions
    };
  }

//   responsible to fetch regions from the REST API and set the regions array in the redux store.
export const fetchRegions = () => {
  return dispatch => {
    dispatch(setRegions([]));
    dispatch(setHttpLoading());
    return WinesService.fetchRegions().then(data => {
      dispatch(setHttpLoaded());
      dispatch(setRegions(data));
      return data;
    }, err => {
      dispatch(setHttpError(`error while fetching regions : ${err.message}`));
    });
  };
}

export const setWines = (wines) => {
    return{
        type: 'SET_WINES',
        wines
    }
}

export const fetchWinesFrom = (region) => {
    return dispatch => {
        dispatch(setWines([]));
        dispatch(setHttpLoading());
        return WinesService.fetchWinesFrom(region).then(data => {
          dispatch(setHttpLoaded());
          dispatch(setWines(data));
          return data;
        }, err => {
          dispatch(setHttpError(`error while fetching wines : ${err.message}`));
        });
      };
}

export const setCurrentWine = (wine) => {
  console.log('setCurrentWine, in actions', wine)
    return{
        type: 'SET_CURRENT_WINE',
        wine
    }
}


export const fetchCurrentWine = (id) => dispatch => {
      WinesService.fetchWine(id).then(data => {
        dispatch(setHttpLoaded());
        dispatch(setCurrentWine(data));
        console.log('fetching current wine in actions ', data)
      }, err => {
        dispatch(setHttpError(`error while fetching wine : ${err.message}`));
      });
}

// export const fetchCurrentWine = (id) => {
//     return dispatch => {
//         dispatch(setCurrentWine([]));
//         dispatch(setHttpLoading());
//         return WinesService.fetchWine(id).then(data => {
//           dispatch(setHttpLoaded());
//           dispatch(setCurrentWine(data));
//           console.log('action fetch wine', data)
//           return data;
//         }, err => {
//           dispatch(setHttpError(`error while fetching wine : ${err.message}`));
//         });
//       };
// }

export const setCurrentWineComments = (comments) => {
  return{
      type: 'SET_CURRENT_COMMENTS',
      comments
  }
}

export const fetchCurrentWineComments = (id) => dispatch => {
      return WinesService.fetchComments(id).then(data => {
        dispatch(setHttpLoaded());
        dispatch(setCurrentWineComments(data));
        return data;
      }, err => {
        dispatch(setHttpError(`error while fetching comments : ${err.message}`));
      });
}

export const setCurrentWineLiked = (liked) => {
  console.log('setCurrnetWineLiked ' , liked)
  return{
      type: 'SET_CURRENT_LIKED',
      liked
  }
}
export const fetchCurrentWineLiked = (id) => {
  return dispatch => {
      dispatch(setCurrentWineLiked([]));
      dispatch(setHttpLoading());
      return WinesService.fetchLiked(id).then(data => {
        dispatch(setHttpLoaded());
        dispatch(setCurrentWineLiked(data));
        return data;
      }, err => {
        dispatch(setHttpError(`error while fetching liked : ${err.message}`));
      });
    };
}

// export const likeWine = (id) => ???
// export const unlikeWine = (id) => ???
// export const commentWine = (id, content) => ???