<?php
use App\Http\Controllers\AlumnoController;
use App\Http\Controllers\Api\AlumnoController as ApiAlumnoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/alumno', [AlumnoController::class, 'store']);

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


route::get ('/students', function ()
    {return 'student list';}
);