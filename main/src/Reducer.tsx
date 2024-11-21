import { REMOVE, ADD, UserAction } from "./Action";

export interface UserState {
  add: number;
  remove: number;
}

const initialState: UserState = {
  add: 10,
  remove: 10,
};

export const UserReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        add: state.add + 1,
      };
    case REMOVE:
      return {
        ...state,
        remove: state.remove - 1,
      };
    default:
      return state;
  }
};
