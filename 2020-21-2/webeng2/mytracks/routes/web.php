<?php

use App\Http\Controllers\ProjectController;
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
    $numberOfProjects = 100;
    return view('main', [
        'numberOfProjects' => $numberOfProjects,
    ]);
    // return view('main', compact('numberOfProjects'));
});
// Route::get('/projects', function () {
//     return view('projects.list');
// });
// Route::view('/projects', 'projects.list');
Route::get('/projects', [ProjectController::class, 'index']);
Route::get('/projects/create', [ProjectController::class, 'create']);
