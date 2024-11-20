import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  UserActions,
} from "./Action";

export interface UserState {
  loading: boolean;
  data:[]; 
  error: string;
}

const initialState: UserState = {
  loading: false,
  data: [],
  error: "",
};

export const userReducer = (state = initialState, action: UserActions): UserState => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true, error: "" };
    case FETCH_USERS_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: "" };
    case FETCH_USERS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
