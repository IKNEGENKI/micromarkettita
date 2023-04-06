<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class modeloProducto extends Model
{
    use HasFactory;

    protected $fillable = [
        'codProd',
        'nombreProd',    
        'marca',
        'precio',
        'categoria',
        'descripcion',
        'imagen',

    ];
}