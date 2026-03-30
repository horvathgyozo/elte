<?php

namespace App\Http\Requests\Api;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRecipeRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'title' => ['sometimes', 'string', 'min:3', 'max:255'],
            'description' => ['sometimes', 'string', 'min:10'],
            'ingredients' => ['sometimes', 'string', 'min:10'],
            'instructions' => ['sometimes', 'string', 'min:10'],
            'cooking_time' => ['sometimes', 'integer', 'min:1'],
            'difficulty' => ['sometimes', 'in:easy,medium,hard'],
            'image' => ['nullable', 'image', 'max:2048'],
            'categories' => ['sometimes', 'array'],
            'categories.*' => ['integer', 'exists:categories,id'],
        ];
    }
}
