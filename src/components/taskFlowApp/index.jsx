import React from "react";
import TopNavBar from "../TopNavBar";
import TaskCard from "../TaskCard";
import useFetch from "../../../hook/useFetch";
import { SiOnlyoffice } from "react-icons/si";
import { MdAddCircle, MdFilterListOff } from "react-icons/md";
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
import { useLang } from "../../../hook/LangContext";
import { CreateProjectCard } from "./CreateProjectCard";
import { CreateActivity } from "./CreateActivity";

export default function TaskFlowApp() {
  const { tasks } = useFetch();
  const [selectedProject, setSelectedProject] = React.useState(null);
  const [selecionado, setSelecionado] = React.useState(false);
  const { translations } = useLang();

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

  return (
    <div className="pt-0 bg-[#f5f5f7] h-screen overflow-scroll">
      <TopNavBar />
      <div className="px-2 md:px-36 pt-5 flex items-center justify-between">
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
            {tasks.map((item) => (
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
        <CreateProjectCard />
      </div>
      <div className="p-2 md:px-36 py-5 flex flex-wrap transition">
        {tasks
          .filter((item) => item.name === selectedProject || !selectedProject)
          .map((projectData) => (
            <div className="flex flex-col w-full" key={projectData.id}>
              <div className="bg-[#eaedf1] w-full group rounded-md mb-2 flex items-center justify-between pr-3">
                <Breadcrumbs className="bg-[#eaedf1]">
                  <SiOnlyoffice />
                  <Typography className="opacity-60">
                    {projectData.name}
                  </Typography>
                  <Typography className="opacity-60">
                    {projectData.activities.length} {translations.activityText}
                  </Typography>
                </Breadcrumbs>
                <div className="flex items-center gap-5">
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
                        disabled={projectData.activities.length > 0}
                        className="flex gap-2 text-sm border-none outline-none hover:border-none active:border-none bg-white"
                      >
                        <RiDeleteBack2Fill size={18} />
                        {translations.deleteProject}
                      </MenuItem>
                      <MenuItem
                        disabled={!projectData.activities.length}
                        className="flex gap-2 text-sm border-none outline-none hover:border-none active:border-none bg-white"
                      >
                        <RiDeleteBack2Fill size={18} />
                        Excluir * atividades
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </div>
              </div>
              <div className="p-2 md:px-0 py-5 flex flex-wrap">
                {projectData.activities.map((item) => (
                  <TaskCard
                    key={item.id}
                    name={projectData.name}
                    role={item.role}
                    percentage={item.percentage}
                    activity={item.name}
                    user_name={item.user_name}
                    start={item.start}
                    end={item.end}
                    status={item.status}
                    sub_activities={item.sub_activities}
                    taskData={item.sub_activities}
                  />
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
