        <script type="text/javascript">
        var loggedState = false;
        var user,pass;
        function validate(){
        
        user = document.getElementById("login__username").value;
        pass = document.getElementById("login__password").value;
        
            if(user.length < 5){
                alert("error");
            }else{
                loggedState = true;
                location.href = "index.html";
    };
            }
            
        }
        
        </script>
 
