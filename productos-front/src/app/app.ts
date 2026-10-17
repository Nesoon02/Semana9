import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Encabezado } from './components/encabezado/encabezado';
@Component({
selector: 'app-root',
imports: [RouterOutlet, Encabezado],
templateUrl: './app.html'
})
export class App {}