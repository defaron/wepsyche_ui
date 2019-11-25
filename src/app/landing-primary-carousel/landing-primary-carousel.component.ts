import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-landing-primary-carousel',
  templateUrl: './landing-primary-carousel.component.html',
  styleUrls: ['./landing-primary-carousel.component.scss']
})
export class LandingPrimaryCarouselComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    config.interval = 500000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {
  }

}
