import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp6',
  templateUrl: './comp6.component.html',
  styleUrls: ['./comp6.component.scss']
})
export class Comp6Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(`!!! Component6 Loaded !!!`);
  }

}
