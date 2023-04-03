<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;
    public $fillable = ["name", "description", "image_url"];

    public function tracks() {
        return $this->hasMany(Track::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
