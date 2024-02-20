@extends('layouts.main')

@section('title', 'Project page')

@section('content')
    <div class="container py-3">
      <h2>{{ $project->name }}</h2>
      <a href="{{ route("projects.tracks.create", ["project" => $project->id]) }}" class="btn btn-primary">Add new track</a>
      <form action="/projects/{{ $project->id }}" method="post">
        @csrf
        @method("delete")
        <button type="submit" class="btn btn-secondary" style="display: inline-block">Delete</button>
      </form>
      
      <div class="list-group">
        @foreach ($project->tracks as $track)
          <a href="#" class="list-group-item list-group-item-action" style="background-color: {{ $track->color }}">
            <p class="d-flex justify-content-between align-items-center">
              <span> 
                {{$track->name}} 
                <small>track1.wav</small>
              </span>
              <span class="badge badge-primary badge-pill">Muted</span>
            </p>
            <ul class="list-group list-group-horizontal">
              <li class="list-group-item p-1">Cras justo odio</li>
              <li class="list-group-item p-1">Dapibus ac facilisis in</li>
              <li class="list-group-item p-1">Morbi leo risus</li>
            </ul>
          </a>
        @endforeach

      </div>
    </div>
@endsection