<?php

use App\Http\Controllers\ProjectController;
use App\Http\Controllers\TrackController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('main');
});
// Route::view('/projects', 'projects.list');
// Route::get('/projects', [ProjectController::class, 'index'])->name('projects.list');
// Route::get('/projects/{project}', [ProjectController::class, 'show'])->name('projects.show');
// Route::get('/projects/create', [ProjectController::class, 'create'])->name('projects.create');
// Route::post('/projects/store', [ProjectController::class, 'store'])->name('projects.store');
// Route::get('/projects/{project}/edit', [ProjectController::class, 'edit'])->name('projects.edit');
// Route::put('/projects/{project}/update', [ProjectController::class, 'update'])->name('projects.update');
// Route::delete('/projects/{project}', [ProjectController::class, 'delete'])->name('projects.delete');

Route::middleware(['auth'])->group(function() {
    Route::resource('projects', ProjectController::class);
    Route::resource('projects.tracks', TrackController::class)->shallow();
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
