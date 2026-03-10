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

      @foreach($recipes as $recipe)
      <a href="{{ route('recipes.detail', ['id' => $recipe->id]) }}" class="card bg-base-100 shadow-md hover:shadow-xl transition-shadow">
        <figure><img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop" alt="Grilled Chicken Salad" class="w-full h-48 object-cover"></figure>
        <div class="card-body p-4">
          <h3 class="card-title text-base">{{$recipe->title}}</h3>
          <div class="flex gap-1 flex-wrap">
            <span class="badge badge-sm badge-primary">Lunch</span>
            <span class="badge badge-sm badge-accent">Healthy</span>
          </div>
          <p class="text-sm text-base-content/60 mt-1">{{$recipe->description}}</p>
        </div>
      </a>
      @endforeach

    </div>
  </section>
@endsection