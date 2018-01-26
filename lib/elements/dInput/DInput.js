import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { Tooltip, OverlayTrigger } from 'react-bootstrap'
import Icon from '../../elements/icon'

class DInput extends Component {

  static propTypes = {
    label: PropTypes.string,
    leftIcon: PropTypes.object,
    rightIcon: PropTypes.object,
    cVal: PropTypes.string,
    validation: PropTypes.object,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    password: PropTypes.object,
    autoComplete: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]), // The input tag's autocomplete attribute
    disabled: PropTypes.bool,
    tooltip: PropTypes.string
  };

  static defaultProps = {
    autoComplete: false,
    disabled: false,
  }

  constructor(props) {
    super(props)
    this.input = null // a reference to the input DOM element, useful for calling ".focus()"
  }

  renderRightIcon = () => {
    let tooltip = <Tooltip id='right-icon-tooltip'>{this.props.rightIcon.tooltip}</Tooltip>

    let icon = () => {
      return this.props.rightIcon.click
        ? <Icon className="clickable"
          onClick={this.props.rightIcon.click}
          icon={this.props.rightIcon.iconName} />
        : <Icon icon={this.props.rightIcon.iconName} />
    }

    return this.props.rightIcon && this.props.rightIcon.tooltip
      ? <OverlayTrigger placement="top" overlay={tooltip}>
        {icon()}
      </OverlayTrigger>
      : icon()
  }

  getInputRef = (input) => {
    // Store the input ref
    this.input = input
  }

  render() {
    const { isInvalid, inFocus, value } = this.props.displayState

    return (
      <div className={isInvalid && !inFocus && !this.props.validationStyleInfo ? 'dinput-invalid' : 'dinput'}>
        <div className="form-group">
          <label className="dinput-label" htmlFor={this.props.name}>{this.props.label}</label>
          <div className="input-group">

            {/* {Left Icon} */}
            <div className="input-group-addon">
              {this.props.leftIcon && this.props.leftIcon.iconName ? <Icon icon={this.props.leftIcon.iconName} /> : null}
            </div>

            {/* {Input/Password Field} */}

            {
              this.props.tooltip != null ?
                this.props.password && !this.props.password.isVisible

                  ? (
                    <OverlayTrigger trigger="focus" placement='top' overlay={this.props.tooltip}>
                      <input
                        type="password"
                        ref={this.getInputRef}
                        placeholder={this.props.placeholder}
                        className="form-control"
                        onChange={this.props.onChange}
                        onBlur={this.props.onBlur}
                        value={value || ''}
                        autoComplete={this.props.autoComplete}
                        disabled={this.props.disabled}
                        id={this.props.name}
                        />
                    </OverlayTrigger>
                  ) : (
                    <OverlayTrigger trigger="focus" placement='top' overlay={this.props.tooltip}>
                      <input
                        type="text"
                        ref={this.getInputRef}
                        maxLength = {this.props.length}
                        placeholder={this.props.placeholder}
                        className="form-control"
                        value={value || ''}
                        onChange={this.props.onChange}
                        onBlur={this.props.onBlur}
                        onFocus={this.props.onFocus}
                        disabled={this.props.disabled}
                        autoComplete={this.props.autoComplete}
                        id={this.props.name}
                      />

                    </OverlayTrigger>

                  ) :

                this.props.password && !this.props.password.isVisible

                  ? (
                    <input
                      type="password"
                      ref={this.getInputRef}
                      placeholder={this.props.placeholder}
                      className="form-control"
                      onChange={this.props.onChange}
                      onBlur={this.props.onBlur}
                      value={value || ''}
                      autoComplete={this.props.autoComplete}
                      disabled={this.props.disabled}
                      id={this.props.name}
                    />
                  ) : (
                    <input
                      type="text"
                      ref={this.getInputRef}
                      maxLength = {this.props.length}
                      placeholder={this.props.placeholder}
                      className="form-control"
                      value={value || ''}
                      onChange={this.props.onChange}
                      onBlur={this.props.onBlur}
                      onFocus={this.props.onFocus}
                      disabled={this.props.disabled}
                      autoComplete={this.props.autoComplete}
                      id={this.props.name} />
                  )
            }

            {/* {Right Icon} */}
            <div className={this.props.password ? 'input-group-addon password-reveal-icon' : 'input-group-addon right-icon'}>
              {this.props.rightIcon && this.props.rightIcon.iconName ?
                this.renderRightIcon()
                : null}
            </div>

          </div>
          {                                                                 // bear in mind that the use of dangerouslySetInnerHTML is to passthru a const html string
            this.props.validationErrorMsg ?

                (
                  <div className={this.props.validationStyleInfo ? "validation-info" : "validation-error"}>
                    {
                      isInvalid && !inFocus
                        ? (<span> {this.props.validationErrorMsg} </span>)
                        : null
                    }
                  </div>
                )

              : null
          }
        </div>
      </div>
    )
  }
}

export default DInput
