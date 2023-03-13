<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function index() {
        $projects = [
            [
                "id" => "1",
                "name" => "project1",
                "description" => "desc1",
            ],
            [
                "id" => "2",
                "name" => "project2",
                "description" => "desc2",
            ],
        ];
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
        // save the validated data
        return redirect("/projects");
    }
    public function edit() {
        // read the project from the database
        $project = [
            "id" => "1",
            "name" => "project1",
            "description" => "desc1",
            "image_url" => "",
        ];
        return view('projects.edit', [
            "project" => $project,
        ]); //projects/edit.blade.php
    }
    public function update(Request $request) {
        $validated_data = $request->validate([
            'name'          => 'required',
            'description'   => 'nullable',
            'image_url'     => 'nullable|url',
        ]);
        // dd($validated_data);
        // modify the validated data in the database
        return redirect("/projects");
    }
}
