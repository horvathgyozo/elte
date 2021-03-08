<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\Track;
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
        Project::factory()
            ->count(3)
            ->has(Track::factory()->count(5))
            ->create();
    }
}
