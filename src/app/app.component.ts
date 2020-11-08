import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'try-angular-elements';

  showMessage(): void {
    const hello = document.getElementById('hello');
    hello.innerHTML = '<app-hello-world></app-hello-world>';
  }
}
