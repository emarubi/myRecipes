import slugify from 'slugify';

// transforme un titre de recette en slug
export const slugifyTitle = (title) => slugify(title, { lower: true });

// transforme un titre de recette en slug et ajoute devant /recipe/
export const buildRecipeURL = (title) => `/recipe/${slugifyTitle(title)}`;

// trouver une recette selon son slug
export const getRecipeBySlug = (recipes, slug) => (
  recipes.find((recipe) => slugifyTitle(recipe.title) === slug)
);
