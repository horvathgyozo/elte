@extends('layouts.main')

@section('content')

    <div class="container py-3">
      <h2>New project</h2>
      <form action="/projects" method="post">
      <!-- HTTP methods: get, post, put, patch, delete -->
        @csrf
        
        <div class="form-group">
          <label for="name">Project name</label>
          <input value="{{ old('name', '') }}" type="text" name="name" class="form-control @error('name') is-invalid @enderror" id="name" placeholder="">
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
          <input value="{{ old('image_url', '') }}" type="text" name="image_url" class="form-control @error('image_url') is-invalid @enderror" id="image_url" placeholder="">
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
    </div>

@endsection