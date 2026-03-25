<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Recipe extends Model
{
    /** @use HasFactory<\Database\Factories\RecipeFactory> */
    use HasFactory;
    use SoftDeletes;

    protected $fillable = ["title", "description", "instructions", "ingredients", "cooking_time", "difficulty", "image_path"];

    public function categories() {
        return $this->belongsToMany(Category::class);
    }

    public function user() {
        return $this->belongsTo(User::class);
    }
}
