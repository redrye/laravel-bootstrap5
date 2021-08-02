import {Navbar, Button} from "../navigation";

export default {
    init: function() {
        $.ajaxSetup({headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}});
        Navbar.init()
        Button.init()
     //   Truck.Builder.init()
        $.extend(true, $.summernote, {
            dom: {
                ZERO_WIDTH_NBSP_CHAR: '\x20\x08',
            }
        });
        $('.card').fadeIn(function() {
            $(this).children().fadeIn(function() {
                $(this).on('click', 'button.btn-success', function(e) {
                    $(this).closest('.card').summernote({
                        toolbar: [
                            ['font', ['bold', 'underline']],
                            ['fontname', ['fontname']],
                            ['color', ['color']],
                            ['para', ['ul', 'ol', 'paragraph']],
                            ['insert', ['link', 'picture', 'video']],
                            ['view', ['fullscreen', 'codeview']],
                            ['mybutton', ['Save']]
                        ],
                        buttons: {
                            Save: function (context) {
                                var ui = $.summernote.ui;
                                var button = ui.button({
                                    contents: '<i class="fa fa-upload"></i>',
                                    tooltip: 'Save',
                                    click: function () {
                                        var panel = $(this).closest('.note-editor').siblings('.card')
                                        var code = panel.summernote('code');
                                        var header = $(code).find('.card-title').text();
                                        var body = $(code).find('.card-body');
                                        var id = $(this).closest('.note-editor').siblings('.card').find('meta').get(0).content;

                                        $.put('/cards/' + id , {
                                        }, function(success) {
                                            console.log(success);
                                            panel.summernote('destroy');
                                        });
                                    }
                                })
                                return button.render();
                            }
                        }
                    });
                })
            })
        })
    }
}
