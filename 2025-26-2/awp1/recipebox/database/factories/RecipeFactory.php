<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Recipe>
 */
class RecipeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "title" => fake()->word(),
            "description" => fake()->sentence(),
            "instructions" => fake()->sentence(3),
            "ingredients" => fake()->sentence(3),
            "cooking_time" => fake()->numberBetween(1, 100),
            "difficulty" => fake()->randomElement(['easy' ,'medium', 'hard']),
        ];
    }
}
