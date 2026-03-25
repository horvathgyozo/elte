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
        // $recipes = auth()->user()->recipes;
        return view('landing', [
            "foo" => count($recipes),
            "recipes" => $recipes,
        ]); // landing.blade.php
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
        // $recipe = Recipe::create($request->validated());
        $recipe = Auth::user()->recipes()->create($request->validated());
        if ($request->validated('categories')) {
            $recipe->categories()->attach($request->validated('categories'));
        }
        return redirect()->route("recipes.show", ["recipe" => $recipe->id]);
    }

    public function edit(Recipe $recipe) {
        Gate::authorize('access-recipe', $recipe);
        return view('recipes.edit', [
            "recipe" => $recipe,
            "categories" => Category::all(),
        ]); 
    }
    public function update(RecipeFormRequest $request, Recipe $recipe) {
        Gate::authorize('access-recipe', $recipe);
        $recipe->update($request->validated());
        if ($request->validated('categories')) {
            $recipe->categories()->sync($request->validated('categories'));
        } else {
            $recipe->categories()->detach();
        }
        return redirect()->route("recipes.show", ["recipe" => $recipe->id]);
    }

    public function destroy(Recipe $recipe) {
        Gate::authorize('access-recipe', $recipe);
        $recipe->delete();
        return redirect()->route("recipes.index");
    }
}
