<?php

namespace App\Http\Controllers;

use App\Models\Recipe;
use Illuminate\Http\Request;

class RecipeController extends Controller
{
    public function index() {
        $recipes = Recipe::all();
        return view('landing', [
            "foo" => 42,
            "recipes" => $recipes,
        ]); // landing.blade.php
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
        // dd("hello");
        // save to database
        $recipe = Recipe::create($validated);
        return redirect()->route("recipes.detail", ["id" => $recipe->id]);
    }

    public function edit($id) {
        $recipe = Recipe::find($id);
        return view('recipes.edit', [
            "recipe" => $recipe,
        ]); 
    }
}
