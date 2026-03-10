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
            "ingredients" => fake()->paragraph(),
            "instructions" => fake()->paragraph(),
            "cooking_time" => fake()->numberBetween(1, 300),
            "difficulty" => fake()->randomElement(['easy', 'medium', 'hard']),
        ];
    }
}
