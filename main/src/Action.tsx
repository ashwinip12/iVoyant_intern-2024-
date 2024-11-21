
export const ADD='ADD';
export const REMOVE='REMOVE';

export const add=() => ({

  type: ADD,
  info:"Add a new"

})

export const remove=() => ({

type: REMOVE,
info:"Remove a new"
})

export interface AddAction
{
  type :typeof ADD,
   info:"Add a new"
}
export interface RemoveAction
{
  type :typeof REMOVE,
  info:"Remove a new"
}


export type UserAction= AddAction| RemoveAction