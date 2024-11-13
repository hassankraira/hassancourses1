import { NgStyle, NgFor, NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [NgStyle,NgFor,NgIf],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.css'
})
export class FaqsComponent {
  ngOnInit() {
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();

  }
  faqs = [
    { 
      id: 0, 
      question: "Why choose Hassan Courses?", 
      show: false, 
      answer: "Hassan Courses offers comprehensive and well-structured lessons designed to help you excel in subjects like Data Structures, Algorithms, and Java. With a focus on hands-on learning, you’ll gain practical skills and knowledge directly applicable to your studies or career." 
    },
    { 
      id: 1, 
      question: "What courses do you offer?", 
      show: false, 
      answer: "We offer a wide range of courses covering essential computer science topics, including Data Structures, Algorithms, and Java programming. Each course is tailored for learners at different levels, from beginner to advanced." 
    },
    { 
      id: 2, 
      question: "How long are the courses?", 
      show: false, 
      answer: "The length of each course varies based on the topic and depth of material. On average, most courses take between 4 to 8 weeks to complete, depending on your learning pace." 
    },
    { 
      id: 3, 
      question: "Is there any support during the courses?", 
      show: false, 
      answer: "Absolutely! Hassan Courses offers dedicated support through email and forums where you can ask questions and get help from instructors or fellow students." 
    },
    { 
      id: 4, 
      question: "How can I enroll?", 
      show: false, 
      answer: "You can send me a message using the form below, and I will guide you through the enrollment process." 
    }
  ];
  
  
  
  shows(id: number) {
    this.faqs.at(id)!.show = !this.faqs.at(id)!.show;
    } 
    checkScroll() {
      const All = document.querySelectorAll('.hh3');

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
