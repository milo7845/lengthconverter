document.getElementById("output").style.visibility = "hidden";
document.getElementById("mInput").addEventListener("input", function(e) {
  document.getElementById("output").style.visibility = "visible";
  let m = e.target.value;
  document.getElementById("meOutput").innerHTML = m * 1;
  document.getElementById("kiOutput").innerHTML = m / 1000;
  document.getElementById("deOutput").innerHTML = m * 10;
  document.getElementById("ceOutput").innerHTML = m * 100;
  document.getElementById("miOutput").innerHTML = m *	1000;
  document.getElementById("micOutput").innerHTML = m *1000000;
  document.getElementById("naOutput").innerHTML = m *1000000000;
  document.getElementById("mileOutput").innerHTML = m *0.0006213712;
  document.getElementById("yardOutput").innerHTML = m * 1.0936132983;
  
});
