import React, { Component } from 'react';



class Input extends Component {

    constructor(props) {

        super(props);
        this.state = {
            value : ''
        }
    }

    render() {

        var clearButton = false;

        if(this.props.clearButton && this.state.value !== '') {
            clearButton = <div className='react-simple-input-clear' onClick={ this.clear.bind(this) }>&times;</div>
        }


        return (
            <div className={ 'react-simple-input-container ' + this.props.classNameContainer }>
                <input
                    type='text'
                    defaultValue={ this.props.defaultValue }
                    className={ 'react-simple-input ' + this.props.className }
                    placeholder={ this.props.placeholder }
                    ref='input'
                    onChange={ this.change.bind(this) }
                    onClick={ this.select.bind(this) } />
                { clearButton }
            </div>
        );
    }

    select() {
        if(this.props.selectOnClick) this.refs.input.select();
        this.props.onClick();
    }

    change() {
        var self = this;
        var now  = window.performance.now();

        if(now - this.lastFilterSearch < this.props.changeTimeout) {
            clearTimeout(this.filterSearchTimeOut);
        }

        this.lastFilterSearch = now;

        var value = self.refs.input.value;
        self.setState({ value : value });

        this.filterSearchTimeOut = setTimeout(function() {
            self.props.onChange(value);
        }, this.props.changeTimeout);
    }

    clear() {
        this.refs.input.value = '';
        this.change.call(this);
    }
}

Input.defaultProps = {
        className          : '',
        classNameContainer : '',
        defaultValue       : '',
        placeholder        : '',
        changeTimeout      : 0,
        clearButton        : false,
        selectOnClick      : false,
        onChange           : () => {},
        onClick            : () => {}
};

Input.propTypes = {
    className          : React.PropTypes.string,
    classNameContainer : React.PropTypes.string,
    defaultValue       : React.PropTypes.string,
    placeholder        : React.PropTypes.string,
    changeTimeout      : React.PropTypes.number,
    clearButton        : React.PropTypes.bool,
    selectOnClick      : React.PropTypes.bool,
    onChange           : React.PropTypes.func,
    onClick            : React.PropTypes.func
};

export default Input;
