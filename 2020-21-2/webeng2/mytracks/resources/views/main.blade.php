@extends('layouts.base')

@section('content')

    <div class="jumbotron">
      <h1 class="display-4">MyTracks</h1>
      <p class="lead">A place where you can store, edit and view your music projects.</p>
      <p class="lead">There are {{ $numberOfProjects }} music projects in this application.</p>
      <hr class="my-4">
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </div>

@endsection