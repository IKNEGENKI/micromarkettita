<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class lotesController extends Controller
{

    public function index()
    {
        return modeloLote::all();
    }
    
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $lote = new modeloLote ($request->all());
        $lote->save();
        return $lote;
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return modeloLote::find($id);
    }

    
    /**
     * Update 
     */
    public function update(Request $request, string $id)
    {
        $lote = modeloLote::find($id);
        if(!is_null($lote)){
            $lote->update($request->all());
            return $lote;
        }
    }

    /**
     * delete
     */
    public function destroy(string $id)
    {
        $lote = modeloLote::find($id);
        $lote->delete();
    }
}