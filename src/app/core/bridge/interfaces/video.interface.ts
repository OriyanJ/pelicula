export enum AllowedVideoTypes {
  TRAILER = 'Trailer',
  TEASER = 'Teaser',
  CLIP = 'Clip',
  FEATURETTE = 'Featurette',
  OPENING = 'Opening',
  CREDITS = 'Credits',
  BEHIND_THE_SCENES = 'Behind the Scenes',
  BLOOPERS = 'Bloopers'
}

export interface VideoJson {
  id?: string;
  iso_639_1?: string;
  iso_3166_1?: string;
  key?: string;
  name?: string;
  site?: string;
  size?: number;
  type?: AllowedVideoTypes;
}
