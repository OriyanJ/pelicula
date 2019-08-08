import { Injectable } from '@angular/core';
import { KeywordsJson } from '@bridge-interfaces';

import { KeywordSerializer } from './keyword.serializer';

@Injectable({ providedIn: 'root' })
export class GetMediaKeywordsSerializer {
  constructor(private keywordSerializer: KeywordSerializer) {}
  from(json: KeywordsJson, type: string) {
    return json[type === 'movie' ? 'keywords' : 'results'].map(keyword =>
      this.keywordSerializer.from(keyword)
    );
  }
}
