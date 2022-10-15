let details=JSON.parse(localStorage.getItem('user'))


let sideBar= document.getElementById('sidebar')


let img= document.createElement('img')
img.src=`${details.image}`
img.style.width="200px"
let names= document.createElement("h1")
names.innerText=details.name;
let email= document.createElement("h4")
email.innerText=details.email;
let country= document.createElement("h3")
country.innerText=details.country;
sideBar.append(img,names,email,country)

if(details.country=="India") {
   var query="in"
}

else if(details.country=="Usa") {
    var query="us"
 }

 else if(details.country=="China") {
    var query="ch"
 }

 else if(details.country=="UK") {
    var query="uk"
   
 }

 else if(details.country=="New Zealand") {
    var query="nz"
   
 }

 console.log(query)

  let url =`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${query}`
   getData(url)
  async function getData (countryCode) {
    let res= await fetch(url)
     let  userData= res.json();
     console.log(userData.title)
  }