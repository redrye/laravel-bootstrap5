import {Truck, View} from "../view";
import  * as Script from '../view';
export default {
    init: function() {
        $('#navbar').find('a:not(".dropdown-toggle"):not(".link")').on('click', function(e) {
            e.preventDefault();
            var url = e.currentTarget.href;
            var scriptPath = (new URL(url)).pathname.substr(1).split('/');
            for(var i = 0; i < scriptPath.length; i++) {
                scriptPath[i] = scriptPath[i][0].toUpperCase() + scriptPath[i].substr(1)
            }
            $.ajax({
                url: url,
                success: function(data) {
                    View.html(data);
                    if(scriptPath.length == 1) {
                        if(typeof Script[scriptPath[0]] != 'undefined') {
                            Script[scriptPath[0]].init()
                        }
                    } else {
                        Truck.Builder.init()
                    }
                }
            })
            /*View.load(url).after( function() {
                if(scriptPath.length == 1) {
                    Script[scriptPath[0]].init()
                } else {
                    Truck.Builder.init()
                }
            })*/

        })
    }
}
