Single sign on using a child window & redirection. 

Lots of apps benefit greatly from user authentication.  Implementing a full user system can be onerous, so many sites rely on OAuth service providers like GitHub, Google or Facebook to enable user auth.  

One way to enable this is to open the 3rd party service in a new window.  Due to CORS, accessing any state about the child window on a different domain will trigger an exception, even though window.open() returns a reference to this window object.  The solution is to use the redirect provided by OAuth providers to pass the user back to redirect back to the same domain where the parent window can then read it's state and strip the response of the token.  One solution to this is using poll the child window until you don't get an exception, indicating the child has redirected to the same domain, or been closed. 


