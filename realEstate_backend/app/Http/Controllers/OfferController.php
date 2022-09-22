<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Offer;

class OfferController extends Controller
{
    function addOffer (Request $req)
    {
        $offer = new Offer;
        $offer->email = $req->email;
        $offer->title = $req->title;
        $offer->date = $req->date;
        $offer->description = $req->description;
        $offer->image = $req->image;
        $result = $offer->save();
        if ($result)
        {
            return response($offer, 200);
        }
        else
        {
            return response(["Error"=>"Offer adding failed"], 400);
        }
    }
}
