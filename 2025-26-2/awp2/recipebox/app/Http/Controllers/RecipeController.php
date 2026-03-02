<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RecipeController extends Controller
{
    public function index() {
        return view('landing', [
            "foo" => 42,
        ]); // landing.blade.php
    }
    public function show() {
        return view('recipes.detail'); 
    }
    public function create() {
        return view('recipes.create'); 
    }
    public function store(Request $request) {
        $request->validate([
            "title" => "required|min:3"
        ]);
        // dd("hello");
        return redirect()->route("recipes.detail", ["id" => 42]);
    }
}
