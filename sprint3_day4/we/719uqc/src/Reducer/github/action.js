// LOADING, SUCCESS, FAILURE
// pending, fulfilled, reject
export const githubLoadingAction = { type: "FETCH_GITHUB_USER_LOADING" };
export const githubSuccessAction = { type: "FETCH_GITHUB_USER_SUCCESS" };
export const githubFailureAction = { type: "FETCH_GITHUB_USER_FAILURE" };

export const fetchUser = (dispatch, query) => {
  dispatch(githubLoadingAction);
  fetch("https://api.github.com/search/users?" + `q=${query}`)
    .then((res) => res.json())
    .then((res) => {
      dispatch({ ...githubSuccessAction, payload: res.items });
    })
    .catch((err) => {
      dispatch(githubFailureAction);
    });
};
