function validation()
		{

			var lastname = document.forms["myform"]["Last Name"];
			var fname = document.forms["myform"]["First Name"];
			var middlename = document.forms["myform"]["Middle Name"];
			var dob = document.forms["myform"]["DOB"];
			var email = document.forms["myform"]["Email id"];
			var cnt = document.forms["myform"]["EContact No"];
			var addr = document.forms["myform"]["Addr"];
			
			
			
    		if (lastname.value == "")                                  
   			{ 
        		window.alert("Please enter your Last name."); 
       		    lastname.focus(); 
        		return false; 
   		    } 
   		    
   		    if (fname.value == "")                                  
   			{ 
        		window.alert("Please enter your First name."); 
       		    fname.focus(); 
        		return false; 
   		    } 
   			
   		    if (middlename.value == "")                                  
   			{ 
        		window.alert("Please enter your Middle name."); 
       		    middlename.focus(); 
        		return false; 
   		    } 
  
   		    
   		    if (email.value == "")                                  
   			{ 
        		window.alert("Please enter your Email Address."); 
       		    email.focus(); 
        		return false; 
   		    } 
   		    
   		    if (email.value.indexOf("@", 0) < 0)                 
   			 { 
        		window.alert("Please enter a valid e-mail address."); 
        		email.focus(); 
        		return false; 
   			 } 
   
    		if (email.value.indexOf(".", 0) < 0)                 
    		{ 
       			 window.alert("Please enter a valid e-mail address."); 
        		 email.focus(); 
        		 return false; 
   			 } 
   			 
   		    if (cnt.value == "")                                  
   			{ 
        		window.alert("Please enter your Contact No."); 
       		    cnt.focus(); 
        		return false; 
   		    } 
   		    
   		    if (addr.value == "")                                  
   			{ 
        		window.alert("Please enter your Address."); 
       		    addr.focus(); 
        		return false; 
   		    } 
   			
   			window.alert("Data Send Successfully..."); 
   			 
    return true; 
	}			
		

