var OrientExpress = function (auto) {
   if (auto === undefined) {
       auto = true;
   }
   this.auto        = Boolean(auto);
   this.landscape   = false;
   this.portrait    = false;
   this.orientation = 'square';
   this.width       = 0;
   this.height      = 0;

   this.init();
};

OrientExpress.prototype.init = function () {
   var orientExpress = this;
   /**
    * When a page is reloaded set the orientation.
    */
   if (this.auto) {
       window.onresize = function() {
           orientExpress.setOrientation();
       };
       var resize = window.onresize;
   }
   this.setOrientation();
};

/**
* Sets the orientation.  Called when the window is resized or the object
* is initialised.
*/
OrientExpress.prototype.setOrientation = function() {

   this.height = Math.min(window.innerHeight, window.outerHeight);
   this.width = Math.min(window.innerWidth, window.outerWidth);

   if (this.width > this.height) {
       this.landscape   = true;
       this.portrait    = false;
       this.orientation = 'landscape';
   }
   else if (this.height > this.width) {
       this.landscape   = false;
       this.portrait    = true;
       this.orientation = 'portrait';
   }
   else {
       this.landscape   = false;
       this.portrait    = false;
       this.orientation = 'square';
   }
};

/**
* Gets the orientation.
*
* @return {string} `portrait`, `landscape`, or `square`.
*/
OrientExpress.prototype.getOrientation = function() {
   return this.orientation;
};

/**
* Returns true if the page is landscape.  Will return false if it is
* portrait or square.
*
* @return {Boolean}
*/
OrientExpress.prototype.isLandscape = function() {
   return this.landscape;
};

/**
* Returns true if the page is portrait.  Will return false if it is
* landscape or square.
*
* @return {Boolean}
*/
OrientExpress.prototype.isPortrait = function() {
   return this.portrait;
};
