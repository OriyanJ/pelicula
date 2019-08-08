import { KeywordJson } from './keyword.interface';

export interface KeywordsJson {
  id: number;
  keywords?: KeywordJson[];
  results?: KeywordJson[];
}
