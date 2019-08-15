import { Injectable } from '@angular/core';
import PNotify from 'pnotify/dist/es/PNotify';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons';

@Injectable({ providedIn: 'root' })
export class NotifyService {
  defaultOptions = {
    icon: false,
    modules: {
      Buttons: {
        sticker: false
      }
    }
  };
  constructor() {
    // tslint:disable-next-line:no-unused-expression
    PNotifyButtons;
    PNotify.defaults.styling = 'bootstrap4';
    PNotify.defaults.icons = 'brighttheme';
  }

  error(text: string, title?: string): void {
    this.alert('error', text, title);
  }

  success(text: string, title?: string): void {
    this.alert('success', text, title);
  }

  clear() {
    PNotify.removeAll();
  }

  private alert(type: string, text: string, title?: string) {
    const options = Object.assign(
      this.setOptions(text, title),
      this.defaultOptions,
      { type: type }
    );
    PNotify.alert(options);
  }

  private setOptions(text: string, title?: string): Object {
    return {
      title: title ? title : false,
      text: text
    };
  }
}
