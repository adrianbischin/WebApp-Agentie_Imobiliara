<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Gdpr;

class GdprController extends Controller
{
    function uploadFile (Request $req)
    {
        $file = new Gdpr;
        $file = Gdpr::where('email', $req->email)->first();
        if(!$file)
        {
            $file = new Gdpr;
        }
        $file->file_name = $req->name;
        $file->email = $req->email;
        $file->data = $req->pdf;
        $result = $file->save();
        if ($result)
        {
            return response($file, 200);
        }
        else
        {
            return response(["Error"=>"Gdpr file upload failed"], 400);
        }
    }
}