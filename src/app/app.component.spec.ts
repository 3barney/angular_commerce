import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'commerce-cart'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('commerce-cart');
  });


  it(`should have a table element`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const de = fixture.debugElement;
    fixture.detectChanges();

    const rowElements = de.nativeElement.querySelectorAll('mat-toolbar');
    expect(rowElements.length).toBe(1);
  });

  it(`should have an H1 element with title (E-commerce)`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const de = fixture.debugElement;
    fixture.detectChanges();

    const rowElements = de.nativeElement.querySelectorAll('h1');
    expect(rowElements[0].innerHTML).toBe('E-commerce')
    expect(rowElements.length).toBe(1);
  });

  it(`should have two links to (products and cart)`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const de = fixture.debugElement;
    fixture.detectChanges();

    const rowElements = de.nativeElement.querySelectorAll('a h3');
    expect(rowElements.length).toBe(2);

    expect(rowElements[0].innerHTML).toBe('Products');
    expect(rowElements[1].innerHTML).toBe('Cart');
  });

});
