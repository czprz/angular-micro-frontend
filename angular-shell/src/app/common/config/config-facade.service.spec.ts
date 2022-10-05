import { TestBed } from '@angular/core/testing';

import { ConfigFacadeService } from './config-facade.service';

describe('ConfigFacadeService', () => {
  let service: ConfigFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
