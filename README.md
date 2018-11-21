# react-simple-input
A simple text input for React

**⚠️ Warning:** This package was built at a time where React was not as popular as it is today. I am deprecating as most of what this package offer is easily re-doable in a serious codebase.

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

| Property           | Description                                                                                                     | Type       | Default value                                                              |
|--------------------|-----------------------------------------------------------------------------------------------------------------|------------|----------------------------------------------------------------------------|
| className          | the classes you want to pass to the component intput                                                            | `String`   | `""`                                                                       |
| classNameContainer | the classes you want to pass to the component container                                                         | `String`   | `""`                                                                       |
| defaultValue       | the default value of your input                                                                                 | `String`   | `""`                                                                       |
| placeholder        | the placeholder you want for your input                                                                         | `String`   | `""`                                                                       |
| eventsTimeouts     | the time you want to wait before an event is thrown to you (usefull to avoid too many calls to onChange ect...) | Object     | `{     onChange: 0,     onKeyDown: 0,     onKeyUp: 0,     onKeyPress: 0 }` |
| clearButton        | Add a clear button to clear the input in one click                                                              | `Boolean`  | `false`                                                                    |
| selectOnClick      | select the input text when the input is clicked                                                                 | `Boolean`  | `false`                                                                    |
| onChange           | the function called when the input changes\*                                                                     | `Function` | `(e) => {}`                                                                |
| onKeyDown          | the function called when the input receives a keyDown event\*                                                    | `Function` | `(e) => {}`                                                                |
| onKeyUp            | the function called when the input receives a keyUp event\*                                                      | `Function` | `(e) => {}`                                                                |
| onKeyPress         | the function called when the input receives a keyPress event\*                                                   | `Function` | `(e) => {}`                                                                |
| onClick            | the function called when the input is clicked\*                                                                  | `Function` | `(e) => {}`                                                                |

\* the event returned is a React synthetic event. If you need the native event, use `e.nativeEvent`
