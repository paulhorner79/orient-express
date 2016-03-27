# Yogi Bearings

> It's smarter than the average bear(ings)

Load this and it will help you get your bearings by telling you if the page is
Landscape, Portrait, or Square.

I know that there are other libraries out there that do this, and probably do
it just as well or maybe even better.  But how many of those are named after a
cartoon bear?

## Quickstart

You basically need to include the `/dist/yogi.min.js` file on your page and it
will create an object called `yogi`.  This object contains the following
properties:

- `yogi.width`       - the width of the window
- `yogi.height`      - the height of the window
- `yogi.landscape`   - returns `true` if it's landscape, `false` if it isn't *
- `yogi.portrait`    - returns `true` if it's portrait, `false` if it isn't *
- `yogi.orientation` - returns `landscape`, `portrait`, or `square`.

**Please note - `yogi.landscape` and `yogi.portrait` will return `false` if
the page is square.*

The orientation values will be updated automatically when the page is loaded,
and whenever the window size changes.  You don't need to do anything else to
the page.

## API

While not strictly necessary, the library also contains some API methods.

These can be called using the following:

```
var orientation = yogi.getOrientation();
```

### `.getOrientation();`

Returns `landscape`, `portrait`, or `square`.

### `.isLandscape();`

Returns `true` if it's landscape, `false` if it isn't.

### `.isPortrait();`

Returns `true` if it's portrait, `false` if it isn't.
