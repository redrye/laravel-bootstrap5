<?php

namespace App\View\Components\Navbar;

use Illuminate\View\Component;

class DropdownLink extends Component
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
<a {{ $attributes->merge([ 'class' => 'dropdown-item', 'role' => 'button' ]) }}>
    {{ $slot }}
</a>
blade;

    }
}
