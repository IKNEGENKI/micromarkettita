<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class modeloCategoria extends Model
{
    use HasFactory;

    protected $fillable = [
        'codcat',
        'nombrecat',    
    ];
}