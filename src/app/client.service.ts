import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(public http: HttpClient) { }

  ngOnInit():void {
    this.getDataFromFetch();
    this.getDataFromFetch();
  }

  private getDataFromHttpClient() {
    this.http.get('https://normanrahmel1.pythonanywhere.com/').subscribe(
      response => console.log(response),
      err => console.error('Error: ' + err),
      () => console.log('Completed')
    );
  }

  private getDataFromFetch() {
    from(
        fetch('https://normanrahmel1.pythonanywhere.com/')
          .then(res => res.json())
      )
      .subscribe(
        response => console.log(response),
        err => console.error('Error: ' + err),
        () => console.log('Completed')
      );
  }
}
