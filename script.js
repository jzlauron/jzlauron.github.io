//code for typed animation

const typed = new Typed(".animate", {
    strings: ["Computer Engineer","developer."],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
  });
  
  const backToTopButton = document.getElementById("back-to-top");
  const projectGit = document.getElementsByClassName("project-github");
  const projectLink = document.getElementsByClassName("project-link");
  var arrayGit = 
    [
      'https://github.com/jzlauron/Molecular-Mass-Calculator',
      'https://github.com/jzlauron/Minesweeper',
      'https://github.com/jzlauron/Multi-color-',
      'https://github.com/jzlauron/ASP-sample-programs',
      'https://github.com/jzlauron/Commando',
      'https://github.com/jzlauron/trackersystemz',
      'https://github.com/jzlauron/TrackerzUsers'
      
    ];
  var arrayLink =
    [
      '',
      'https://jzlauron.github.io/Minesweeper/',
      '',
      '',
      
    ];
  console.log(projectGit.length);
  console.log(projectLink.length);
  function eventGit(array){
    for(let i = 0; i < projectGit.length; i++)
    {
      projectGit[i].addEventListener('click',
      function(){
        window.open(array[i]);
        
      });
      //projectLink[i].addEventListener('click',openLink);
    }
  }
  function eventLink(array){
    for(let i = 0; i < projectLink.length; i++)
    {
      projectLink[i].addEventListener('click',
      function(){
        window.open(array[i]);
      });
    }
  }
  
  window.onload = function(){
    eventGit(arrayGit);
    eventLink(arrayLink);
  }

  // Back to top button
  function backToTop() {
    window.scrollTo(0, 0);
  }
  
  backToTopButton.addEventListener("click", backToTop);
