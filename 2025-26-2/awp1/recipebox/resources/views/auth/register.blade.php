@extends('layouts.public')

@section('content')
<main class="flex-1 flex items-center justify-center p-4">
    <div class="card bg-base-100 shadow-xl w-full max-w-md">
        <div class="card-body">
        <h2 class="text-2xl font-bold text-center mb-6">Register</h2>

        <!-- method="POST" action="/register" -->
        <form method="POST" action="{{ route('register') }}">
            @csrf
            <fieldset class="fieldset mb-4">
            <label class="fieldset-label" for="name">Name</label>
            <input id="name" type="text" name="name" class="input w-full @error('name') is-invalid @enderror" required autofocus>
            @error('name')
                <span class="text-sm text-error mt-1" role="alert">
                    {{ $message }}
                </span>
            @enderror
            </fieldset>

            <fieldset class="fieldset mb-4">
            <label class="fieldset-label" for="email">Email</label>
            <input id="email" type="email" name="email" class="input w-full @error('email') is-invalid @enderror" required>
            @error('email')
                <span class="text-sm text-error mt-1" role="alert">
                    {{ $message }}
                </span>
            @enderror
            </fieldset>

            <fieldset class="fieldset mb-4">
            <label class="fieldset-label" for="password">Password</label>
            <input id="password" type="password" name="password" class="input w-full @error('password') is-invalid @enderror" required>
            @error('password')
                <span class="text-sm text-error mt-1" role="alert">
                    {{ $message }}
                </span>
            @enderror
            </fieldset>

            <fieldset class="fieldset mb-6">
            <label class="fieldset-label" for="password_confirmation">Confirm Password</label>
            <input id="password_confirmation" type="password" name="password_confirmation" class="input w-full @error('password_confirmation') is-invalid @enderror" required>
            @error('password_confirmation')
                <span class="text-sm text-error mt-1" role="alert">
                    {{ $message }}
                </span>
            @enderror
            </fieldset>

            <button type="submit" class="btn btn-primary w-full">Register</button>
        </form>

        <p class="text-center text-sm mt-4 text-base-content/60">
            Already registered? <a href="login.html" class="link link-primary font-medium">Log in</a>
        </p>
        </div>
    </div>
</main>
@endsection

