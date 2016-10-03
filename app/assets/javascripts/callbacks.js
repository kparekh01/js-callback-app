function changeColors() {
  setTimeout(function(){
  document.getElementById('first').style["background-color"] = "red";
    setTimeout(function(){
      document.getElementById('second').style["background-color"] = "black";
      setTimeout(function(){
        document.getElementById('third').style["background-color"] = "yellow";
        setTimeout(function(){
          document.getElementById('fourth').style["background-color"] = "pink";
        }, 1000);
      }, 1000);
    }, 1000);
}, 1000);
}
