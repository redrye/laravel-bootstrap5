<div class="dropdown">
    <button {{ $attributes->merge(['class' => "btn dropdown-toggle btn-dark", 'type' => 'button', 'data-bs-toggle'=>'dropdown', 'aria-expanded' => 'false']) }}>
        {{ $slot }}
    </button>
    <ul class="dropdown-menu" aria-labelledby="{{$attributes['id']}}">
        <li><x-navbar.dropdown-link href="#">Action</x-navbar.dropdown-link></li>
        <li><x-navbar.dropdown-link href="#">Another action</x-navbar.dropdown-link></li>
        <li><x-navbar.dropdown-link href="#">Something else here</x-navbar.dropdown-link></li>
    </ul>
</div>
