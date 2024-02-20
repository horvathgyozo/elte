<?php

namespace App\Policies;

use App\Models\Project;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class ProjectPolicy
{
    public function access(User $user, Project $project): bool
    {
        return $user->id === $project->user_id;
    }
}
