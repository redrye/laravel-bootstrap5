import Builder from '../builder'
export default {
    Builder: {
        init: function() {
            console.log('inside builder function')
            Builder.init();
            Builder.animate();
        }
    }
}
