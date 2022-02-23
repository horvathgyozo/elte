<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function index() {
        $projects = [
            [
                'id' => 1,
                'name' => 'Title1',
            ],
            [
                'id' => 2,
                'name' => 'Title2',
            ],
        ];
        return view('projects.list', [
            'projects' => $projects,
        ]); // projects/list.blade.php
    }

    public function create() {
        return view('projects.create'); // projects/create.blade.php
    }

    public function store(Request $request) {
        $validated_data = $request->validate([
            'name'          => 'required',
            'description'   => 'nullable',
            'image_url'     => 'nullable|url',
        ]);
        // dd($validated_data);
        // Database insert
        // return $this->index();
        return redirect('/projects'); // GET
    }

    public function edit() {
        $project = [
            'id' => 1,
            'name' => 'Title1',
            'description' => 'Description1',
            'image_url' => '',
        ];
        return view('projects.edit', [
            'project'   => $project,
        ]); // projects/edit.blade.php
    }

    public function update(Request $request) {
        $validated_data = $request->validate([
            'name'          => 'required',
            'description'   => 'nullable',
            'image_url'     => 'nullable|url',
        ]);
        // dd($validated_data);
        // Database update
        return redirect('/projects'); // GET
    }
}
