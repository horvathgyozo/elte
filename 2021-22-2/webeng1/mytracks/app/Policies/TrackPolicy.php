<?php

namespace App\Policies;

use App\Models\Track;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class TrackPolicy
{
    use HandlesAuthorization;

    public function access(User $user, Track $track)
    {
        return $user->id === $track->project->user_id;
    }

}
