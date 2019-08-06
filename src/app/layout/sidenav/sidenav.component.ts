import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  
  constructor(private titleService: Title){}
  // title;

  ngOnInit() {
    // this.title = this.titleService.getTitle();
  }

  getTitle(){
    return this.titleService.getTitle()
  }
}
