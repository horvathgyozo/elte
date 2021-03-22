<?php

namespace Database\Seeders;

use App\Models\Project;
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
        $users = User::all();
        DB::table('projects')->truncate();
        Project::factory()
            ->count(3)
            ->hasTracks(5)
            ->for($users->random())
            ->create();
    }
}
