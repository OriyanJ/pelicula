import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { Movie, Tv, Keyword, ExternalIds } from '@models';

class MappedExternalId {
  id: string;
  label: string;
  url: string;
}

enum EXTERNAL_IDS_URLS {
  facebook = 'https://www.facebook.com',
  twitter = 'https://www.twitter.com',
  instagram = 'https://www.instagram.com',
  imdb = 'https://www.imdb.com/title'
}

enum EXTERNAL_IDS_LABELS {
  facebook = 'Facebook',
  twitter = 'Twitter',
  instagram = 'Instagram',
  imdb = 'IMDB'
}

@Component({
  selector: 'app-media-facts',
  templateUrl: './media-facts.component.html',
  styleUrls: ['./media-facts.component.scss']
})
export class MediaFactsComponent implements OnInit, OnChanges {
  @Input() media: Movie | Tv;
  @Input() keywords?: Keyword[];
  @Input() externalIds?: ExternalIds;
  type: string;
  mappedExternalIds: MappedExternalId[] = [];

  constructor() {}

  ngOnInit() {
    this.type = this.media.constructor.name.toLowerCase();
  }

  ngOnChanges() {
    this.mapExternalIds();
  }

  mapExternalIds() {
    this.mappedExternalIds.length = 0;
    for (const [key, value] of Object.entries(this.externalIds)) {
      if (key === 'id') {
        continue;
      }
      const mapped = new MappedExternalId();
      mapped.id = key;
      mapped.label = EXTERNAL_IDS_LABELS[key];
      mapped.url = `${EXTERNAL_IDS_URLS[key]}/${value}`;
      this.mappedExternalIds.push(mapped);
    }
  }
}
