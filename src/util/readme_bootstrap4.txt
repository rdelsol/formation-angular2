Remarque importante:
===================
Bootstrap vient tr�s recemment de basculer de la version 3.x � la toute nouvelle version 4.0.0
Il y a beaucoup de changements .
=====
Etant donn� que bootstrap4 n'est plus livr�/accompagn� de glyphicons, on peut utiliser font-awesome � la place (restant gratuit/open-source) .
====

npm install bootstrap --save
npm install font-awesome --save
=========
dans .angular-cli.json :

"styles": [
  "styles.css" , 
 
            "../node_modules/bootstrap/dist/css/bootstrap.min.css",
  
           "../node_modules/font-awesome/css/font-awesome.min.css"
      
  ],

====
test dans un ...component.html:

<input type="button" value="ok" class="btn btn-primary" />
<i class="fa fa-heart" aria-hidden="true" style="color: red;"></i>
