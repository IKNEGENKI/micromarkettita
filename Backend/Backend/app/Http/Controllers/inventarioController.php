<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\models\inventario;
class inventarioController extends Controller
{
   
    public function index()
    {
        return modeloInventario::all();
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return modeloInventario::find($id);
    }

    
    /**
     * Update 
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * delete
     */
    public function destroy(string $id)
    {
        //
    }
}
