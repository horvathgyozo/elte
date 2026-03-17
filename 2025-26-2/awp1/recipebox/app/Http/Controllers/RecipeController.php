<?php

namespace App\Http\Controllers;

use App\Http\Requests\RecipeFormRequest;
        use App\Models\Category;
        use App\Models\Recipe;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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
        // $recipe = Recipe::findOrFail($id);
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
        // $validated = $request->validate([
        //     "title" => "required|min:3",
        //     "description" => "required|min:10",
        //     "ingredients" => "required|min:10",
        //     "instructions" => "required|min:10",
        //     "cooking_time" => "required|numeric|min:1",
        //     "difficulty" => "required|in:easy,medium,hard",
        //     // "image" => "nullable|image|max:2048",
        //     // "categories" => "array"
        // ]);
        $validated = $request->validated();
        // dd($validated);
        // save to db
        $savedRecipe = Recipe::create($validated);
        if (isset($validated['categories'])) {
            $savedRecipe->categories()->attach($validated['categories']);
        }
        return redirect()->route('recipes.show', ['recipe' => $savedRecipe->id]);
    }
    public function edit(Recipe $recipe) {
        // $recipe = Recipe::find($id);
        return view('recipes.edit', [
            "recipe" => $recipe,
            "categories" => Category::all(),
        ]);
    }
    public function update(RecipeFormRequest $request, Recipe $recipe) {
        // $validated = $request->validate([
        //     "title" => "required|min:3",
        //     "description" => "required|min:10",
        //     "ingredients" => "required|min:10",
        //     "instructions" => "required|min:10",
        //     "cooking_time" => "required|numeric|min:1",
        //     "difficulty" => "required|in:easy,medium,hard",
        //     // "image" => "nullable|image|max:2048",
        //     // "categories" => "array"
        // ]);
        $validated = $request->validated();
        // dd($validated);
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
        // $recipe = Recipe::find($id);
        $recipe->delete();

        return redirect()->route("recipes.index");
    }
}
