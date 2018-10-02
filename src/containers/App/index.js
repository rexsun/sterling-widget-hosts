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
  font-weight: bold;

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

function renderArrow(bgCollor) {
  return (
    <div
      style={{ position: "absolute", top: "13px", right: "9px", zIndex: 999 }}
    >
      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "2px",
            color: "white",
            height: "18px",
            width: "18px",
            backgroundColor: "white",
            transform: "rotate(45deg)"
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "1px",
            left: "0",
            color: "white",
            height: "16px",
            width: "16px",
            backgroundColor: `${bgCollor}`,
            transform: "rotate(45deg)"
          }}
        />
      </div>
    </div>
  );
}

function renderHeader(content) {
  const title = _.get(content, "title", "");
  const topNavItems = _.get(content, "topNavItems", []);
  const cogActive = _.get(content, "cogActive", false);
  const subTitle = _.get(content, "subTitle", "");
  const topSubNavItems = _.get(content, "topSubNavItems", []);

  return (
    <div id="header">
      <div className="row">
        <div className="col col-md-12 mt-4">
          <h1>
            <a href="/?page=ats" className="text-dark">
              {title}
            </a>
          </h1>
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
                  "text-lgray": true,
                  "border-left": !!i
                })}
              >
                <h3 className="fw-normal">
                  {i === 3 ? (
                    <a className="text-orange" href="/?page=ats">
                      {o}
                    </a>
                  ) : (
                    o
                  )}
                </h3>
              </div>
            ))}
          </div>
        </div>
        <div className="col col-md-4">
          <div className="row float-right text-right text-dark">
            <span className="pr-4 h3 d-inline-block border-right">
              <i className="far fa-calendar-alt text-dark" />
            </span>
            <span className="pl-4 h3 d-inline-block">
              <a
                className={classnames({
                  "text-dark": !cogActive,
                  "text-orange": cogActive
                })}
                href="/?page=settings"
              >
                <i className="fas fa-cog" />
              </a>
            </span>
          </div>
        </div>
      </div>
      {/*
      <div className="row mt-5 pt-3">
        <div className="col col-md-12">
          <HeaderBar>{subTitle}</HeaderBar>
        </div>
      </div>
      <div className="row mx-0" style={{ position: "relative" }}>
        {_.map(topSubNavItems, (o, i) => (
          <StepBlockGray key={`topsubnav_${i}`} className={o.classNames}>
            <span>{o.title}</span>
            {o.showArrow && renderArrow(o.backgroundColor)}
          </StepBlockGray>
        ))}
      </div>
      */}
    </div>
  );
}

function renderLeft(content) {
  const leftNavItems = _.get(content, "leftNavItems", []);

  return (
    <div id="left-sider">
      {/*
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
      */}
      {_.map(leftNavItems, (o, i) => (
        <StepBlockGray key={`leftnav_${i}`} className={o.classNames}>
          <span>{o.title}</span>
          {o.showArrow && renderArrow(o.backgroundColor)}
        </StepBlockGray>
      ))}
    </div>
  );
}

