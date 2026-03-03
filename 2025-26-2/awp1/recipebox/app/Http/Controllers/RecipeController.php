<?php

namespace App\Http\Controllers;

use App\Models\Recipe;
use Illuminate\Http\Request;

class RecipeController extends Controller
{
    public function index() {
        $recipes = Recipe::all();
        return view('landing', [
            "recipes" => $recipes,
            "numberOfRecipes" => 777,
        ]);
    }
    public function show($id) {
        $recipe = Recipe::find($id);
        return view('recipes.detail', [
            "recipe" => $recipe,
        ]);
    }
    public function create() {
        return view('recipes.create');
    }
    public function store(Request $request) {
        $validated = $request->validate([
            "title" => "required|min:3",
            "description" => "required|min:10",
            "ingredients" => "required|min:10",
            "instructions" => "required|min:10",
            "cooking_time" => "required|numeric|min:1",
            "difficulty" => "required|in:easy,medium,hard",
            // "image" => "nullable|image|max:2048",
            // "categories" => "array"
        ]);
        // dd($validated);
        // save to db
        $savedRecipe = Recipe::create($validated);
        return redirect()->route('recipes.show', ['id' => $savedRecipe->id]);
    }
    public function edit($id) {
        $recipe = Recipe::find($id);
        return view('recipes.edit', [
            "recipe" => $recipe,
        ]);
    }
    public function update(Request $request, $id) {
        $validated = $request->validate([
            "title" => "required|min:3",
            "description" => "required|min:10",
            "ingredients" => "required|min:10",
            "instructions" => "required|min:10",
            "cooking_time" => "required|numeric|min:1",
            "difficulty" => "required|in:easy,medium,hard",
            // "image" => "nullable|image|max:2048",
            // "categories" => "array"
        ]);
        // dd($validated);
        // save to db
        $recipe = Recipe::find($id);
        $recipe->update($validated);
        return redirect()->route('recipes.show', ['id' => $recipe->id]);
    }
}
