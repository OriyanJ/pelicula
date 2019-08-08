import { AllowedVideoTypes } from '@bridge-interfaces';

export class Video {
  id?: string;
  key?: string;
  name?: string;
  site?: string;
  size?: number;
  type?: AllowedVideoTypes;
}
