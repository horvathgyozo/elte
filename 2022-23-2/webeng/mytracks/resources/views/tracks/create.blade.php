@extends('layouts.main')

@section('title', 'New track page')

@section('content')

<div class="container py-3">
      <h2>New track</h2>
      <form action="{{ route("projects.tracks.store", ["project" => $project->id]) }}" method="post">
        @csrf
        
        <div class="form-group">
          <label for="name">Track name</label>
          <input type="text" class="form-control" id="name" placeholder="">
          <div class="invalid-feedback">
            Please choose a username.
          </div>
        </div>

        <div class="form-group">
          <label for="file">Audio file</label>
          <input type="file" class="form-control-file" id="file" placeholder="">
          <div class="invalid-feedback">
            Please choose a username.
          </div>
        </div>

        <div class="form-group">
          <label for="color">Color</label>
          <input type="color" class="form-control" id="color" placeholder="">
          <div class="invalid-feedback">
            Please choose a username.
          </div>
        </div>

        <div class="form-group d-flex">
            <div class="custom-control custom-switch col-sm-2">
              <input type="checkbox" class="custom-control-input" id="customSwitch1">
              <label class="custom-control-label" for="customSwitch1">Toggle this switch element</label>
            </div>
            <div class="custom-control custom-switch col-sm-2">
              <input type="checkbox" class="custom-control-input" id="customSwitch2">
              <label class="custom-control-label" for="customSwitch2">Toggle this switch element</label>
            </div>
        </div>


        <div class="form-group">
          <button type="submit" class="btn btn-primary">Add new track</button>
        </div>

      </form>
    </div>

@endsection