<?php

namespace App\View\Components;

use Illuminate\View\Component;

class Flex extends Component
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
            <div {{ $attributes->merge([ 'class' => 'd-flex']) }}>
                {{ $slot }}
            </div>
        blade;

    }
}
