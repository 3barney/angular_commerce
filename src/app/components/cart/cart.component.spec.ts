import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CartComponent } from './cart.component';
import {ProductService} from '../../services/product.service';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {ProductComponent} from '../product/product.component';

describe('CartComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatTableModule,
        MatToolbarModule,
        MatButtonModule
      ],
      declarations: [
        CartComponent
      ],
      providers: [
        ProductService
      ]
    }).compileComponents();
  }));

  it(`should load cart component`, () => {
    const fixture = TestBed.createComponent(CartComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should render table`, () => {
    const fixture = TestBed.createComponent(ProductComponent);
    const de = fixture.debugElement;
    fixture.detectChanges();

    const rowElements = de.nativeElement.querySelectorAll('mat-table');
    expect(rowElements.length).toBe(1);
  });
});
