import { ContactComponent } from './../contact/contact.component';
import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [NgFor],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent {
    courses: any[] = [
      {
        name: "Data Structure",
        description: "Learn the fundamentals of data structures, including arrays, linked lists, stacks, and queues, with practical implementations.",
        img: 'assets/datastructure.png',
        AskMe: 'I want to know more about the Data Structure course ',
        price: '1800 EGP'
      },
      {
        name: "Algorithms",
        description: "Master algorithms and problem-solving techniques, from sorting and searching to dynamic programming and graph algorithms.",
        img: 'assets/algorithm.png',
        AskMe: 'I want to know more about the Algorithms course ',

        price: '2000 EGP'
      },
      {
        name: 'Java',
        description: "Dive into Java programming with object-oriented concepts, multithreading, and practical examples for real-world applications.",
        img: 'assets/Java.png',
        AskMe: 'I want to know more about the Java course ',

        price: '1500 EGP'
      }
    ];
    sendm(message:string){
      ContactComponent.message=message
      console.log(ContactComponent.message)
console.log(message)
    }
}
