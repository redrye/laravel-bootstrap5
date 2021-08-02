<div {{ $attributes->merge(['class' => "collapse navbar-collapse", 'id' => "navbarSupportedContent"])}}>
    <nav class="navbar-nav navbar-expand mb-2 mb-lg-0 justify-content-around flex-grow-1">
        {{ $slot }}
    </nav>
</div>