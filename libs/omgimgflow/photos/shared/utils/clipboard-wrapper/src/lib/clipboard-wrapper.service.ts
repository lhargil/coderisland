import { Injectable } from '@angular/core';
import { Clipboard } from "@angular/cdk/clipboard"
import { environment } from '@coderisland/omgimgflow/photos/shared/environments';

@Injectable({
  providedIn: 'root'
})
export class ClipboardWrapperService {
  private readonly apiUrl = environment.omgImageApiBaseUrl;
  constructor(private readonly clipBoard: Clipboard) { }

  copyOmgImageUrl(textToCopy: string) {
    this.clipBoard.copy(`${this.apiUrl}${textToCopy}`);
  }
}
