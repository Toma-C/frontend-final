import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private authService:AuthService,private route:Router) {
      this.form = this.formBuilder.group({
          email:['',[Validators.required , Validators.email],],
          password:['',[Validators.required , Validators.minLength(8)]]
  });
  }
  get Email(){
    return this.form.get('email');
  }
  get Password (){
    return this.form.get('password');
  }
  onSend(event:Event){
    event.preventDefault;
    this.authService.Login(this.form.value).subscribe(data=>{
      console.log("Datos enviados: " + JSON.stringify(data));
      this.route.navigate(["portfolio"]);
    });
  }
  ngOnInit(): void {}
}
