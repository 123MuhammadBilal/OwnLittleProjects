var nimda ="8b4edc49991d425585adad58f7a43bfb&aqs"
if(localStorage.getItem('mod')==nimda){
    document.getElementById("admin").style.display = "block";
}else{
  document.getElementById("admin").style.display = "none";
}


function openNav() {
  document.getElementById("mySidenav").style.width = "200px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
function them() {
	var element = document.getElementById("them");
   element.classList.toggle("them");
}