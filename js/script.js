/* Handle the expansion of the people panes. */
var people = document.getElementById('home').children;

for (var i = 0; i < people.length; i++) {
  people[i].onclick = function() {
    var active   = document.getElementsByClassName('active');
    var inactive = document.getElementsByClassName('inactive');

    if (this.classList.contains('active')) {
      // Revert to 25% widths for all panes
      this.classList.remove('active');

      for (var j = 0; j < people.length; j++) {
        people[j].classList.remove('inactive');
      }
    } else {
      // There should only be 1 active person
      if (active[0]) {
        active[0].classList.remove('active');
      }

      // Collapse others to 20% width
      for (var j = 0; j < people.length; j++) {
        people[j].classList.add('inactive');
      }

      // Expand this one to 40% width
      this.classList.remove('inactive');
      this.classList.add('active');
    }
  }
}


/* Handle the nav links. */
var nav_about    = document.getElementById('nav_about');
var nav_home     = document.getElementById('nav_home');
var nav_projects = document.getElementById('nav_projects');

var about    = document.getElementById('about');
var home     = document.getElementById('home');
var projects = document.getElementById('projects');

function show_section(elem) {
  switch (elem) {
    case about:
      home.classList.remove('active_section');
      projects.classList.remove('active_section');
      about.classList.add('active_section');
      break;

    case home:
      about.classList.remove('active_section');
      projects.classList.remove('active_section');
      home.classList.add('active_section');
      break;

    case projects:
      about.classList.remove('active_section');
      home.classList.remove('active_section');
      projects.classList.add('active_section');
      break;

    default:
      break;
  }
}

function active_nav(elem) {
  switch (elem) {
    case nav_about:
      nav_home.classList.remove('nav_active');
      nav_projects.classList.remove('nav_active');
      nav_about.classList.add('nav_active');
      break;

    case nav_home:
      nav_about.classList.remove('nav_active');
      nav_projects.classList.remove('nav_active');
      nav_home.classList.add('nav_active');
      break;

    case nav_projects:
      nav_about.classList.remove('nav_active');
      nav_home.classList.remove('nav_active');
      nav_projects.classList.add('nav_active');
      break;

    default:
      break;
  }

}

nav_about.onclick = function() {
  show_section(about);
  active_nav(this);
}

nav_home.onclick = function() {
  show_section(home);
  active_nav(this);
}

nav_projects.onclick = function() {
  show_section(projects);
  active_nav(this);
}
