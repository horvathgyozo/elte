<?php

use App\Http\Controllers\RecipeController;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('landing', [
//         "numberOfRecipes" => 777,
//     ]);
// });

// Route::get('/recipes/create', [RecipeController::class, 'create']);
// Route::post('/recipes', [RecipeController::class, 'store'])->name("recipes.store");

// Route::get('/', [RecipeController::class, 'index'])->name("recipes.list");;
// Route::get('/recipes/{recipe}', [RecipeController::class, 'show'])->name("recipes.show");

// Route::get('/recipes/{recipe}/edit', [RecipeController::class, 'edit']);
// Route::put('/recipes/{recipe}', [RecipeController::class, 'update'])->name("recipes.update");

// Route::delete('/recipes/{recipe}', [RecipeController::class, 'delete'])->name("recipes.delete");

Route::resource('/recipes', RecipeController::class);