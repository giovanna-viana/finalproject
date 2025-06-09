"use client";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";


import axios from "axios";
import Modal from "./modal";
import Heading from "../Heading";
import Input from "../inputs/input";
import toast from "react-hot-toast";


const RegisterModal = () => {
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
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

    const toggle = useCallback(() => {
      registerModal.onClose();
      loginModal.onOpen();
    }, [registerModal, loginModal]);

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
            <div onClick={toggle} className="cursor-pointer text-neutral-800 hover:underline">
              Entrar
            </div>
          </div>
        </div>
      </div>
    );

    return (
      <Modal
        disable={isLoading}
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