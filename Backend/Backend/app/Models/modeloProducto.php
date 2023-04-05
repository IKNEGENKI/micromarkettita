<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class modeloProducto extends Model
{
    use HasFactory;

    protected $fillable = [
        'codprod',
        'codcat',
        'condinventario',
        'nombrepr',
        'marca',
        'descripcion',
        'precioventa',
        'preciocompra',
        'cantidadtotal',
        'image_path',
    ];
}
