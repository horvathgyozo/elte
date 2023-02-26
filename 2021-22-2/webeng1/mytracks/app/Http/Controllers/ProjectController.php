<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProjectFormRequest;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProjectController extends Controller
{
    public function index() {
        return view('projects.list', [
            'projects' => Auth::user()->projects,
        ]); // projects/lst.blade.php
    }

    public function show(Project $project) {
        $this->authorize('access', $project);
        return view('projects.show', [
            'project' => $project,
        ]); // projects/show.blade.php
    }

    public function create() {
        return view('projects.create'); // projects/show.blade.php
    }

    public function store(ProjectFormRequest $request) {
        Auth::user()->projects()->create($request->validated());
        return redirect()->route('projects.index'); // GET
    }

    public function edit(Project $project) {
        $this->authorize('access', $project);
        return view('projects.edit', [
            'project'   => $project,
        ]); // projects/edit.blade.php
    }

    public function update(Project $project, ProjectFormRequest $request) {
        $this->authorize('access', $project);
        $project->update($request->validated());
        return redirect('/projects'); // GET
    }

    public function destroy(Project $project) {
        $this->authorize('access', $project);
        $project->delete();
        return redirect('/projects');
    }
}
