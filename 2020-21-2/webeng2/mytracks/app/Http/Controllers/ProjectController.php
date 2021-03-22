<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProjectFormRequest;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProjectController extends Controller
{
    public function index()
    {
        // $projects = Project::all();
        return view('projects.list', [
            'projects'  => Auth::user()->projects,
        ]);
    }

    public function show(Project $project)
    {
        $this->authorize('access', $project);
        // $project = Project::find($id);
        return view('projects.show', [
            'project' => $project,
        ]);
    }

    public function create()
    {
        return view('projects.create');
    }

    public function store(ProjectFormRequest $request)
    {
        $validated_data = $request->validated();
        $validated_data['user_id'] = Auth::id();
        Project::create($validated_data);
        // $validated_data // Database save
        // return $this->index();
        return redirect()->route('projects.index');
    }

    public function edit(Project $project)
    {
        $this->authorize('access', $project);
        // $project = Project::find($id);
        return view('projects.edit', [
            'project' => $project,
        ]);
    }

    public function update(Project $project, ProjectFormRequest $request)
    {
        $this->authorize('access', $project);
        $validated_data = $request->validated();
        // $project = Project::find($id);
        $project->update($validated_data);
        // $validated_data // Database save
        return redirect()->route('projects.show', ['project' => $project->id]);
    }

    public function destroy(Project $project)
    {
        $this->authorize('access', $project);
        // Project::destroy($id);
        $project->delete();
        return redirect()->route('projects.index');
    }
}
