<?php

namespace App\View\Components\Card;

use Illuminate\View\Component;

class Title extends Component
{
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return <<< 'blade'
            <h4 {{ $attributes->merge(['class' => "card-title text-white text-center mx-auto my-0"])}}>
    {{ $slot }}
</h4>
blade;

    }
}
