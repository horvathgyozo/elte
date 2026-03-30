<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\SyncRecipeCategoriesRequest;
use App\Models\Recipe;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Gate;

class RecipeCategoryController extends Controller
{
    public function sync(SyncRecipeCategoriesRequest $request, Recipe $recipe): JsonResponse
    {
        Gate::authorize('access-recipe', $recipe);

        $recipe->categories()->sync($request->validated('categories'));
        $recipe->load('categories:id,name');

        return response()->json([
            'message' => 'The recipe categories have been successfully updated.',
            'categories' => $recipe->categories,
        ]);
    }
}
