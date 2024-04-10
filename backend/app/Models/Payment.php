<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;

    // Specify the table if it's not the plural of the model name
    protected $table = 'payments';

    // Fillable fields for mass assignment
    protected $fillable = [
        'name', 'lastName', 'address', 'country', 
        'region', 'postalCode', 'cardNumber', 'monthYear', 'cvv'
    ];

}
