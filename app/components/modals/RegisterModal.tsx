"use client";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "@/app/hooks/useRegisterModal";

import axios from "axios";
import Modal from "./modal";
import Heading from "../Heading";
import Input from "../inputs/input";
import toast from "react-hot-toast";


const RegisterModal = () => {
    const registerModal = useRegisterModal();
    const [isLoading, setIsLoading] = useState(false);

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<FieldValues>({
      defaultValues: {
        name: "",
        email: "",
        password: "",
      },
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
      setIsLoading(true);

      axios.post("/api/register", data)
        .then(() => {
          registerModal.onClose();
        })
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .catch((error) => {
          toast.error("Algo deu errado!");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }

    const bodyContent = (
      <div className="flex flex-col gap-4">
        <Heading title="Bem-vindo(a) ao KeyFinder" subtitle="Crie sua conta" />
        <Input
          id="name"
          label="Nome"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <Input
          id="email"
          label="Email"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />

        <Input
          id="password"
          type="password"
          label="Senha"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>
    );

    const footerContent = (
      <div className="flex flex-col gap-4 mt-3">
        <hr />

        <div className="mt-4 font-light text-center text-neutral-500">
          <div className=" justify-center flex flex-row items-center gap-2">
            <div>Já tem uma conta?</div>
            <div onClick={registerModal.onClose} className="cursor-pointer text-neutral-800 ">
              Entrar
            </div>
          </div>
        </div>
      </div>
    );

    return (
      <Modal
        disabled={isLoading}
        isOpen={registerModal.isOpen}
        title="Registre-se"
        actionLabel="Continuar"
        onClose={registerModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
        footer={footerContent}
      />
    );
}

export default RegisterModal;