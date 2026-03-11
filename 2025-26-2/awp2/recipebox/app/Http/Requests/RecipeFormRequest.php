<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RecipeFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "title" => "required|min:3",
            "description" => "required|min:10",
            "ingredients" => "required|min:10",
            "instructions" => "required|min:10",
            "cooking_time" => "required|numeric|min:1",
            "difficulty" => "required|in:easy,medium,hard",
            // "image" => "nullable|image|max:2048",
            // "categories" => "array"
        ];
    }
}
