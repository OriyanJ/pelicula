import { Injectable } from '@angular/core';
import { VideosJson, VideoJson } from '@bridge-interfaces';
import { Videos } from '@models';
import { VideoSerializer } from './video.serializer';

@Injectable({ providedIn: 'root' })
export class GetMediaVideosSerializer {
  constructor(private videoSerializer: VideoSerializer) {}
  from(json: VideosJson) {
    const videos = new Videos();
    videos.id = json.id;
    videos.data = json.results ? this.serializeVideos(json.results) : [];
    return videos;
  }

  serializeVideos(videos: VideoJson[]) {
    return videos.map(json => this.videoSerializer.from(json));
  }
}
