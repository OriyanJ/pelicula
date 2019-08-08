import { Injectable } from '@angular/core';
import { KeywordJson } from '@bridge-interfaces';
import { Keyword } from '@models';

@Injectable({ providedIn: 'root' })
export class KeywordSerializer {
  from(json: KeywordJson) {
    const keyword = new Keyword();
    keyword.id = json.id;
    keyword.name = json.name;
    return keyword;
  }
}
