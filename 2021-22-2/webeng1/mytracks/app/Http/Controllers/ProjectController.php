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
}
