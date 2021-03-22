<?php

namespace Database\Seeders;

use App\Models\Filter;
use App\Models\Track;
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
        $this->call(UserSeeder::class);
        $this->call(ProjectSeeder::class);
        $this->call(FilterSeeder::class);

        $filters = Filter::all();
        Track::all()->each(function ($track) use ($filters) {
            $filter_ids = $filters->random(rand(1, $filters->count()))->pluck('id')->toArray();
            $track->filters()->attach($filter_ids);
        });
    }
}
