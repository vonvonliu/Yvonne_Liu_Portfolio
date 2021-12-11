const projs = ["Battleship", "iSAT", "GLEE", "Web Development"];
const descriptions = ["A classic game of battleship played in the console written in O-O Java!",
                "Creating a platform to assisst teachers in teaching students how to code.",
                "NASA plans to land on the moon again in 2024, and we are taking a part in it! ",
                "Several mini-projects written in HTML, JavaScript, and CSS."];
const images = ["assets/ship.svg", "assets/isat.svg", "assets/glee.svg", "assets/web.svg"];
const alts = ["ship", "clipart of website", "clipart of moon", "clipart of website"];
const links = ["https://github.com/kevinawongw/CSCI4448-5448-Battleship-Team-ApplePair",
                "https://github.com/SeniorCapstoniSAT/pxt-microbit",
                "https://github.com/GLEE2023/GLEE2023",
                "https://github.com/vonvonliu/web-repo"];
document.getElementById("battleship").addEventListener("click", function(){ClickedChoice("battleship")});
document.getElementById("capstone").addEventListener("click", function(){ClickedChoice("capstone")});
document.getElementById("glee").addEventListener("click", function(){ClickedChoice("glee")});
document.getElementById("web").addEventListener("click", function(){ClickedChoice("web")});

function ClickedChoice(choice){
  let i;
  switch(choice){
    case "battleship":
      i = 0;
      break;
    case "capstone":
      i = 1;
      break;
    case "glee":
      i = 2;
      break;
    case "web":
      i = 3;
      break;
  }
  document.getElementById("proj").innerHTML = projs[i];
  document.getElementById("img").src = images[i];
  document.getElementById("img").alt = alts[i];
  document.getElementById("imglink").href = links[i];
  document.getElementById("description").innerHTML = descriptions[i];
}
