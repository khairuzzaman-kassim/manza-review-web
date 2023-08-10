<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

// Error Display Page
Route::get('/error', function () {
    return inertia('ErrorScreen');
})->name('error');

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    // Index
    Route::get('/reviews', [\App\Http\Controllers\ReviewController::class, 'index'])->name('reviews.index');

    // Create Page
    Route::get('/reviews/create', [\App\Http\Controllers\ReviewController::class, 'create'])->name('reviews.create');

    // Edit Page
    Route::get('/reviews/{review}/edit', [\App\Http\Controllers\ReviewController::class, 'edit'])->name('reviews.edit');

    // Update Endpoint
    Route::put('/reviews/{review}/update', [\App\Http\Controllers\ReviewController::class, 'update'])->name('reviews.update');

    // Delete Endpoint
    Route::delete('/reviews/{review}/delete', [\App\Http\Controllers\ReviewController::class, 'delete'])->name('reviews.delete');

    // Create Endpoint
    Route::post('/reviews/store', [\App\Http\Controllers\ReviewController::class, 'store'])->name('reviews.store');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
