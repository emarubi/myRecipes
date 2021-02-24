# Explication de l'histoire du Field et du LoginForm

input HTML ->
fonction onChange ->
appelle une fonction du composant : "handleChange" -> appelle la prop onChange du composant Field avec 2 parametres :
    -> name = quel champ on modifie (autre prop de Field cf fichier LoginForm ln 43 et 49)
    -> event.target.value : ce qui a été saisi par l'utilisateur

Dans LoginForm, on donne comme prop 'onChange' à Field la prop changeField... de LoginForm.

Ca veut dire que LoginForm prend une prop pour gérer un changement d'input.
Cette fonction est "descendue" jusqu'à Field, qui l'appelera au moment opportun.
