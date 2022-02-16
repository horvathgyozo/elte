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
}
