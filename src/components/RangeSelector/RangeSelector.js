import React, { Component } from "react";
import { Slider, Row, Col } from "antd";

class RangeSelector extends Component {
  state = {
    defaultValue: [0, 1000],
    values: [0, 1000],
    marks: {
      0: "0",
      //   250: "250",
      500: "500",
      //   750: "750",
      1000: "1000"
    }
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
    this.setState({ values: value });
  };

  render() {
    const { title } = this.props;
    const { defaultValue, values, marks } = this.state;
    return (
      <React.Fragment>
        {title && <p className={`mt-3 mb-0`}>{title}</p>}
        <Row gutter={16} align={`center`} type={`flex`}>
          <Col span={4} style={{ marginTop: 8 }}>
            <p className={`m-0`}>Min</p>
          </Col>
          <Col span={16}>
            <Slider
              marks={marks}
              range={true}
              step={10}
              defaultValue={defaultValue}
              min={defaultValue[0]}
              max={defaultValue[1]}
              onChange={this.onChangeRangeHandler}
              value={values}
            />
          </Col>
          <Col span={4} style={{ marginTop: 8 }}>
            <p className={`m-0`}>Max</p>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default RangeSelector;
