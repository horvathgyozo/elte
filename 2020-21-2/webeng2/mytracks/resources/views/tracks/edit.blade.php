@extends('layouts.base')

@section('content')
    
<div class="container py-3">
  <h2>Edit a track: {{ $track->name }}</h2>
  <form action="{{ route('tracks.update', ['track' => $track->id]) }}" method="POST">
    @csrf
    @method('PUT')

    <div class="form-group">
      <label for="name">Track name</label>
      <input type="text" class="form-control @error('name') is-invalid @enderror" name="name" id="name" placeholder=""
        value="{{ old('name', $track->name) }}">
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
      <input type="color" class="form-control @error('color') is-invalid @enderror" name="color" id="color" placeholder=""
        value="{{ old('color', $track->color) }}">
      @error('color')
        <div class="invalid-feedback">
          {{ $message }}
        </div>
      @enderror
    </div>

    <div class="form-group d-flex">
      @foreach ($filters as $filter)
        <div class="custom-control custom-switch col-sm-2">
          <input type="checkbox" class="custom-control-input" 
            name="filters[]"
            id="filter-{{ $filter->id }}"
            value="{{ $filter->id }}"
            @if ($track->filters->contains($filter))
              checked
            @endif
          >
          <label class="custom-control-label" for="filter-{{ $filter->id }}">{{ $filter->name }}</label>
        </div>
      @endforeach
    </div>


    <div class="form-group">
      <button type="submit" class="btn btn-primary">Save track</button>
    </div>

  </form>
</div>

@endsection