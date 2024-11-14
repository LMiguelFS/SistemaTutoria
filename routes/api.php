<?php
use App\Http\Controllers\AlumnoController;
use App\Http\Controllers\Api\AlumnoController as ApiAlumnoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GrupoController;

Route::post('/alumno', [AlumnoController::class, 'store']);

// Ruta para almacenar registros grupales
Route::post('/registrogrupal', [GrupoController::class, 'storeGrupal']);

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

route::get ('/students', function ()
    {return 'student list';}
);