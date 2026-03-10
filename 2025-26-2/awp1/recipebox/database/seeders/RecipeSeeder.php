<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Recipe;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class RecipeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Schema::disableForeignKeyConstraints();
        DB::table("category_recipe")->truncate();
        Recipe::truncate();
        Schema::enableForeignKeyConstraints();

        $categories = Category::all();

        Recipe::factory()->count(10)->create()->each(function ($recipe) use ($categories) {
            $randomCategories = $categories->random(rand(1, 3))->pluck('id');
            $recipe->categories()->attach($randomCategories);
        });
    }
}
