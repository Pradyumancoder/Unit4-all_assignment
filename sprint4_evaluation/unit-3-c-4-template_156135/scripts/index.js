/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/

let form=document.querySelector('form').addEventListener("submit",storeFunction)


 function storeFunction (e) {
    e.preventDefault()
     let img=document.getElementById('user_pic').value;
     let name= document.getElementById('user_name').value;
     let email= document.getElementById('user_email').value;
     let country= document.getElementById('user_country').value;
     

    let details= new UserDetails(img,name,email,country)
    localStorage.setItem("user",JSON.stringify(details))
 window.location.reload()
 }

 function UserDetails(img,n,e,c) {
    this.image=img;
    this.name=n;
    this.email=e;
    this.country=c;
  }