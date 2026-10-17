import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HolaForm } from './hola-form';

describe('HolaForm', () => {
  let component: HolaForm;
  let fixture: ComponentFixture<HolaForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HolaForm],
    }).compileComponents();

    fixture = TestBed.createComponent(HolaForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
