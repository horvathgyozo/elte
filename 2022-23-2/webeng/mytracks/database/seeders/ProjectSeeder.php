<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('projects')->truncate();
        DB::table('tracks')->truncate();

        $users = User::all();
        $users->each(function ($user) {
            Project::factory(10)
                ->for($user)
                ->hasTracks(5)
                ->create();
        });

    }
}
