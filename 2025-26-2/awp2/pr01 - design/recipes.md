# Recipes

- Functional requirement
- Database structure
- UI
- Endpoints, URLs for pages

## Functional requirements

- Guest
  - Main page
    - recipe list
      - top or picked recipes
    - search/filter recipes
      - filter by category
  - Recipe detail page
  - Authentication
    - Register
    - Login
- Authenticated user
  - Can do what a guest user can do
  - Add a new recipe
    - Assign recipe to categories
  - Edit/delete own recipes
  - List own recipes
  - Save a recipe as favourite 
  - Categories CRUD
- Admin
  - user management
  - edit/delete any recipes/categories

User story:
- As a guest user I want to see the top recipes in order to choose a good dish
- Given when then

## Database

- users
  - is_admin 
  - (role enum)
- recipes
- categories

users 1-n recipes
users 1-n categories
recipes n-n categories

dbdiagram.io

```dbml
Table users {
  id integer [primary key]
  name varchar
  email varchar
  password varchar
  is_admin boolean
  created_at timestamp
  updated_at timestamp
}

Table recipes {
  id integer [pk]
  user_id integer [not null]
  name varchar
  description varchar
  created_at timestamp
  updated_at timestamp
}

Table categories {
  id integer [pk]
  user_id integer [not null]
  name varchar
  created_at timestamp
  updated_at timestamp
}

Table categories_recipes {
  recipe_id integer [not null]
  category_id integer [not null]

  indexes {
    (recipe_id, category_id) [pk] 
  }
}

Ref: recipes.user_id > users.id
Ref: categories.user_id > users.id
// Ref: categories.id <> recipes.id
Ref: categories_recipes.recipe_id > recipes.id
Ref: categories_recipes.category_id > categories.id
```

## UI

Clickable mockup
- mockup tools
- Figma
- HTML/CSS

- bootstrap
- tailwindcss