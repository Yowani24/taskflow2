import React, { useState } from "react";
import { FaUpRightAndDownLeftFromCenter } from "react-icons/fa6";
import { TbCalendarTime } from "react-icons/tb";
import { RiCalendarCheckLine } from "react-icons/ri";
import { useLang } from "../../hook/LangContext";
import { TaskDetails } from "./taskFlowApp/TaskDetails";

export default function TaskCard(props) {
  const [percentage, setPercentage] = useState(20);
  const { language, translations } = useLang();
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
            className="flex flex-row justify-between items-center gap-2 text-[12px] bg-white rounded-full px-2"
            style={{ border: "1px solid #dde6f3e3" }}
          >
            <TbCalendarTime /> {props.start}
          </div>
          <div
            className="flex flex-row justify-between items-center gap-2 text-[12px] bg-white rounded-full px-2"
            style={{ border: "1px solid #dde6f3e3" }}
          >
            <RiCalendarCheckLine /> {props.end}
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
            <span className="text-[11px]">
              {props.status === "initialized"
                ? translations.inProgress
                : props.status === "done"
                ? translations.done
                : props.status === "standby"
                ? translations.waiting
                : ""}
            </span>
            <div className="flex flex-row items-center gap-2">
              <div className="mt-[0.5px] flex items-center rounded-[50px] mx-[0.4px] w-[150px] h-[8px] bg-[#f0f0f0]">
                <div
                  className="h-[4px]"
                  style={{
                    width: `${props.percentage}%`,
                    background: props.status === "standby" ? "gray" : "#00ff6a",
                    borderRadius: 50,
                  }}
                ></div>
              </div>{" "}
              <span className="text-[12px]">{props.percentage}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
