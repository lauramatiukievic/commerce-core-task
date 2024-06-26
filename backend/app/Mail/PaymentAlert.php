<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class PaymentAlert extends Mailable
{
    use Queueable, SerializesModels;
    
    public $payments;

    /**
     * Create a new message instance.
     */
    public function __construct($payments)
    {
        $this->payments = $payments;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return (new Envelope)
                    ->subject('Payment Alert')
                    ->from('no-reply@example.com', 'Application Name')
                    ->to(env('MAIL_PAYMENT_ALERT', 'alert@example.com'));
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            markdown: 'emails.payment_alert',
            with: [
                'payments' => $this->payments
            ]
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
