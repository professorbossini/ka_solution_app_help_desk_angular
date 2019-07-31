import { TestBed } from '@angular/core/testing';

import { ChamadoService } from './chamado.service';

describe('ChamadosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChamadoService = TestBed.get(ChamadoService);
    expect(service).toBeTruthy();
  });
});
