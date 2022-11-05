# javascript

javascript est le langage du web depuis quelques annees initialement
un langage de script pour apporter un peu de dynamise mais au fil du temps avec la popularisation de framework comme jquery et angularjs l utilisation de js est devenue plus importante 
au point de permettre la creation d application 100% front proche des clients lourds .

js est un langage interprete qui est execute directement sans compilation prealable
c est un langage type dynamiquement donc le type de variable peut change en cours d execution

var x = 10;
x="string";

js est monothreade et asynchrone sur evenement non blockant js est donc tres performants

sa forte dynamicite est un handicap comment s assure la validite syntaxique , refactoring sans regressions

var mafonction = function (param){

}
mafonction();

jslint pour valide le code ecrit mais ne se substitue pas a une vrai phase de compilation

# typescript

solution au probleme dessus c est langage qui se transcompilent en javascript

typescript est un langage type et compilé qui genere du js comprehensible par les navigateurs .
typescript genere du js comprehensible nativement c est a dire sans plug in donc la solution est perene dans le temps .

le typage fort va permetre d eviter le changement de type , donc cela permet stabilité dans le code puisqu on peut predire le type d un element

la phase de compilation permet de valider syntaxiquement le code sera plus robuste et stable et le refactoring facilite 

# declaration de variable

var nomvariable: typevariable;

utilise any pour profite du typage dynamique ( type par defaut)

# declaration fonction

function nomfonction(param):typeretour{

}

# class
apparu avec ecmascript 6 mais elle n est pas disponible sur tous les navigateurs , il faut eviter de l utiliser si on veut cible tout les navigateur

# interface
interface isender {

    send(message:string):boolean;
}

cette notion n existant pas en js il n y aura pas de code generer , celle ci est uniquement utilise pour definir 
des contrats valides a la compilations. 
elles sont generalement utilisé pour represente les modeles des applications, l avantage est qu il n aura pas de code generer inutile.


# decorateur
proposition es7 dispo en ts 
permet de modifier une classe et ses proprietes au moment de son implementation 
@component permet de definir la class comme un composant et l injecté à la compilation sans avoir a declarer de code technique.


# compilation
tsconfig.json
typescript vient accompagnier d un compilation tsc qui transforme les fichier ts en js
il prend en entrée un ensemble de parametre pour definir comment la compilation se fera 

target definit la version ecmascript cible es3 es5 etc , les specification evoluant et ne sont pas toutes supporter par tout les navigateur .
on peut utiliser ecmascript 6 et 7 sans attendre leur support
on utilise la syntaxe es6 / 7 et il sera transforme en es5 à la compilations.
on a plus a ce soucier des problematique de support par les naviagateurs , typescript se chargera de generer du code compatible .
