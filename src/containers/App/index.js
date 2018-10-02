import _ from "lodash";
import React from "react";
import classnames from "classnames";
import styled from "styled-components";

import Packages from "../Packages";

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

function now_loadScript(url, cb) {
  const $ = window.jQuery;
  if (!_.isFunction(cb)) {
    cb = function () {
    };
  }
  $.ajax({
    url: url,
    dataType: 'script',
    success: cb,
    async: true
  });
}

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
                href="/?page=packages"
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
                    <a href="/?page=packages" className="btn btn-primary">
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
              <div id="sterlingnow-widget">
                {/* Account setup widget */}
              </div>
            </div>
          </div>
        );
      case "config":
        return (
          <div>
            <div className="text-center pt-3">
              <img
                src="https://go.sterlingnow.io/img/sterlingnow.svg"
                style={{ width: "300px" }}
                alt="SterlingNOW"
              />
              <div id="sterlingnow-widget-config">
                {/* Account setup widget */}
              </div>
            </div>
          </div>
        );
      case "packages":
        return (<div style={{ padding: "15px" }}><Packages /></div>);
      default:
        return null;
    }
  })(sectionRight);

  return (
    <div>
      <HeaderBar>{mainTitle}</HeaderBar>
      <div style={{ minHeight: "700px" }} className="bg-wgray">
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

_.set(pageContent, 'config', _.merge(_.cloneDeep(pageContent["settings"]), { sectionRight: 'config' }));
_.set(pageContent, 'packages', _.merge(_.cloneDeep(pageContent["settings"]), { sectionRight: 'packages', mainTitle: "Sterling Packages" }));

export default function App({ pageName }) {
  const content = _.get(pageContent, pageName, pageContent.ats);
  const hideLeft = _.get(content, "hideLeft", false);

  setTimeout(_.partial(renderWidget, pageName), 300);

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

function renderWidget(pageName) {
  const $ = window.jQuery;
  window.now_loadScript = now_loadScript;

  switch (pageName) {
    case 'settings':
      $("#sterlingnow-widget").html(`
    <div id="sterlingWidget">---- SterlingNOW widget ----</div>
    <script>
    var accessToken = 'eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5uZWN0LmNvbS8iLCJzdWIiOiJvbmRlbWFuZHxteUNvbXBhbnlVc2VySWR8MjAwMTA0NDgiLCJyb2xlcyI6WyIvaW50L0dFVC9qcy9wYWNrYWdlcy9udWxsL3ByaWNlIiwiL2ludC9QT1NUL2pzL3NjcmVlbmluZ3MiLCIvaW50L1BPU1QvanMvY2hhcmdlcyIsIi9pbnQvR0VUL2pzL3BhY2thZ2VzIiwiL2ludC9QT1NUL2pzL2NhbmRpZGF0ZXMiLCIvaW50L1BPU1QvanMvYWNjb3VudHMiXSwiZGF0YSI6eyJiYXNlVXJsIjoiaHR0cDovL29uZGVtYW5kLnN0ZXJsaW5nLmlvOjgwODAvdjEvIiwib3JpZ2luIjoiaHR0cDovL2xvY2FsaG9zdDozMDExIiwic2NzIjp7InRva2VuIjoiZXlKaGJHY2lPaUpTVXpJMU5pSjkuZXlKcGMzTWlPaUpvZEhSd2N6b3ZMM05qY3k1emRHVnliR2x1Wnk1M2FHRjBaWFpsY2k4aUxDSnpkV0lpT2lKVGRHVnliR2x1WnlCUGJpMUVaVzFoYm1RZ1FWQkpJaXdpWkdGMFlTSTZleUp2Y21sbmFXNGlPaUpvZEhSd09pOHZiRzlqWVd4b2IzTjBPak13TVRFaUxDSnVZVzFsYzNCaFkyVWlPaUl5TURBeE1EUTBPSHh0ZVVOdmJYQmhibmxWYzJWeVNXUWlmU3dpYVdGMElqb3hOVE00TlRBMU56QXlMQ0psZUhBaU9qRTFNemcxTURrek1ESjkuVmRjbzRsYzhfTFpscEdvR3A3UGtfMTJnaEdGYTR4Wm00Q1ZNaUhFV1M3Z2FGRGdRVndic0VobUVjTjVobVZ4X2xQQXNtbnZXTzN0bGtLOU9RZWVNNE5EeFBRVjB3Y1lpeGJUY1ZJWEh5R0h2VlVoUnlvNjhxRnZybktPYzFPdkFSVG8zekFrZDZDU1NrM3JLYnY3a2l2ZGdkUXpIamZuSjh4cUFac29NcWNETGZPbENqUFVTelhqZWZyS3V6TkNmVU1GSFg2a3dCVXNxSkxXb01oOE5hbng3OXhzNkozZzlFbk4tZFpuQUEzd2hyRmFqa0MyaXVzaHE1YlROa0NBNHJsQlltSlJHRkMyN0xyVGJHb0RMc2tLQ1JuN25QYU5MWGE4R24zT2piS3VrYm5GWlh5UVVLTWQyZ3hLd2JJUUpyQWM4S3F4QTNyejAydmtFdnhxNnNRIn19LCJpYXQiOjE1Mzg1MDU3MDIsImV4cCI6MTUzODUwOTMwMn0.FBGqtJMLwlszLi7vv2pj0ff5r9YeCXy1ouZFtlEgw8w9kmH2WapBWV9hXu6uiuj7RT6emyhCNtdAzmQ-0Vo5rgrZqP6ejkDDRBG3UFWU6KXPm4Ljqnt2mQqb0uDgQK3e097Adgxys1u8lj3u8_QVcjiwU0axAP9SJciBHdVoZ5W_8n0z75xq0V_oZlgnt8rQ_YiQCMM6ogGm353xODo5aLcM9d7UNl3VYfwKA-jiygiZ3-i4YsOEriS4n0oZGTMm9iAb1u0OvLVlsNGw1RTCPsSt0p-yhepWbmt1iWY4Ndjomqvw1PchCMdrS7g0Odp1z6YjfI7AOCZBFR_9Uf_5Sw';
    var partnerName = 'Demo';
    function initWidget() {        
        var config = new sterlingts.Config(accessToken);
        var workflowType = sterlingts.workflow.WorkflowType;
        var workflowOptions = {
                element: document.getElementById('sterlingWidget')
            };
    
        var workflow = new sterlingts.workflow.GetWorkflow(
                workflowType.CREATE_ACCOUNT,
                workflowOptions
        );
    
        config.set('partnerName', partnerName);
    
        workflow.on('complete', function(input) {
            console.log(input);
        })
        .on('ready', function(data) {
            console.log('Workflow Ready');
        })
        .on('close', function() {
            alert('User says they are done. This could be a point where you take over the UI again');
        })
        .on("error", function(error) {
            console.log("Error in workflow");
            console.log(error);
        });
    
        workflow.initialize();
    }
    now_loadScript("http://dev.app.sterling.io/js/sterling.js?callback=initWidget");
    </script>
  `);
      break;

    case 'config':
      // widget configuration script should be copied inside below html('')
      $("#sterlingnow-widget-config").html(`
      <script>
      var accessToken = 'eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5uZWN0LmNvbS8iLCJzdWIiOiJvbmRlbWFuZHxteUNvbXBhbnlVc2VySWR8MjAwMTA0NDgiLCJyb2xlcyI6WyIvaW50L0dFVC9qcy9wYWNrYWdlcy9udWxsL3ByaWNlIiwiL2ludC9QT1NUL2pzL3NjcmVlbmluZ3MiLCIvaW50L1BPU1QvanMvY2hhcmdlcyIsIi9pbnQvR0VUL2pzL3BhY2thZ2VzIiwiL2ludC9QT1NUL2pzL2NhbmRpZGF0ZXMiLCIvaW50L1BPU1QvanMvYWNjb3VudHMiXSwiZGF0YSI6eyJiYXNlVXJsIjoiaHR0cDovL29uZGVtYW5kLnN0ZXJsaW5nLmlvOjgwODAvdjEvIiwib3JpZ2luIjoiaHR0cDovL2xvY2FsaG9zdDozMDExIiwic2NzIjp7InRva2VuIjoiZXlKaGJHY2lPaUpTVXpJMU5pSjkuZXlKcGMzTWlPaUpvZEhSd2N6b3ZMM05qY3k1emRHVnliR2x1Wnk1M2FHRjBaWFpsY2k4aUxDSnpkV0lpT2lKVGRHVnliR2x1WnlCUGJpMUVaVzFoYm1RZ1FWQkpJaXdpWkdGMFlTSTZleUp2Y21sbmFXNGlPaUpvZEhSd09pOHZiRzlqWVd4b2IzTjBPak13TVRFaUxDSnVZVzFsYzNCaFkyVWlPaUl5TURBeE1EUTBPSHh0ZVVOdmJYQmhibmxWYzJWeVNXUWlmU3dpYVdGMElqb3hOVE00TlRBMU56QXlMQ0psZUhBaU9qRTFNemcxTURrek1ESjkuVmRjbzRsYzhfTFpscEdvR3A3UGtfMTJnaEdGYTR4Wm00Q1ZNaUhFV1M3Z2FGRGdRVndic0VobUVjTjVobVZ4X2xQQXNtbnZXTzN0bGtLOU9RZWVNNE5EeFBRVjB3Y1lpeGJUY1ZJWEh5R0h2VlVoUnlvNjhxRnZybktPYzFPdkFSVG8zekFrZDZDU1NrM3JLYnY3a2l2ZGdkUXpIamZuSjh4cUFac29NcWNETGZPbENqUFVTelhqZWZyS3V6TkNmVU1GSFg2a3dCVXNxSkxXb01oOE5hbng3OXhzNkozZzlFbk4tZFpuQUEzd2hyRmFqa0MyaXVzaHE1YlROa0NBNHJsQlltSlJHRkMyN0xyVGJHb0RMc2tLQ1JuN25QYU5MWGE4R24zT2piS3VrYm5GWlh5UVVLTWQyZ3hLd2JJUUpyQWM4S3F4QTNyejAydmtFdnhxNnNRIn19LCJpYXQiOjE1Mzg1MDU3MDIsImV4cCI6MTUzODUwOTMwMn0.FBGqtJMLwlszLi7vv2pj0ff5r9YeCXy1ouZFtlEgw8w9kmH2WapBWV9hXu6uiuj7RT6emyhCNtdAzmQ-0Vo5rgrZqP6ejkDDRBG3UFWU6KXPm4Ljqnt2mQqb0uDgQK3e097Adgxys1u8lj3u8_QVcjiwU0axAP9SJciBHdVoZ5W_8n0z75xq0V_oZlgnt8rQ_YiQCMM6ogGm353xODo5aLcM9d7UNl3VYfwKA-jiygiZ3-i4YsOEriS4n0oZGTMm9iAb1u0OvLVlsNGw1RTCPsSt0p-yhepWbmt1iWY4Ndjomqvw1PchCMdrS7g0Odp1z6YjfI7AOCZBFR_9Uf_5Sw';
      </script>   
     
    `);
      break;
  }
}
