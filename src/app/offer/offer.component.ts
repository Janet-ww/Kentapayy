import { Component } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent {
  currentSlide: number = 2;
  activeDot: number = 2;

  onDotClick(slideIndex: number): void {
    this.currentSlide = slideIndex;
    this.activeDot = slideIndex;
  }
}
