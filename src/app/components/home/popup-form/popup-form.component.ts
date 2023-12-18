import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-popup-form',
  templateUrl: './popup-form.component.html',
  styleUrls: ['./popup-form.component.css']
})
export class PopupFormComponent {
  @ViewChild('popupForm') popupForm!: ElementRef;

  ngAfterViewInit() {
    // Access the popup-form element and set initial styles
    if (this.popupForm) {
      this.popupForm.nativeElement.style.visibility = 'hidden';
      this.popupForm.nativeElement.style.transform = 'translate(-50%, -50%) scale(0.1)';
    }
  }

  openForm() {
    // Access the popup-form element and add 'open-form' class
    if (this.popupForm) {
      this.popupForm.nativeElement.classList.add('open-form');
    }
  }

  closeForm() {
    // Access the popup-form element and remove 'open-form' class
    if (this.popupForm) {
      this.popupForm.nativeElement.classList.remove('open-form');
    }
  }
}
