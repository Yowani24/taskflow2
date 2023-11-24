import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { useLang } from "../../../hook/LangContext";
import { MdAddCircle } from "react-icons/md";

export function CreateActivity({ projectName, projectId }) {
  const { translations } = useLang();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <div
        onClick={handleOpen}
        className="flex gap-2 text-sm border-none outline-none hover:border-none active:border-none cursor-pointer bg-blue-gray-100 hover:bg-blue-gray-200 transition p-1 px-2 rounded-full"
      >
        <MdAddCircle size={20} className="" />
        <div>
          <span className="hidden md:flex">{translations.createActivity}</span>{" "}
          <span className="md:hidden">{translations.addText}</span>{" "}
        </div>
      </div>
      <Dialog open={open} size="xs">
        <div className="flex items-center justify-between">
          <DialogHeader className="flex flex-col items-start">
            {" "}
            <Typography
              className="mb-1 text-lg text-blue-gray-700"
              variant="h4"
            >
              {translations.creatingActivity}
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
        <DialogBody>
          <div className="grid gap-6">
            <Typography
              className="-mb-1 bg-blue-gray-50 w-fit px-2 font- rounded-md text-md text-blue-gray-500"
              color="blue-gray"
              variant="h6"
            >
              {projectName}
            </Typography>
            <Typography className="text-sm" color="gray" variant="lead">
              {translations.provideTheActivityDescription}
            </Typography>

            <Textarea label={translations.description} className="" />
            <div className="flex items-center gap-2 md:gap-0 flex-col sm:flex-row justify-between">
              <div>
                <Typography className="text-xs mb-2">
                  {translations.startDate}
                </Typography>
                <Input
                  type="date"
                  containerProps={{ className: "min-w-[72px]" }}
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
              <div>
                <Typography className="text-xs mb-2">
                  {translations.endDate}
                </Typography>
                <Input
                  type="date"
                  containerProps={{ className: "min-w-[72px]" }}
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
            </div>
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button
            size="sm"
            className="border-none outline-none capitalize text-[#403e63ce]"
            variant="text"
            color="gray"
            onClick={handleOpen}
          >
            {translations.cancel}
          </Button>
          <Button
            variant="filled"
            color="gray"
            className="border-none outline-none text-xs capitalize bg-[#4b41dfce] hover:bg-[#4b41dfe1]"
            onClick={handleOpen}
            size="sm"
          >
            {translations.createActivity}
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
