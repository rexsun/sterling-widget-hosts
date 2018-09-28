import _ from "lodash";
import React from "react";
import classnames from "classnames";
import styled from "styled-components";

const HeaderBar = styled.div`
  background-color: black;
  color: white;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  width: 100%;
  padding: 8px 15px;
  font-weight: bold;

  &.orange {
    background-color: #ff4b2f;
  }
`;

const StepBlockGray = styled.div`
  background-color: #b2b2b2;
  color: white;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  text-align: center;
  border-top: solid;
  border-width: 3px !important;
  border-color: white !important;
  padding: 14px 0;
  position: relative;
  font-size: 0.6em;

  &.light {
    background-color: #ededed;
    color: #d4d4d4;
  }
`;

const SectionLable = styled.div`
  color: #1d1d1d;

  &.title {
    text-transform: uppercase;
    font-size: 0.6em;
    font-weight: bold;
  }
`;

function renderHeader(content) {
  const title = _.get(content, "title", "");
  const topNavItems = _.get(content, "topNavItems", []);

  return (
    <div id="header">
      <div className="row">
        <div className="col col-md-12 mt-4">
          <h1>{title}</h1>
        </div>
      </div>
      <div className="row mt-3 pb-3 mx-0 border-bottom">
        <div className="col col-md-8">
          <div className="row">
            {_.map(topNavItems, (o, i) => (
              <div
                key={`topNav_${i}`}
                className={classnames({
                  "pl-5": !!i,
                  "pr-5": i < _.size(topNavItems) - 1,
                  "text-lgray": i !== 1,
                  "text-orange": i === 1,
                  "border-left": !!i
                })}
              >
                <h3 className="fw-normal">{o}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className="col col-md-4">
          <div className="row float-right text-right text-dark">
            <span className="pr-4 h3 d-inline-block border-right">
              <i className="far fa-calendar-alt" />
            </span>
            <span className="pl-4 h3 d-inline-block">
              <i className="fas fa-cog" />
            </span>
          </div>
        </div>
      </div>
      <div className="row mt-5 pt-3">
        <div className="col col-md-12">
          <HeaderBar>Pipeline</HeaderBar>
        </div>
      </div>
      <div className="row mx-0">
        <StepBlockGray className="col border-right">Review</StepBlockGray>
        <StepBlockGray className="col border-right">Screen</StepBlockGray>
        <StepBlockGray className="col border-right">Interview</StepBlockGray>
        <StepBlockGray className="col border-right">Offer</StepBlockGray>
        <StepBlockGray className="light col border-right">Check</StepBlockGray>
        <StepBlockGray className="light col">Acceptance</StepBlockGray>
      </div>
    </div>
  );
}

function renderLeft(content) {
  return (
    <div id="left-sider">
      <div className="">
        <HeaderBar className="orange">Candidate</HeaderBar>
      </div>
      <div className="mt-3">
        <SectionLable className="title">Job title</SectionLable>
        <SectionLable>Driver</SectionLable>
      </div>
      <div className="mt-3">
        <SectionLable className="title">Job number</SectionLable>
        <SectionLable>012345678</SectionLable>
      </div>
      <div className="mt-3">
        <SectionLable className="title">Candidate details</SectionLable>
        <SectionLable>
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
          Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Ipsum Lorem
        </SectionLable>
      </div>
    </div>
  );
}

function renderRight(content) {
  return (
    <div className="ml-2">
      <HeaderBar>Background Screening</HeaderBar>
      <div style={{ height: "700px" }} className="bg-wgray" />
    </div>
  );
}

const pageContent = {
  ats: {
    title: "Applicant Tracking System",
    topNavItems: ["Jobs", "Candidates", "Reports"]
  },
  demo: {
    title: "Some Other System",
    topNavItems: ["Tab1", "Tab2", "Tab3"]
  }
};

export default function App({ pageName }) {
  const content = _.get(pageContent, pageName, pageContent.ats);
  return (
    <div className="sterling">
      <div className="container">
        <div className="row">
          <div className="col col-md-12">{renderHeader(content)}</div>
        </div>
        <div className="row my-5">
          <div className="col col-md-3 col-xs-12">{renderLeft(content)}</div>
          <div className="col col-md-9 col-xs-12">{renderRight(content)}</div>
        </div>
      </div>
    </div>
  );
}
