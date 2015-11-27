# react-simple-input
A simple text input for React

### Description

react-simple-input is a small text input component with some utilities, like a timeOut before onChange is triggered, a clear button... If there is any feature you want, please open an issue.

### Examples

Import it in your project:
``` javascript
import SimpleInput from 'react-simple-input'; // ES6
var SimpleInput = require('react-simple-input'); // ES5
```

Classic input with a placeholder
``` JSX
<SimpleInput placeholder='search' />
```

Classic input with a default value and a clear button
``` JSX
<SimpleInput defaultValue='a default value' clearButton />
```

Input with an onChange function, executing it 250ms after input change
``` JSX
<SimpleInput changeTimeout={250} onChange={ (value) => { console.log(value) } } />
```

For other props, see options.


### Options

| Property           | Description                                                                                             | Default value |
|--------------------|---------------------------------------------------------------------------------------------------------|---------------|
| className          | the classes you want to pass to the component intput                                                    | `''`            |
| classNameContainer | the classes you want to pass to the component container                                                 | `''`            |
| defaultValue       | the default value of your input                                                                         | `''`            |
| placeholder        | the placeholder you want for your input                                                                 | `''`            |
| changeTimeout      | the time you want to wait before onChange returns a value (usefull to avoid too many calls to onChange) | `0`             |
| clearButton        | Add a clear button to clear the input in one click                                                      | `false`         |
| selectOnClick      | select the input text when the input is clicked                                                         | `false`         |
| onChange           | the function called when the input changes                                                              | `() => {}`      |
| onClick            | the function called when the input is clicked                                                           | `() => {}`      |
