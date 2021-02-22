<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function index()
    {
        $name = 'Yariyeva';
        $projects = [
            [
                'id'=> 1,
                'name' => 'Project1',
                'description' => 'Description1',
                'bg_url' => '',
            ],
            [
                'id'=> 2,
                'name' => 'Project2',
                'description' => 'Description2',
                'bg_url' => 'http://web1.sthgrafton-h.schools.nsw.edu.au/wp-content/uploads/2015/08/MusicWorkShop-Image.jpg',
            ],
        ];
        return view('projects.list', [
            'name'  => $name,
            'projects'  => $projects,
        ]);
    }

    public function create()
    {
        return view('projects.create');
    }

    public function store(Request $request)
    {
        $validated_data = $request->validate([
            'name'        => 'required',
            'description' => 'nullable',
            'image_url'   => 'nullable|url'
        ]);
        // dd($validated_data);
        return redirect()->route('projects.list');
    }

    public function edit($id)
    {
        // dump($id);
        $project = [
            'id'=> 1,
            'name' => 'Project1',
            'description' => 'Description1',
            'image_url' => '',
        ];
        return view('projects.edit', [
            'project'   => $project,
        ]);
    }

    public function update($id, Request $request)
    {
        $validated_data = $request->validate([
            'name'        => 'required',
            'description' => 'nullable',
            'image_url'   => 'nullable|url'
        ]);
        // dump($validated_data);
        return redirect()->route('projects.list');
    }
}
