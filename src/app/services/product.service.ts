import { Injectable } from '@angular/core';

import { Product } from '../entities/product.entity';


@Injectable()
export class ProductService {

  private products: Product[];

  constructor() {
    this.products = [
      { id: '001', name: 'Brown eggs', price: '28',
        photo: 'https://user-images.githubusercontent.com/41929050/61567049-13938600-aa33-11e9-9c69-a4184bf8e524.jpeg' },
      { id: '002', name: 'Strawberry', price: '29',
        photo: 'https://user-images.githubusercontent.com/41929050/61567053-13938600-aa33-11e9-9780-104fe4019659.png' },
      { id: '003', name: 'Asparagus', price: '18',
        photo: 'https://user-images.githubusercontent.com/41929050/61567051-13938600-aa33-11e9-8ae7-0b5c19aafab4.jpeg' },
      { id: '004', name: 'Green Smoothie', price: '17',
        photo: 'https://user-images.githubusercontent.com/41929050/61567054-13938600-aa33-11e9-9163-eec98e239b7a.png' },
      { id: '005', name: 'Legums', price: '17',
        photo: 'https://user-images.githubusercontent.com/41929050/61567055-142c1c80-aa33-11e9-96ff-9fbac6413625.png' },
      { id: '006', name: 'Cake', price: '11',
        photo: 'https://user-images.githubusercontent.com/41929050/61567056-142c1c80-aa33-11e9-8682-10065d338145.png' },
      { id: '007', name: 'Basil', price: '18',
        photo: 'https://user-images.githubusercontent.com/41929050/61567052-13938600-aa33-11e9-9a88-cd842073ba44.jpg' },
      { id: '008', name: 'Hazelnut', price: '27',
        photo: 'https://user-images.githubusercontent.com/41929050/61567060-142c1c80-aa33-11e9-8188-5a4803844a9e.png' },
      { id: '009', name: 'Homemade bread', price: '16',
        photo: 'https://user-images.githubusercontent.com/41929050/61567063-14c4b300-aa33-11e9-8515-bcb866da9ea3.png' },
      { id: '010', name: 'Fresh tomato', price: '3',
        photo: 'https://user-images.githubusercontent.com/41929050/61567057-142c1c80-aa33-11e9-9781-9e442418eaab.png' },
    ];
  }

  findAll(): Product[] {
    return this.products;
  }

  find(id: string): Product {
    return this.products[this.getSelectedIndex(id)];
  }

  private getSelectedIndex(id: string): number {
    for (let index = 0; index < this.products.length; index++) {
      if (this.products[index].id === id) {
        return index;
      }
    }
    return -1;
  }
}
