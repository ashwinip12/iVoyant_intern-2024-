export const BUY_CAKE='BUY_CAKE'
export const BUY_ICECREAM='BUY_ICECREAM'

export const buyCake = () => ({
  type: BUY_CAKE,
  info:'First redux action'
})

export const buyIcecream=() => ({
  type: BUY_ICECREAM,
  info:'Cake action'
  }
)
export interface BuyCakeAction{

type: typeof BUY_CAKE | typeof BUY_ICECREAM;
info: 'string';
}