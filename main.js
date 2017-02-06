(function(){
 const openLogin = () => {
    this.child = window.open('https://auth.yewno.com?redirect=http://localhost:5000');
    this.intervalId = setInterval(
      () => {
        try {
          this.childSearch = this.child.location.search;
          endLoop();
        } catch (err) {
          // cors execption
        }
      },
      50
    );
 };
 const endLoop = () => {
  clearInterval(this.intervalId);
  document.getElementById('user-name').textContent = getToken(this.childSearch);
  this.child.close();
 }
 const getToken = (query) => {
   const tokenMatch = query.match(/token=([^&]*)/);
   if (tokenMatch && tokenMatch[1]) {
    return tokenMatch[1];
   }
 }
  const signInButton = document
    .getElementById('sign-in');
  signInButton.onclick = openLogin;
 })()
