import { TestBed } from '@angular/core/testing';
import { ProductoMock } from './producto-mock';

describe('ProductoMock', () => {
  let service: ProductoMock;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductoMock);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