function renderRight(content) {
  const mainTitle = _.get(content, "mainTitle", "");
  const sectionRight = _.get(content, "sectionRight", "");

  let rightContent = (function renderRightContent(name) {
    switch (name) {
      case "ats":
        return (
          <div className="row py-3">
            <div className="col-md-4 col-xs-12">
              <div className="card" style={{ height: "215px" }}>
                <div className="card-body">
                  <h5 className="card-title">Company A</h5>
                  <p className="card-text">
                    To set up account: <br />
                    1. Call sales <br />
                    ...
                  </p>
                  <p className="card-text text-right">Step 1 of 9</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-xs-12">
              <div className="card" style={{ height: "215px" }}>
                <div className="card-body">
                  <h5 className="card-title">Company B</h5>
                  <p className="card-text">
                    To set up account: <br />
                    1. Call sales <br />
                    ...
                  </p>
                  <p className="card-text text-right">Step 1 of 8</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-xs-12">
              <div className="card" style={{ height: "215px" }}>
                <div className="card-body text-dark">
                  <h5 className="card-title">SterlingNOW</h5>
                  <p className="card-text">
                    <br />
                    <a href="/?page=settings" className="btn btn-primary">
                      Instant Account Setup
                    </a>
                    <br />
                    <br />
                  </p>
                  <p className="card-text text-right">
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case "settings":
        return (
          <div>
            <div className="text-center pt-3">
              <img
                src="https://go.sterlingnow.io/img/sterlingnow.svg"
                style={{ width: "300px" }}
                alt="SterlingNOW"
              />
              <div id="sterlingnow-widget" />
              {/* Account setup widget */}
            </div>
          </div>
        );
      default:
        return null;
    }
  })(sectionRight);

  return (
    <div>
      <HeaderBar>{mainTitle}</HeaderBar>
      <div style={{ height: "700px" }} className="bg-wgray">
        {rightContent}
      </div>
    </div>
  );
}

const pageContent = {
  ats: {
    title: "Applicant Tracking System",
    topNavItems: ["Accounts", "Billing", "Roles", "Integrations"],
    subTitle: "Pipeline",
    mainTitle: "Screening Partners",
    sectionRight: "ats",
    topSubNavItems: [
      {
        title: "Review",
        classNames: "col border-right",
        backgroundColor: "#b2b2b2",
        showArrow: true
      },
      {
        title: "Screen",
        classNames: "col border-right",
        backgroundColor: "#b2b2b2",
        showArrow: true
      },
      {
        title: "Interview",
        classNames: "col border-right",
        backgroundColor: "#b2b2b2",
        showArrow: true
      },
      {
        title: "Offer",
        classNames: "col border-right",
        backgroundColor: "#b2b2b2",
        showArrow: true
      },
      {
        title: "Check",
        classNames: "light col border-right text-orange",
        backgroundColor: "#ededed",
        showArrow: true
      },
      {
        title: "Acceptance",
        classNames: "light col"
      }
    ],
    leftNavItems: [
      {
        title: "Job Boards",
        classNames: "text-dark"
      },
      {
        title: "Background Checks",
        classNames: "light text-orange"
      },
      {
        title: "Assessments",
        classNames: "text-dark"
      },
      {
        title: "Access & Communication",
        classNames: "text-dark"
      },
      {
        title: "Reporting",
        classNames: "text-dark"
      }
    ]
  },
  settings: {
    title: "Applicant Tracking System",
    topNavItems: ["Accounts", "Billing", "Roles", "Integrations"],
    cogActive: true,
    subTitle: "Settings",
    mainTitle: "Sterling account creation",
    hideLeft: false,
    sectionRight: "settings",
    topSubNavItems: [
      {
        title: "Account",
        classNames: "col border-right"
      },
      {
        title: "Users",
        classNames: "col border-right"
      },
      {
        title: "Groups",
        classNames: "col border-right"
      },
      {
        title: "Background check",
        classNames: "col light border-right text-orange"
      },
      {
        title: "Candidates",
        classNames: "col"
      }
    ],
    leftNavItems: [
      {
        title: "Job Boards",
        classNames: "text-dark"
      },
      {
        title: "Background Checks",
        classNames: "light text-orange"
      },
      {
        title: "Assessments",
        classNames: "text-dark"
      },
      {
        title: "Access & Communication",
        classNames: "text-dark"
      },
      {
        title: "Reporting",
        classNames: "text-dark"
      }
    ]
  }
};

export default function App({ pageName }) {
  const content = _.get(pageContent, pageName, pageContent.ats);
  const hideLeft = _.get(content, "hideLeft", false);

  setTimeout(renderWidget, 300);

  return (
    <div className="sterling">
      <div className="container">
        <div className="row">
          <div className="col col-md-12">{renderHeader(content)}</div>
        </div>
        <div className="row my-5">
          {!hideLeft && (
            <div className="col col-md-3 col-xs-12">
              <div>{renderLeft(content)}</div>
            </div>
          )}
          <div
            className={classnames("col col-xs-12", {
              "col-md-9": !hideLeft,
              "col-md-12": !!hideLeft
            })}
          >
            {renderRight(content)}
          </div>
        </div>
      </div>
    </div>
  );
}

function renderWidget() {
  const jQuery = window.jQuery;
  jQuery("#sterlingnow-widget").html(`
    ---- SterlingNOW widget ----
  `);
}
