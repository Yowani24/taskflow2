import React, { useEffect, useState } from "react";
import {
  Card,
  Input,
  Button,
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useLang } from "../../hook/LangContext";
import br_flag from "../assets/br_flag.jpg";
import en_flag from "../assets/en_flag.jpg";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Register() {
  const { language, switchLanguage, translations } = useLang();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
      const user = userCredential.user;
      localStorage.setItem("token", user.getIdToken);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="h-screen flex items-center justify-between bg-white">
      <div className="relative flex flex-col items-center justify-center h-full w-full md:w-[50%] bg-white">
        <div className="flex items-center gap-4 absolute top-10 right-10">
          <Menu>
            <span className="text-xs text-gray-500">
              {translations.language}
            </span>
            <MenuHandler>
              <Avatar
                variant="circular"
                size="xs"
                alt="language"
                className="cursor-pointer w-8 h-8 md:w-8 md:h-8"
                src={language === "pt" ? br_flag : en_flag}
              />
            </MenuHandler>
            <MenuList>
              <MenuItem
                className="flex items-center gap-2 bg-white"
                onClick={() => switchLanguage("pt")}
              >
                <Typography variant="small" className="font-medium">
                  {translations.language_pt}
                </Typography>
              </MenuItem>
              <MenuItem
                className="flex items-center gap-2 bg-white"
                onClick={() => switchLanguage("en")}
              >
                <Typography variant="small" className="font-medium">
                  {translations.language_en}
                </Typography>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray" className="text-3xl">
            {translations.hello} 👋
          </Typography>
          {/* <Typography color="gray" className="mt-2 font-normal">
            Insira seus dados para acessar sua conta
          </Typography> */}
          <form
            onSubmit={handleSubmit}
            className="mt-20 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Seu nome
              </Typography>
              <Input
                size="lg"
                placeholder="seu nome"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                {translations.your_email}
              </Typography>
              <Input
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Crie uma senha
              </Typography>
              <Input
                type="password"
                maxLength={8}
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button
              type="submit"
              className="mt-6 bg-[#4b41dfce] hover:bg-[#4b41dfe1]"
              fullWidth
            >
              Registrar
            </Button>

            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-gray-900">
                Entrar
              </Link>
            </Typography>
          </form>
        </Card>
      </div>
      <div
        className="h-full w-[50%] hidden md:flex"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1648737965484-dd50b35532fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
}
