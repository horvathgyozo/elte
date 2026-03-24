<?php

namespace App\Http\Controllers;

use App\Http\Requests\RecipeFormRequest;
use App\Models\Category;
use App\Models\Recipe;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class RecipeController extends Controller
{
    public function index() {
        $recipes = Auth::user()->recipes;
        return view('landing', [
            "recipes" => $recipes,
            "numberOfRecipes" => 777,
        ]);
    }
    public function show(Recipe $recipe) {
        Gate::authorize('access-recipe', $recipe);
        return view('recipes.detail', [
            "recipe" => $recipe,
        ]);
    }
    public function create() {
        return view('recipes.create', [
            "categories" => Category::all(),
        ]);
    }
    public function store(RecipeFormRequest $request) {
        $validated = $request->validated();
        // save to db
        // $savedRecipe = Recipe::create($validated);
        // $recipe = new Recipe($validated);
        // $savedRecipe = Auth::user()->recipes()->save($recipe);
        $path = $request->file('image')->store('images');
        $validated['image_path'] = $path;
        $savedRecipe = Auth::user()->recipes()->create($validated);
        // $savedRecipe = auth()->user()->recipes()->create($validated);
        if (isset($validated['categories'])) {
            $savedRecipe->categories()->attach($validated['categories']);
        }
        return redirect()->route('recipes.show', ['recipe' => $savedRecipe->id]);
    }
    public function edit(Recipe $recipe) {
        Gate::authorize('access-recipe', $recipe);
        // $recipe = Recipe::find($id);
        return view('recipes.edit', [
            "recipe" => $recipe,
            "categories" => Category::all(),
        ]);
    }
    public function update(RecipeFormRequest $request, Recipe $recipe) {
        Gate::authorize('access-recipe', $recipe);
        $validated = $request->validated();
        // save to db
        // $recipe = Recipe::find($id);
        $recipe->update($validated);
        if (isset($validated['categories'])) {
            $recipe->categories()->sync($validated['categories']);
        } else {
            $recipe->categories()->detach();
        }
        return redirect()->route('recipes.show', ['recipe' => $recipe->id]);
    }
    public function destroy(Recipe $recipe) {
        Gate::authorize('access-recipe', $recipe);
        // $recipe = Recipe::find($id);
        $recipe->delete();

        return redirect()->route("recipes.index");
    }
}
