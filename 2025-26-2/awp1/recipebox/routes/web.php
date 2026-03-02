<?php

use App\Http\Controllers\RecipeController;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('landing', [
//         "numberOfRecipes" => 777,
//     ]);
// });
Route::get('/', [RecipeController::class, 'index']);
Route::get('/recipes/create', [RecipeController::class, 'create']);
Route::get('/recipes/{id}', [RecipeController::class, 'show'])->name("recipes.show");
Route::post('/recipes', [RecipeController::class, 'store'])->name("recipes.store");

