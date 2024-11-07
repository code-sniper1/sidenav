import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [],
  template: `
       <div class="sidenav-header">
        <img src="" alt="">
        <div class="header-text">
          <h2>Your channel</h2>
          <p>Amit kumar</p>
        </div>
       </div>
  `,
  styles: [`
    .sidenav-header{
      padding-top : 25px;
      text-align : center;

      > img {
        border-radius: 100%;
        object-fit: cover;
        margin-bottom: 10px;
      }

      .header-text{
        >h2{
          margin: 0;
          font-size: 1rem;
          line-height: 1.5rem;
        }
        >p {
          margin: 0;
          font-size: 0.8rem;
        }
      }
    }
  `]
})
export class CustomSidenavComponent {

}
