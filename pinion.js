
  function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("room");
    window.location.replace("index.html");
  }