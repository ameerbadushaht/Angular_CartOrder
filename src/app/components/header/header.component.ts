import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @ViewChild('menuIcon') menuIcon!: ElementRef ;
  @ViewChild('navLink') navLink!: ElementRef ;

  ngAfterViewInit() {
    if (this.menuIcon && this.navLink) {
      this.menuIcon.nativeElement.addEventListener('click', () => {
        this.navLink.nativeElement.classList.toggle('mobile-menu');
      });
    }
  }
}
