import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { useLang } from "../../../hook/LangContext";
import { MdAddCircle } from "react-icons/md";

export function CreateProjectCard() {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const { translations } = useLang();

  return (
    <React.Fragment>
      <Button
        onClick={openDrawer}
        className="flex items-center gap-2 px-3 py-2 rounded-full text-xs tracking-wide border-none"
      >
        <MdAddCircle size={20} className="" /> {translations.createProject}
      </Button>
      <Drawer open={open}>
        <div className="flex items-center justify-between px-4 pb-2 mt-5">
          <Typography
            className="mb-1 text-[16px] md:text-[20px] text-gray-900"
            variant="h4"
          >
            {translations.creatingProject}
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        {/* <div className="mb-5 px-4">
          <Typography variant="small" color="gray" className="font-normal ">
            Insira os detalhes do projeto
          </Typography>
        </div> */}
        <form className="flex flex-col gap-6 p-4">
          <div className="grid gap-6">
            <Typography
              className="-mb-5 md:-mb-2 text-[13px] text-gray-700"
              color="blue-gray"
              variant="h6"
            >
              {translations.user}
            </Typography>
            <Input label="Username" disabled value={"João da Costa"} />
          </div>

          <div className="grid gap-6 mt-5">
            <Typography
              className="-mb-5 md:-mb-2 text-[13px] text-gray-700"
              color="blue-gray"
              variant="h6"
            >
              {translations.projectTitle}
            </Typography>
            <Input label={translations.projectTitle} />
            {/* <Textarea label="Message" /> */}
          </div>
          <Button>{translations.createProject}</Button>
        </form>
      </Drawer>
    </React.Fragment>
  );
}
