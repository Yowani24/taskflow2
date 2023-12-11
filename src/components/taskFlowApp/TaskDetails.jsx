import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Typography,
  Checkbox,
  List,
  ListItem,
  ListItemPrefix,
  Tooltip,
} from "@material-tailwind/react";
import { useLang } from "../../../hook/LangContext";
import { FaUpRightAndDownLeftFromCenter } from "react-icons/fa6";
import { TbProgressCheck, TbPlayerPlayFilled } from "react-icons/tb";
import { GoTasklist } from "react-icons/go";
import { IoIosCloseCircle, IoMdStopwatch } from "react-icons/io";
import { FaRegPauseCircle } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { VscReferences } from "react-icons/vsc";
import useFetch from "../../../hook/useFetch";
import { useFormik } from "formik";
import * as Yup from "yup";

export function TaskDetails({ taskData, taskName, status, taskId }) {
  const {
    handleDeleteActivity,
    handleCreateSubActivity,
    handleDeleteSubActivity,
    handleUpdateSubActivity,
    handleUpdateActivity,
    isLoading,
    refetch,
  } = useFetch();
  const [open, setOpen] = React.useState(false);
  const { translations } = useLang();

  const [estado, setEstado] = React.useState(0);

  const handleOpen = () => {
    setOpen(!open);
    refetch();
  };

  React.useEffect(() => {
    if (taskData && taskData.length > 0) {
      const completedTasks = taskData.filter((item) => item.status);
      const completedPercentage = Math.ceil(
        (completedTasks.length / taskData.length) * 100
      );

      setEstado((prevEstado) => {
        if (completedPercentage !== prevEstado) {
          handleUpdateActivity.mutate({
            activityId: taskId,
            percentage: completedPercentage,
            status:
              completedPercentage == 100
                ? "done"
                : status === "standby"
                ? "standby"
                : "initialized",
          });
        }
        return completedPercentage;
      });
    } else {
      setEstado(0);
    }
  }, [taskData, taskId, handleUpdateActivity]);

  const Formik = useFormik({
    initialValues: {
      name: "",
      activityId: taskId,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        handleCreateSubActivity.mutate(values);
        resetForm();
      } catch (error) {
        console.error(error.message);
      }
    },
  });

  const handleDelete = async (activityId) => {
    try {
      handleDeleteActivity.mutate(activityId);
      setOpen(false);
    } catch (error) {
      console.error(error.message);
    }
  };

  const DeleteSubActivity = async (activityId) => {
    try {
      handleDeleteSubActivity.mutate(activityId);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleToggleActivityStatus = (statusChange) => {
    handleUpdateActivity.mutate({
      activityId: taskId,
      status: statusChange,
    });
  };

  return (
    <>
      <div
        onClick={handleOpen}
        className="w-8 h-8 flex justify-center items-center transition cursor-pointer bg-[#c2bef59f] hover:bg-[#847bff] text-white rounded-full"
      >
        <FaUpRightAndDownLeftFromCenter size={15} />
      </div>
      <Dialog open={open} size="md" className=" xs:-mt-0 sm:-mt-14 md:m-0">
        <div className="flex items-center justify-between">
          <DialogHeader className="flex flex-col items-start">
            {" "}
            <Typography
              className="mb-1 text-[16px] md:text-[20px]"
              variant="h4"
            >
              {translations.activityDetails}
            </Typography>
          </DialogHeader>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5"
            onClick={handleOpen}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <DialogBody className="max-h-[600px] min-h-[480px]">
          {isLoading ? (
            <div className="flex items-center justify-center h-[400px] md:text-xl">
              Loading...
            </div>
          ) : (
            <>
              <Typography
                className="mb-8 -mt-7 text-[14px] md:text-[18px]"
                color="gray"
                variant="lead"
              >
                {taskName}
              </Typography>
              <div className="grid gap-6">
                <Typography
                  className="-mb-5 md:-mb-2 flex items-center gap-1 text-[13px] text-gray-700"
                  color="blue-gray"
                  variant="h6"
                >
                  <TbProgressCheck size={19} />
                  {translations.activityStatusText}
                  <span className="ml-[2%] flex items-center gap-4">
                    <Tooltip content="stop activity">
                      <span
                        className="flex gap-1 items-center justify-center w-fit px-2 hover:text-red-400 cursor-pointer transition bg-gray-200 hover:bg-gray-300 p-1 rounded-md"
                        style={{
                          color: status === "standby" ? "red" : "",
                          cursor: estado == 100 ? "not-allowed" : "pointer",
                        }}
                        onClick={() =>
                          estado == 100
                            ? () => {}
                            : handleToggleActivityStatus("standby")
                        }
                      >
                        <IoMdStopwatch size={19} />
                        <Typography className="text-[10px]">
                          {status === "standby" ? "Suspenso" : "Suspender"}
                        </Typography>
                      </span>
                    </Tooltip>

                    <Tooltip content="stop activity">
                      <span
                        className="flex gap-1 items-center justify-center w-fit px-2 hover:text-[#4b41dfce] cursor-pointer transition bg-gray-200 hover:bg-gray-300 p-1 rounded-md"
                        style={{
                          color:
                            status === "initialized" || status === "done"
                              ? "#4b41dfce"
                              : "",
                        }}
                        onClick={() =>
                          handleToggleActivityStatus("initialized")
                        }
                      >
                        <TbPlayerPlayFilled size={18} />
                        <Typography className="text-[10px]">
                          {status === "standby" ? "Iniciar" : "Iniciado"}
                        </Typography>
                      </span>
                    </Tooltip>
                  </span>
                </Typography>
                <div className="flex items-center justify-between">
                  <div className="w-28 bg-gray-200 rounded-md py-1 px-2 flex items-baseline justify-between gap-2 text-sm text-green-400 font-semibold">
                    {taskData && taskData.length > 0 ? estado : 0}%{" "}
                    <GiProgression />
                  </div>
                  <a
                    href="https://www.figma.com/"
                    target="_blank"
                    className="bg-gray-200 active:bg-gray-300 transition
                rounded-md py-1 px-2 text-[#8165e9] flex items-center
                cursor-pointer justify-between gap-2 text-sm font-semibold"
                  >
                    <VscReferences size={18} /> {translations.references}
                  </a>
                </div>
              </div>

              <Typography className="text-xs mt-2">
                {status === "initialized"
                  ? translations.inProgress
                  : status === "done"
                  ? translations.done
                  : status === "standby"
                  ? translations.waiting
                  : ""}
              </Typography>

              <div className="grid gap-6 mt-5">
                <Typography
                  className="-mb-5 md:-mb-2 text-[13px] text-gray-700"
                  color="blue-gray"
                  variant="h6"
                >
                  {translations.addSubAtivityText}
                </Typography>
                <form
                  className="flex flex-wrap my-2 mb-5 items-center gap-4"
                  onSubmit={Formik.handleSubmit}
                >
                  <div className="w-full md:w-80">
                    <Input
                      autoFocus={false}
                      label={translations.addSubAtivityPlaceholderText}
                      className="w-full"
                      name="name"
                      value={Formik.values.name}
                      onChange={Formik.handleChange}
                      disabled={status === "standby" ? true : false}
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="filled"
                    className="p-3 rounded-5 border-none outline-none w-full md:w-auto shadow-none bg-[#4b41dfce] active:bg-[#e2e2e211] hover:bg-[#4b41dfe1]"
                    disabled={status === "standby" ? true : false}
                  >
                    {translations.addText}
                  </Button>
                </form>
              </div>
              <Typography
                className={`font-semibold flex items-center gap-1 text-sm text-[#7c76cfce] mb-4 ${
                  taskData && taskData.length > 0 ? "flex" : "hidden"
                }`}
              >
                <GoTasklist size={19} />
                {translations.subActivitiesText}
              </Typography>
              <List className="bg-gray-100 w-full p-2 overflow-auto rounded-lg flex flex-row gap-4 flex-wrap  max-h-[140px] items-start md:min-h-[200px]">
                {/* overflow-y-scroll */}
                {taskData && taskData.length > 0
                  ? taskData.map((item) => (
                      <ListItem
                        key={item.id}
                        className="p-0 bg-gray-200 w-fit group cursor-default"
                      >
                        <label
                          htmlFor={`horizontal-list-react${item.id}`}
                          className="flex w-full cursor-default items-center px-3 py-2"
                        >
                          <ListItemPrefix className="mr-3">
                            <Checkbox
                              id={`horizontal-list-react${item.id}`}
                              ripple={false}
                              color="green"
                              name="status"
                              className="hover:before:opacity-0"
                              containerProps={{
                                className: "p-0",
                              }}
                              checked={item.status}
                              onClick={() =>
                                handleUpdateSubActivity.mutate({
                                  subActivityId: item.id,
                                  status: !item.status,
                                })
                              }
                              disabled={status === "standby" ? true : false}
                            />
                          </ListItemPrefix>
                          <Typography
                            color="blue-gray"
                            className="font-medium text-xs md:text-md"
                          >
                            {item.name}
                          </Typography>
                        </label>
                        <div
                          className="w-8 h-8 flex items-center justify-center rounded-full ml-0"
                          style={{
                            display: status === "standby" ? "none" : "flex",
                          }}
                        >
                          <IoIosCloseCircle
                            onClick={() => DeleteSubActivity(item.id)}
                            size={25}
                            color="#fc8282"
                            className="hidden group-hover:flex transition cursor-pointer"
                          />
                        </div>
                      </ListItem>
                    ))
                  : translations && translations.noSubActivitiesText}
              </List>
            </>
          )}
        </DialogBody>
        <DialogFooter className="space-x-2 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              className="px-2 py-2 capitalize border-none outline-none="
              variant="text"
              color="red"
              disabled={taskData && taskData.length > 0}
              onClick={() => handleDelete(taskId)}
            >
              {translations.deleteActivity}
            </Button>
          </div>
          <Button
            className="px-2 py-2"
            variant="filled"
            color="gray"
            onClick={handleOpen}
          >
            {translations.finishText}
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
