<?php

namespace App\Providers;

use App\Models\Recipe;
use App\Models\User;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Gate::define('access-recipe', function (User $user, Recipe $recipe) {
            return $user->id === $recipe->user_id;
        });
    }
}
