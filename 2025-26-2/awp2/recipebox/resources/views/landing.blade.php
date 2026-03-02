@extends("layouts.public")

@section("content")
  <!-- Search & Category Filter -->
  <!-- method="GET" action="/recipes" -->
  <form class="px-4 lg:px-8 pt-8 pb-4 max-w-7xl mx-auto w-full">
    <div class="flex flex-col md:flex-row gap-4 items-start">
      <div class="flex flex-1 gap-2 w-full">
        <input type="text" name="search" placeholder="Search recipes by title..." class="input input-bordered flex-1">
        <button type="submit" class="btn btn-primary">Search</button>
      </div>
      <div class="flex flex-wrap gap-3 items-center">
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
    </div>
  </form>

  <!-- Top Recipes -->
  <section class="px-4 lg:px-8 py-4 max-w-7xl mx-auto w-full flex-1">
    <h2 class="text-2xl font-bold mb-6">Top Recipes ({{ $foo }})</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

      <a href="recipe-detail.html" class="card bg-base-100 shadow-md hover:shadow-xl transition-shadow">
        <figure><img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop" alt="Grilled Chicken Salad" class="w-full h-48 object-cover"></figure>
        <div class="card-body p-4">
          <h3 class="card-title text-base">Grilled Chicken Salad</h3>
          <div class="flex gap-1 flex-wrap">
            <span class="badge badge-sm badge-primary">Lunch</span>
            <span class="badge badge-sm badge-accent">Healthy</span>
          </div>
          <p class="text-sm text-base-content/60 mt-1">A fresh and healthy salad with grilled chicken and vinaigrette.</p>
        </div>
      </a>

      <a href="recipe-detail.html" class="card bg-base-100 shadow-md hover:shadow-xl transition-shadow">
        <figure><img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop" alt="Margherita Pizza" class="w-full h-48 object-cover"></figure>
        <div class="card-body p-4">
          <h3 class="card-title text-base">Margherita Pizza</h3>
          <div class="flex gap-1 flex-wrap">
            <span class="badge badge-sm badge-primary">Dinner</span>
            <span class="badge badge-sm badge-accent">Italian</span>
          </div>
          <p class="text-sm text-base-content/60 mt-1">Classic Italian pizza with fresh mozzarella and basil.</p>
        </div>
      </a>

      <a href="recipe-detail.html" class="card bg-base-100 shadow-md hover:shadow-xl transition-shadow">
        <figure><img src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&h=300&fit=crop" alt="French Toast" class="w-full h-48 object-cover"></figure>
        <div class="card-body p-4">
          <h3 class="card-title text-base">French Toast</h3>
          <span class="badge badge-sm badge-primary">Breakfast</span>
          <p class="text-sm text-base-content/60 mt-1">Golden crispy French toast with maple syrup and berries.</p>
        </div>
      </a>

      <a href="recipe-detail.html" class="card bg-base-100 shadow-md hover:shadow-xl transition-shadow">
        <figure><img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop" alt="Fluffy Pancakes" class="w-full h-48 object-cover"></figure>
        <div class="card-body p-4">
          <h3 class="card-title text-base">Fluffy Pancakes</h3>
          <div class="flex gap-1 flex-wrap">
            <span class="badge badge-sm badge-primary">Breakfast</span>
            <span class="badge badge-sm badge-accent">Quick Meals</span>
          </div>
          <p class="text-sm text-base-content/60 mt-1">Light and fluffy pancakes with butter and syrup.</p>
        </div>
      </a>

      <a href="recipe-detail.html" class="card bg-base-100 shadow-md hover:shadow-xl transition-shadow">
        <figure><img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop" alt="Rainbow Veggie Bowl" class="w-full h-48 object-cover"></figure>
        <div class="card-body p-4">
          <h3 class="card-title text-base">Rainbow Veggie Bowl</h3>
          <div class="flex gap-1 flex-wrap">
            <span class="badge badge-sm badge-primary">Lunch</span>
            <span class="badge badge-sm badge-accent">Vegan</span>
          </div>
          <p class="text-sm text-base-content/60 mt-1">Colourful bowl with roasted vegetables and tahini.</p>
        </div>
      </a>

      <a href="recipe-detail.html" class="card bg-base-100 shadow-md hover:shadow-xl transition-shadow">
        <figure><img src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&h=300&fit=crop" alt="Pasta Carbonara" class="w-full h-48 object-cover"></figure>
        <div class="card-body p-4">
          <h3 class="card-title text-base">Pasta Carbonara</h3>
          <div class="flex gap-1 flex-wrap">
            <span class="badge badge-sm badge-primary">Dinner</span>
            <span class="badge badge-sm badge-accent">Italian</span>
          </div>
          <p class="text-sm text-base-content/60 mt-1">Creamy carbonara with crispy pancetta and parmesan.</p>
        </div>
      </a>

      <a href="recipe-detail.html" class="card bg-base-100 shadow-md hover:shadow-xl transition-shadow">
        <figure><img src="https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=300&fit=crop" alt="Chocolate Lava Cake" class="w-full h-48 object-cover"></figure>
        <div class="card-body p-4">
          <h3 class="card-title text-base">Chocolate Lava Cake</h3>
          <span class="badge badge-sm badge-primary">Dessert</span>
          <p class="text-sm text-base-content/60 mt-1">Rich molten chocolate cake with vanilla ice cream.</p>
        </div>
      </a>

      <a href="recipe-detail.html" class="card bg-base-100 shadow-md hover:shadow-xl transition-shadow">
        <figure><img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop" alt="Classic Caesar Salad" class="w-full h-48 object-cover"></figure>
        <div class="card-body p-4">
          <h3 class="card-title text-base">Classic Caesar Salad</h3>
          <div class="flex gap-1 flex-wrap">
            <span class="badge badge-sm badge-primary">Lunch</span>
            <span class="badge badge-sm badge-accent">Healthy</span>
          </div>
          <p class="text-sm text-base-content/60 mt-1">Crisp romaine with caesar dressing and croutons.</p>
        </div>
      </a>

    </div>
  </section>
@endsection