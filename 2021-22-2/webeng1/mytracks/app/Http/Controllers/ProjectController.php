<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProjectFormRequest;
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

    public function show(Project $project) {
        // $project = Project::findOrFail($project);
        return view('projects.show', [
            'project' => $project,
        ]); // projects/show.blade.php
    }

    public function create() {
        return view('projects.create'); // projects/show.blade.php
    }

    public function store(ProjectFormRequest $request) {
        Project::create($request->validated());
        return redirect()->route('projects.index'); // GET
    }

    public function edit(Project $project) {
        // $project = Project::find($id);
        return view('projects.edit', [
            'project'   => $project,
        ]); // projects/edit.blade.php
    }

    public function update(Project $project, ProjectFormRequest $request) {
        // $project = Project::find($id);
        $project->update($request->validated());
        return redirect('/projects'); // GET
    }

    public function destroy(Project $project) {
        // $project = Project::find($id);
        $project->delete();
        return redirect('/projects');
    }
}
