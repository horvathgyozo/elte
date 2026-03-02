<!DOCTYPE html>
<html lang="en" data-theme="emerald">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>RecipeBox</title>
  @vite('resources/css/app.css')
</head>
<body class="min-h-screen flex flex-col bg-base-200">

  <!-- Navbar (Guest) -->
  <nav class="navbar bg-base-100 shadow-md px-4 lg:px-8">
    <div class="navbar-start">
      <a href="index.html" class="btn btn-ghost text-xl font-bold text-primary">RecipeBox</a>
    </div>
    <div class="navbar-end gap-2">
      <a href="login.html" class="btn btn-outline btn-primary btn-sm">Login</a>
      <a href="register.html" class="btn btn-primary btn-sm">Register</a>
    </div>
  </nav>

  @yield("content")

  <!-- Footer -->
  <footer class="footer footer-center bg-base-100 text-base-content p-6 mt-auto border-t border-base-300">
    <p>Copyright &copy; 2026 RecipeBox. All rights reserved.</p>
  </footer>

</body>
</html>
