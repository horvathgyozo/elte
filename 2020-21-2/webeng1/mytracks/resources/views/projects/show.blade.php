@extends('layouts.base')

@section('content')

<h2>{{ $project->name }}</h2>
<div class="card w-100">
  <img src="{{ $project->image_url ?: 'https://cdn.dribbble.com/users/12015/screenshots/2131050/apple_music.png' }}" class="card-img-top float-right w-25">
  <div class="card-body">
    <h5 class="card-title">{{ $project->name }}</h5>
    <p class="card-text">{{ $project->description }}</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    <a href="{{ route('projects.edit', ['project' => $project->id]) }}" class="btn btn-secondary">Edit</a>
    <form action="{{ route('projects.destroy', ['project' => $project->id]) }}" method="post" class="d-inline">
      @csrf
      @method('delete')
      <button type="submit" class="btn btn-warning">Delete</button>
    </form>
  </div>
</div>
<a href="{{ route('projects.tracks.create', ['project' => $project->id]) }}" class="btn btn-primary">Add new track</a>
<ul class="list-group">
  
  @foreach ($project->tracks as $track)
    <li class="list-group-item list-group-item-action" style="background-color: {{ $track->color }}">
      <p class="d-flex justify-content-between align-items-center">
        <span> 
          {{ $track->name }}
          <small>{{ $track->filename }}</small>
        </span>
        <span class="badge badge-primary badge-pill">Muted</span>
      </p>
      <ul class="list-group list-group-horizontal">
        @foreach ($track->filters as $filter)
          <li class="list-group-item p-1">{{ $filter->name }}</li>
        @endforeach
      </ul>
      <a href="{{ route('tracks.edit', ['track' => $track->id]) }}" class="btn btn-secondary">Edit</a>
      <form action="{{ route('tracks.destroy', ['track' => $track->id]) }}" method="post" class="d-inline">
        @csrf
        @method('delete')
        <button type="submit" class="btn btn-warning">Delete</button>
      </form>
    </li>
  @endforeach

</ul>
    
@endsection