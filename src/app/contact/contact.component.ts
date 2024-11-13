import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { CommonModule } from '@angular/common';  // <-- Import this for the json pipe
import { query } from 'express';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule   ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  ContactComponent=ContactComponent

constructor(private fb:FormBuilder){}


form:FormGroup=this.fb.group({
  from_name: '',
  to_name:'Admin',
  from_email:'',
  business_name:'',
  message:''
})
static message :string=''
async submit(a:HTMLTextAreaElement){
  if(this.form.value.from_name!=''&& this.form.value.from_email!=''){
   emailjs.init('DnBarYpNa-17DuZG2')
  let response = await emailjs.send("service_wqh36po","template_hfzbdml",{
    from_name: this.form.value.from_name,
    message: ContactComponent.message,
    business_name: this.form.value.business_name,
    from_email: this.form.value.from_email,

    });
    this.setMessage(a)
    alert('Your message sent successfully')
    this.form.reset()

  }
  else{
    alert('plese fill the form completly')

  }
}
 setMessage(a:HTMLTextAreaElement){
  a.value=ContactComponent.message
  console.log(a.value)
}
}
