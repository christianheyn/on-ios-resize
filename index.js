(function (factory) {
    if (typeof exports === 'object') {
        // npm
        module.exports = factory;
    }
}(function () {
    var currentHeight = 0,
        timeout,
        callbackCollection = [];

    if (typeof window.oniosresize !== 'undefined') {
        return false;
    }

    Object.defineProperty(window,'oniosresize',{
        set: function(callback){
            if (typeof callback === 'function') {
                callbackCollection.push(callback);
            }
        },

        get: function() {
            return 'Use window.oniosresize = function() {/* ... */};';
        }
    });

    var tester = document.createElement('div'),
        checkResize = function () {
            var heightNow = tester.offsetHeight;

            // is bigger
            if (heightNow > currentHeight) {
                currentHeight = heightNow;
                return {
                    direction: 1,
                    viewHeight: heightNow
                };
            }

            // is smaller
            if (heightNow < currentHeight) {
                currentHeight = heightNow;
                return {
                    direction: -1,
                    viewHeight: heightNow
                };
            }

            return false;
        };

    tester.setAttribute('style', [
        'position:fixed',
        'display: block',
        'top: 0',
        'bottom: 0',
        'z-index: -1'
    ].join(';'));

    document.body.appendChild(tester);
    currentHeight = tester.offsetHeight;

    window.onscroll = function () {
        window.clearTimeout(timeout);
        timeout = window.setTimeout(function () {
            var i = 0,
                result = checkResize();

            if (typeof result === 'object') {
                for (i; i < callbackCollection.length; i += 1) {
                    if ( typeof callbackCollection[i] === 'function') {
                        callbackCollection[i](result.direction, result.viewHeight);
                    }
                }
            }
        }, 100);
    };

    return window.oniosresize;
}()));