<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description', 'image_url', 'user_id'];

    public function tracks()
    {
        return $this->hasMany(Track::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
