<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\categoriaController;
use App\Http\Controllers\productosController;
use App\Http\Controllers\lotesController;
use App\Http\Controllers\tiendasController;
use App\Http\Controllers\inventarioController;

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

/*
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});*/
Route::resource('api_categorias',categoriaController::class);

Route::resource('api_productos',categoriaController::class);

Route::resource('api_lotes',categoriaController::class);

Route::resource('api_tiendas',categoriaController::class);

Route::resource('api_inventarios',categoriaController::class);