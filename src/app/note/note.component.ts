import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() notesAdded: EventEmitter<any> = new EventEmitter<any>();
  title:string='';
  description:string='';
  addNotes()
  {
    this.notesAdded.emit({
      title:this.title,
      description:this.description
    })
    this.title="";
    this.description="";
  }
}
