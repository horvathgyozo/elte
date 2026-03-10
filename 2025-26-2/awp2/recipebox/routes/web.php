<?php

use App\Http\Controllers\RecipeController;
use Illuminate\Support\Facades\Route;

Route::get('/', [RecipeController::class, "index"]);
Route::get('/recipes/create', [RecipeController::class, "create"]);
Route::get('/recipes/{id}', [RecipeController::class, "show"])->name("recipes.detail");
Route::post('/recipes', [RecipeController::class, "store"])->name("recipes.store");

Route::get('/recipes/{id}/edit', [RecipeController::class, "edit"])->name("recipes.edit");
