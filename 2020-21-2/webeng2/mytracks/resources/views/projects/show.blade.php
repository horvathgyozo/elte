@extends('layouts.base')

@section('content')
  <div class="container py-3">
    <h2>{{ $project->name }}</h2>
    <p>{{ $project->description }}</p>
    <a href="{{ route('projects.edit', ['project' => $project['id']]) }}" class="btn btn-secondary">Edit</a>
    <form action="{{ route('projects.destroy', ['project' => $project['id']]) }}" method="POST" class="d-inline">
      @csrf
      @method('DELETE')
      <button type="submit" class="btn btn-warning">Delete</button>
    </form>
    <a href="new-track.html" class="btn btn-primary">Add new track</a>
    <div class="list-group">
      <a href="#" class="list-group-item list-group-item-action" style="background-color: #bbb7b4">
        <p class="d-flex justify-content-between align-items-center">
          <span> 
            Track 1 
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

      <a href="#" class="list-group-item list-group-item-action" style="background-color: #ab7969">
        <p class="d-flex justify-content-between align-items-center">
          <span> 
            Track 1 
            <small>track1.wav</small>
          </span>
        </p>
        <ul class="list-group list-group-horizontal">
          <li class="list-group-item p-1">Cras justo odio</li>
          <li class="list-group-item p-1">Dapibus ac facilisis in</li>
          <li class="list-group-item p-1">Morbi leo risus</li>
        </ul>
      </a>
    </div>
  </div>
  
@endsection