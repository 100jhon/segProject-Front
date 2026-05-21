import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-empresa-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register-empresa.component.html',
  styleUrl: './register-empresa.component.css'
})
export class EmpresaFormComponent {

  @Input() form!: FormGroup;

}
