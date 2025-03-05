import { Component, OnInit } from '@angular/core';

import { UserService } from '../../../context/user.service';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  listOptions = [
    {
      id: 1,
      title: 'Trabajadores',
      description: '',
      path:"/workers"
    },
    {
      id: 1,
      title: 'Ubicaciones',
      description: '',
      path:'locations'
    },
  ];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.inti();
  }


  public goOption = (path: string) => {

    console.log("clieck", path)

    this.router.navigate([this.router.url + path])

  }


  inti() {
    console.log(this.userService.user);
  }

  probar() {
    console.log(this.userService.user);
  }
}
