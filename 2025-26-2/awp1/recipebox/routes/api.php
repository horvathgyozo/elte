<?php

use App\Http\Controllers\Api\RecipeController;
use App\Models\Recipe;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Route::get("/recipes", function () {
//     return Recipe::all();
// });
// Route::get("/recipes/{recipe}", function (Recipe $recipe) {
//     return $recipe;
// });
Route::apiResource("/recipes", RecipeController::class);