function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // You can replace the condition with your actual authentication logic
    
    if (username === "21b61a0576" && password === "21b61a0576") {
      window.open('index.html',target='_blank');
      return true;
    } else {
      alert("Invalid username or password.");
      return false;
    }
  }
  