import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UsuarioService, UsuarioInfo } from '../services/usuario-info/usuario.service';
import { AuthService } from '../services/auth';


@Component({
  selector: 'app-main-layout',
  imports: [CommonModule, RouterModule],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})


export class MainLayoutComponent implements OnInit {

  isSidebarHidden = true;

  usuario: UsuarioInfo | null = null;

  constructor(private usuarioService: UsuarioService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.usuarioService.getUsuarioInfo().subscribe({
      next: (data) => this.usuario = data,
      error: (err) => console.error('Error al cargar usuario', err)
    });
  }

  cerrarSesion() {
    this.authService.logout();
    this.router.navigate(['/login']);
    // Aquí cerramos cesion
  }

  @ViewChild('sidebarRef') sidebarRef!: ElementRef;

  toggleSidebar(event: MouseEvent): void {
    event.stopPropagation(); // Detiene el evento para que no se dispare handleClickOutside
    this.isSidebarHidden = !this.isSidebarHidden;
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent): void {
    if (
      this.sidebarRef &&
      !this.sidebarRef.nativeElement.contains(event.target) &&
      !(event.target as HTMLElement).closest('button')
    ) {
      this.isSidebarHidden = true;
    }
  }

}