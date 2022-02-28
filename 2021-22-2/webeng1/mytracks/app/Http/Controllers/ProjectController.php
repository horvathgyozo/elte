<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function index() {
        $projects = Project::all();
        return view('projects.list', [
            'projects' => $projects,
        ]); // projects/lst.blade.php
    }

    public function show($id) {
        $project = Project::find($id);
        return view('projects.show', [
            'project' => $project,
        ]); // projects/show.blade.php
    }

    public function create() {
        return view('projects.create'); // projects/show.blade.php
    }

    public function store(Request $request) {
        $validated_data = $request->validate([
            'name'          => 'required',
            'description'   => 'nullable',
            'image_url'     => 'nullable|url',
        ]);
        // dd($validated_data); // save to the database
        Project::create($validated_data);
        return redirect('/projects'); // GET
    }

    public function edit($id) {
        $project = Project::find($id);
        return view('projects.edit', [
            'project'   => $project,
        ]); // projects/edit.blade.php
    }

    public function update($id, Request $request) {
        $validated_data = $request->validate([
            'name'          => 'required',
            'description'   => 'nullable',
            'image_url'     => 'nullable|url',
        ]);
        // dd($validated_data); // update to the database
        $project = Project::find($id);
        $project->update($validated_data);
        return redirect('/projects'); // GET
    }

    public function delete($id) {
        $project = Project::find($id);
        $project->delete();
        return redirect('/projects');
    }
}
