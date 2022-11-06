# EniAngular

Angular est le successeur de angular js
google est reparti de zero pour creer se framework open source base sur typescript
et donc adapté au developpement front 


# nodejs
framework js qui permet d executer du code js en dehors du navigateur

# angular
angular est plus qu un framework mais se presente comme platforme de developpement

une application angular se fait par composant, un composant correspond a un element reutilisatable independant et correspond a une action metier.une application est l assemblage de composants (meilleur organisation).

Typescript est le langage generalement utilisater pour des projet angular , il se transcompile en js 
et apporte typage et phase de compilation qui assurela stabilité du code verifier a la compilation

ES6 est la spe js en cours de support par les navigateur (gestion module , mot cle let etc ) , angular 
a base son architecture sur ces spe .

DOM virtuel:
gestion de la manipulation du dom (structure de la page html )les interraction en lecture ou ecriture avec
les noeuds html sont couteux et doivent etre minimise .
angular utilise un dom virtuel , qui est representation en memoire du dom , chaque modification, est effectue sur ce dom virtuel de maniere plus performante et c est le framework qui s occupe ensuite de synchronise les modifications.




# 2)SETUP

le developpement se fait sur les outils node js notamment npm
angular se base sur nodejs et npm (gestionnaire de package de nodejs qui permet d installer de nouveau module qui vont enrichir le runtime nodejs )

-il faut donc installer node 
-le cli angular est une ligne de commande pour creer une application prete a l utilisation sans ce se soucier du parametrage 

pour installer le cli
npm install -g @angular/cli

pour creer une application

ng new firstApp
le cli demande quelque info complementaire 
generer les fichier de configurations
angular json propre a tout projet angular
package json application creer avec npm


le premier composant generer est app component
il est necessaire pour composer une application d avoir un composant racine qui par defaut est appcomponent
un composant est forme de trois fichier (le html , le ts ,le css )

un composant est une class typescript decore avec le decorateur @Component
on peut specifier le selecteur c est le tag html , l url vers le template html c est le fichier rendu html du composant

un composant est une classe typescript represente l element  l element de base d une application angular 
une application angular estun composant composé d un ensemble de composant


le module
un module represente un groupement logique de l application , il faut un module racine ou on ajoutera notre composant racine

un module est une classe typrdcript decoré par @ngModule
les imports -> module
declaration -> composant , pipe, directive
providers -> services

bootstrap element sur lequel l application angular va demaré

lancement de l application : indiquer a l application d utiliser appmodule main.ts
index contient la balise du composant app component

ng serve pour lancer l application

what the use of index et app component


#### les modules angular ######
browsermodule 
approutingmodule

### promises observable callback

### ecma 6 

#### webpack

### import declaration etc

# 3)les fondamentaux

-composant
classe exposant une vue et definisant la maniere dont l utilisateur interagit avec cette vue 
c est l element de basse d une application angular (une application est un composant)
on compose les application avec d autre composant l idee d independance
  
-selector :le selecteur css identifiant le composant dans le template , a chaque fois qu il sera
rencontre angular creer une instance du composante

les templates : represente la vue ,qui decrit a angular comment doit etre rendu le composant associé 
template url definir le fichier associe