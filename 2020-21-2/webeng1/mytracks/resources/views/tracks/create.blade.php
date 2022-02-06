@extends('layouts.base')

@section('content')

<h2>New track</h2>
<form action="{{ route('projects.tracks.store', ['project' => $project_id]) }}" method="POST">
  @csrf
  <div class="form-group">
    <label for="name">Track name</label>
    <input type="text" class="form-control @error('name') is-invalid @enderror" 
        name="name" id="name" placeholder="" value="{{ old('name', '') }}">
    @error('name')
      <div class="invalid-feedback">
        {{ $message }}
      </div>
    @enderror
  </div>

  <div class="form-group">
    <label for="file">Audio file</label>
    <input type="file" class="form-control-file" name="file" id="file" placeholder="">
    <div class="invalid-feedback">
      Please choose a username.
    </div>
  </div>

  <div class="form-group">
    <label for="color">Color</label>
    <input type="color" class="form-control" name="color" id="color" placeholder="">
    <div class="invalid-feedback">
      Please choose a username.
    </div>
  </div>

  <div class="form-group d-flex">
    @foreach ($filters as $filter)
      <div class="custom-control custom-switch col-sm-2">
        <input type="checkbox" class="custom-control-input" 
          name="filters[]"
          id="filter-{{$filter->id}}"
          value="{{$filter->id}}"
        >
        <label class="custom-control-label" for="filter-{{$filter->id}}">{{$filter->name}}</label>
      </div>
    @endforeach
  </div>


  <div class="form-group">
    <button type="submit" class="btn btn-primary">Add new track</button>
  </div>

</form>


@endsection