<?php

namespace App\Http\Controllers;

use App\Models\Track;
use App\Http\Requests\StoreTrackRequest;
use App\Http\Requests\UpdateTrackRequest;
use App\Models\Project;

class TrackController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Project $project)
    {
        $this->authorize('access', $project);
        return view("tracks.create", [
            "project" => $project
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Project $project, StoreTrackRequest $request)
    {
        $this->authorize('access', $project);
        $project->tracks()->create($request->validated());
        return redirect()->route("projects.show", ["project" => $project->id]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Track $track)
    {
        $this->authorize('access', $track);
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Track $track)
    {
        $this->authorize('access', $track);
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StoreTrackRequest $request, Track $track)
    {
        $this->authorize('access', $track);
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Track $track)
    {
        $this->authorize('access', $track);
        //
    }
}
