import slugify from 'slugify';

// transforme un titre de recette en slug
export const slugifyTitle = (title) => {
  const modifiedTitle = title.replace('_', '-').replace('&', '')
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text;
  return slugify(modifiedTitle, { lower: true });
};
// transforme un titre de recette en slug et ajoute devant /recipe/
export const buildRecipeURL = (title) => `/recipe/${slugifyTitle(title)}`;

// trouver une recette selon son slug
export const getRecipeBySlug = (recipes, slug) => (
  recipes.find((recipe) => slugifyTitle(recipe.title) === slug)
);

export const getTitleByRecipesNumber = (nbRecipes) => {
  switch (nbRecipes) {
    case 0:
      return 'Site en cours de construction. Revenez plus tard.';
    case 1:
      return 'Découvrez notre recette';
    default:
      return 'Découvrez nos recettes';
  }
};

export const fizzBuzz = (length) => {
  let result = '';
  for (let i = 1; i <= length; i++) {
    if (i % 15 === 0) {
      result += 'FizzBuzz';
    }
    else if (i % 5 === 0) {
      result += 'Buzz';
    }
    else if (i % 3 === 0) {
      result += 'Fizz';
    }
    else {
      result += i;
    }
  }
};
