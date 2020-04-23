/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CaesarComponent } from './caesar.component';
import { Router } from '@angular/router';
import { AppModule } from 'src/app/app.module';

describe('CaesarComponent', () => {
  let component: CaesarComponent;
  let fixture: ComponentFixture<CaesarComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaesarComponent ],
      providers: [Location],
      imports: [AppModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaesarComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call backClicked function when the button is pressed', async(()=> {
    spyOn(component, 'redirectBackClicked');

    let button = fixture.debugElement.nativeElement.querySelector('button#redirectBack');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.redirectBackClicked).toHaveBeenCalled();
    });
  }));

  it('should call caesarClicked function when the button is pressed', async(()=> {
    spyOn(component, 'caesarClicked');

    let button = fixture.debugElement.nativeElement.querySelector('button#caesar');
    button.click();

    let cipherNumberInput = fixture.debugElement.nativeNode.querySelector('input#cipherNumber');
    let textInput = fixture.debugElement.nativeNode.querySelector('input#textInput');

    fixture.whenStable().then(() => {
      expect(component.caesarClicked).toHaveBeenCalledWith(textInput.value, cipherNumberInput.value);
    });
  }));

  it('should redirectBack when the button is pressed', async(()=> {
    component.redirectBackClicked();
    fixture.whenStable().then(() => {
      expect(router.url).toMatch('^.*/$');
    });
  }));
});
