import { Routes } from '@angular/router';
import { Catalogo } from './components/catalogo/catalogo';
import { ProductoForm } from './pages/producto-form/producto-form';
import { HolaForm } from './pages/hola-form/hola-form';
export const routes: Routes = [
{ path: '', redirectTo: 'productos', pathMatch: 'full' },
{ path: 'productos', component: Catalogo },
{ path: 'productos/nuevo', component: ProductoForm },
{ path: 'productos/hola', component: HolaForm },
{ path: 'productos/editar/:id', component: ProductoForm },
{ path: '**', redirectTo: 'productos' }
];