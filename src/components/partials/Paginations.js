import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Pagination } from "antd";
import "antd/dist/antd.css";
import style from "styled-components";

const StyledPagination = style.div`

`;

const pageSize = 3;

class pagination extends Component {
  state = {
    data: [],
    totalPage: 0,
    current: 1,
    minIndex: 0,
    maxIndex: 0,
  };
  componentDidMount() {
    fetch("jewelry.json")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          data,
          totalPage: data.length / pageSize,
          minIndex: 0,
          maxIndex: pageSize,
        })
      );
  }
  handleChange = (page) => {
    this.setState({
      current: page,
      minIndex: (page - 1) * pageSize,
      maxIndex: page * pageSize,
    });
  };
  render() {
    const { data, current, minIndex, maxIndex } = this.state;
    return (
      <div>
        <Pagination
          pageSize={pageSize}
          current={current}
          total={data.length}
          onChange={this.handleChange}
          style={{ bottom: "0px" }}
        />
      </div>
    );
  }
}
export default pagination;
