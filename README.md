# react-simple-input
A simple text input for React

### Options

| Property           | Description                                                                                             | Default value |
|--------------------|---------------------------------------------------------------------------------------------------------|---------------|
| className          | the classes you want to pass to the component intput                                                    | `''`            |
| classNameContainer | the classes you want to pass to the component container                                                 | `''`            |
| placeholder        | the placeholder you want for your input                                                                 | `''`            |
| changeTimeout      | the time you want to wait before onChange returns a value (usefull to avoid too many calls to onChange) | `0`             |
| clearButton        | Add a clear button to clear the input in one click                                                      | `false`         |
| selectOnClick      | select the input text when the input is clicked                                                         | `false`         |
| onChange           | the function called when the input changes                                                              | `() => {}`      |
| onClick            | the function called when the input is clicked                                                           | `() => {}`      |
