  function search()
  {
    var search =  document.getElementById("input").value
  
 fetch(`https://api.github.com/users/${search}`)
   .then((result) => result.json())
   .then(data=>{
    console.log(data)
    document.getElementById("result").innerHTML = `
    <a target="_blank" href="https:www.github.com/${search}">"<img src="${data.avatar_url}"/></a>
     `
     //  document.getElementById("image-container").innerHTML = `Name :${data.avatar_url}`
     document.getElementById("name").innerHTML = `Name :${data.name}`
     document.getElementById("followers").innerHTML = `Followers is: ${data.followers }`
     document.getElementById("following").innerHTML = `following is: ${data.following}`
     document.getElementById("location").innerHTML = `location is:${data.location }`
     
   }) 
   
  }
 
