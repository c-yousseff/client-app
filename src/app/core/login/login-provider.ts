import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {toSignal} from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class LoginProvider {
  private http: HttpClient = inject(HttpClient);

  authenticate(): any {
    return this.http.post(`http://localhost:8081/api/authenticate`,
      {params: {username: 'admin', password: 'admin', rememberMe: true}});
  }

}
