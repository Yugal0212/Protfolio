import { Component,OnInit } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { ServicesComponent } from "../services/services.component";
import { FooterComponent } from "../footer/footer.component";
import { ContactComponent } from "../contact/contact.component";
import { ProjectsComponent } from "../projects/projects.component";


const heroImage = "/src/assets/images/heroimage.jpg";



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, ServicesComponent, ContactComponent, ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent  {

  heroImagePath = heroImage;
  
  
  
}
