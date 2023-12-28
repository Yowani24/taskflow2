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
import { useFormik } from "formik";
import * as Yup from "yup";
import useFetch from "../../../hook/useFetch";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

export function CreateActivity({ projectName, projectId }) {
  const { translations } = useLang();
  const { handleCreateActivity, isLoading } = useFetch();
  const [open, setOpen] = React.useState(false);
  // const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(
  //   new Date(startDate.setDate(startDate.getDate() + 1))
  // );

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState(startDate);

  const user = JSON.parse(localStorage.getItem("user"));

  const handleOpen = () => setOpen(!open);

  const Formik = useFormik({
    initialValues: {
      name: "",
      start: "",
      end: "",
      userName: user.email.split("@")[0],
      projectId: projectId,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      start: Yup.string().required("Required"),
      end: Yup.string().required("Required"),
      userName: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        handleCreateActivity.mutate({
          ...values,
          start: new Date(values.start).toISOString(),
          end: new Date(values.end).toISOString(),
        });
        setOpen(false);
        resetForm();
      } catch (error) {
        console.error(error.message);
      }
    },
  });

  return (
    <>
      <div
        onClick={handleOpen}
        className="flex gap-2 text-sm border-none outline-none hover:border-none active:border-none cursor-pointer bg-blue-gray-100 hover:bg-blue-gray-200 transition p-1 px-2 rounded-full text-gray-900"
      >
        <MdAddCircle size={20} className="" />
        <span className="">{translations.createActivity}</span>{" "}
      </div>

      <Dialog open={open} size="sm">
        <form onSubmit={Formik.handleSubmit}>
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

              <Textarea
                label={translations.description}
                name="name"
                onChange={Formik.handleChange}
                value={Formik.values.name}
                required
              />
              <div className="flex items-center gap-2 md:gap-0 flex-col sm:flex-row justify-between md:px-16 mb-10">
                <div>
                  <Typography className="text-xs mb-2">
                    {translations.startDate}
                  </Typography>
                  <Input
                    type="date"
                    name="start"
                    // onChange={
                    //   (Formik.handleChange, setStartDate(Formik.values.start))
                    // }
                    required
                    onChange={(e) => {
                      Formik.handleChange(e);
                      setStartDate(e.target.value);
                    }}
                    value={Formik.values.start}
                    containerProps={{
                      className: "md:min-w-[72px]",
                    }}
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-gray-700"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>
                <div>
                  <Typography className="text-xs mb-2">
                    {translations.endDate}
                  </Typography>
                  <Input
                    type="date"
                    name="end"
                    required
                    onChange={Formik.handleChange}
                    value={Formik.values.end}
                    containerProps={{ className: "md:min-w-[72px]" }}
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-gray-700"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    min={startDate}
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
              type="submit"
              variant="filled"
              color="gray"
              className="border-none outline-none text-xs capitalize bg-[#4b41dfce] hover:bg-[#4b41dfe1]"
              size="sm"
              disabled={Formik.isSubmitting}
            >
              {translations.createActivity}
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  );
}
