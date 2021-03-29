<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class TokenController extends Controller
{
    public function register(Request $request)
    {
        $data = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
            'name' => '',
        ]);
        $user = User::where('email', $data['email'])->first();
        if ($user) {
            throw ValidationException::withMessages([
                'email' => ['Existing user'],
            ]);
        }
        $data['password'] = Hash::make($data['password']);
        return User::create($data);
    }

    public function login(Request $request)
    {
        $data = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
        $user = User::where('email', $data['email'])->first();
        if (!$user || !Hash::check($data['password'], $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The credentials are not good'],
            ]);
        }

        $token = $user->createToken("token")->plainTextToken;
        return response()->json(['token' => $token], 200);
    }

    public function logout(Request $request)
    {
        $user = auth()->user();
        foreach ($user->tokens as $token) {
            $token->delete();
        }
        return response(['message' => 'Logout is successful'], 200);
    }
}
