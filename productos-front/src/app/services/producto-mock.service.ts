import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Producto } from '../models/producto';
@Injectable({ providedIn: 'root' })
export class ProductoMockService {
private productos: Producto[] = [
{ id: 1, nombre: 'Teclado', precio: 85, stock: 8, estadoStock: 'DISPONIBLE' },
{ id: 2, nombre: 'Mouse', precio: 45, stock: 3, estadoStock: 'BAJO' },
{ id: 3, nombre: 'Monitor', precio: 620, stock: 5, estadoStock: 'DISPONIBLE' }
];
listar(): Observable<Producto[]> {
return of(this.productos);
}
}