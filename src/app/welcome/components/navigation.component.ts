import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from "@angular/router";

@Component({
  selector: 'wed-nav',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
