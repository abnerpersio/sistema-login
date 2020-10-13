window.onload = observer();

function observer(){

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {

      window.location.replace('main.html');
      console.log(user.email);
      console.log(user.uid);

    } else {

      window.location.replace('logout.html');
        // document.write("OOps, você não está logado!");
      // User is signed out.
      // ...
    }
  });

}