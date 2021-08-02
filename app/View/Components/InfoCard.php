<?php

namespace App\View\Components;

use Illuminate\View\Component;

class InfoCard extends Component
{
    protected $except = ['card'];
    /**
     * Create a new component instance.
     *
     * @return void
     */

    public function __construct(Card $card)
    {
       // $this->card = $card;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.card.info-card');
    }
}
