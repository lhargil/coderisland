import { Injectable } from '@angular/core';
import { Clipboard } from "@angular/cdk/clipboard"

@Injectable({
  providedIn: 'root'
})
export class ClipboardWrapperService {
  private readonly apiUrl = 'https://localhost:5001';
  constructor(private readonly clipBoard: Clipboard) { }

  copyOmgImageUrl(textToCopy: string) {
    this.clipBoard.copy(`${this.apiUrl}${textToCopy}`);
  }
}
