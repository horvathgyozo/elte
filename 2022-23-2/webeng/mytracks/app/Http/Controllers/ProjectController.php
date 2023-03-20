<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function index() {
        $projects = Project::all();
        return view('projects.list', [
            "projects" => $projects,
        ]); //projects/list.blade.php
    }

    public function create() {
        return view('projects.create'); //projects/create.blade.php
    }
    public function store(Request $request) {
        $validated_data = $request->validate([
            'name'          => 'required',
            'description'   => 'nullable',
            'image_url'     => 'nullable|url',
        ]);
        // dd($validated_data);
        Project::create($validated_data);
        return redirect("/projects");
    }

    public function edit($id) {
        // read the project from the database
        $project = Project::find($id);
        return view('projects.edit', [
            "project" => $project,
        ]); //projects/edit.blade.php
    }
    public function update(Request $request, $id) {
        $validated_data = $request->validate([
            'name'          => 'required',
            'description'   => 'nullable',
            'image_url'     => 'nullable|url',
        ]);
        // dd($validated_data);
        // modify the validated data in the database
        $project = Project::find($id);
        $project->update($validated_data);

        return redirect("/projects");
    }

    public function show($id) {
        $project = Project::find($id);
        return view('projects.show', [
            "project" => $project,
        ]); //projects/show.blade.php
    }

    public function destroy($id) {
        $project = Project::find($id);
        $project->delete();
        return redirect("/projects");
    }
}
