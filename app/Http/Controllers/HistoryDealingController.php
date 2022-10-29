<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\historyDealing;
use App\Models\Product;

class HistoryDealingController extends Controller
{
    public function hisdeal(){
        $his = historyDealing::all();
        return response()->json(
            [
             'history_dealings' => $his,
             'message' => 'historyDealing',
             'code' => 200
        ]
    );
}

   public function innerJoin(){
        $result = DB::table('products')
        ->join('history_dealings','products.id','=','history_dealings.product_id')
        ->select('products.name')
        ->get();
        return response()->json(
            [
             'history_dealings' => $result,
             'message' => 'historyDealing',
             'code' => 200
        ]);

     }  
    


}