<?php

namespace App\Policies;

use App\Models\Category;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class CategoryPolicy
{


    /**
     * Determine whether the user can view the model.
     */
    public function access(User $user, Category $category): bool
    {
        return $user->id === $category->recipe->user->id;
    }

}
