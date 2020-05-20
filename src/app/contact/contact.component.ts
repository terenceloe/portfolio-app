import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  contactProfile = {
    profile: [
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/terence.loe.9',
        iconUrl: './assets/icons/facebook.svg'
      },
      {
        name: 'Twitter',
        url: 'https://www.twitter.com',
        iconUrl: './assets/icons/twitter.svg'
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/terrence-loe-4823b6196/',
        iconUrl: './assets/icons/linkedin.svg'
      }
    ],
    work: [
      {
        name: 'GitHub',
        url: 'https://github.com/terenceloe',
        iconUrl: './assets/icons/icons8-github-64.svg'
      },
      {
        name: 'Stackoverflow',
        url: 'https://stackoverflow.com/users/13180358/terenceloe',
        iconUrl: './assets/icons/icons8-stack-overflow.svg'
      },
    ]
  };

  email = {
    name: 'Email',
    url: 'mailto:terenceloe@hotmail.co.id',
    iconUrl: './assets/icons/envelope.svg'
  };

  Instagram = {
    name: 'Instagram',
    url: '',
    iconUrl: './assets/icons/insta.svg'
  }
  
  ngOnInit(): void {
  }

}
