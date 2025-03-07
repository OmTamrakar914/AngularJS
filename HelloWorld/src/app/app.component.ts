import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl = "assets/logo1.jpg";
  url = "https://www.bridgelabz.com";

  ngOnInit(): void {
    this.title = "Hello from BridgeLabz.";
  }

  onClick($event: Event) {
    console.log("Save button is clicked!", $event);
    window.open(this.url, "_blank");
  }

}
