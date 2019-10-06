import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add2',
  templateUrl: './add2.component.html',
  styleUrls: ['./add2.component.css']
})
export class Add2Component implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
    setTimeout(() => {
       this.route.navigate(['/home/3']); }, 1000);
  }

}
