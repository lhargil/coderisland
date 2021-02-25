import { TestBed } from '@angular/core/testing';

import { ClipboardWrapperService } from './clipboard-wrapper.service';

describe('ClipboardWrapperService', () => {
  let service: ClipboardWrapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClipboardWrapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
