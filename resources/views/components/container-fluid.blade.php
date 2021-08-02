<x-flex {{ $attributes->merge([ 'class' => 'container-fluid mx-0 border-0']) }}
     style="background-image: url('{{ $attributes['bgSrc'] }}'); background-size: cover; background-repeat: no-repeat ">
    {{ $slot }}
</x-flex>