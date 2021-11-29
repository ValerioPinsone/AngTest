import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'my-app2';

  nome : String = "NomeProva";
  lista : number[] = [1,2,5,8,12];
}
