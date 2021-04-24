import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
declare let Email: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;
  status = "";
  bubbles: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: [''],
      email: [''],
      message: ['']
    });

    for (let i = 0; i < 6; i++) {
      this.bubbles.push('');
    }
  }

  onSubmit() {
    const data = this.contactForm.getRawValue();

    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "ikeka95@gmail.com",
      Password: "5CAD6DAC7D351A6AB0E409276488F2F45CA8",
      To: "ikeka95@gmail.com",
      From: "ikeka95@gmail.com",
      Subject: "",
      Body: `
      <i>This is sent as a feedback from my portfolio page.</i> <br/> <b>Name: </b>${data.name} <br /> <b>Email: </b>${data.email}<br /> <b>Subject: </b>Message from Portfolio<br /> <b>Message:</b> <br /> ${data.message} <br><br> <b>~End of Message.~</b> `
    }).then((reply: any) => {
      if (reply.toLocaleLowerCase() == 'ok') {
        this.status = "Message has been sent, I will get back to you soon."
      }
      else {
        this.status = "Message not sent, please try again."
      }
      this.contactForm.reset();
    });
  }
}
