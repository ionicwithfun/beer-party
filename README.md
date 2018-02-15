# BeerParty

Pour travailler sur BeerParty, vous devez créer un fork de https://github.com/WebforceLille8/BeerParty et ensuite :

```
git clone https://github.com/USERNAME/BeerParty
cd BeerParty
npm install
ionic serve
```

Et voilà, l'application fonctionne sur http://localhost:8100  
On peut maintenant travailler dessus.

Pour synchroniser le dépôt officiel avec le votre :

```
git remote add upstream https://github.com/WebforceLille8/BeerParty.git # Une seule fois
git fetch upstream
git merge upstream/master
git push origin master
```
