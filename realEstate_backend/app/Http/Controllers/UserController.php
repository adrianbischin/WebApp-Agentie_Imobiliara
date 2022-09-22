<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    function register(Request $req)
    {
        if ($req->input('name')!="" && $req->input('email')!="" && $req->input('password')!="" && $req->input('role')!="")
        {
            $user = new User;
            $user->name = $req->input('name');
            $user->email = $req->input('email');
            $user->password = Hash::make($req->input('password'));
            if($req->input('role') == 'agent')
                $user->is_agent = true;
            else if($req->input('role') == 'client')
                $user->is_agent = false;
            else
                return response(["Error"=>"Invalid role"], 400);
            $user->save();
            return response($user, 200);
        }
        return response(["Error"=>"Invalid request"], 400);
    }

    function login (Request $req)
    {
        $user = User::where('email', $req->email)->first();
        if (!$user || !Hash::check($req->password, $user->password))
        {
            return response(["Error"=>"Invalid email or password!"], 401);
        }
        return response($user, 200);
    }

    function updateInfo (Request $req)
    {
        $user = User::where('email', $req->oldEmail)->first();
        if(!$user)
        {
            return response(["Error"=>"User not found"], 404);
        }
        $user->name = $req->name;
        $user->email = $req->email;
        $result = $user->save();
        if ($result)
        {
            return response($user, 200);
        }
        else
        {
            return response(["Error"=>"User info update failed"], 400);
        }
    }
}
