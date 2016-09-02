# B63-Spaceball
B63 - Programmation Web avancée, labo #3

## Description
Ce laboratoire consiste à mettre en pratique la programmation objet en JavaScript ainsi que la balise Canvas.

## But du jeu
* Aller le plus loin possible avec la balle sans qu’elle ne tombe entre les blocs
* Les commandes :
  * A = Aller vers la gauche
  * D = Aller vers la droite
  * Barre d’espace = Sauter (faire bondir la balle)
* La logique est telle que lorsque la balle n’est pas en collision avec un bloc, sa vélocité verticale (y) augmente de 0.3 à chaque frame/boucle/temps de jeu.

## Les objets
* Dans ce jeu, il y a trois types d’objet :
  * La balle
  * Les blocs
  * Le background
* Il y a également le fichier d’animation (ex: animation.js)

## Savoir si les touches sont enfoncées
Le code suivant permet d’ajouter un écouteur sur les touches. Il permet d’avoir des variables globales signifiant si les touches sont enfoncées (ou pas).

```
var rightPushed = false;            
var leftPushed = false;            
var spacePushed = false; 

document.onkeydown = function (e) {
    if (e.which == 65)         leftPushed = true; 
    else if (e.which == 68) rightPushed = true;
    else if (e.which == 32) spacePushed = true; 
}

document.onkeyup = function (e) {
    if (e.which == 65)         leftPushed = false;                
    else if (e.which == 68) rightPushed = false;   
    else if (e.which == 32) spacePushed = false;                
}
```

## Génération de blocs
Pour créer des blocs, j’ai utilisé une logique similaire à ceci :

```
var blockSize = 40;

// dans l’initialisation
for (var i = 0 ; i < 150; i++) {
	if (Math.random() > 0.05) {
		spriteList.push(new Block( i * blockSize));
	}
}

```
