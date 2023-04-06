<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\modeloCategoria;

class categoriaController extends Controller
{
   
    public function index()
    {
        return modeloCategoria::all();
    }
    /**
     * Store  
     */
    public function store(Request $request)
    {
        $categoria = new modeloCategoria ($request->all());
        $categoria->save();
        return $categoria;
    }

    /**
     * Display 
     */
    public function show(string $id)
    {
        return modeloCategoria::find($id);
    }

    

    /**
     * Update 
     */
    public function update(Request $request, string $id)
    {
        $categoria = modeloCategoria::find($id);
        if(!is_null($categoria)){
            $categoria->update($request->all());
            return $categoria;
        }
    }

    /**
     * delete
     */
    public function destroy(string $id)
    {
        $categoria = modeloCategoria::find($id);
        $categoria->delete();
    }
}
