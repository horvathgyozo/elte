<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function index() {
        $projects = [
            [
                'id' => 1,
                'title' => 'Title1',
                'description' => 'Description1',
                'bg_url' => null,
            ],
            [
                'id' => 2,
                'title' => 'Title2',
                'description' => 'Description2',
                'bg_url' => 'http://clipart-library.com/images/di9KAoMjT.jpg',
            ],
        ];
        return view('projects.list', [
            'projects' => $projects,
        ]); // projects/lst.blade.php
    }

    public function create() {
        return view('projects.show'); // projects/show.blade.php
    }

    public function store(Request $request) {
        $validated_data = $request->validate([
            'name'          => 'required',
            'description'   => 'nullable',
            'image_url'     => 'nullable|url',
        ]);
        // dd($validated_data); // save to the database
        return redirect('/projects'); // GET
    }

    public function edit() {
        $project = [
            'id' => 1,
            'name' => 'Title1',
            'description' => 'Description1',
            'image_url' => null,
        ];
        return view('projects.edit', [
            'project'   => $project,
        ]); // projects/show.blade.php
    }

    public function update(Request $request) {
        $validated_data = $request->validate([
            'name'          => 'required',
            'description'   => 'nullable',
            'image_url'     => 'nullable|url',
        ]);
        // dd($validated_data); // update to the database
        return redirect('/projects'); // GET
    }
}
