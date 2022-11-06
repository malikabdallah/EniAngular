# service

l objectif est de contenier la logique fonctionnelle et/ou technique de l  application.
Au contraire des composant qui ne doivent contenir la logique propre à la manipulation de leurs donnes.

l example classique est d encapsuler les interraction avec une API dans un service pour que le composants n est pas a se soucier des apsect technique lié a la communication

un composant sonsommant un service doit simplement appeler le service sans se soucier de ce qui est effectue et transformer par le service

# declarer un service

la declaration d un service se fait en creeant une class ts dont les methodes publiques seront exposé 
c est une bonne practice que de mettre le decorateur @Injectable

# injecter son service
ce n est pas souhaite de creeer manuellement une instance de service a l aide de new pour deux raisons
-les composants devraient connaitre le constructeur de service qu ils utilise donc s ils evoluent
il faudra repasser chaque composant utilisant leservice
- c est au composant de gerer le cycle de vie du service
- une nouvelle instancede service serait creer a chaque appel de chaque composant utilisant le service (gestion memoire , cache etc)

il faut donc injecter un service

il y a deux etapes
-ajout parametre prive dans le constructeur du type du service (angular reconnait la dependance)
-il faut preciser au framework ou il doit recherche ce service , il faut lui preciserun provider au niveau d un component

# asynchrone

si les données sont sur un serveur , il ne faut pas bloquer le programme pendant la recuperation il y a deux methodes asynchrone

- promises
spe ecmascript 6
elles sont des promesse d executer du code seulement lorsqu elle ont termine leur travaill
elles fonctionne avec un system de callback qui va recevoir les info retournees par ces promises , 
il y a un deuxieme callback pour la gestion des erreurs   

promise.then( (result)=>console.log(res),
               (error) => console3log(error)

then => success
catch => rejected



- observables
une autre maniere de rendre le services asynchrone est d utiliserla librairie RxJS

difference fondamentale les observable peuvent se resoudre plusieurs fois la ou les promesse ne se resout qu une fois
pour consomme un observable ilfaututiliser sa methodesubrscribe qui a trois callback 
1)succes
2)echec
3)dans tous les cas