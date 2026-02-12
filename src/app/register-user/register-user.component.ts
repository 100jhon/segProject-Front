import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 👈 Importa FormsModule
import { CommonModule } from '@angular/common'; // 👈 Para *ngIf y *ngFor
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';




@Component({
  selector: 'app-register-user',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl:'./register-user.component.html',
  styleUrl:'./register-user.component.css'
})

export class userRegister{

    constructor (private Router: Router) {}

}