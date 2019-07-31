import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesChamadoComponent } from './detalhes-chamado.component';

describe('DetalhesChamadoComponent', () => {
  let component: DetalhesChamadoComponent;
  let fixture: ComponentFixture<DetalhesChamadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesChamadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesChamadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
