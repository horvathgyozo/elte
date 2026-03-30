<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\JsonResponse;

class CategoryController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(
            Category::query()->orderBy('name')->get()
        );
    }

    public function show(Category $category): JsonResponse
    {
        $category->load(['recipes.user:id,name']);

        return response()->json($category);
    }
}
