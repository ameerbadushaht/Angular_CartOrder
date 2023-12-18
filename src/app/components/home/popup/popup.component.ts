import { Component } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {

  openPopup() {
    const popup = document.getElementById('popup');
    if (popup) {
      popup.classList.add('open-popup');
    }
  }

  closePopup() {
    const popup = document.getElementById('popup');
    if (popup) {
      popup.classList.remove('open-popup');
    }
  }
}
