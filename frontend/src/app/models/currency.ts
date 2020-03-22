import {Quote} from './quote';

export class Currency {
  id: number;
  name: string;
  imageUrl: string;
  symbol: string;
  slug: string;
  numMarketPairs: number;
  dateAdded: Date;
  tags: string[];
  maxSupply: number;
  circulatingSupply: number;
  totalSupply: number;
  platform?: any;
  cmcRank: number;
  lastUpdated: Date;
  favorited: boolean;
  favoritesCount: number;
  quote: Quote;
}
