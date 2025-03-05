import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
//service
import { AuthService } from './services/auth/auth.service';
import { UserService } from './context/user.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'registro-asistencia';

  constructor(public authService: AuthService, private router: Router, public userService: UserService){ }

  ngOnInit(): void {

    if(localStorage.getItem("token") === null){
      this.userService.loadPage = true;
      return;
    }

    this.authService.getDataCurrentUser().subscribe(
       {
        next : () => {
          if(this.router.url.includes("/auth")){
            this.router.navigate(['/home'], {replaceUrl:true} )
          }
        },
        error: () => {
          //por si ocurre un error en el servicio - api
          this.userService.loadPage = true;
          this.router.navigate(['/auth/login'], {replaceUrl:true} )
        }
      }
    );
  }
  
}
