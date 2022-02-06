@extends('layouts.base')

@section('content')

  <h2>New project</h2>
  <form action="{{ route('projects.store') }}" method="POST">
    @csrf

    <div class="form-group">
      <label for="name">Project name</label>
      <input name="name" type="text" class="form-control @error('name') is-invalid @enderror" id="name" placeholder=""
        value="{{ old('name', '') }}" >
      @error('name')
        <div class="invalid-feedback">
          {{ $message }}
        </div>
      @enderror
    </div>

    <div class="form-group">
      <label for="description">Description</label>
      <textarea name="description" class="form-control @error('description') is-invalid @enderror" id="description" rows="3">{{ old('description', '') }}</textarea>
      @error('description')
        <div class="invalid-feedback">
          {{ $message }}
        </div>
      @enderror
    </div>

    <div class="form-group">
      <label for="image_url">Background image URL</label>
      <input name="image_url" type="text" class="form-control @error('image_url') is-invalid @enderror" id="image_url" placeholder=""
        value="{{ old('image_url', '') }}">
      @error('image_url')
        <div class="invalid-feedback">
          {{ $message }}
        </div>
      @enderror
    </div>

    <div class="form-group">
      <button type="submit" class="btn btn-primary">Add new project</button>
    </div>

  </form>

@endsection