<div class="card mt-5 col-4 offset-7">
    <div class="card">
        <meta name="card-id" content="{{$view->cards[3]->id}}"/>
        <div class="card-header bg-info d-flex flex-row">
            <h4 class="card-title text-white text-center mx-auto">{{$view->cards[3]->title}}</h4>
            <x-auth-button-edit class="my-3">Edit</x-auth-button-edit></div>
        <div class="card-body d-flex flex-column">
            <x-link-button href="/contact" class="col-4 align-self-center">Contact Us</x-link-button>
        </div>
    </div>
</div>