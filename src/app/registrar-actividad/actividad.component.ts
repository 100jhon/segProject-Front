import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';


@Component({
    selector:'app-actividad-component',
     imports: [FormsModule,CommonModule],
    templateUrl: './actividad.Component.html',
    styleUrl: './actividad.Component.css'
})


export class Actividades{

    Actividades: any[] =[];

}