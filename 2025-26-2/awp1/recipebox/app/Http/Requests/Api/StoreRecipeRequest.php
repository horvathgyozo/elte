<?php

namespace App\Http\Requests\Api;

use Illuminate\Foundation\Http\FormRequest;

class StoreRecipeRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'min:3', 'max:255'],
            'description' => ['required', 'string', 'min:10'],
            'ingredients' => ['required', 'string', 'min:10'],
            'instructions' => ['required', 'string', 'min:10'],
            'cooking_time' => ['required', 'integer', 'min:1'],
            'difficulty' => ['required', 'in:easy,medium,hard'],
            'image' => ['nullable', 'image', 'max:2048'],
            'categories' => ['sometimes', 'array'],
            'categories.*' => ['integer', 'exists:categories,id'],
        ];
    }
}
