import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-entrance-primary-carousel',
  templateUrl: './entrance-primary-carousel.component.html',
  styleUrls: ['./entrance-primary-carousel.component.scss']
})
export class EntrancePrimaryCarouselComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    config.interval = 500000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {
  }

}
