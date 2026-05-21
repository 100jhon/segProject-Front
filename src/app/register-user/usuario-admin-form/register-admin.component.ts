import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario-admin-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register-admin.component.html',
  styleUrl: './register-admin.component.css'
})
export class UsuarioAdminFormComponent {

  @Input() form!: FormGroup;

}
