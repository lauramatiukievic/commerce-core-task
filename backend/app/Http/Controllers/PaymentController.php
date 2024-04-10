<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Payment;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class PaymentController extends Controller
{
    public function store(Request $request)
    {
        Log::info('Received payment information');

        // Define your validation rules
        $rules = [
            'name' => 'required|string|max:255',
            'lastName' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'country' => 'required|string|max:255',
            'region' => 'required|string|max:255',
            'postalCode' => 'required|string|max:255',
            // 'cardNumber', 'monthYear', and 'cvv' can be nullable
            'cardNumber' => 'nullable|string|max:19',
            'monthYear' => 'nullable|string|max:5',
            'cvv' => 'nullable|string|max:4',
        ];

        $validator = Validator::make($request->all(), $rules);

        // Check if validation fails
        if ($validator->fails()) {
            Log::error('Validation failed for payment information');
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Validation passed, create a new payment record
        $paymentData = $validator->validated();
        $payment = Payment::create($paymentData);

        Log::info('Payment information saved successfully');

        // Return a successful response
        return response()->json([
            'message' => 'Payment successfully processed',
            'data' => $payment,
        ], 201);
    }
}
