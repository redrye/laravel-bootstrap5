<div {{  $attributes->merge(['class' => 'card border-0']) }}>
    @isset($card)
    <meta name="card-id" content="{{$card->id}}"/>
    <x-card.header>
        <x-card.title>
            {{$card->title}}
        </x-card.title>
        <x-auth-button-edit class="my-3">Edit</x-auth-button-edit>
    </x-card.header>
    <x-card.body class="justify-content-between">
        {{ $card->contents }}
        {{ $slot }}
    </x-card.body>
    @else
        {{ $slot }}
    @endisset
</div>
