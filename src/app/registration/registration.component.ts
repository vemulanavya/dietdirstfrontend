import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent{
constructor(private http:HttpClient){}
public mystudent:Student=new Student()







console.log(this.mystudent);
  let res=this.http.post(
    "http://localhost:1234/stu/add",
     this.mystudent,
     {responseType:'text' as 'json'}
  );
  res.subscribe(
    ()=>{

    }
  )   
  
}
