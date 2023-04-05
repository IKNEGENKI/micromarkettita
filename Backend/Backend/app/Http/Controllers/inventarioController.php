<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\modeloInventario;
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
        $inventario = new modeloInventario($request->all());
        $inventario -> save();
        return $inventario;
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return modeloInventario::find($id);
    }

    

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $inventario = modeloInventario::find($id);
        if(!is_null($inventario)){
            $inventario->update($request->all());
            return $inventario;

        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $inventario = modeloinventario::find($id);
        $inventario->delete();
    }
}
