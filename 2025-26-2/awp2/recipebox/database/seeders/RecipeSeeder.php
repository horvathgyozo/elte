<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Recipe;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RecipeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('category_recipe')->truncate();
        Recipe::truncate();

        $categoryIds = Category::all()->pluck('id');
        Recipe::factory()->count(10)->create()->each(function ($recipe) use ($categoryIds) {
            $recipe->categories()->attach(
                $categoryIds->random(rand(1, 3))->toArray()
            );
        });


    }
}
