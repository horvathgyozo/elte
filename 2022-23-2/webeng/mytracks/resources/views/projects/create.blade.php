@extends('layouts.main')

@section('title', 'New project page')

@section('content')
  <div class="container py-3">
    <h2>New project</h2>
    <form action="/projects" method="post">
      @csrf

      <div class="form-group">
        <label for="name">Project name</label>
        <input type="text" 
              class="form-control @error('name') is-invalid @enderror" 
              name="name" 
              placeholder=""
              value="{{ old('name', '') }}"
        >
        @error('name')
          <div class="invalid-feedback">
            Please choose a username.
          </div>
        @enderror
      </div>
      
      <div class="form-group">
        <label for="description">Description</label>
        <textarea class="form-control @error('description') is-invalid @enderror" name="description" rows="3">{{ old('description', '') }}</textarea>
        @error('description')
          <div class="invalid-feedback">
            Please choose a username.
          </div>
        @enderror
      </div>
      
      <div class="form-group">
        <label for="image_url">Background image URL</label>
        <input type="text" class="form-control @error('image_url') is-invalid @enderror" name="image_url" placeholder=""
          value="{{ old('image_url', '') }}"
        >
        @error('image_url')
          <div class="invalid-feedback">
            Please choose a username.
          </div>
        @enderror
      </div>

      <div class="form-group">
        <button type="submit" class="btn btn-primary">Add new project</button>
      </div>

    </form>
  </div>
@endsection