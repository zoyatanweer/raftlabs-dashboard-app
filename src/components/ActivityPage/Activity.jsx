import { Avatar, Badge, Calendar, Divider, Select } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import "./Activity.css";
import "../../Assets/Assets";

const ActivityPage = () => {
  const platformOptions = [
    "The Professional Platform",
    "The Developer Platform",
  ];
  const userOptions = ["Jhontosan", "David"];

  const [show, setShow] = useState(true);

  return (
    <>
      <div className="activity-section flex flex-col mt-4 ml-4">
        <div className="flex justify-between mb-8">
          <Badge dot={show} color="#6e62e5">
            <Avatar
              shape="circle"
              size="small"
              src={
                <svg
                  className="notification-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" />
                </svg>
              }
            />
          </Badge>

          <Select
            className="mr-1"
            placeholder="Jhontosan"
            style={{
              width: "60%",
              color: "#a4aab2",
              outline: "none",
              border: "none",
            }}
          >
            {userOptions.map((userOptions, index) => {
              return (
                <Select.Option key={index} value={userOptions}>
                  {userOptions}
                </Select.Option>
              );
            })}
          </Select>
        </div>

        <p className="text-purple text-sm font-semibold pb-1">Premium Access</p>
        <p className="font-semibold text-3xl pb-2">
          Take Back Your Creative Control
        </p>
        <Avatar.Group maxCount={3} className="pb-4">
          <Avatar style={{ backgroundColor: "pink", color: "black" }}>A</Avatar>
          <Avatar style={{ backgroundColor: "lightBlue", color: "black" }}>
            B
          </Avatar>
          <Avatar style={{ backgroundColor: "orange", color: "black" }}>
            C
          </Avatar>
          <Avatar style={{ backgroundColor: "pink", color: "black" }}>D</Avatar>
          <Avatar style={{ backgroundColor: "pink", color: "black" }}>E</Avatar>
          <Avatar style={{ backgroundColor: "pink", color: "black" }}>F</Avatar>
          <Avatar style={{ backgroundColor: "pink", color: "black" }}>G</Avatar>
          <Avatar style={{ backgroundColor: "pink", color: "black" }}>H</Avatar>
          <Avatar style={{ backgroundColor: "pink", color: "black" }}>I</Avatar>
          <Avatar style={{ backgroundColor: "pink", color: "black" }}>J</Avatar>
          <Avatar style={{ backgroundColor: "pink", color: "black" }}>K</Avatar>
          <Avatar style={{ backgroundColor: "pink", color: "black" }}>L</Avatar>
          <Avatar style={{ backgroundColor: "pink", color: "black" }}>M</Avatar>
          <Avatar style={{ backgroundColor: "pink", color: "black" }}>N</Avatar>
          <Avatar icon={<UserOutlined />} />
        </Avatar.Group>
        {/* <p className="text-grey-v2 flex-col">
          The Professional Platform
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        </p> */}

        <Select
          className="mb-3"
          placeholder="The Professional Platform"
          style={{
            width: "100%",
            color: "#a4aab2",
            outline: "none",
            border: "none",
          }}
        >
          {platformOptions.map((platformOptions, index) => {
            return (
              <Select.Option key={index} value={platformOptions}>
                {platformOptions}
              </Select.Option>
            );
          })}
        </Select>

        <button className="upgrade-button font-medium text-purple flex justify-between p-2 mt-2">
          Upgrade Now
          <svg
            className="upgrade-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="m600-200-57-56 184-184H80v-80h647L544-704l56-56 280 280-280 280Z" />
          </svg>
        </button>
        <Divider />

        <Calendar fullscreen={false} row={2} miniContentHeight />

        <div className="tasks-for-day-section flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            id="laptop"
          >
            <path
              fill="#2a292e"
              d="m17.996 16.25 10.024 5.788c.42.243.426.847.011 1.098L17.07 29.768v.002c-.5.302-1.126.308-1.631.015L5 23.759l-.41-.243c-.358-.294-.6-.783-.59-1.191v-.784l.823-.784"
            ></path>
            <g fill="#2a292e">
              <path d="m4.518 8.972 11.337-6.24A.772.772 0 0 1 17 3.41v10.77a1 1 0 0 1-.5.866L4 22.257V9.848a1 1 0 0 1 .518-.876z"></path>
              <path
                fill-rule="evenodd"
                d="m16.493 2.682 1.07.531-.772.405z"
              ></path>
            </g>
            <path
              fill="#eef2fa"
              d="m5.518 9.472 11.337-6.24A.772.772 0 0 1 18 3.91v10.77a1 1 0 0 1-.5.866L5 22.757V10.348a1 1 0 0 1 .518-.876z"
            ></path>
            <path
              fill="#6fb7e6"
              d="m6 10.498 11.007-6.014v10.361L6 21.143z"
            ></path>
            <path
              fill="#2a292e"
              fill-rule="evenodd"
              d="m28.336 22.496-.858-.725.86-.135z"
            ></path>
            <path
              fill="#3c3b41"
              d="m17.07 28.767 10.961-6.632a.638.638 0 0 0-.011-1.098l-9.617-5.553a.813.813 0 0 0-.814 0L5 22.757l10.439 6.027a1.603 1.603 0 0 0 1.631-.016z"
            ></path>
            <path
              fill="#2a292e"
              d="m12.656 25.586 10.22-5.986a.234.234 0 0 0 .003-.403l-4.526-2.744a.44.44 0 0 0-.448-.003L7.378 22.53a.26.26 0 0 0 .003.451l4.645 2.611a.633.633 0 0 0 .63-.003zm5.63 1.108 3.637-2.095a.183.183 0 0 0 0-.317l-1.953-1.115a.458.458 0 0 0-.455 0l-3.65 2.099a.195.195 0 0 0-.001.337l1.877 1.09a.544.544 0 0 0 .545 0z"
            ></path>
          </svg>
          <div className="tasks-description">
            <p className="font-semibold">Meeting with Client</p>
            <p className="text-grey-v2 flex justify-evenly">
              <div className="flex mr-3">
                <svg
                  className="tasks-svg mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="M360-320h80v-120h120v-80H440v-120h-80v120H240v80h120v120ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h480q33 0 56.5 23.5T720-720v180l160-160v440L720-420v180q0 33-23.5 56.5T640-160H160Zm0-80h480v-480H160v480Zm0 0v-480 480Z" />
                </svg>
                Google Meet
              </div>
              <div className="text-grey flex">
                <svg
                  className="tasks-svg mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  height="23"
                  viewBox="0 -960 960 960"
                  width="23"
                >
                  <path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z" />
                </svg>
                12pm
              </div>
            </p>
          </div>
        </div>
        <Divider />
        <div className="tasks-for-day-section flex justify-center items-center">
          <svg
            className="tasks-img mr-2 p-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            id="books"
          >
            <g data-name="book-education-knowledge">
              <path fill="#ff5023" d="M9,14V55H3V19a5,5,0,0,1,5-5Z"></path>
              <rect width="32" height="36" x="9" y="14" fill="#ffdaaa"></rect>
              <rect width="32" height="36" x="29" y="4" fill="#009698"></rect>
              <rect width="20" height="8" x="35" y="10" fill="#ffeb99"></rect>
              <rect width="31" height="4" x="9" y="53" fill="#e0e0e2"></rect>
              <rect width="31" height="4" x="29" y="43" fill="#e0e0e2"></rect>
              <path
                fill="#ff7956"
                d="M9,53v4H41v3H8A5,5,0,0,1,8,50H41v3Z"
              ></path>
              <path
                fill="#1e81ce"
                d="M29,4V45H23V8.881A4.944,4.944,0,0,1,28,4Z"
              ></path>
              <path
                fill="#1a6fb0"
                d="M60,43h1V40H28a5,5,0,1,0,0,10H61V47H29V43Z"
              ></path>
              <path d="M61,3H28a6.006,6.006,0,0,0-6,6v4H8a6.006,6.006,0,0,0-6,6V55a6.006,6.006,0,0,0,6,6H41a1,1,0,0,0,1-1V57a1,1,0,0,0-1-1V54a1,1,0,0,0,1-1V51H61a1,1,0,0,0,1-1V47a1,1,0,0,0-1-1V44a1,1,0,0,0,1-1V4A1,1,0,0,0,61,3ZM60,42H30V41H60ZM28,49a4,4,0,0,1,0-8ZM28,5V39a5.969,5.969,0,0,0-4,1.54V9A4,4,0,0,1,28,5ZM22,45a5.969,5.969,0,0,0,1.54,4H10V15H22ZM8,15V49a5.969,5.969,0,0,0-4,1.54V19A4,4,0,0,1,8,15ZM4,55a4,4,0,0,1,4-4v8A4,4,0,0,1,4,55Zm36,4H10V58H40Zm-1-3H10V54H39Zm1-4H10V51H40Zm20-3H30V48H60Zm-1-3H30V44H59Zm1-7H30V5H60V39Z"></path>
              <path d="M55,9H35a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1H55a1,1,0,0,0,1-1V10A1,1,0,0,0,55,9Zm-1,8H36V11H54Z"></path>
            </g>
          </svg>

          <div className="tasks-description">
            <p className="font-semibold">Weekly Report</p>
            <p className="text-grey-v2 flex justify-evenly">
              <div className="flex mr-3">
                <svg
                  className="tasks-svg mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="M360-320h80v-120h120v-80H440v-120h-80v120H240v80h120v120ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h480q33 0 56.5 23.5T720-720v180l160-160v440L720-420v180q0 33-23.5 56.5T640-160H160Zm0-80h480v-480H160v480Zm0 0v-480 480Z" />
                </svg>
                Google Meet
              </div>
              <div className="text-grey flex">
                <svg
                  className="tasks-svg mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  height="23"
                  viewBox="0 -960 960 960"
                  width="23"
                >
                  <path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z" />
                </svg>
                3pm
              </div>
            </p>
          </div>
        </div>
        <Divider />
        <div className="tasks-for-day-section flex justify-center items-center">
          <svg
            className="tasks-img mr-2"
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 47.5 47.5"
            viewBox="0 0 47.5 47.5"
            id="book"
          >
            <defs>
              <clipPath id="a">
                <path d="M0 38h38V0H0v38Z"></path>
              </clipPath>
            </defs>
            <g clip-path="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)">
              <path
                fill="#f4900c"
                d="M0 0a4 4 0 0 0-4-4h-26a4 4 0 0 0-4 4v19.687C-34 21.896-28.209 26-26 26h20.625C-2.281 26 0 23.687 0 20.625V0Z"
                transform="translate(36 11)"
              ></path>
              <path
                fill="#ccd6dd"
                d="M0 0a4 4 0 0 0-4-4h-22a4 4 0 0 0-4 4v24c0 4.119-.021 4 5 4h21a4 4 0 0 0 4-4V0Z"
                transform="translate(34 7)"
              ></path>
              <path
                fill="#e1e8ed"
                d="M0 0a3 3 0 0 0-3-3h-24a3 3 0 0 0-3 3v24a3 3 0 0 0 3 3h24a3 3 0 0 0 3-3V0Z"
                transform="translate(32 6)"
              ></path>
              <path
                fill="#f4900c"
                d="M0 0a4 4 0 0 0-4-4h-21a4 4 0 0 0-4 4v22a4 4 0 0 0 4 4h21a4 4 0 0 0 4-4V0Z"
                transform="translate(32 5)"
              ></path>
              <path
                fill="#ffac33"
                d="M0 0a4 4 0 0 0-4-4h-19a4 4 0 0 0-4 4v20a4 4 0 0 0 4 4h19.335C-1.456 24 0 22.544 0 20.335V0Z"
                transform="translate(30 5)"
              ></path>
              <path
                fill="#f4900c"
                d="M0 0c-1.687 0-1.731 1.922-1 2.75C-.168 3.691 1.125 4 3.438 4H5v2H2.281C-1.687 6-5 3.5-5 .625V-26a4 4 0 0 1 4-4h2V0H0z"
                transform="translate(7 31)"
              ></path>
            </g>
          </svg>
          <div className="tasks-description">
            <p className="font-semibold">Daily Scrum Meeting</p>
            <p className="text-grey-v2 flex justify-evenly">
              <div className="flex mr-3">
                <svg
                  className="tasks-svg mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="M360-320h80v-120h120v-80H440v-120h-80v120H240v80h120v120ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h480q33 0 56.5 23.5T720-720v180l160-160v440L720-420v180q0 33-23.5 56.5T640-160H160Zm0-80h480v-480H160v480Zm0 0v-480 480Z" />
                </svg>
                Google Meet
              </div>
              <div className="text-grey flex">
                <svg
                  className="tasks-svg mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  height="23"
                  viewBox="0 -960 960 960"
                  width="23"
                >
                  <path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z" />
                </svg>
                05pm
              </div>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export { ActivityPage };
