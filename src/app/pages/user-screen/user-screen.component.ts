import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-screen',
  templateUrl: './user-screen.component.html',
  styleUrls: ['./user-screen.component.css']
})
export class UserScreenComponent implements OnInit {

  @Input() menuItem: string = 'data menu';

  signinForm: FormGroup = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  constructor(
    public fb: FormBuilder,
    private route: Router
  ) { }

  ngOnInit(): void {
    console.log('Menu: ', this.menuItem);
  }

  async loginUser(userName: any, userPsw: any) {
    console.log('loginUser: ', userName, userPsw);
    this.route.navigate(['menu-page']);
  }

  register(){
    console.log('register');
    this.route.navigate(['menu-page']);
  }

  irMenu(){
    this.route.navigate(['menu-page']);
  }
}
