import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-listing-section',
  templateUrl: './listing-section.component.html',
  styleUrls: ['./listing-section.component.css']
})
export class ListingSectionComponent {
  @ViewChild('menuBtn') menuBtn!: ElementRef ;
  @ViewChild('listIcon') listIcon!: ElementRef ;

  ngAfterViewInit() {
    if (this.menuBtn && this.listIcon) {
      this.menuBtn.nativeElement.addEventListener('click', () => {
        this.listIcon.nativeElement.classList.toggle('active');
      });
    }
  }
}
