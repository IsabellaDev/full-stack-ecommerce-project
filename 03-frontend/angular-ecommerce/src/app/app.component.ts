import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ecommerce';

  gfgMenu() {
    const GFG = document.querySelector('.hamburger-inner');
    if (GFG.classList.contains('d-none')) {
        GFG.classList.remove('d-none');
        GFG.classList.add('d-block');
    }
    else {
        GFG.classList.add('d-none');
    }
  }

}
