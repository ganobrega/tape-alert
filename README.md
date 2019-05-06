[![Tape Logo](https://img.icons8.com/color/200/000000/micropore-tape.png)](https://github.com/ganobrega/tape-alert)

# tape-alert
Simple inline alerts

![Tape](https://user-images.githubusercontent.com/4602864/57258888-256cac00-7034-11e9-8fb4-c21b1f06a681.png)

## Requirements
**jQuery** >= v2.1.0

## Installation
CSS: 
``` html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tape-alert/dist/tape-alert.css">
```
JS:
```html
<script src="https://cdn.jsdelivr.net/npm/tape-alert/dist/tape-alert.jquery.js"></script>
```

## Usage
``` javascript
$('#errors').tape({
    title: 'Error',
    text: ['Required fields are empty'],
    status: 'error',
});
```

## Options
``` javascript
{
    title: '',
    text: '', // Use string or array
    status: '' // error, success, info, warning. Default: error
}
```

## Credits
- [Tape icon by Icons8](https://icons8.com/icon/14845/tape)
