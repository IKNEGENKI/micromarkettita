<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\modeloOferta;

class ofertaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return modeloOferta::all();
    }

   

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $oferta = new modeloOferta ($request->all());
        $oferta->save();
        return $oferta;
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return modeloOferta::find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        return modeloOferta::find($id);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $oferta = modeloOferta::find($id);
        $oferta->delete();
    }
}
