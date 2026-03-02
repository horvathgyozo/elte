<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RecipeController extends Controller
{
    public function index() {
        return view('landing', [
            "numberOfRecipes" => 777,
        ]);
    }
    public function show() {
        return view('recipes.detail');
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
            "image" => "nullable|image|max:2048",
            "categories" => "array"
        ]);
        // dd($validated);
        // save to db
        return redirect()->route('recipes.show', ['id' => 123]);
    }
}
