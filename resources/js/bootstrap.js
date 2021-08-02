window._ = require('lodash');

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import 'bootstrap';
import 'popper.js';
import 'summernote';
window.jQuery = require('jquery')
window.$ = window.jQuery;
window.THREE = require('three')
    $.extend($, {
        put: function (url, data, callback, type) {
            // Shift arguments if data argument was omitted
            if (typeof data === "function") {
                type = type || callback;
                callback = data;
                data = undefined;
            }

            return $.ajax({
                type: "PUT",
                url: url,
                data: data,
                success: callback,
                dataType: type
            });
        },

        delete: function (url, data, callback, type) {
            // Shift arguments if data argument was omitted
            if (typeof data === "function") {
                type = type || callback;
                callback = data;
                data = undefined;
            }

            return $.ajax({
                type: "DELETE",
                url: url,
                data: data,
                success: callback,
                dataType: type
            });
        }
    })
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });
