<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFiltersTable extends Migration
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
            $table->primary(['filter_id', 'track_id']);
          
            $table->unsignedBigInteger('filter_id');
            $table->unsignedBigInteger('track_id');
            $table->timestamps();
          
            $table->foreign('filter_id')->references('id')->on('filters')->onDelete('cascade');
            $table->foreign('track_id')->references('id')->on('tracks')->onDelete('cascade');
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
}
