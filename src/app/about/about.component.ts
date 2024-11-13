import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  ngOnInit() {
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();

  }
  checkScroll() {
    const All = document.querySelectorAll('.fimg');

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    
  

    All.forEach(item => {
      const itemTop = item.getBoundingClientRect().top + scrollTop;
      const itemHeight = item.clientHeight;

      if (scrollTop > itemTop - windowHeight * 0.8 && scrollTop < itemTop + itemHeight * 0.8) {
        item.classList.add('visible');
      } 
    });
} 
}
