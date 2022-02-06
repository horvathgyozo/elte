@extends('layouts.base')

@section('content')

  <h1>My projects</h1>
  <div class="row">

    @foreach ($projects as $project)
      <div class="col-sm-3 my-3">
        <div class="card h-100">
          <img src="{{ $project->image_url ?: 'https://cdn.dribbble.com/users/12015/screenshots/2131050/apple_music.png' }}" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">{{ $project->name }}</h5>
            <p class="card-text">{{ $project->description }}</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            <a href="{{ route('projects.show', ['project' => $project->id]) }}" class="btn btn-primary">Open</a>
          </div>
        </div>
      </div>
    @endforeach
    
    <div class="col-sm-3 my-3">
      <div class="card h-100">
        <a href="/projects/create" class="btn btn-secondary h-100 pt-5">Create a new project</a>
      </div>
    </div>

  </div>
    
@endsection