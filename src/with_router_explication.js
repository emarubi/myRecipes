// composant de présentation : le plus bas
const ComposantPresentation = (props) => (
  <div>salut</div>
);

// withRouter : renvoie le même composant, avec des props en plus (router props)
const ComposantAvecRouter = withRouter(ComposantPresentation);

// Si on appelle ComposantAvecRouter...
// on garde nos props en jsx (toto)
// on y ajoute les props de router (history, location, match)
// on donne l'ensemble de ces props à ComposantPresentation
  <ComposantAvecRouter toto="titi" />;
