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

    }
}
