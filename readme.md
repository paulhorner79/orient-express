# Orient Express

Load this and it will quickly tell you the orientation of your page.  It will
let you know if it's Landscape, Portrait, or Square.

I know that there are other libraries out there that do this, and probably do
it just as well or maybe even better.

## Quickstart

You basically need to include the `/dist/orientexpress.min.js` file on your
page, and then invoke a new OrientExpress object.

```javascript
var ox = new OrientExpress();
```

This object contains the following properties:

- `.width`       - the width of the window
- `.height`      - the height of the window
- `.landscape`   - returns `true` if it's landscape, `false` if it isn't *
- `.portrait`    - returns `true` if it's portrait, `false` if it isn't *
- `.orientation` - returns `landscape`, `portrait`, or `square`.

**Please note - `.landscape` and `.portrait` will return `false` if the page is square.*

## Options

By default, the orientation values will be updated automatically when the page
is loaded and whenever the window size changes.  If you don't want it to
refresh when the page is resized, pass `false` when invoking the new object.

```javascript
var ox = new OrientExpress(false);
```

## API

While not strictly necessary, the library also contains some API methods.

These can be called using the following:

```javascript
var ox = new OrientExpress();
var orientation = ox.getOrientation();
```

### `.getOrientation();`

Returns `landscape`, `portrait`, or `square`.

### `.isLandscape();`

Returns `true` if it's landscape, `false` if it isn't.

### `.isPortrait();`

Returns `true` if it's portrait, `false` if it isn't.

## Tests

This uses QUnit for testing.  The tests can be checked by running
`./test/index.html`.  These are not currently tested during the build process
as the browser resize testing requires further input to work with the Phantom
library.

## About

I built this module because I've copied and pasted the same code into three or
four projects and thought it would make sense to have a single, usable library
that I could just import when I needed it.

Originally I was going to call this **"Yogi Bearings"**, but I realised that
would cause confusion because while "bearings" is a synonym of "orientation",
it doesn't *really* mean the same thing.  And there are already npm modules
called "yogi", so there could be some confusion there too. (There are also some
modules called both "orient" and "express", but I think this is OK).
