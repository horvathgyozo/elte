<?php

use App\Http\Controllers\RecipeController;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('landing', [
//         "numberOfRecipes" => 777,
//     ]);
// });

Route::get('/', [RecipeController::class, 'index']);
Route::get('/recipes/{id}', [RecipeController::class, 'show'])->name("recipes.show");

Route::get('/recipes/create', [RecipeController::class, 'create']);
Route::post('/recipes', [RecipeController::class, 'store'])->name("recipes.store");

Route::get('/recipes/{id}/edit', [RecipeController::class, 'edit']);
Route::put('/recipes/{id}', [RecipeController::class, 'update'])->name("recipes.update");
