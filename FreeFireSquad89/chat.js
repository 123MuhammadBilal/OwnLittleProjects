window.setInterval(function () {
       var date = new Date();
       date.getMinutes();
       if ((date.getMinutes() % 5) == 0) {
        firebase.database().ref("todos").remove();
       }
   }, 600000);
var cross = document.getElementById("cross");
var open = document.getElementById("open");
function starter(){
	cross.classList.toggle("addClass");
	open.classList.toggle("addClass");
}
const scrollToBottom = (id) => {
   const element = document.getElementById(id);
   element.scrollTop = element.scrollHeight;
}


var nimda ="8b4edc49991d425585adad58f7a43bfb&aqs"

const firebaseConfig = {
    apiKey: "AIzaSyBCRyz825nyL7AG6HirrrbvQYd4Uzu8ChM",
    authDomain: "application101-2d3e0.firebaseapp.com",
    databaseURL: "https://application101-2d3e0-default-rtdb.firebaseio.com",
    projectId: "application101-2d3e0",
    storageBucket: "application101-2d3e0.appspot.com",
    messagingSenderId: "519842036488",
    appId: "1:519842036488:web:9ac0ca1b47d94ebdc50abd",
    measurementId: "G-4M5LT3GKLC"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.database();
    firebase.database().ref("todos").on('child_added',function(data){
  document.getElementById("sound.mp3").play();
  var li = document.createElement("li");
  var span = document.createElement("h5");
  var t = document.createTextNode(data.val().chatPOPup);
  var s = document.createTextNode(data.val().username);
  li.appendChild(t);
  span.appendChild(s);
    document.getElementById("sho").appendChild(span);
    document.getElementById("sho").appendChild(li);

  document.getElementById("text").value = "";
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
});



function user_set() {
    sessionStorage.setItem("User",prompt("enter name","name"))
    const msg = document.getElementById("text").value="has joined chat";
    var sessionStore = sessionStorage.getItem("User");
    var database = firebase.database().ref("todos")
    var key = database.push().key;
    var todo = {
         username:sessionStore,
         chatPOPup:msg,
    }
    if (document.getElementById("text").value==="") {
        console.log("Please Enter Message");
    } else {
        database.child(key).set(todo)
        msg.value="";
    }
}
function leaving() {
    const msg = document.getElementById("text").value="has left chat";
    var sessionStore = sessionStorage.getItem("User");
    var database = firebase.database().ref("todos")
    var key = database.push().key;
    var todo = {
         username:sessionStore,
         chatPOPup:msg,
    }
    if (document.getElementById("text").value==="") {
        console.log("Please Enter Message");
    } else {
        database.child(key).set(todo)
        msg.value="";
    }
}
function send() {
    document.getElementById("chat.mp3").play();
    const msg = document.getElementById("text");
    var sessionStore = sessionStorage.getItem("User");
    var database = firebase.database().ref("todos")
    var key = database.push().key;
    var todo = {
         username:sessionStore,
         chatPOPup:msg.value,
    }
    if (document.getElementById("text").value==="") {
        alert("Please Enter Message");
    } else {
        database.child(key).set(todo)
        msg.value="";
    }
}
























/*=============================================SOLO ENTEY======================================*/



function soloadd() {
    const solologoname = document.getElementById("solologoname");
    const soloname = document.getElementById("soloname");
    const soloemail = document.getElementById("soloemail");
    const solophone = document.getElementById("solophone");
    const sologamename = document.getElementById("sologamename");
    const solouid = document.getElementById("solouid");
    var database = firebase.database().ref("soloentry")
    var key = database.push().key;
    var soloentry = {
         solologoname:solologoname.value,
         soloname:soloname.value,
         soloemail:soloemail.value,
         solophone:solophone.value,
         sologamename:sologamename.value,
         solouid:solouid.value,
    }
    if (document.getElementById("solologoname").value==="") {
        alert("enter logo name please");
    } else {
        database.child(key).set(soloentry)
        alert("Entry succeed")
    }
}




    firebase.database().ref("soloentry").on('child_added',function(data){
  var solologoname = document.createElement("li");
  var soloname = document.createElement("h4");
  var soloemail = document.createElement("p");
  var solophone = document.createElement("p");
  var sologamename = document.createElement("p");
  var solouid = document.createElement("p");

  var s1 = document.createTextNode(data.val().solologoname);
  var s2 = document.createTextNode("NAME _________________ " + data.val().soloname);
  var s3 = document.createTextNode("MAIL _________________ " + data.val().soloemail);
  var s4 = document.createTextNode("CELL _________________ " + data.val().solophone);
  var s5 = document.createTextNode("G.NM _________________ " + data.val().sologamename);
  var s6 = document.createTextNode("G.UD _________________ " + data.val().solouid);
  solologoname.appendChild(s1);
  soloname.appendChild(s2);
  soloemail.appendChild(s3);
  solophone.appendChild(s4);
  sologamename.appendChild(s5);
  solouid.appendChild(s6);
    document.getElementById("solosho").appendChild(solologoname);
    document.getElementById("solosho").appendChild(soloname);
    document.getElementById("solosho").appendChild(soloemail);
    document.getElementById("solosho").appendChild(solophone);
    document.getElementById("solosho").appendChild(sologamename);
    document.getElementById("solosho").appendChild(solouid);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
});





















/*=============================================DUO ENTEY======================================*/



function duoadd() {
    const duologoname = document.getElementById("duologoname");
    const duoname1 = document.getElementById("duoname1");
    const duoemail1 = document.getElementById("duoemail1");
    const duophone1 = document.getElementById("duophone1");
    const duogamename1 = document.getElementById("duogamename1");
    const duouid1 = document.getElementById("duouid1");

    const duoname2 = document.getElementById("duoname2");
    const duoemail2 = document.getElementById("duoemail2");
    const duophone2 = document.getElementById("duophone2");
    const duogamename2 = document.getElementById("duogamename2");
    const duouid2 = document.getElementById("duouid2");

    var database = firebase.database().ref("addtwo")
    var key = database.push().key;
    var addtwo = {
         duologoname:duologoname.value,
         duoname1:duoname1.value,
         duoemail1:duoemail1.value,
         duophone1:duophone1.value,
         duogamename1:duogamename1.value,
         duouid1:duouid1.value,

         duoname2:duoname2.value,
         duoemail2:duoemail2.value,
         duophone2:duophone2.value,
         duogamename2:duogamename2.value,
         duouid2:duouid2.value,
    }
    if (document.getElementById("duologoname").value==="") {
        alert("enter logo name please");
    } else {
        database.child(key).set(addtwo);
        alert("Entry succeed")
    }
}




    firebase.database().ref("addtwo").on('child_added',function(data){
  var duologoname = document.createElement("li");
  var duoname1 = document.createElement("h4");
  var duoemail1 = document.createElement("p");
  var duophone1 = document.createElement("p");
  var duogamename1 = document.createElement("p");
  var duouid1 = document.createElement("p");

  var duoname2 = document.createElement("h4");
  var duoemail2 = document.createElement("p");
  var duophone2 = document.createElement("p");
  var duogamename2 = document.createElement("p");
  var duouid2 = document.createElement("p");

  var s1 = document.createTextNode(data.val().duologoname);
  var s2 = document.createTextNode("NAME _________________ " + data.val().duoname1);
  var s3 = document.createTextNode("MAIL _________________ " + data.val().duoemail1);
  var s4 = document.createTextNode("CELL _________________ " + data.val().duophone1);
  var s5 = document.createTextNode("G.NM _________________ " + data.val().duogamename1);
  var s6 = document.createTextNode("G.UD _________________ " + data.val().duouid1);

  var s7 = document.createTextNode("NAME _________________ " + data.val().duoname2);
  var s8 = document.createTextNode("MAIL _________________ " + data.val().duoemail2);
  var s9 = document.createTextNode("CELL _________________ " + data.val().duophone2);
  var s10 = document.createTextNode("G.NM _________________ " + data.val().duogamename2);
  var s11 = document.createTextNode("G.UD _________________ " + data.val().duouid2);

duologoname.appendChild(s1);
duoname1.appendChild(s2);
duoemail1.appendChild(s3);
duophone1.appendChild(s4);
duogamename1.appendChild(s5);
duouid1.appendChild(s6);

duoname2.appendChild(s7);
duoemail2.appendChild(s8);
duophone2.appendChild(s9);
duogamename2.appendChild(s10);
duouid2.appendChild(s11);

    document.getElementById("duosho").appendChild(duologoname);
    document.getElementById("duosho").appendChild(duoname1);
    document.getElementById("duosho").appendChild(duoemail1);
    document.getElementById("duosho").appendChild(duophone1);
    document.getElementById("duosho").appendChild(duogamename1);
    document.getElementById("duosho").appendChild(duouid1);

    document.getElementById("duosho").appendChild(duoname2);
    document.getElementById("duosho").appendChild(duoemail2);
    document.getElementById("duosho").appendChild(duophone2);
    document.getElementById("duosho").appendChild(duogamename2);
    document.getElementById("duosho").appendChild(duouid2);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
});



















/*=============================================SQUAD ENTEY======================================*/



function sqadd() {
    const squadlogo = document.getElementById("squadlogo");

    const squad1 = document.getElementById("squad1");
    const squad11 = document.getElementById("squad11");
    const squad111 = document.getElementById("squad111");
    const squad1111 = document.getElementById("squad1111");
    const squad11111 = document.getElementById("squad11111");

    const squad2 = document.getElementById("squad2");
    const squad22 = document.getElementById("squad22");
    const squad222 = document.getElementById("squad222");
    const squad2222 = document.getElementById("squad2222");
    const squad22222 = document.getElementById("squad22222");

    const squad3 = document.getElementById("squad3");
    const squad33 = document.getElementById("squad33");
    const squad333 = document.getElementById("squad333");
    const squad3333 = document.getElementById("squad3333");
    const squad33333 = document.getElementById("squad33333");

    const squad4 = document.getElementById("squad4");
    const squad44 = document.getElementById("squad44");
    const squad444 = document.getElementById("squad444");
    const squad4444 = document.getElementById("squad4444");
    const squad44444 = document.getElementById("squad44444");

    var database = firebase.database().ref("squadentry")
    var key = database.push().key;
    var squadentry = {
         squadlogo:squadlogo.value,

         squad1:squad1.value,
         squad11:squad11.value,
         squad111:squad111.value,
         squad1111:squad1111.value,
         squad11111:squad11111.value,

         squad2:squad2.value,
         squad22:squad22.value,
         squad222:squad222.value,
         squad2222:squad2222.value,
         squad22222:squad22222.value,

         squad3:squad3.value,
         squad33:squad33.value,
         squad333:squad333.value,
         squad3333:squad3333.value,
         squad33333:squad33333.value,

         squad4:squad4.value,
         squad44:squad44.value,
         squad444:squad444.value,
         squad4444:squad4444.value,
         squad44444:squad44444.value,
    }
    if (document.getElementById("squadlogo").value==="") {
        alert("enter logo name please");
    } else {
        database.child(key).set(squadentry);
        alert("Entry succeed")
    }
}




    firebase.database().ref("squadentry").on('child_added',function(data){
  var squadlogo = document.createElement("li");

  var squad1 = document.createElement("h4");
  var squad11 = document.createElement("p");
  var squad111 = document.createElement("p");
  var squad1111 = document.createElement("p");
  var squad11111 = document.createElement("p");

  var squad2 = document.createElement("h4");
  var squad22 = document.createElement("p");
  var squad222 = document.createElement("p");
  var squad2222 = document.createElement("p");
  var squad22222 = document.createElement("p");

  var squad3  = document.createElement("h4");
  var squad33 = document.createElement("p");
  var squad333 = document.createElement("p");
  var squad3333 = document.createElement("p");
  var squad33333 = document.createElement("p");

  var squad4 = document.createElement("h4");
  var squad44 = document.createElement("p");
  var squad444 = document.createElement("p");
  var squad4444 = document.createElement("p");
  var squad44444 = document.createElement("p");

  var dlogo = document.createTextNode(data.val().squadlogo);

  var d1 = document.createTextNode("NAME _________________ " + data.val().squad1);
  var d11 = document.createTextNode("MAIL _________________ " + data.val().squad11);
  var d111 = document.createTextNode("CELL _________________ " + data.val().squad111);
  var d1111 = document.createTextNode("G.NM _________________ " + data.val().squad1111);
  var d11111 = document.createTextNode("G.UD _________________ " + data.val().squad11111);

  var d2 = document.createTextNode("NAME _________________ " + data.val().squad2);
  var d22 = document.createTextNode("MAIL _________________ " + data.val().squad22);
  var d222 = document.createTextNode("CELL _________________ " + data.val().squad222);
  var d2222 = document.createTextNode("G.NM _________________ " + data.val().squad2222);
  var d22222 = document.createTextNode("G.UD _________________ " + data.val().squad22222);

  var d3 = document.createTextNode("NAME _________________ " + data.val().squad3);
  var d33 = document.createTextNode("MAIL _________________ " + data.val().squad33);
  var d333 = document.createTextNode("CELL _________________ " + data.val().squad333);
  var d3333 = document.createTextNode("G.NM _________________ " + data.val().squad3333);
  var d33333 = document.createTextNode("G.UD _________________ " + data.val().squad33333);

  var d4 = document.createTextNode("NAME _________________ " + data.val().squad4);
  var d44 = document.createTextNode("MAIL _________________ " + data.val().squad44);
  var d444 = document.createTextNode("CELL _________________ " + data.val().squad444);
  var d4444 = document.createTextNode("G.NM _________________ " + data.val().squad4444);
  var d44444 = document.createTextNode("G.UD _________________ " + data.val().squad44444);

squadlogo.appendChild(dlogo);

squad1.appendChild(d1);
squad11.appendChild(d11);
squad111.appendChild(d111);
squad1111.appendChild(d1111);
squad11111.appendChild(d11111);

squad2.appendChild(d2);
squad22.appendChild(d22);
squad222.appendChild(d222);
squad2222.appendChild(d2222);
squad22222.appendChild(d22222);

squad3.appendChild(d3);
squad33.appendChild(d33);
squad333.appendChild(d333);
squad3333.appendChild(d3333);
squad33333.appendChild(d33333);

squad4.appendChild(d4);
squad44.appendChild(d44);
squad444.appendChild(d444);
squad4444.appendChild(d4444);
squad44444.appendChild(d44444);

    document.getElementById("sqsho").appendChild(squadlogo);

    document.getElementById("sqsho").appendChild(squad1);
    document.getElementById("sqsho").appendChild(squad11);
    document.getElementById("sqsho").appendChild(squad111);
    document.getElementById("sqsho").appendChild(squad1111);
    document.getElementById("sqsho").appendChild(squad11111);

    document.getElementById("sqsho").appendChild(squad2);
    document.getElementById("sqsho").appendChild(squad22);
    document.getElementById("sqsho").appendChild(squad222);
    document.getElementById("sqsho").appendChild(squad2222);
    document.getElementById("sqsho").appendChild(squad22222);

    document.getElementById("sqsho").appendChild(squad3);
    document.getElementById("sqsho").appendChild(squad33);
    document.getElementById("sqsho").appendChild(squad333);
    document.getElementById("sqsho").appendChild(squad3333);
    document.getElementById("sqsho").appendChild(squad33333);

    document.getElementById("sqsho").appendChild(squad4);
    document.getElementById("sqsho").appendChild(squad44);
    document.getElementById("sqsho").appendChild(squad444);
    document.getElementById("sqsho").appendChild(squad4444);
    document.getElementById("sqsho").appendChild(squad44444);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
});










/*=============================================CS ENTEY======================================*/



function csadd() {
    const squadlogo = document.getElementById("squadlogo");

    const squad1 = document.getElementById("squad1");
    const squad11 = document.getElementById("squad11");
    const squad111 = document.getElementById("squad111");
    const squad1111 = document.getElementById("squad1111");
    const squad11111 = document.getElementById("squad11111");

    const squad2 = document.getElementById("squad2");
    const squad22 = document.getElementById("squad22");
    const squad222 = document.getElementById("squad222");
    const squad2222 = document.getElementById("squad2222");
    const squad22222 = document.getElementById("squad22222");

    const squad3 = document.getElementById("squad3");
    const squad33 = document.getElementById("squad33");
    const squad333 = document.getElementById("squad333");
    const squad3333 = document.getElementById("squad3333");
    const squad33333 = document.getElementById("squad33333");

    const squad4 = document.getElementById("squad4");
    const squad44 = document.getElementById("squad44");
    const squad444 = document.getElementById("squad444");
    const squad4444 = document.getElementById("squad4444");
    const squad44444 = document.getElementById("squad44444");

    var database = firebase.database().ref("csentry")
    var key = database.push().key;
    var csentry = {
         squadlogo:squadlogo.value,

         squad1:squad1.value,
         squad11:squad11.value,
         squad111:squad111.value,
         squad1111:squad1111.value,
         squad11111:squad11111.value,

         squad2:squad2.value,
         squad22:squad22.value,
         squad222:squad222.value,
         squad2222:squad2222.value,
         squad22222:squad22222.value,

         squad3:squad3.value,
         squad33:squad33.value,
         squad333:squad333.value,
         squad3333:squad3333.value,
         squad33333:squad33333.value,

         squad4:squad4.value,
         squad44:squad44.value,
         squad444:squad444.value,
         squad4444:squad4444.value,
         squad44444:squad44444.value,
    }
    if (document.getElementById("squadlogo").value==="") {
        alert("enter logo name please");
    } else {
        database.child(key).set(csentry);
        alert("Entry succeed")
    }
}




    firebase.database().ref("csentry").on('child_added',function(data){
  var squadlogo = document.createElement("li");

  var squad1 = document.createElement("h4");
  var squad11 = document.createElement("p");
  var squad111 = document.createElement("p");
  var squad1111 = document.createElement("p");
  var squad11111 = document.createElement("p");

  var squad2 = document.createElement("h4");
  var squad22 = document.createElement("p");
  var squad222 = document.createElement("p");
  var squad2222 = document.createElement("p");
  var squad22222 = document.createElement("p");

  var squad3  = document.createElement("h4");
  var squad33 = document.createElement("p");
  var squad333 = document.createElement("p");
  var squad3333 = document.createElement("p");
  var squad33333 = document.createElement("p");

  var squad4 = document.createElement("h4");
  var squad44 = document.createElement("p");
  var squad444 = document.createElement("p");
  var squad4444 = document.createElement("p");
  var squad44444 = document.createElement("p");

  var dlogo = document.createTextNode(data.val().squadlogo);

  var d1 = document.createTextNode("NAME _________________ " + data.val().squad1);
  var d11 = document.createTextNode("MAIL _________________ " + data.val().squad11);
  var d111 = document.createTextNode("CELL _________________ " + data.val().squad111);
  var d1111 = document.createTextNode("G.NM _________________ " + data.val().squad1111);
  var d11111 = document.createTextNode("G.UD _________________ " + data.val().squad11111);

  var d2 = document.createTextNode("NAME _________________ " + data.val().squad2);
  var d22 = document.createTextNode("MAIL _________________ " + data.val().squad22);
  var d222 = document.createTextNode("CELL _________________ " + data.val().squad222);
  var d2222 = document.createTextNode("G.NM _________________ " + data.val().squad2222);
  var d22222 = document.createTextNode("G.UD _________________ " + data.val().squad22222);

  var d3 = document.createTextNode("NAME _________________ " + data.val().squad3);
  var d33 = document.createTextNode("MAIL _________________ " + data.val().squad33);
  var d333 = document.createTextNode("CELL _________________ " + data.val().squad333);
  var d3333 = document.createTextNode("G.NM _________________ " + data.val().squad3333);
  var d33333 = document.createTextNode("G.UD _________________ " + data.val().squad33333);

  var d4 = document.createTextNode("NAME _________________ " + data.val().squad4);
  var d44 = document.createTextNode("MAIL _________________ " + data.val().squad44);
  var d444 = document.createTextNode("CELL _________________ " + data.val().squad444);
  var d4444 = document.createTextNode("G.NM _________________ " + data.val().squad4444);
  var d44444 = document.createTextNode("G.UD _________________ " + data.val().squad44444);

squadlogo.appendChild(dlogo);

squad1.appendChild(d1);
squad11.appendChild(d11);
squad111.appendChild(d111);
squad1111.appendChild(d1111);
squad11111.appendChild(d11111);

squad2.appendChild(d2);
squad22.appendChild(d22);
squad222.appendChild(d222);
squad2222.appendChild(d2222);
squad22222.appendChild(d22222);

squad3.appendChild(d3);
squad33.appendChild(d33);
squad333.appendChild(d333);
squad3333.appendChild(d3333);
squad33333.appendChild(d33333);

squad4.appendChild(d4);
squad44.appendChild(d44);
squad444.appendChild(d444);
squad4444.appendChild(d4444);
squad44444.appendChild(d44444);

    document.getElementById("cssho").appendChild(squadlogo);

    document.getElementById("cssho").appendChild(squad1);
    document.getElementById("cssho").appendChild(squad11);
    document.getElementById("cssho").appendChild(squad111);
    document.getElementById("cssho").appendChild(squad1111);
    document.getElementById("cssho").appendChild(squad11111);

    document.getElementById("cssho").appendChild(squad2);
    document.getElementById("cssho").appendChild(squad22);
    document.getElementById("cssho").appendChild(squad222);
    document.getElementById("cssho").appendChild(squad2222);
    document.getElementById("cssho").appendChild(squad22222);

    document.getElementById("cssho").appendChild(squad3);
    document.getElementById("cssho").appendChild(squad33);
    document.getElementById("cssho").appendChild(squad333);
    document.getElementById("cssho").appendChild(squad3333);
    document.getElementById("cssho").appendChild(squad33333);

    document.getElementById("cssho").appendChild(squad4);
    document.getElementById("cssho").appendChild(squad44);
    document.getElementById("cssho").appendChild(squad444);
    document.getElementById("cssho").appendChild(squad4444);
    document.getElementById("cssho").appendChild(squad44444);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
});









/*===ADMIN==*/
/*===================================DELETE COMMANDS=========================*/
function solodel(){
    firebase.database().ref("soloentry").remove();
    alert("Solo Entries Has Been Deleted")
}

function duodel(){
    firebase.database().ref("addtwo").remove();
    alert("Duo Entries Has Been Deleted")
}

function squaddel(){
    firebase.database().ref("sqadd").remove();
    alert("Squad Entries Has Been Deleted")
}

function csdel(){
    firebase.database().ref("csentry").remove();
    alert("CS Entries Has Been Deleted")
}

/*=============================================LIVE YOUTUBE VIDEO LINK=============================*/

function seturl() {
    const url = document.getElementById("urlz");
    var database = firebase.database().ref("urlz")
    var key = database.push().key;
    var csentry = {
         url:url.value,
    }
    if (document.getElementById("urlz").value==="") {
        alert("enter logo name please");
    } else {
        database.child(key).set(csentry);
        alert("URL SET SUCCEED")
    }
}


firebase.database().ref("urlz").on('child_added',function(data){
  var url = document.createElement("h6");
  var ul = document.createTextNode(data.val().url);
  url.appendChild(ul);
  document.getElementById("urlz").appendChild(url);
    const element = document.getElementById("urlz");
  element.getElementsByTagName("h6")[0];
  localStorage.setItem("links",element.getElementsByTagName("h6")[0].innerHTML);
  document.getElementById("myFrame").src = element.getElementsByTagName("h6")[0].innerHTML;
});


function linkremover(){
    firebase.database().ref("urlz").remove();
    localStorage.removeItem("links");
    alert("Live Deleted")    
}









/*=============================================REGESTEED A NEW USER=============================*/
function regestered() {
    const registered = document.getElementById("registered");
    var database = firebase.database().ref("registeredx")
    var key = database.push().key;
    var registeredx = {
     registered:registered.value,
    }
    if (document.getElementById("registered").value==="") {
        alert("enter client details please");
    } else {
        database.child(key).set(registeredx);
        alert("registered succeed")
    }
}

  firebase.database().ref("registeredx").on('child_added',function(data){
  var registby = document.createElement("li");
  var regist = document.createElement("h4");
  var regsby = document.createTextNode("SLOT IS REGISTERED BY TEAM");
  var regs = document.createTextNode(data.val().registered);
  registby.appendChild(regsby);
  regist.appendChild(regs);
  document.getElementById("slots").appendChild(registby);
  document.getElementById("slots").appendChild(regist);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
});


function unregestered(){
    firebase.database().ref("registeredx").remove();
    alert("clients Deleted");    
}


/*=============================================ROOM ID PASS=============================*/
function setroomId() {
    const idpass = document.getElementById("myroomid");
    const pass = document.getElementById("myroompass");
    var database = firebase.database().ref("entryinroom")
    var key = database.push().key;
    var entryinroom = {
     idpass:idpass.value,
     pass:pass.value,
    }
    if (document.getElementById("myroomid").value==="") {
        alert("enter id & pass please");
    } else {
        database.child(key).set(entryinroom);
        alert("id & pass has been set")
    }
}

  firebase.database().ref("entryinroom").on('child_added',function(data){
  var roomid = document.createElement("h4");
  var roompass = document.createElement("h4");
  var roomi = document.createTextNode("ROOM IDS_____" + data.val().idpass);
  var roomp = document.createTextNode("ROOM PAS_____" + data.val().pass);
  roomid.appendChild(roomi);
  roompass.appendChild(roomp);
  document.getElementById("myroomdetails").appendChild(roomid);
  document.getElementById("myroomdetails").appendChild(roompass);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
});


function delroomId(){
    firebase.database().ref("entryinroom").remove();
    alert("id & pass deleted");    
}



/*=============================================ADD BLOG=============================*/
function postblog() {
    const bloghead = document.getElementById("bloghead");
    const blogbody = document.getElementById("blogbody");
    var database = firebase.database().ref("bloging")
    var key = database.push().key;
    var bloging = {
     bloghead:bloghead.value,
     blogbody:blogbody.value,
    }
    if (document.getElementById("blogbody").value==="") {
        alert("fill blog feild");
    } else {
        database.child(key).set(bloging);
        alert("blog has been update")
    }
}

  firebase.database().ref("bloging").on('child_added',function(data){
  var bh = document.createElement("h4");
  var bb = document.createElement("p");
  var h = document.createTextNode(data.val().bloghead);
  var b = document.createTextNode(data.val().blogbody);
  bh.appendChild(h);
  bb.appendChild(b);
  document.getElementById("blogupdatex").appendChild(bh);
  document.getElementById("blogupdatex").appendChild(bb);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
});


function delblog(){
    firebase.database().ref("bloging").remove();
    alert("all blogs are deleted");    
}

