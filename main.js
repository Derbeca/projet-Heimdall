       //Executer la fonction lorsqu'on scroll-down
       window.onscroll = function() {fixer()};

      //Selectionner le menu
      const menuFixe = document.getElementById('menu');

      //Garder la position du menu
      var menuPosition = menuFixe.offsetTop;

      //Créer une fonction pour ajouter une class lorsqu'on scroll-down.
      function fixer() {
        if (window.pageYOffset > menuPosition){
          menuFixe.classList.add('fixed');
        } else {
          menuFixe.classList.remove('fixed');
        }
      }