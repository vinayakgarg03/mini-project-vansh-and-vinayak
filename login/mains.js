const q=document.querySelector('profession');
function auth()
{
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  if (email == "student@gmail.com" && password=="student123" )
  {
      window.location.href = "student.html";
      alert("Successfully logged in as student");
  }
 else if (email == "teacher@gmail.com" && password=="teacher123" )
  {
      window.location.href = "teacher.html";
      alert("Successfully logged in as teacher");
  }
 else if (email == "parent@gmail.com" && password=="parent123" )
  {
      window.location.href = "parent.html";
      alert("Successfully logged in as parent");
  }
  else{
    alert("wrong credentials");
  }
  
}