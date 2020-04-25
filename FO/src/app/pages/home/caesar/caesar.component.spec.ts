/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CaesarComponent } from './caesar.component';
import { Router } from '@angular/router';
import { AppModule } from 'src/app/app.module';
import { doesNotReject } from 'assert';
import { HomeService } from '../home.service';
import { of } from 'rxjs';

describe('CaesarComponent', () => {
  let component: CaesarComponent;
  let fixture: ComponentFixture<CaesarComponent>;
  let router: Router;
  let service: HomeService;

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
    service = TestBed.get(HomeService);
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

  it('should check output label when function makeCaesar is called', async ()=> {
    spyOn(service, 'postCaesarResults').and.returnValue(of('def'));

    component.makeCaesar();

    let result = fixture.debugElement.nativeElement.querySelector('label#outputValue');

    fixture.detectChanges();
    await fixture.whenStable();
    expect(result.textContent).toBe("def");
  });

  it('should redirectBack when the button is pressed', async(()=> {
    component.redirectBackClicked();
    fixture.whenStable().then(() => {
      expect(router.url).toMatch('^.*/$');
    });
  }));

  it('should call makeCaesar encrypt when new character', fakeAsync(() => {
    spyOn(component, 'makeCaesar');

    setInputValue("input#textInput", "a");

    fixture.detectChanges();
    expect(component.makeCaesar).toHaveBeenCalled();
  }));

  // must be called from within fakeAsync due to use of tick()
  function setInputValue(selector: string, value: string) {
    tick();
    let input = fixture.debugElement.nativeElement.querySelector(selector);

    input.dispatchEvent(new Event('keydown'));
    input.value += value;
    input.dispatchEvent(new Event('keyup'));

    tick();
  }
});
