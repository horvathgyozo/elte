<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\Track;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('projects')->truncate();
        $users = User::all();
        $user = $users->random();
        Project::factory()
            ->count(3)
            ->has(Track::factory()->count(5))
            ->for($user)
            ->create();
    }
}
