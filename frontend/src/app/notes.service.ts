import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, config} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ConfigService } from './config.service';
import { Note } from '../note';
import uuid from 'uuid/v4';


@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http: HttpClient, private config: ConfigService ) { }
  // TODO: Make this configurable
  //server = "http://localhost:3000";
  server = this.config.server;

  getNotes(notebook?:string): Observable<Note[]> {
    if (notebook) {
      console.log(`http get ${this.server}/notebooks/${notebook}`);
      return this.http.get<Note[]>(`${this.server}/notebooks/${notebook}`)
      .pipe(
        tap(test => console.log(`fetched notes: ${Object.keys(test)}`))
        );
    }
    else {
      console.log(`http get ${this.server}/notes`)
      return this.http.get<Note[]>(`${this.server}/notes`)
      .pipe(
        tap(test => console.log(`fetched notes: ${Object.keys(test)}`))
        );
    }
        //var dummy = [{id: "asdf", author: "qqqq", title: "werasdfasdf", contents: "afsdfasdf"}];
  }

  getNote(noteid: string): Observable<Note> {
    return this.http.get<Note>(`${this.server}/notes/${noteid}`)
      .pipe(
        tap(test => console.log(`fetched one note: ${Object.keys(test)}`))
      );
  }

  updateNote(note: Note): Observable<ArrayBuffer> {
    console.log("updateNote() was triggered");
    console.log(note);
    if (note.new) {
      // Undefine new so we don't send it out with the other notes.
      note.new = undefined;
      return this.http.post<ArrayBuffer>(`${this.server}/notes/add`, note)
      .pipe(
        tap(test => console.log(`POST update for ${note.id}, response ${test}`))
      );
    }
    else {
      return this.http.post<ArrayBuffer>(`${this.server}/notes/${note.id}`, note)
        .pipe(
          tap(test => console.log(`POST update for ${note.id}, response ${test}`))
        );
    }
  }

  newNote(): Note {
    var note : Note;
    note = {
      plaintext: {
        author: "test name",
        contents: "",
        created: new Date().toISOString(),
        modified: new Date().toISOString(),
        version: 3,
        title: "",
        notebook: "",
      },
      new: true,
      ciphered: "", 
      id: uuid()
    };
    // TODO: Add name property to configuration
    return note;
  }
}