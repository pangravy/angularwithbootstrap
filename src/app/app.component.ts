import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularwithbootstrap';
  plan =[
    {
      plan : "Basic",
      price : "0$",
      user : "Single User",
      storage : "5",
      projects : ["text-muted","fas fa-times"],
      phone:["text-muted","fas fa-times"],
      subdomain:["text-muted","fas fa-times"],
      unlimited:"",
      monthly:["text-muted","fas fa-times"],
      button: "Buy Basic",
    },
    {
      plan : "Plus",
      price : "20$",
      user : "5 users",
      storage : "50",
      projects : ["","fas fa-check"],
      phone:["","fas fa-check"],
      subdomain:["","fas fa-check"],
      unlimited:"",
      monthly:["text-muted","fas fa-times"],
      button : "Buy Plus",
    },
    {
      plan : "Pro",
      price : "40$",
      user : "Unlimited users",
      storage : "150",
      projects : ["","fas fa-check"],
      phone:["","fas fa-check"],
      subdomain:["","fas fa-check"],
      unlimited:"unlimited ",
      monthly:["","fas fa-check"],
      button : "Buy Pro",
    }
  ]
}
