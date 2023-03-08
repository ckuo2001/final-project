import { defineConfig } from 'vite'
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        back: 'src/back.html',
        recipe: 'src/recipe.html',
        allRecipe: 'src/all-recipes.html',
      }
    }
  }
})
