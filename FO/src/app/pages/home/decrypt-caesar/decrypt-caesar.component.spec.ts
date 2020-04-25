import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecryptCaesarComponent } from './decrypt-caesar.component';

describe('DecryptCaesarComponent', () => {
  let component: DecryptCaesarComponent;
  let fixture: ComponentFixture<DecryptCaesarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecryptCaesarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecryptCaesarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
