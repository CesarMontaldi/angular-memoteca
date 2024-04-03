import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoCarregarPaginaComponent } from './botao-carregar-pagina.component';

describe('BotaoCarregarPaginaComponent', () => {
  let component: BotaoCarregarPaginaComponent;
  let fixture: ComponentFixture<BotaoCarregarPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoCarregarPaginaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoCarregarPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
