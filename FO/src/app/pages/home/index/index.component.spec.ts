/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IndexComponent } from './index.component';
import { AppModule } from 'src/app/app.module';
import { Router } from '@angular/router';

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexComponent ],
      providers: [Location],
      imports: [AppModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call a function when the button is pressed', async(()=> {
    spyOn(component, 'redirectButtonClicked');

    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.redirectButtonClicked).toHaveBeenCalled();
    });
  }));

  it('should redirect when the button is pressed', async(()=> {
    component.redirectButtonClicked();
    fixture.whenStable().then(() => {
      expect(router.url).toMatch('^.*/Home$');
    });
  }));

  it('should call redirectCaesarClicked function when the button is pressed', async(()=> {
    spyOn(component, 'redirectCaesarClicked');

    let button = fixture.debugElement.nativeElement.querySelector('button#caesarButton');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.redirectCaesarClicked).toHaveBeenCalled();
    });
  }));



});
