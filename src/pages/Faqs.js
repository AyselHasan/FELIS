import React, { Component } from "react";
import "antd/dist/antd.css";
import { Collapse } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import { GiDandelionFlower } from "react-icons/gi";
import "./../assets/css/faqs/faqs.css";
import faqs from "./../data/faqs.json";

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

class Faqs extends Component {
  state = {
    expandIconPosition: "right",
  };

  onPositionChange = (expandIconPosition) => {
    this.setState({ expandIconPosition });
  };
  render() {
    const { expandIconPosition } = this.state;
    return (
      <section className="faqs font bg bold mt-5">
        <div className="faqs-container">
          <h1 className="bold text-center">FREQUENTLY ASKED QUESTIONS</h1>
          <p className="regular text-center italic">
            Sample text. Click to select the text box. Click again or double
            click to start editing the text.
          </p>
          <Collapse
            defaultActiveKey={["1"]}
            onChange={callback}
            expandIconPosition={expandIconPosition}
            className="mt-5 font-style"
          >
            {faqs.map((faq) => (
              <Panel
                header={faq.question}
                key={faq.id}
                extra={<GiDandelionFlower className="heading-lmedium yellow" />}
                showArrow={false}
                className="p-2"
              >
                <div>{faq.answer}</div>
              </Panel>
            ))}
          </Collapse>
        </div>
      </section>
    );
  }
}

export default Faqs;
