@extends("layouts.public")

@section("content")
  <!-- Add Recipe Form -->
  <main class="px-4 lg:px-8 py-8 max-w-3xl mx-auto w-full flex-1">
    <h1 class="text-2xl font-bold mb-6">Add New Recipe</h1>

    <!-- method="POST" action="/recipes" enctype="multipart/form-data" -->
    <form class="space-y-6" action="{{ route('recipes.store') }}" method="post">
      @csrf

      <!-- Title -->
      <fieldset class="fieldset">
        <label class="fieldset-label" for="title">Title</label>
        <input id="title" type="text" name="title" placeholder="e.g. Grilled Chicken Salad" 
          class="input 
                 @error('title') input-error @enderror 
                 w-full"
          value="{{ old('title', '') }}"
        >
        @error("title")
        <p class="text-error text-sm mt-1">{{ $message }}</p>
        @enderror
      </fieldset>

      <!-- Description -->
      <fieldset class="fieldset">
        <label class="fieldset-label" for="description">Description</label>
        <textarea id="description" name="description" class="textarea textarea-error h-24 w-full" placeholder="A short description of your recipe..."></textarea>
        <!-- @error('description') -->
        <p class="text-error text-sm mt-1">The description must be at least 10 characters.</p>
        <!-- @enderror -->
      </fieldset>

      <!-- Image -->
      <fieldset class="fieldset">
        <label class="fieldset-label" for="image">Image</label>
        <input id="image" type="file" name="image" class="file-input w-full">
      </fieldset>

      <!-- Categories -->
      <fieldset class="fieldset">
        <label class="fieldset-label">Categories</label>
        <div class="flex flex-wrap gap-3">
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" name="categories[]" value="breakfast" class="checkbox checkbox-sm checkbox-primary">
            <span class="text-sm">Breakfast</span>
          </label>
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" name="categories[]" value="lunch" class="checkbox checkbox-sm checkbox-primary">
            <span class="text-sm">Lunch</span>
          </label>
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" name="categories[]" value="dinner" class="checkbox checkbox-sm checkbox-primary">
            <span class="text-sm">Dinner</span>
          </label>
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" name="categories[]" value="dessert" class="checkbox checkbox-sm checkbox-primary">
            <span class="text-sm">Dessert</span>
          </label>
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" name="categories[]" value="vegan" class="checkbox checkbox-sm checkbox-primary">
            <span class="text-sm">Vegan</span>
          </label>
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" name="categories[]" value="quick-meals" class="checkbox checkbox-sm checkbox-primary">
            <span class="text-sm">Quick Meals</span>
          </label>
        </div>
      </fieldset>

      <!-- Difficulty & Cooking Time -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <fieldset class="fieldset">
          <label class="fieldset-label" for="difficulty">Difficulty</label>
          <select id="difficulty" name="difficulty" class="select w-full">
            <option disabled selected>Select difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </fieldset>
        <fieldset class="fieldset">
          <label class="fieldset-label" for="cooking_time">Cooking Time (minutes)</label>
          <input id="cooking_time" type="number" name="cooking_time" placeholder="e.g. 30" class="input input-error w-full" min="1">
          <!-- @error('cooking_time') -->
          <p class="text-error text-sm mt-1">The cooking time must be a number greater than 0.</p>
          <!-- @enderror -->
        </fieldset>
      </div>

      <!-- Ingredients -->
      <fieldset class="fieldset">
        <label class="fieldset-label" for="ingredients">Ingredients</label>
        <textarea id="ingredients" name="ingredients" class="textarea textarea-error h-32 w-full" placeholder="One ingredient per line, e.g.&#10;2 chicken breasts&#10;4 cups mixed greens&#10;1 cup cherry tomatoes"></textarea>
        <!-- @error('ingredients') -->
        <p class="text-error text-sm mt-1">The ingredients field is required.</p>
        <!-- @enderror -->
      </fieldset>

      <!-- Instructions -->
      <fieldset class="fieldset">
        <label class="fieldset-label" for="instructions">Instructions</label>
        <textarea id="instructions" name="instructions" class="textarea h-40 w-full" placeholder="Describe the steps, e.g.&#10;1. Season chicken with salt and pepper.&#10;2. Grill for 6-7 minutes per side.&#10;3. Assemble salad and serve."></textarea>
      </fieldset>

      <!-- Actions -->
      <div class="flex justify-end gap-3">
        <a href="dashboard.html" class="btn btn-ghost">Cancel</a>
        <button type="submit" class="btn btn-primary">Publish Recipe</button>
      </div>
    </form>
  </main>
@endsection