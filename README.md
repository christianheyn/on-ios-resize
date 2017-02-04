# on-ios-resize
**`window.oniosresize`**

Fires an event every time **after the window height resizes**, also after show/hide of adress-bar on mobile safari/chrome.

## Install
```sh
$ npm install on-ios-resize --save
```


## Usage
```js
require('on-ios-resize');

window.oniosresize = function (direction, viewHeight) {
	console.log(direction, viewHeight);
};
```

Parameter `direction` is `1` when window height increases, `-1` when window height decreases.


#### Tested?

If you have tested this package and it didn’t work for you, please create an issue [here](https://github.com/christianheyn/on-ios-resize/issues).

___

**Author**
[Christian Heyn](https://github.com/christianheyn)
