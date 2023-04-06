<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\modeloctaegoria;

class categoriaseeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categoria = new categoria();
        $categoria -> codcat = '1';
        $categoria -> nombrecat = 'lacteo';
        $categoria -> save();

        $categoria1 = new categoria();
        $categoria1 -> codcat = '2';
        $categoria1 -> nombrecat = 'bebida';
        $categoria1 -> save();

        $categoria2 = new categoria();
        $categoria2 -> codcat = '3';
        $categoria2 -> nombrecat = 'snack';
        $categoria2 -> save();

        $categoria3 = new categoria();
        $categoria3 -> codcat = '4';
        $categoria3 -> nombrecat = 'embutido';
        $categoria3 -> save();
    }
}
