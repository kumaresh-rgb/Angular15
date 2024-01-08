import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Toast } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  toastr: any;
  some:any;
  users:any

  constructor(private http:HttpClient) { 

  }
  apiurl='http://localhost:3000/user';

  RegisterUser(inputdata:any ){
    return this.http.post(this.apiurl,inputdata)
  }
  GetUserbyCode(id:any){
    return this.http.get(this.apiurl+'/'+id);
  }
  Getall(){
    return this.http.get(this.apiurl);
  }
  updateuser(id:any,inputdata:any){ 
    return this.http.put(this.apiurl+'/'+id,inputdata);
  }
  getuserrole(){
    return this.http.get('http://localhost:3000/role');
  }
  isloggedin(){
    return sessionStorage.getItem('username')!=null;
  }
  getrole(){
    return sessionStorage.getItem('role')!=null?sessionStorage.getItem('role')?.toString():'';
  }
  GetAllCustomer(){
    return this.http.get('http://localhost:3000/customer');
  }
  // Getaccessbyrole(role:any,menu:any){
  //   return this.http.get('http://localhost:3000/roleaccess?role='+role+'&menu='+menu)
    
  // }
  Getaccessbyrole(role: any, menu: any) {
    return this.http.get('http://localhost:3000/roleaccess?role=' + role + '&menu=' + menu);
  }

//     UsernameIsExists() {
//   if (
//     this.Getall().subscribe((response: any) => {
//       const userExists = response.some((user: { username: string; }) => {user.username === this.RegisterUser.name});
      
//       if (userExists) {
//         this.toastr.warning("Username Already Exists");
//       } else {
//         // Proceed with your logic here if the username doesn't exist
//       }
//     })
//    ) else  {
//     this.toastr.warning("Unknown Error");
//   }
// }



}
