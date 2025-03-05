import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { Router } from '@angular/router'; 
//service
import { AuthService } from '../../../services/auth/auth.service';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  formLogin = this.fb.group({
    email: ['administrador@innovasof.com', [Validators.required, Validators.email]],
    password: ['admini', [Validators.required, Validators.maxLength(6)]],
  });

  constructor(
    private router: Router,
    public fb: FormBuilder, private authService: AuthService) {}

  public handleSubmt(): void {

   this.authService.login(this.formLogin.value)
    .subscribe({ 
       next: () => {
         this.router.navigate(["home"], {replaceUrl:true})
       },
       error: (e) => { console.log(e)  }
     })

  }

}
