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
  Card,
  CardBody,
  Badge,
  Checkbox,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import Octa from "./Octa";

const subActivities = [
  { id: 1, name: "Nova atividade 1" },
  { id: 2, name: "Nova atividade hahaha 2" },
  { id: 3, name: "Nova atividade gagaagaga 3" },
  { id: 4, name: "Nova atividade bb 4" },
  { id: 5, name: "Nova atividade 1" },
];

export default function TaskDetails(props) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button onClick={handleOpen}>Message Dialog</Button>
      <Dialog open={open} size="xs" handler={handleOpen}>
        <div className="flex items-start justify-between w-full">
          <DialogHeader className="flex flex-col items-start">
            {" "}
            <Typography
              className="mb-1 w-[370px] flex flex-wrap text-xl"
              variant="h4"
            >
              Atividade de teste teste
            </Typography>
          </DialogHeader>
          <Octa />
        </div>
        <DialogBody>
          <Typography
            className="mb-10 -mt-5 flex flex-wrap text-sm"
            color="gray"
            variant="lead"
          >
            Especificação e estágio da atividade de teste
            <span className="text-[#00ff62] ml-2">85%</span>
          </Typography>
          <div className="grid gap-6">
            <Typography
              className="-mb-5 text-xs"
              color="blue-gray"
              //   variant="h6"
            >
              Criar sub-atividades
            </Typography>
            <div className=" w-[300px]">
              <Input
                crossOrigin={""}
                label="Sub-atividade"
                className="w-[300px] border-0"
                // variant="standard"
              />
            </div>
            <Card className="mt-6 w-full border bg-[#e1e8ec] shadow-white">
              <CardBody className="flex items-start flex-wrap transition">
                {subActivities.map((item) => (
                  <ListItem className="bg-[#ffffff] m-2 hover:bg-[#dad0f3] group w-fit p-0 rounded-lg text-sm text-gray hover:text-[#1d1c1d]">
                    <label
                      htmlFor={`${item.name + "" + item.id}`}
                      className="flex w-full cursor-pointer items-center px-3 py-2"
                    >
                      <ListItemPrefix className="mr-3">
                        <Checkbox
                          crossOrigin={""}
                          id={`${item.name + "" + item.id}`}
                          ripple={false}
                          className="hover:before:opacity-0"
                          color="green"
                          containerProps={{
                            className: "p-0",
                          }}
                        />
                      </ListItemPrefix>
                      <Typography color="blue-gray" className="font-medium">
                        {item.name}
                      </Typography>
                    </label>
                    <Badge
                      content="x"
                      withBorder
                      className="cursor-pointer absolute top-[-18px] right-[4px] hidden transition items-center justify-center group-hover:flex"
                    ></Badge>
                  </ListItem>
                ))}
              </CardBody>
            </Card>
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button
            variant="outlined"
            size="sm"
            onClick={handleOpen}
            className="border-[#5d40af] text-[#865df7] hover:text-[#8462e2]"
          >
            Concluir
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
