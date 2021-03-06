<?php

namespace App\View\Components\Card;

use Illuminate\View\Component;

class Header extends Component
{

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct()
    {

    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return <<< 'blade'
<x-flex-row {{ $attributes->merge(['class' => 'card-header bg-info']) }}>
    {{ $slot }}
</x-flex-row>
blade;

    }
}
