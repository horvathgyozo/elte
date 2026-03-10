@extends('layouts.public')

@section('content')
  <!-- Add Recipe Form -->
  <main class="px-4 lg:px-8 py-8 max-w-3xl mx-auto w-full flex-1">
    <h1 class="text-2xl font-bold mb-6">Edit Recipe</h1>

    <!-- method="POST" action="/recipes" enctype="multipart/form-data" -->
    <form action="{{ route('recipes.update', ['recipe' => $recipe->id]) }}" method="post" class="space-y-6">
      @csrf
      @method('PUT')
      <!-- Title -->
      <fieldset class="fieldset">
        <label class="fieldset-label" for="title">Title</label>
        <input id="title" type="text" name="title" placeholder="e.g. Grilled Chicken Salad" 
          class="input 
                 @error('title') input-error @enderror 
                 w-full"
          value="{{ old('title', $recipe->title) }}"         
        >
        @error('title')
        <p class="text-error text-sm mt-1">{{$message}}</p>
        @enderror
      </fieldset>

      <!-- Description -->
      <fieldset class="fieldset">
        <label class="fieldset-label" for="description">Description</label>
        <textarea id="description" name="description" class="textarea 
                 @error('description') textarea-error @enderror 
                 h-24 w-full" placeholder="A short description of your recipe...">{{ old('description', $recipe->description) }}</textarea>
        @error('description')
        <p class="text-error text-sm mt-1">{{$message}}</p>
        @enderror
      </fieldset>

      <!-- Image -->
      <fieldset class="fieldset">
        <label class="fieldset-label" for="image">Image</label>
        <input id="image" type="file" name="image" class="file-input 
                 @error('image') input-error @enderror 
                 w-full">
        @error('image')
        <p class="text-error text-sm mt-1">{{$message}}</p>
        @enderror
      </fieldset>

      <!-- Categories -->
      <fieldset class="fieldset">
        <label class="fieldset-label">Categories</label>
        <div class="flex flex-wrap gap-3">
          @error('categories')
          <p class="text-error text-sm w-full">{{$message}}</p>
          @enderror
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" name="categories[]" value="breakfast" class="checkbox checkbox-sm checkbox-primary" {{ in_array('breakfast', old('categories', [])) ? 'checked' : '' }}>
            <span class="text-sm">Breakfast</span>
          </label>
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" name="categories[]" value="lunch" class="checkbox checkbox-sm checkbox-primary" {{ in_array('lunch', old('categories', [])) ? 'checked' : '' }}>
            <span class="text-sm">Lunch</span>
          </label>
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" name="categories[]" value="dinner" class="checkbox checkbox-sm checkbox-primary" {{ in_array('dinner', old('categories', [])) ? 'checked' : '' }}>
            <span class="text-sm">Dinner</span>
          </label>
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" name="categories[]" value="dessert" class="checkbox checkbox-sm checkbox-primary" {{ in_array('dessert', old('categories', [])) ? 'checked' : '' }}>
            <span class="text-sm">Dessert</span>
          </label>
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" name="categories[]" value="vegan" class="checkbox checkbox-sm checkbox-primary" {{ in_array('vegan', old('categories', [])) ? 'checked' : '' }}>
            <span class="text-sm">Vegan</span>
          </label>
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" name="categories[]" value="quick-meals" class="checkbox checkbox-sm checkbox-primary" {{ in_array('quick-meals', old('categories', [])) ? 'checked' : '' }}>
            <span class="text-sm">Quick Meals</span>
          </label>
        </div>
      </fieldset>

      <!-- Difficulty & Cooking Time -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <fieldset class="fieldset">
          <label class="fieldset-label" for="difficulty">Difficulty</label>
          <select id="difficulty" name="difficulty" class="select 
                 @error('difficulty') select-error @enderror 
                 w-full">
            <option disabled selected>Select difficulty</option>
            <option value="easy" {{ old('difficulty', $recipe->difficulty) == 'easy' ? 'selected' : '' }}>Easy</option>
            <option value="medium" {{ old('difficulty', $recipe->difficulty) == 'medium' ? 'selected' : '' }}>Medium</option>
            <option value="hard" {{ old('difficulty', $recipe->difficulty) == 'hard' ? 'selected' : '' }}>Hard</option>
          </select>
          @error('difficulty')
          <p class="text-error text-sm mt-1">{{$message}}</p>
          @enderror
        </fieldset>
        <fieldset class="fieldset">
          <label class="fieldset-label" for="cooking_time">Cooking Time (minutes)</label>
          <input id="cooking_time" type="number" name="cooking_time" placeholder="e.g. 30" class="input 
                 @error('cooking_time') input-error @enderror 
                 w-full" min="1" value="{{ old('cooking_time', $recipe->cooking_time) }}">
          @error('cooking_time')
          <p class="text-error text-sm mt-1">{{$message}}</p>
          @enderror
        </fieldset>
      </div>

      <!-- Ingredients -->
      <fieldset class="fieldset">
        <label class="fieldset-label" for="ingredients">Ingredients</label>
        <textarea id="ingredients" name="ingredients" class="textarea 
                 @error('ingredients') textarea-error @enderror 
                 h-32 w-full" placeholder="One ingredient per line, e.g.&#10;2 chicken breasts&#10;4 cups mixed greens&#10;1 cup cherry tomatoes">{{ old('ingredients', $recipe->ingredients) }}</textarea>
        @error('ingredients')
        <p class="text-error text-sm mt-1">{{$message}}</p>
        @enderror
      </fieldset>

      <!-- Instructions -->
      <fieldset class="fieldset">
        <label class="fieldset-label" for="instructions">Instructions</label>
        <textarea id="instructions" name="instructions" class="textarea 
                 @error('instructions') textarea-error @enderror 
                 h-40 w-full" placeholder="Describe the steps, e.g.&#10;1. Season chicken with salt and pepper.&#10;2. Grill for 6-7 minutes per side.&#10;3. Assemble salad and serve.">{{ old('instructions', $recipe->instructions) }}</textarea>
        @error('instructions')
        <p class="text-error text-sm mt-1">{{$message}}</p>
        @enderror
      </fieldset>

      <!-- Actions -->
      <div class="flex justify-end gap-3">
        <a href="dashboard.html" class="btn btn-ghost">Cancel</a>
        <button type="submit" class="btn btn-primary">Publish Recipe</button>
      </div>
    </form>
  </main>
@endsection