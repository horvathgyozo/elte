<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RecipeController;
use Illuminate\Support\Facades\Route;

// Route::get('/recipes/create', [RecipeController::class, "create"]);
// Route::post('/recipes', [RecipeController::class, "store"])->name("recipes.store");

// Route::get('/', [RecipeController::class, "index"])->name("recipes.list");
// Route::get('/recipes/{recipe}', [RecipeController::class, "show"])->name("recipes.detail");

// Route::get('/recipes/{recipe}/edit', [RecipeController::class, "edit"])->name("recipes.edit");
// Route::put('/recipes/{recipe}', [RecipeController::class, "update"])->name("recipes.update");

// Route::delete('/recipes/{recipe}', [RecipeController::class, "delete"])->name("recipes.delete");
Route::resource('/recipes', RecipeController::class);

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
