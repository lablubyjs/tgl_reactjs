import { IListGamesReponse, IGame } from '@shared/interfaces';

export interface ICart {
   minCartValue: IListGamesReponse['minCartValue']
   games: IGame[]
   cartTotal: number
}