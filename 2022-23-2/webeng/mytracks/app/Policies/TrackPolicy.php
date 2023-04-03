<?php

namespace App\Policies;

use App\Models\Track;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class TrackPolicy
{

    public function access(User $user, Track $track): bool
    {
        return $user->id === $track->project->user_id;
    }
}
