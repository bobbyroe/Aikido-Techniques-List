import { TestBed } from '@angular/core/testing';

import { AikidoService } from './aikido.service';

describe('AikidoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AikidoService = TestBed.get(AikidoService);
    expect(service).toBeTruthy();
  });
});
