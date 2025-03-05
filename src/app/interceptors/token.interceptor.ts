import { HttpInterceptorFn, HttpRequest, HttpHeaders } from '@angular/common/http';


export const tokenInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next) => {
 // Inject the current `AuthService` and use it to get an authentication token:
 let token:string = localStorage.getItem('token') || '';
 // Clone the request to add the authentication header.
 let headers = new HttpHeaders({'Accept':'application/json', 'Authorization':'Bearer '+token })
 const newReq = req.clone({headers});
 return next(newReq);
};
