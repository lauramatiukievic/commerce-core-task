<?php

use App\Mail\PaymentAlert;
use App\Models\Payment;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;

Schedule::call(function () {
    Log::info('Looking for orders with 5 mins passed since creation date');
    $oldPayments = Payment::where('created_at', '<=', now()->subMinutes(5))->get();

    if ($oldPayments->isNotEmpty()) {
        Log::info('Found some orders with 5 mins passed since creation date');
        $email = new PaymentAlert($oldPayments);
        Mail::to(env('MAIL_PAYMENT_ALERT', 'default@example.com'))->send($email);
    }
})->everyFifteenSeconds();