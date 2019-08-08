import { Injectable } from '@angular/core';
import { VideoJson } from '@bridge-interfaces';
import { Video } from '@models';

@Injectable({ providedIn: 'root' })
export class VideoSerializer {
  from(json: VideoJson) {
    const video = new Video();
    if (json.id) {
      video.id = json.id;
    }
    if (json.key) {
      video.key = json.key;
    }
    if (json.name) {
      video.name = json.name;
    }
    if (json.site) {
      video.site = json.site;
    }
    if (json.size) {
      video.size = json.size;
    }
    if (json.type) {
      video.type = json.type;
    }
    return video;
  }
}
