<?php

namespace App\Http\Controllers;

use App\Models\Filter;
use App\Models\Project;
use App\Models\Track;
use Illuminate\Http\Request;

class TrackController extends Controller
{
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Project $project)
    {
        $this->authorize('access', $project);
        $filters = Filter::all();
        return view('tracks.create', [
            'project_id' => $project->id,
            'filters' => $filters,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Project $project, Request $request)
    {
        $this->authorize('access', $project);
        $data = $request->validate([
            'name' => 'required',
            'color' => 'required|regex:/^#[0-9a-z]{6}$/',
            'filters' => 'nullable|array'
        ]);
        $track = $project->tracks()->create($data);
        if (isset($data['filters'])) {
            $track->filters()->attach($data['filters']);
        }
        return redirect()->route('projects.show', ['project' => $project->id]);
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
        $filters = Filter::all();
        return view('tracks.edit', [
            'track' => $track,
            'filters' => $filters,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Track  $track
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Track $track)
    {
        $this->authorize('access', $track);
        $data = $request->validate([
            'name' => 'required',
            'color' => 'required|regex:/^#[0-9a-z]{6}$/',
            'filters' => 'nullable|array'
        ]);
        $track->update($data);
        $track->filters()->sync($data['filters'] ?? []);
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
