<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\models\modeloLote;
class lotesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return modeloLote::all();
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
        $lote = modeloLote::find($id);
        if(!is_null($lote)){
            $lote->update($request->all());
            return $lote;
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $lote = modeloLote::find($id);
        $lote->delete();
    }
}
