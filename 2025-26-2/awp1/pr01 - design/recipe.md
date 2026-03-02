# Recipes

## Functional requirements

Roles:
- guest
  - landing page
    - list all recipes
      - (top recipes)
      - (pagination)
    - list all categories
    - view a category (listing recipes inside the category)
    - view a recipe detail
    - (search recipes)
  - authentication
    - register
    - login
- authenticated user
  - Same as guest
  - authentication
    - profile
      - change password
      - upload image
      - delete account
    - logout
  - Mark a recipe as favourite
  - Create a recipe
  - Edit own recipe
  - Delete own recipe
  - List my/own recipes
  - List my/own categories
  - Add comments to any recipe
  - Rate any recipe
  - Add recipes to categories
  - Edit/change categories
  - CRUD categories
- admin
  - approving recipes
  - user management
  - comment management

## Database

- users
  - is_admin
  - role enum
- recipes
- categories

- comments
- favourites

user 1-n recipes 
user 1-n categories
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
  id integer [primary key]
  user_id integer [not null]
  name varchar [not null]
  description varchar
  ingredients text
  instructions text
}

Table categories {
  id integer [primary key]
  name varchar [not null]
}

Table categories_recipes {
  recipe_id integer
  category_id integer

  indexes {
    (recipe_id, category_id) [pk]
  } 
}

Ref: recipes.user_id > users.id
// Ref: recipes.id <> categories.id
Ref: categories_recipes.recipe_id > recipes.id
Ref: categories_recipes.category_id > categories.id
```

# UI design

- mockup tools
- figma
- HTML/CSS

Clickable mockup


# Endpoints

- landing page: /
- login: /login, /auth/login
- /recipes


  - browse all recipes on the main page

  - As a guest user I can list all the recipes in order to find a dish

- authenticated user (user)

