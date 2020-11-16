document.addEventListener("DOMContentLoaded", function () {

  // Disable preload
  setTimeout(function(){
    document.getElementById('preloader').classList.remove('show');
  }, 1000);

  // Add current year to footer
  const dates = document.querySelectorAll('.year');
  const year = new Date();
  dates.forEach((date) => {
    date.innerHTML = year.getFullYear();
  });

  var menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach((item) => {
    item.addEventListener('click', function () {

      // Remove class active from all nodes
      const contentItems = document.getElementsByClassName('content active');
      while(contentItems.length > 0){
        contentItems[0].classList.remove('active');
      }

       // Add class active to active tab
      const tab = this.dataset.tab;
      const content = document.getElementById(tab);
      content.classList.add('active');
    });
  });

});
