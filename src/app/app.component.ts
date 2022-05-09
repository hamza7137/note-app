import { Component } from '@angular/core';
import { Note } from './not';
import { NoteServiceService } from './note-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'note-app';

  not:Array<Note>=[];
  error:boolean=true;
  errorMessage:string="";

  constructor(private notService:NoteServiceService) {
    this.notService.getAllNotes().subscribe(
      (data)=>{
        this.not=data;
        this.error=false;
        this.errorMessage="";
        console.log(this.not);
      }
    )
  }

  onNotesAdded(not:any)
  {
    this.notService.addNotes(not).subscribe(
      (data) => {
        this.not.push(data);
        this.error=false;
        this.errorMessage="";
      },
      (err)=>
      {
        alert("Error while adding the records")
        this.error=true;
        if(err.status==400) {
          this.errorMessage="Request failed";
        }
        else if(err.status==404) {
          
          this.errorMessage="Page not found";
        }
        else {
          this.errorMessage="Service unavailable";
        }
      }
    )
  }

  // delNote(target:any){
  //   console.log(target);
  //   console.log("Deleted");
  //   this.notService.delNote(target).subscribe(
  //     ()=>
  //     {
  //       this.not.splice(target,1);
  //       this.error=false;
  //       this.errorMessage="";
  //       console.log("data deleted");
  //     },(err)=>{
  //       console.log("Error while deleteing records")
  //       this.error=true;
  //       if(err.status==400)
  //       {
  //       this.errorMessage="Request failed";
  //       }
  //       else if(err.status==404){
  //         this.errorMessage="Page not found";
  //       }
  //       else{
  //         this.errorMessage="Service unavailable";
  //       }
  //     }
  //   )
  // }

  delNote(target:any)
  {
    console.log(target);
    console.log("Deleted");
    this.notService.delNote(target).subscribe(
      ()=>
      {
        this.not.forEach((value,index)=>{
        if(value.id==target) this.not.splice(index,1);
        window.location.reload();
      });
        this.error=false;
        this.errorMessage="";
        console.log("data deleted");
      },(err)=>{
        console.log("Error while adding records")
        this.error=true;
        if(err.status==400)
        {
        this.errorMessage="Request failed";
        }
        else if(err.status==404){
          this.errorMessage="Page not found";
        }
        else{
          this.errorMessage="Service unavailable";
        }
      }
    )
  }

}