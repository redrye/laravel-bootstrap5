<div {{ $attributes->merge(['class' => 'card'])}}>
    <x-card.card :card="$card">
        @if(isset($buttonhref))
            <x-link-button class="align-self-end" href="{{ $buttonhref }}"> {{ $buttontext }} <i class="fa fa-arrow-right"></i></x-link-button>
        @endif
    </x-card.card>
</div>
