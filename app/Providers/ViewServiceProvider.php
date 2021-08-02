<?php

namespace App\Providers;

use App\Http\View\Composers\Panel\InfoPanelComposer;
use App\Http\View\Composers\Panel\PanelComposer;
use App\Http\View\Creators\PanelCreator;
use App\View\Components\Card\Body;
use App\View\Components\Link;
use App\View\Components\Navbar\Dropdown;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class ViewServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        Blade::component('components.navbar.dropdown', Dropdown::class);
        Blade::component('components.navbar.link', Link::class);
        Blade::component('components.card.body', Body::class);

        //View Creators - These are implemented immediately during initialization of views
//        View::creator('components.panel', PanelCreator::class);

        // View Composers - These are implemented when the view is rendered.
     //   View::composer('components.panel', PanelComposer::class);
      //  View::composer('components.info-panel', InfoPanelComposer::class);
    }
}
