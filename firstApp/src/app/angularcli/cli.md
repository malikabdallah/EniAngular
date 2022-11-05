# definition

developper par les equipes d angular , le cli permet de cree des projets dans lequel le CLI
pourra ajouter des entités angular.
il sera possible d ajouter des composant ,modules services etc et le tout en ligne de commande


un projet cree avec le CLI est configure par defaut pour fonctionné avec de nombreuses taches transverse qui implique une appli web typescript .
on parle de bundling des sources , minification , tester et meme deploiement


le bundling est l operation qui consiste a mettre en commun les differentes parties de l application pour constituer un seul paquet final :un bundle 

la minification consiste a reduire la taille du source code .

la configuration de webpack est une boite noir avec des points d dextension limites qui sont dans angular.json

cli permet de generer un projet avec tout l outillage pour dev et deploiyer . un projet peut etre lance rapidement 

# les commandes principales

ng new nomprojet: creation de nouveau => le cli demandera si on veut le routing , le type de style
ng build : pour compiler son projet , les fichier genere sont appele build artifcat et son placé dans le repertoir dist a la racine du projet 
pour build pour la prod ng build --prod

il y a des fichier environment.prod.ts et environment.ts pour definir les parametre specifique a chaque environnement 
le cas d ecole est l url d une API qui aliment l application en donnees
par defaut le css est inclus dans le bundle js pour les separe
ng build --extractCss

pour avoir plus d info sur le building 
ng build --verbose

# ng serve
optimiser le temps de dev en minimisant les processus transvers
execute un bg build apres chaque modif peut etre fatiguant 
la commande ng serve lance le webpack-dev-server qui est un serveur express node.js qui expose les fichier pour qu il soit accessible a chaque modification.
le server dev detecte la mdofication et relance la compil du projet direction .


# test
la gestion des test est integre au cli
ng test -> execute les test unitaire 
une compilation est execute avec Karma , karma est un outil de terminal javascript qui va lancer le navigateur et charger le code de l application et executer les test avec Jasmine 


ng e2e -> test end to end
protractor est un framework de test end-to-end 


ng g c : composant
ng g p : pipe
ng g d : directive
ng g s : services
ng g g : guard
ng g m : module
gn g e : enum
ng g class : class
ng g i: interface

ng g c --m=nommodue

  exports: [TaskCardComponent] // <== export the component you want to use in another module
exporter le composant a utiliser dans un autre module

##### CONFIGURER UN PROJET ANGULAR CLI ########

angular json est essentiel : 
il permet de gerer le workspace et les configuration des differents projet de l appli angular
