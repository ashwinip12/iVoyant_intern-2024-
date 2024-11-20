export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export interface FetchUsersRequestAction {
  type: typeof FETCH_USERS_REQUEST;
}

export interface FetchUsersSuccessAction {
  type: typeof FETCH_USERS_SUCCESS;
  payload: []; 
}

export interface FetchUsersFailureAction {
  type: typeof FETCH_USERS_FAILURE;
  payload: string;
}
export const fetchUsersRequest = (): FetchUsersRequestAction => ({
  type: FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = (users: []): FetchUsersSuccessAction => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUsersFailure = (error: string): FetchUsersFailureAction => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});

export type UserActions =
  | FetchUsersRequestAction
  | FetchUsersSuccessAction
  | FetchUsersFailureAction;


