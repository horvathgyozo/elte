<?php

use App\Models\Filter;
use App\Models\Track;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('filters', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->timestamps();
        });

        Schema::create('filter_track', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Filter::class);
            $table->foreignIdFor(Track::class);
            $table->timestamps();
            
            $table->unique(['filter_id', 'track_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('filter_track');
        Schema::dropIfExists('filters');
    }
};
