import React, { Component } from 'react';



class Input extends Component {

    constructor(props) {

        super(props);

        this.state = {
            isEmpty : this.props.defaultValue !== ''
        }

        this.onClick = this.onClick.bind(this);

        const date = Date.now();

        this.timeoutsDates = {
            onChange: date,
            onKeyUp: date,
            onKeyDown: date,
            onKeyPress: date
        };

        this.timeouts = {};
    }

    render() {

        let clearButton = false;

        if(this.props.clearButton && this.state.isEmpty) {
            clearButton = <div className='react-simple-input-clear' onClick={ () => { this.clear() } }>&times;</div>
        }

        return (
            <div className={ 'react-simple-input-container ' + this.props.classNameContainer }>
                <input
                    type='text'
                    defaultValue={ this.props.defaultValue }
                    className={ 'react-simple-input ' + this.props.className }
                    placeholder={ this.props.placeholder }
                    ref='input'
                    onChange={ (e) => { this.delayedEvent(e, 'onChange'); } }
                    onKeyDown={ (e) => { this.delayedEvent(e, 'onKeyDown'); } }
                    onKeyUp={ (e) => { this.delayedEvent(e, 'onKeyUp'); } }
                    onKeyPress={ (e) => { this.delayedEvent(e, 'onKeyPress'); } }
                    onClick={ this.onClick }
                />
                { clearButton }
            </div>
        );
    }

    onClick(e) {

        e.persist();

        if(this.props.selectOnClick) this.refs.input.select();

        this.props.onClick(e);
    }

    delayedEvent(e, type) {

        e.persist();

        const self = this;
        const now  = Date.now();
        const timeout = this.props.eventsTimeouts[type] || 0;

        if(now - this.timeoutsDates[type] < timeout) {
            clearTimeout(this.timeouts[type]);
        }

        this.timeoutsDates[type] = now;

        self.setState({ isEmpty : e.currentTarget.value !== '' });

        this.timeouts[type] = setTimeout(function() {
            self.props[type](e);
        }, timeout);
    }

    clear() {
        this.refs.input.value = '';
        const event = new Event('input', { bubbles: true });
        this.refs.input.dispatchEvent(event);
    }
}

Input.defaultProps = {
        className          : '',
        classNameContainer : '',
        defaultValue       : '',
        placeholder        : '',
        clearButton        : false,
        selectOnClick      : false,
        eventsTimeouts     : {},
        onChange           : () => {},
        onKeyDown          : () => {},
        onKeyUp            : () => {},
        onKeyPress         : () => {},
        onClick            : () => {}
};

Input.propTypes = {
    className          : React.PropTypes.string,
    classNameContainer : React.PropTypes.string,
    defaultValue       : React.PropTypes.string,
    placeholder        : React.PropTypes.string,
    clearButton        : React.PropTypes.bool,
    selectOnClick      : React.PropTypes.bool,
    eventsTimeouts     : React.PropTypes.object,
    onChange           : React.PropTypes.func,
    onKeyDown          : React.PropTypes.func,
    onKeyUp            : React.PropTypes.func,
    onKeyPress         : React.PropTypes.func,
    onClick            : React.PropTypes.func
};

export default Input;
