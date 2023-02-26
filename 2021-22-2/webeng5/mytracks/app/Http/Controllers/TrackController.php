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
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Project $project)
    {
        $this->authorize('access', $project);
        return view('tracks.create', [
            'project' => $project
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreTrackRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Project $project, StoreTrackRequest $request)
    {
        $this->authorize('access', $project);
        // dd($request->validated());
        $project->tracks()->create( $request->validated() );
        return redirect()->route('projects.show', ['project' => $project->id]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Track  $track
     * @return \Illuminate\Http\Response
     */
    public function show(Track $track)
    {
        $this->authorize('access', $track);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Track  $track
     * @return \Illuminate\Http\Response
     */
    public function edit(Track $track)
    {
        $this->authorize('access', $track);
        return view('tracks.edit', [
            'track' => $track
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateTrackRequest  $request
     * @param  \App\Models\Track  $track
     * @return \Illuminate\Http\Response
     */
    public function update(StoreTrackRequest $request, Track $track)
    {
        $this->authorize('access', $track);
        $track->update($request->validated());
        return redirect()->route('projects.show', ['project' => $track->project_id]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Track  $track
     * @return \Illuminate\Http\Response
     */
    public function destroy(Track $track)
    {
        $this->authorize('access', $track);
        $track->delete();
        return redirect()->route('projects.show', ['project' => $track->project_id]);
    }
}
