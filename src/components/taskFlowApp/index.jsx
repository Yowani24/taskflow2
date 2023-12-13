import React, { useState } from "react";
import TopNavBar from "../TopNavBar";
import TaskCard from "../TaskCard";
import useFetch from "../../../hook/useFetch";
import { SiOnlyoffice } from "react-icons/si";
import { MdFilterListOff } from "react-icons/md";
import { RiDeleteBack2Fill } from "react-icons/ri";
import {
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
  Tooltip,
  Breadcrumbs,
  Typography,
} from "@material-tailwind/react";
import { TbFilterSearch } from "react-icons/tb";
import { PiDotsNineBold } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";
import { useLang } from "../../../hook/LangContext";
import { CreateProjectCard } from "./CreateProjectCard";
import { CreateActivity } from "./CreateActivity";
import { Rings } from "react-loader-spinner";

export default function TaskFlowApp() {
  const { data, isLoading, handleDeleteProject } = useFetch();
  const [projectsData, setProjectsData] = useState([]);
  const [selectedProject, setSelectedProject] = React.useState(null);
  const [selecionado, setSelecionado] = React.useState(false);
  const { translations } = useLang();
  const [currentTab, setCurrentTab] = useState("over_view");
  const user = JSON.parse(localStorage.getItem("user"));

  React.useEffect(() => {
    if (!isLoading && data) {
      setProjectsData(
        data.filter((userEmail) => userEmail?.userCreatedEmail === user?.email)
      );
    }
  }, [data, isLoading]);

  const handleTabChange = (selectedTab) => {
    setCurrentTab(selectedTab);
  };

  const handleCheckboxChange = (item) => {
    if (selectedProject === item.name) {
      setSelectedProject(null);
    } else {
      setSelectedProject(item.name);
    }
  };

  React.useEffect(() => {
    setSelecionado(selectedProject !== null);
  }, [selectedProject]);

  const handleDelete = async (projectId) => {
    try {
      handleDeleteProject.mutate(projectId);
    } catch (error) {
      console.error(error.message);
    }
  };

  const onDownload = () => {
    const link = document.createElement("a");
    link.download = `arquivoteste.pdf`;
    link.href = "../../assets/arquivoteste.pdf";
    link.click();
  };

  return (
    <>
      {isLoading ? (
        <div className="w-full h-screen flex items-center justify-center">
          <Rings
            height="200"
            width="200"
            color="#591fc5"
            radius="16"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="rings-loading"
          />
        </div>
      ) : (
        <div className="pt-0 bg-[#f5f5f7] h-screen overflow-auto">
          <div className="fixed top-0 w-full z-50 bg-white rounded-b-2xl border border-b-2">
            <TopNavBar getCurrentTab={handleTabChange} />
            <div className="px-2 md:px-36 py-3 flex items-center justify-between rounded-b-2xl w-full">
              <Menu
                dismiss={{
                  itemPress: false,
                }}
              >
                <div className="flex items-center">
                  <MenuHandler>
                    <Button>
                      <TbFilterSearch size={14} />
                    </Button>
                  </MenuHandler>
                  {selecionado && (
                    <div
                      className="flex items-center cursor-pointer transition gap-2 bg-gray-400 px-2 py-1 self-center text-sm rounded-tr-lg rounded-br-lg"
                      onClick={() => setSelectedProject(null)}
                    >
                      <span className="hidden md:flex">
                        {translations.cleanFilter}
                      </span>{" "}
                      <span className="md:hidden">{translations.clean}</span>{" "}
                      <MdFilterListOff />
                    </div>
                  )}
                </div>

                <MenuList>
                  {projectsData.map((item) => (
                    <MenuItem className="p-0 bg-white" key={item.id}>
                      <label
                        htmlFor={item.id}
                        className="flex cursor-pointer items-center gap-2 p-2"
                      >
                        <input
                          type="checkbox"
                          id={item.id}
                          color="#ffffff"
                          className="bg-white"
                          checked={selectedProject === item.name}
                          onChange={() => handleCheckboxChange(item)}
                        />
                        {item.name}
                      </label>
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
              {projectsData && projectsData.length <= 0 ? (
                ""
              ) : (
                <CreateProjectCard />
              )}
            </div>
          </div>
          {projectsData && projectsData.length <= 0 ? (
            <div className="p-2 md:px-36 py-5 flex flex-col items-center mt-20 flex-wrap transition bg-cover bg-center">
              <span className="flex items-center justify-center text-center text-gray-700 text-sm md:text-xl">
                {translations.no_projects_registered}
              </span>

              <div className="mt-8">
                <CreateProjectCard />
              </div>
            </div>
          ) : (
            <div className="p-2 md:px-36 py-5 flex mt-[120px] md:mt-[140px] flex-wrap transition">
              {projectsData
                .filter(
                  (item) => item.name === selectedProject || !selectedProject
                )
                .map((projectData) => (
                  <div className="flex flex-col w-full" key={projectData.id}>
                    <div className="bg-[#eaedf1] w-full group rounded-md mb-2 py-1 flex flex-col-reverse md:flex-row relative items-start justify-between pr-3">
                      <Breadcrumbs className="bg-[#eaedf1] flex flex-col md:flex-row items-start">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-2">
                            <SiOnlyoffice />
                            <Typography className="opacity-60">
                              {projectData.name}
                            </Typography>
                          </div>
                          <Typography className="opacity-60">
                            {projectData?.activities?.length}{" "}
                            {translations.activityText}
                          </Typography>
                        </div>
                        <div className="flex items-center gap-2 mt-2 md:mt-0">
                          <Typography
                            className="flex items-center gap-1 bg-blue-gray-100 rounded-full px-2"
                            onClick={onDownload}
                          >
                            <div>
                              <span className="hidden md:flex text-sm p-1">
                                {translations.specification}
                              </span>{" "}
                              <span className="md:hidden">
                                {translations.specs}
                              </span>{" "}
                            </div>
                            <LiaDownloadSolid size={15} />
                          </Typography>
                          <Typography className="text-sm">
                            {" "}
                            status:{" "}
                            <span className="text-green-600">
                              {Math.ceil(
                                Object.values(
                                  projectData?.activities || {}
                                ).reduce(
                                  (accumulator, currentItem) =>
                                    accumulator + currentItem.percentage,
                                  0
                                ) /
                                  Math.max(
                                    projectData?.activities?.length || 1,
                                    1
                                  )
                              )}
                              %
                            </span>
                          </Typography>
                        </div>
                      </Breadcrumbs>
                      <div className="flex items-center justify-between w-full md:w-auto md:gap-5 pl-4">
                        <CreateActivity
                          projectName={projectData.name}
                          projectId={projectData.id}
                        />

                        <Menu>
                          <MenuHandler>
                            <Button
                              variant="text"
                              className="p-0 m-0 rounded-full border-none shadow-none"
                            >
                              {" "}
                              <Tooltip content={translations.editProject}>
                                <IconButton
                                  variant="text"
                                  className="rounded-full border-none text-gray-600"
                                >
                                  <PiDotsNineBold size={25} />
                                </IconButton>
                              </Tooltip>
                            </Button>
                          </MenuHandler>
                          <MenuList>
                            <MenuItem
                              disabled={projectData?.activities?.length > 0}
                              className="flex gap-2 text-sm border-none outline-none hover:border-none active:border-none bg-white"
                              onClick={() => handleDelete(projectData.id)}
                            >
                              <RiDeleteBack2Fill size={18} />
                              {translations.deleteProject}
                            </MenuItem>
                          </MenuList>
                        </Menu>
                      </div>
                    </div>
                    <div className="p-2 md:px-0 py-5 flex flex-wrap">
                      {currentTab === "over_view" ? (
                        <>
                          {projectData?.activities?.map((item) => (
                            <TaskCard
                              key={item.id}
                              name={projectData.name}
                              role={item.role}
                              percentage={item.percentage}
                              activity={item.name}
                              user_name={item.userName}
                              start={item.start}
                              end={item.end}
                              status={item.status}
                              sub_activities={item.subActivities}
                              taskData={item.subActivities}
                              taskId={item.id}
                              projectId={projectData.id}
                            />
                          ))}
                        </>
                      ) : (
                        <>
                          {projectData?.activities
                            .filter((item) => item.status === currentTab)
                            .map((activity, index) => (
                              <TaskCard
                                key={activity.id}
                                name={projectData.name}
                                role={activity.role}
                                percentage={activity.percentage}
                                activity={activity.name}
                                user_name={activity.userName}
                                start={activity.start}
                                end={activity.end}
                                status={activity.status}
                                sub_activities={activity.subActivities}
                                taskData={activity.subActivities}
                                taskId={activity.id}
                                projectId={projectData.id}
                              />
                            ))}
                        </>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
