import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {toSignal} from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class UserProvider {
  private http: HttpClient = inject(HttpClient);

  getUserById(id: number): any {
    return toSignal(this.http.get(`http://localhost:8081/api/users/${id}`))
  }

}
