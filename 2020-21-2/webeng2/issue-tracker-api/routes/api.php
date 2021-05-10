<?php

use App\Http\Controllers\IssueController;
use App\Http\Controllers\TokenController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('/token/register', [TokenController::class, 'register']);
Route::post('/token/login', [TokenController::class, 'login']);
Route::middleware('auth:sanctum')->group(function () {
    Route::resource('/issues', IssueController::class)->except(['create', 'edit']);
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/token/logout', [TokenController::class, 'logout']);
});
