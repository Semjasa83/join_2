import { TestBed } from '@angular/core/testing';

import { BackendclientService } from './backendclient.service';

describe('BackendclientService', () => {
  let service: BackendclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendclientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
