@extends("layouts.public")

@section("content")
  <!-- Breadcrumb -->
  <div class="px-4 lg:px-8 py-4 max-w-5xl mx-auto w-full">
    <div class="breadcrumbs text-sm">
      <ul>
        <li><a href="index.html">Recipes</a></li>
        <li class="text-base-content/60">Grilled Chicken Salad</li>
      </ul>
    </div>
  </div>

  <!-- Recipe Detail -->
  <main class="px-4 lg:px-8 max-w-5xl mx-auto w-full flex-1 pb-12">
    <figure class="rounded-xl overflow-hidden mb-8 shadow-lg">
      <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=900&h=450&fit=crop" alt="Grilled Chicken Salad" class="w-full h-64 md:h-96 object-cover">
    </figure>

    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
      <div>
        <h1 class="text-3xl font-bold mb-3">Grilled Chicken Salad</h1>
        <div class="flex gap-2 flex-wrap">
          <span class="badge badge-primary">Lunch</span>
          <span class="badge badge-accent">Healthy</span>
          <span class="badge badge-outline">30 min</span>
          <span class="badge badge-outline">Easy</span>
        </div>
      </div>
      <div>
        <button class="btn btn-outline btn-sm" disabled title="Login to add to favourites">Add to Favourites</button>
        <p class="text-xs text-base-content/50 mt-1">Login to save recipes</p>
      </div>
    </div>

    <p class="text-base-content/70 text-lg leading-relaxed mb-8">A fresh and healthy salad with grilled chicken breast, mixed baby greens, cherry tomatoes, cucumbers, and a light honey-lemon vinaigrette.</p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Ingredients -->
      <div class="md:col-span-1">
        <div class="card bg-base-100 shadow-md">
          <div class="card-body">
            <h2 class="card-title text-lg mb-4">Ingredients</h2>
            <ul class="space-y-2 text-sm">
              <li>2 chicken breasts</li>
              <li>4 cups mixed greens</li>
              <li>1 cup cherry tomatoes</li>
              <li>1 cucumber, sliced</li>
              <li>1/4 red onion, thinly sliced</li>
              <li>1/4 cup feta cheese</li>
              <li>2 tbsp olive oil</li>
              <li>1 tbsp lemon juice</li>
              <li>1 tbsp honey</li>
              <li>Salt &amp; pepper to taste</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Instructions -->
      <div class="md:col-span-2">
        <div class="card bg-base-100 shadow-md">
          <div class="card-body">
            <h2 class="card-title text-lg mb-4">Instructions</h2>
            <ol class="space-y-4 list-decimal list-inside text-sm">
              <li><strong>Prepare the chicken</strong> &mdash; Season chicken breasts with salt, pepper, and olive oil. Let rest for 10 minutes.</li>
              <li><strong>Grill the chicken</strong> &mdash; Preheat grill to medium-high. Grill 6-7 minutes per side until done.</li>
              <li><strong>Make the vinaigrette</strong> &mdash; Whisk olive oil, lemon juice, honey, salt, and pepper.</li>
              <li><strong>Assemble the salad</strong> &mdash; Arrange greens, tomatoes, cucumber, onion, and feta on plates.</li>
              <li><strong>Serve</strong> &mdash; Slice chicken on top. Drizzle with vinaigrette.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </main>
@endsection