# on-ios-resize
**`window.oniosresize`**

Fires an event everytime **after the window _height_ resized**, also on show or hide adress-bar on mobile safari/chrome.

## Install
```sh
$ npm install on-ios-resize --save
```


## Usage
```js
require('on-ios-resize');

window.oniosresize = function (direction) {
	console.log(direction);
};
```

Parameter `direction` is `1` if window height becomes bigger, `-1` if window height becomes smaller.


#### Tested?
If you tested this package and it dosn't worked for you, please create an issue [here](https://github.com/christianheyn/on-ios-resize/issues).

___

**Author**
[Christian Heyn](https://github.com/christianheyn)
