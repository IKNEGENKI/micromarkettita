<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\models\modeloProducto;
class productoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return modeloProducto::all();
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
        $producto = new modeloProducto($request->all());
        $producto->save();
        return $producto;
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return modeloProducto::find($id);
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
        $producto = modeloProducto::find($id);
        if(!is_null($producto)){
            $producto->update($request->all());
            return $producto;
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $producto = modeloProducto::find($id);
        $producto->delete();
    }
}
