import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductComponent } from './product.component';
import {ProductService} from '../../services/product.service';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

describe('ProductComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatTableModule,
        MatToolbarModule,
        MatButtonModule
      ],
      declarations: [
        ProductComponent
      ],
      providers: [
        ProductService
      ]
    }).compileComponents();
  }));


  it(`should load product component`, () => {
    const fixture = TestBed.createComponent(ProductComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have a columnsToDisplay property`, () => {
    const fixture = TestBed.createComponent(ProductComponent);
    const product = fixture.componentInstance;
    expect(product.columnsToDisplay.length).toBe(5);
  });

  it(`should have a table element`, () => {
    const fixture = TestBed.createComponent(ProductComponent);
    const de = fixture.debugElement;
    fixture.detectChanges();

    const rowElements = de.nativeElement.querySelectorAll('mat-table');
    expect(rowElements.length).toBe(1);
  });

  it(`should render ten rows of elements`, () => {
    const fixture = TestBed.createComponent(ProductComponent);
    const de = fixture.debugElement;
    fixture.detectChanges();

    const rowElements = de.nativeElement.querySelectorAll('mat-table mat-row');
    expect(rowElements.length).toBe(10);
  });

  it(`should render valid row element`, () => {
    const fixture = TestBed.createComponent(ProductComponent);
    const de = fixture.debugElement;
    fixture.detectChanges();

    const rowElements = de.nativeElement.querySelectorAll('mat-table mat-row mat-cell');

    expect(rowElements[0].innerHTML).toBe('001');
    expect(rowElements[1].innerHTML).toBe('Brown eggs');
    expect(rowElements[2].innerHTML).toBe('28');
  });
});
