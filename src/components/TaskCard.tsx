import React, { useState } from "react";
import { FaUpRightAndDownLeftFromCenter } from "react-icons/fa6";
import { TbCalendarTime, TbProgressCheck } from "react-icons/tb";
import { RiCalendarCheckLine } from "react-icons/ri";
import { useLang } from "../../hook/LangContext";
import { TaskDetails } from "./taskFlowApp/TaskDetails";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { HiOutlineStatusOffline } from "react-icons/hi";

export default function TaskCard(props) {
  const { translations } = useLang();
  return (
    <div
      className="custom-box-shadow w-full transition flex items-start justify-between flex-col my-2 md:m-[10px] md:max-w-[380px] md:h-[210px] h-[232px] py-2 px-3 rounded-2xl bg-[#f7f9fd]"
      style={{
        border: "0.1px solid #c2bef59f",
      }}
    >
      <div className="flex flex-col w-full">
        <div className="flex justify-between flex-row items-center w-full">
          <span className="font-bold text-[#777676] text-lg">{props.name}</span>
          <TaskDetails
            taskId={props.taskId}
            taskData={props.taskData}
            taskName={props.activity}
            status={props.status}
          />
        </div>
        <div className="mt-4 text-[#727272] text-start">
          {props.activity.length <= 70
            ? props.activity
            : props.activity.substring(0, 70) + "..."}
        </div>
      </div>

      <div className="flex flex-col w-full">
        <div className="flex flax-row items-center gap-6 mt-5">
          <div
            className="flex flex-row justify-between items-center text-gray-800 gap-2 text-[12px] bg-white rounded-full px-2"
            style={{ border: "1px solid #dde6f3e3" }}
          >
            <TbCalendarTime color="gray" />{" "}
            {new Date(props.start).toLocaleDateString("en-US", {
              timeZone: "UTC",
            })}
          </div>
          <div
            className="flex flex-row justify-between items-center text-gray-800 gap-2 text-[12px] bg-white rounded-full px-2"
            style={{ border: "1px solid #dde6f3e3" }}
          >
            <RiCalendarCheckLine color="gray" />{" "}
            {new Date(props.end).toLocaleDateString("en-US", {
              timeZone: "UTC",
            })}
          </div>
        </div>

        <span
          className="w-full h-1 my-2"
          style={{ borderBottom: "1px solid #dde6f3e3" }}
        />

        <div className="flex flex-row items-center justify-between w-full">
          <div
            className="flex flex-row items-center gap-2 text-[12px] bg-white rounded-full px-2"
            style={{ border: "1px solid #dde6f3e3" }}
          >
            <div className="w-5 h-5 my-1 flex justify-center items-center transition bg-[#c2bef59f] hover:bg-[#847bff] text-white rounded-full">
              T
            </div>
            <span className="font-bold text-[#8d8d8d] text-[10px] md:text-[12px] pb-[2px] tracking-normal">
              {props.user_name}
            </span>
          </div>

          <div className="ml-[5px] flex flex-col items-start">
            <span className="text-[11px] text-gray-900">
              {props.status === "initialized" ? (
                <div className="flex items-center gap-1 text-gray-700">
                  <HiOutlineStatusOnline size={14} color="#847bff" />
                  {translations.inProgress}
                </div>
              ) : props.status === "done" ? (
                <div className="flex items-center gap-1 text-gray-700">
                  <TbProgressCheck size={14} color="#00ff6a" />
                  {translations.done}
                </div>
              ) : props.status === "standby" ? (
                <div className="flex items-center gap-1 text-gray-700">
                  <HiOutlineStatusOffline size={14} color="#df8015" />
                  {translations.waiting}
                </div>
              ) : (
                ""
              )}
            </span>
            <div className="flex flex-row items-center gap-2">
              <div className="mt-[0.5px] flex items-center rounded-[50px] mx-[0.4px] w-[150px] h-[8px] bg-[#f0f0f0]">
                <div
                  className="h-[4px]"
                  style={{
                    width: `${props.percentage}%`,
                    background:
                      props.status === "standby"
                        ? "#f19a36"
                        : props.status === "initialized"
                        ? "#847bff"
                        : "#00ff6a",
                    borderRadius: 50,
                  }}
                ></div>
              </div>{" "}
              <span className="text-[12px] text-gray-900">
                {props.percentage}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
