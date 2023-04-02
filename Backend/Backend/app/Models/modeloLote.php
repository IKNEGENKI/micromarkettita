<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class modeloLote extends Model
{
    use HasFactory;

    protected $fillable = [
        'codlote',
        'codprod',
        'fechaentrada',
        'fechavencimiento',
        'cantidad',
    ];
}