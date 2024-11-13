import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-buttom',
  standalone: true,
  imports: [],
  templateUrl: './buttom.component.html',
  styleUrl: './buttom.component.css'
})
export class ButtomComponent {
  ngOnInit() {
    this.checkScroll();
  }

  @HostListener ('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();

  }
  checkScroll() {
    const first = document.querySelectorAll('.first');
    const second = document.querySelectorAll('.second');
    const third = document.querySelectorAll('.third');

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    
  

    first.forEach(item => {
      const itemTop = item.getBoundingClientRect().top + scrollTop;
      const itemHeight = item.clientHeight;

      if (scrollTop > itemTop - windowHeight * 0.8 && scrollTop < itemTop + itemHeight * 0.8) {
        item.classList.add('visible');
      } 
    });


    second.forEach(item => {
      const itemTop = item.getBoundingClientRect().top + scrollTop;
      const itemHeight = item.clientHeight;

      if (scrollTop > itemTop - windowHeight * 0.8 && scrollTop < itemTop + itemHeight * 0.8) {
        item.classList.add('visible2');
      } 
    });


    third.forEach(item => {
      const itemTop = item.getBoundingClientRect().top + scrollTop;
      const itemHeight = item.clientHeight;

      if (scrollTop > itemTop - windowHeight * 0.8 && scrollTop < itemTop + itemHeight * 0.8) {
        item.classList.add('visible3');
      } 
    });
} 
scrollup(){
  window.scrollTo(0,0)
}
}
