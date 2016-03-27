(function () {

    'use strict';

    var Yogi = function (element) {
        this.landscape   = false;
        this.portrait    = false;
        this.orientation = 'square';
        this.width       = 0;
        this.height      = 0;

        this.init();
    };

    Yogi.prototype.init = function () {
        this.setOrientation();
    };

    /**
     * Sets the orientation.  Called when the window is resized or the object
     * is initialised.
     */
    Yogi.prototype.setOrientation = function() {

        this.height = Math.min(window.innerHeight, window.outerHeight);
        this.width = Math.min(window.innerWidth, window.outerWidth);

        if (this.width >= this.height) {
            this.landscape   = true;
            this.portrait    = false;
            this.orientation = 'landscape';
        }
        else if (this.height <= this.width) {
            this.landscape   = false;
            this.portrait    = true;
            this.orientation = 'portrait';
        }
        else {
            this.landscape   = false;
            this.portrait    = false;
            this.orientation = 'square';
        }
        return this.orientation;
    };

    /**
     * Gets the orientation.
     *
     * @return {string} `portrait`, `landscape`, or `square`.
     */
    Yogi.prototype.getOrientation = function() {
        return this.orientation;
    };

    /**
     * Returns true if the page is landscape.  Will return false if it is
     * portrait or square.
     *
     * @return {Boolean}
     */
    Yogi.prototype.isLandscape = function() {
        return this.landscape;
    };

    /**
     * Returns true if the page is portrait.  Will return false if it is
     * landscape or square.
     *
     * @return {Boolean}
     */
    Yogi.prototype.isPortrait = function() {
        return this.portrait;
    };

    /**
     * When a page is reloaded set the orientation.
     */
    window.onresize = function() {
        yogi.setOrientation();
        console.log(yogi);
    };

    // call the resize method when the app is first loaded
    var yogi = new Yogi();
    var resize = window.onresize;
    resize();
})();