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
    $numberOfProjects = 20;
    return view('main', [
        'numberOfProjects' => $numberOfProjects,
    ]);
});
// Route::get('/projects', function () {
//     return view('projects.list'); // projects/lst.blade.php
// });

// Route::get('/projects', [ProjectController::class, 'index'])->name('projects.index');
// Route::get('/projects/{project}', [ProjectController::class, 'show'])->whereUuid('project');;

// Route::get('/projects/create', [ProjectController::class, 'create']);
// Route::post('/projects', [ProjectController::class, 'store']);

// Route::get('/projects/{id}/edit', [ProjectController::class, 'edit']);
// Route::put('/projects/{id}', [ProjectController::class, 'update']);

// Route::delete('/projects/{id}', [ProjectController::class, 'delete']);

Route::resource('projects', ProjectController::class)->middleware('auth');
Route::resource('projects.tracks', TrackController::class)->shallow()->middleware('auth');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
