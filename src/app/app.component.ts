import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatSidenavModule } from '@angular/material/sidenav'
import { CustomSidenavComponent } from './components/custom-sidenav/custom-sidenav.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule,RouterModule,CustomSidenavComponent],
  template: `
   
   <mat-toolbar class="mat-elevation-z3">
  <button mat-icon-button>
    <mat-icon>menu</mat-icon>
  </button>
</mat-toolbar> 
<mat-sidenav-container>
  <mat-sidenav-content class="content">
    <router-outlet></router-outlet>
  </mat-sidenav-content>
</mat-sidenav-container>

  `,
  styles: [`

mat-toolbar{
  position: relative;
  z-index: 5;
}
    .content {
      padding: 24px;
    }
    mat-sidenav-container{
      height: calc(100vh - 64px);
    }
  `],
})
export class AppComponent {
  title = 'app';
}
