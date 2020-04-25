import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { DecryptCaesarComponent } from './decrypt-caesar.component';
import { HomeService } from '../home.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { AppModule } from 'src/app/app.module';

describe('DecryptCaesarComponent', () => {
  let component: DecryptCaesarComponent;
  let fixture: ComponentFixture<DecryptCaesarComponent>;
  let router: Router;
  let service: HomeService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecryptCaesarComponent ],
      providers: [Location],
      imports: [AppModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecryptCaesarComponent);
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

  it('should redirectBack when the button is pressed', async(()=> {
    component.redirectBackClicked();
    fixture.whenStable().then(() => {
      expect(router.url).toMatch('^.*/$');
    });
  }));

  it('should check output label when function decryptCaesar is called', async ()=> {
    spyOn(service, 'postCaesarDecryptResults').and.returnValue(of('def'));

    component.decryptCaesar();

    let result = fixture.debugElement.nativeElement.querySelector('label#outputValue');

    fixture.detectChanges();
    await fixture.whenStable();
    expect(result.textContent).toBe("def");
  });

  it('should call decryptCaesar when new character', fakeAsync(() => {
    spyOn(component, 'decryptCaesar');

    setInputValue("input#cipherText", "a");

    fixture.detectChanges();
    expect(component.decryptCaesar).toHaveBeenCalled();
  }));

  function setInputValue(selector: string, value: string) {
    tick();
    let input = fixture.debugElement.nativeElement.querySelector(selector);

    input.dispatchEvent(new Event('keydown'));
    input.value += value;
    input.dispatchEvent(new Event('keyup'));

    tick();
  }

});
