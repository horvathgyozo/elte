<?php

use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    $noProjects = 200;
    return view('main', [
        "numberOfProjects" => $noProjects
    ]); //main.blade.php
});
Route::get('/projects', [ProjectController::class, "index"]);
Route::get('/projects/create', [ProjectController::class, "create"]);
Route::post('/projects', [ProjectController::class, "store"]);
Route::get('/projects/{id}/edit', [ProjectController::class, "edit"]);
Route::put('/projects/{id}', [ProjectController::class, "update"]);
