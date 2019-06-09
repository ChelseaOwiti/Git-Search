import { TestBed, inject } from '@angular/core/testing';

import { GitserviceService } from './gitservice.service';

describe('GitserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitserviceService]
    });
  });

  it('should be created', inject([GitserviceService], (service: GitserviceService) => {
    expect(service).toBeTruthy();
  }));
});
