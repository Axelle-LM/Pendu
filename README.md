# Jeu de pendu

## Projet React

### Comment installer

Pour lancer la web app, clonez ou téléchargez le master, dezippez le puis avec un terminal ouvert dans le dossier, executer la commande `serve -s build`. Le port par défaut est le **3000**.

### How to use

Une fois la web app ouverte, un mot aléatoire choisi sur l'API (https://github.com/AlexisCharp/hangman-api qui devra être lancée sur un serveur local) apparaitra, caché par des "\_"." On disposera d'un clavier virtuel sur lequel cliquer pour afficher les mots un par un.
Le joueur dispose de 6 vies et les lettres trouvées correctes ne seront plus cliquable.

### Méthodes utilisées

Hook react, map, components, props, et autres méthodes ont permis de faire un code modulaire, efficace et optimisé.

#### Fonctionnalité

Le pendu est fonctionnel et affiche le bon nombre d'espace pour le mot affiché. L'utilisateur peut entrer des lettres grâce au clavier virtuel, et le jeu se met à jour pour afficher le bon mot.

Le jeu gère les erreurs correctement, et affiche les bon messages d'erreur.
