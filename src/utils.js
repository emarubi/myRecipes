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
// je veux trouver dans mon tableau de recettes...
// la recette dont le titre, une fois transformé en slug...
// est égal au 2eme parametre (slug)
export const getRecipeBySlug = (recipes, slug) => (
  recipes.find((recipe) => slugifyTitle(recipe.title) === slug)
);

export const getTitleByRecipesNumber = (nbRecipes) => {
  switch (nbRecipes) {
    case 0:
      return 'Il n\'y a pas de recettes dans vos favoris.';
    case 1:
      return 'Mes meilleures recettes';
    default:
      return 'Mes meilleures recettes';
  }
};

// fonction qui renvoie une string qui compte de 0 à length
// sauf que...
// on remplace les multiples de 3 par Fizz
// et les multiples de 5 par Buzz
// et les multiples de 3 et 5 par FizzBuzz
export const fizzBuzz = (length) => {
  let result = '';
  let i = 0;

  while (i <= length) {
    if (i === 0) {
      result += '0';
    }
    else if (i % 3 === 0 && i % 5 === 0) {
      result += 'FizzBuzz';
    }
    else if (i % 3 === 0) { // divisible par 3
      result += 'Fizz';
    }
    else if (i % 5 === 0) {
      result += 'Buzz';
    }
    else {
      result += i;
    }
    i += 1;
  }

  return result;
};
