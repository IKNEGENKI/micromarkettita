<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\modeloTienda;
class tiendasController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return modeloTienda::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $tienda = new modeloTienda ($request->all());
        $tienda->save();
        return $tienda;
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return modeloTienda::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $tienda = modeloTienda::find($id);
        if(!is_null($tienda)){
            $tienda->update($request->all());
            return $tienda;
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $tienda = modeloTienda::find($id);
        $tienda->delete();
    }
}
