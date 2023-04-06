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
        // Crea un nuevo usuario con los datos del formulario
    /*$tienda = new modeloTienda;
    $tienda->codTienda='TIT01';
    $tienda->nombre = $request->input();
    $tienda->Dirección = $request->input('direccion');
    $tienda->numero = $request->input('numero');
    $tienda->propietario = $request->input('Nombre del propietario');
    $tienda->correo = $request->input('Correo electronico');
    $tienda->Descripcion = $request->input('Descripción');
    */
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
