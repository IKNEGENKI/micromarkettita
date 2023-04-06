<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class modeloOferta extends Model
{
    use HasFactory;

    protected $fillable = [
        'codOferta',
        'codprod',
        'descripcion',
        'fechaIni',
        'fechaFin',
        'precioVenta',
    ];
}
