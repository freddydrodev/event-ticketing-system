import React, { Component } from "react";
import { Slider, InputNumber } from "antd";

class RangeSelector extends Component {
  state = {
    defaultValue: [1, 1000],
    values: [1, 1000]
  };

  componentDidMount() {
    const { defaultValue } = this.props;
    if (defaultValue) {
      this.setState({
        defaultValue
      });
    }
  }

  onChangeRangeHandler = value => {
    console.log("object");
    this.setState({ values: value });
  };

  onChangeInputHandler = (value, index) => {
    const values = this.state.values;
    values[index] = value;
    console.log(values);
    this.setState({ values });
  };
  render() {
    const { title } = this.props;
    const { defaultValue, values } = this.state;
    return (
      <React.Fragment>
        {title && <p className={`mt-3`}>{title}</p>}
        <Slider
          range={true}
          defaultValue={defaultValue}
          min={defaultValue[0]}
          max={defaultValue[1]}
          onChange={this.onChangeRangeHandler}
          value={values}
        />
        <div className={`flex between`}>
          <InputNumber
            min={defaultValue[0]}
            max={defaultValue[1]}
            size={`small`}
            value={values[0]}
            onChange={value => this.onChangeInputHandler(value, 0)}
          />
          <InputNumber
            min={defaultValue[0]}
            max={defaultValue[1]}
            size={`small`}
            value={values[1]}
            onChange={value => this.onChangeInputHandler(value, 1)}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default RangeSelector;
