@extends('layouts.public')

@section("content")
<main class="flex-1 flex items-center justify-center p-4">
    <div class="card bg-base-100 shadow-xl w-full max-w-md">
      <div class="card-body">
        <h2 class="text-2xl font-bold text-center mb-6">Log in</h2>

        <form class="space-y-4" method="POST" action="{{ route('login') }}">
          @csrf
          <fieldset class="fieldset mb-4">
            <label class="fieldset-label" for="email">Email</label>
            <input id="email" type="email" name="email" class="input w-full @error('email') input-error @enderror" required autofocus>
            @error('email')
              <p class="text-sm text-error mt-1">{{ $message }}</p>
            @enderror
          </fieldset>

          <fieldset class="fieldset mb-4">
            <label class="fieldset-label" for="password">Password</label>
            <input id="password" type="password" name="password" class="input w-full @error('password') input-error @enderror" required>
            @error('password')
              <p class="text-sm text-error mt-1">{{ $message }}</p>
            @enderror
          </fieldset>

          <div class="flex justify-between items-center mb-6">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" name="remember" class="checkbox checkbox-sm checkbox-primary">
              <span class="text-sm">Remember me</span>
            </label>
            <a href="#" class="text-sm link link-primary">Forgot your password?</a>
          </div>

          <button type="submit" class="btn btn-primary w-full">Log in</button>
        </form>

        <p class="text-center text-sm mt-4 text-base-content/60">
          Don't have an account? <a href="register.html" class="link link-primary font-medium">Register</a>
        </p>
      </div>
    </div>
  </main>
@endsection

