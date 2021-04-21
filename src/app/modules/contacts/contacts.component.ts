import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  long: number = 44.8271;
  lat: number = 41.7151;
  googleMapType: string = 'roadmap';
  zoomed: 10;

  contactForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.contactForm = new FormGroup({
      'username': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'message': new FormControl(null, Validators.required)
    })
  }

  submitContactForm() {
    console.log(this.contactForm.value);
    this.contactForm.reset();
  }

}
