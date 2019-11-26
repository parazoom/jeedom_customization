# Jeedom customization
Le contenu de mon répertoire Custom

## Menu pour les Designs
L'avantage de ce procédé, c'est d'avoir un seul et meme fichier qui gère les menus de toutes
 les pages des designs.
Dans un Design, Ajouter un text/Html avec le contenu Suivant :
```html
<script>
  $(function () {
    $("#menu-custom").load("custom/theme/menu.html");
  });
  var idIs = 1; // value of plan_id for active link
</script>

<div id="menu-custom"></div>v>
```
Dans chaque page, changer l'idIs par l'id de la page en cours (se voit dans l'URL)
Dans le répertoire /custom/theme/ copier le fichier menu.html
Dans ce fichier modifier la variable links avec les valeur des plan_id et les noms
 des images associées dans le répertoire /custom/theme/images/
```js
  var links = {
    1: { plan_id: 1, img: "icon_home.png"},
    2: { plan_id: 3, img: "icon_skydive.png"},
    3: { plan_id: 8, img: "icon_light.png"},
    4: { plan_id: 7, img: "icon_planning2.png"},
    5: { plan_id: 7, img: "icon_graff.png"},
    6: { plan_id: 9, img: "icon_volets.png"},
    7: { plan_id: 7, img: "icon_chauffage.png"},
    8: { plan_id: 7, img: "icon_reseau.png"},
  };
```
