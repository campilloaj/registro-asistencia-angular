import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const currentUserGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);

  if(localStorage.getItem("token") === null){
    router.navigate(['auth/login'], { replaceUrl: true });
    return false
  }

  return true;
};
