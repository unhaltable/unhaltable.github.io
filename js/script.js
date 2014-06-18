// var scrollTo = function(el, off){
//   $("html, body").animate({
//     scrollTop: $(el).offset().top - off
//   }, 650);
// }

// $("#more-button").click(function(){ scrollTo("#learn-more", 0); });

/* Handle the expansion of the people panes. */
var people = document.getElementById('people').children;

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
