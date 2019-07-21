import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';


@Injectable()
export class UsersService {
    constructor(private http: HttpClient) {}

    getUser(username: string): Observable<any> {
        return this.http.get(`https://api.github.com/users/${username}`).pipe(map((response: Response) => <any> response))
    }
}