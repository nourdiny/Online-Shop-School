<?php

use App\Http\Controllers\AnalyticsController;
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

Route::middleware('auth','staff')->group(function () {
    Route::get('/', [AnalyticsController::class, 'index'])->name("index");
    Route::get('/users', [AnalyticsController::class, 'allUsers'])->name("users");
    Route::get('/orders', [AnalyticsController::class, 'allOrders'])->name("orders");
    Route::post('/invoices', [AnalyticsController::class, 'invoice'])->name("invoice");
    Route::get('/orders/{id}', [AnalyticsController::class, 'singleOrder'])->name("order");

});
Route::middleware('auth','staff')->group(function () {
    
});
require __DIR__.'/auth.php';
