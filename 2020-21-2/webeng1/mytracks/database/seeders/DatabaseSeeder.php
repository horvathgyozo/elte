<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $this->call(UserSeeder::class);
        $this->call(ProjectSeeder::class);
        // $this->call(TrackSeeder::class);

        // $projects = Project::all();
        // $users = User::all();

        // $projects->each(function ($project) use ($users) {
        //     $user = $users->random();
        //     $project->user()->associate($user);
        //     $project->save();
        // });
    }
}
