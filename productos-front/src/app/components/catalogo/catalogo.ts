import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Producto } from '../../models/producto';
import { ProductoMockService } from '../../services/producto-mock.service';
@Component({
selector: 'app-catalogo',
imports: [RouterLink],
templateUrl: './catalogo.html'
})
export class Catalogo implements OnInit {
productos = signal<Producto[]>([]);
constructor(private productoService: ProductoMockService) {}
ngOnInit(): void {
this.productoService.listar().subscribe(datos => this.productos.set(datos));
}
}