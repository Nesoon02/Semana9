import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
selector: 'app-producto-form',
imports: [ReactiveFormsModule, RouterLink],
templateUrl: './producto-form.html'
})
export class ProductoForm {
private fb = inject(FormBuilder);
form = this.fb.nonNullable.group({
nombre: ['', [Validators.required, Validators.minLength(3)]],
precio: [0, [Validators.required, Validators.min(0.01)]],
stock: [0, [Validators.required, Validators.min(0)]]
});
guardar(): void {
if (this.form.invalid) {
this.form.markAllAsTouched();
return;
}
console.log(this.form.getRawValue());
}
}