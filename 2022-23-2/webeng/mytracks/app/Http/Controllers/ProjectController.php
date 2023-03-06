<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function index() {
        $projects = [
            [
                "title" => "project1",
                "description" => "desc1",
            ],
            [
                "title" => "project2",
                "description" => "desc2",
            ],
        ];
        return view('projects.list', [
            "projects" => $projects,
        ]); //projects/list.blade.php
    }
}
