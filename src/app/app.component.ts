import { HomeComponent } from './home/home.component';
import { Component } from '@angular/core';
import { RouterEvent, RouterLink, RouterOutlet } from '@angular/router';
import { WorkComponent } from "./work/work.component";
import { AboutComponent } from "./about/about.component";
import { FaqsComponent } from "./faqs/faqs.component";
import { ContactComponent } from "./contact/contact.component";
import { ButtomComponent } from "./buttom/buttom.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, WorkComponent, AboutComponent, FaqsComponent, ContactComponent, ButtomComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hassanwebsite2';
}
