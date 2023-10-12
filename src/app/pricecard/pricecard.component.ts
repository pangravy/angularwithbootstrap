import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-pricecard',
  templateUrl: './pricecard.component.html',
  styleUrls: ['./pricecard.component.css']
})
export class PricecardComponent {
  @Input() plan: string = "";
  @Input() price: string= "";
  @Input() user: string="";
  @Input() storage:string="";
  @Input() projects: Array<string> = [];
  @Input() phone: Array<string> = [];
  @Input() subdomain: Array<string> = [];
  @Input() unlimited: string="";
  @Input() monthly:Array<string> = [];
  @Input() button:string="";
}
