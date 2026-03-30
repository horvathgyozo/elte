<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\StoreRecipeRequest;
use App\Http\Requests\Api\UpdateRecipeRequest;
use App\Models\Recipe;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Gate;

class RecipeController extends Controller
{
    public function index(): JsonResponse
    {
        $recipes = Recipe::query()
            ->with(['user:id,name', 'categories:id,name'])
            ->latest()
            ->paginate(10);

        return response()->json($recipes);
    }

    public function store(StoreRecipeRequest $request): JsonResponse
    {
        $validated = $request->validated();

        if ($request->hasFile('image')) {
            $validated['image_path'] = $request->file('image')->store('images');
        }

        unset($validated['image']);

        $recipe = $request->user()->recipes()->create($validated);

        if (array_key_exists('categories', $validated)) {
            $recipe->categories()->sync($validated['categories']);
        }

        $recipe->load(['user:id,name', 'categories:id,name']);

        return response()->json($recipe, 201);
    }

    public function show(Recipe $recipe): JsonResponse
    {
        $recipe->load(['user:id,name', 'categories:id,name']);

        return response()->json($recipe);
    }

    public function update(UpdateRecipeRequest $request, Recipe $recipe): JsonResponse
    {
        Gate::authorize('access-recipe', $recipe);

        $validated = $request->validated();

        if ($request->hasFile('image')) {
            $validated['image_path'] = $request->file('image')->store('images');
        }

        unset($validated['image']);

        $recipe->update(collect($validated)->except('categories')->toArray());

        if (array_key_exists('categories', $validated)) {
            $recipe->categories()->sync($validated['categories']);
        }

        $recipe->load(['user:id,name', 'categories:id,name']);

        return response()->json($recipe);
    }

    public function destroy(Recipe $recipe): JsonResponse
    {
        Gate::authorize('access-recipe', $recipe);
        $recipe->delete();

        return response()->json([
            'message' => 'The recipe has been successfully deleted.',
        ]);
    }
}
