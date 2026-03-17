<!DOCTYPE html>
<html lang="en" data-theme="emerald">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>RecipeBox</title>
  @vite('resources/css/app.css')
</head>
<body class="min-h-screen flex flex-col bg-base-200">

  @guest
  <!-- Navbar (Guest) -->
  <nav class="navbar bg-base-100 shadow-md px-4 lg:px-8">
    <div class="navbar-start">
      <a href="/" class="btn btn-ghost text-xl font-bold text-primary">RecipeBox</a>
    </div>
    <div class="navbar-end gap-2">
      <a href="/login" class="btn btn-outline btn-primary btn-sm">Login</a>
      <a href="/register" class="btn btn-primary btn-sm">Register</a>
    </div>
  </nav>
  @endguest

  @auth
  <nav class="navbar bg-base-100 shadow-md px-4 lg:px-8">
    <div class="navbar-start">
      <a href="dashboard.html" class="btn btn-ghost text-xl font-bold text-primary">RecipeBox</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal gap-1">
        <li><a href="dashboard.html">Home</a></li>
        <li><a href="my-recipes.html" class="menu-active font-medium">My Recipes</a></li>
        <li><a href="favourites.html">Favourites</a></li>
        <li><a href="my-categories.html">My Categories</a></li>
        <li><a href="{{ route('recipes.create') }}">+ Add Recipe</a></li>
      </ul>
    </div>
    <div class="navbar-end">
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar avatar-placeholder">
          <div class="bg-primary text-white rounded-full w-10"><span class="text-lg">JD</span></div>
        </div>
        <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-lg mt-2">
          <li class="menu-title"><span>{{ Auth::user()->name }}</span></li>
          <li><a href="my-recipes.html">My Recipes</a></li>
          <li><a href="favourites.html">Favourites</a></li>
          <li><a href="my-categories.html">My Categories</a></li>
          <li class="border-t border-base-300 mt-1 pt-1">
            <form method="POST" action="{{ route('logout') }}">
              @csrf
              <button type="submit" class="w-full text-left">Logout</button>
            </form>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  @endauth

  @yield("content")

  <!-- Footer -->
  <footer class="footer footer-center bg-base-100 text-base-content p-6 mt-auto border-t border-base-300">
    <p>Copyright &copy; 2026 RecipeBox. All rights reserved.</p>
  </footer>

</body>
</html>
