<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class modeloCategoria extends Model
{
    use HasFactory;

    
    protected $table = 'categoria';
    protected $primaryKey = 'codcat';
    protected $fillable = ['nombrecat'];
       
        /*
        public function categoria(){
            return $this->hasMany(categoria::class,'codcat');
        }*/
    
}