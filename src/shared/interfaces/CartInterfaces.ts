import { IListGamesReponse, IGame } from '@shared/interfaces';

export interface ICart {
   minCartValue: IListGamesReponse['min_cart_value']
   games: IGame[]
   cartTotal: number
}