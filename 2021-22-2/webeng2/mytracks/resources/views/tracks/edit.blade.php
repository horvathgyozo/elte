@extends('layouts.main')

@section('content')

    <div class="container py-3">
      <h2>Edit a track</h2>
      <form action="{{ route('tracks.update', ['track' => $track->id]) }}"
        method="post"
      >
        @csrf
        @method('PUT')
        
        <div class="form-group">
          <label for="name">Track name</label>
          <input type="text" class="form-control" name="name" id="name" placeholder=""
            value="{{ $track->name }}"
          >
          <div class="invalid-feedback">
            Please choose a username.
          </div>
        </div>

        <div class="form-group">
          <label for="file">Audio file</label>
          <input type="file" class="form-control-file" name="filename" id="file" placeholder="">
          <div class="invalid-feedback">
            Please choose a username.
          </div>
        </div>

        <div class="form-group">
          <label for="color">Color</label>
          <input type="color" class="form-control" name="color" id="color" placeholder=""
            value="{{ $track->color }}"
          >
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