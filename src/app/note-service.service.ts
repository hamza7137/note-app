import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from './not';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {

  constructor(private httpclient:HttpClient) { }

  private api:string="http://localhost:3000/not";

  getAllNotes():Observable<Array<Note>> {
    return this.httpclient.get<Array<Note>>(this.api);
  }

  addNotes(not:Note):Observable<Note> {
    return this.httpclient.post<Note>(this.api,not)
  }

  delNote(target: any)
  {
    // try{
    //   alert("Note Deleted");
    //   return this.httpclient.delete(this.api+"/"+target);
    // }
    // finally{
    //   window.location.reload();
    // }
    alert("Note Deleted");
    return this.httpclient.delete(this.api+"/"+target);
  }
}