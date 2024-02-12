import React from "react";

import { useForm } from "react-hook-form";

enum SubjectEnum {
  budget = "bugdet",
  work = "work",
  sugg = "sugg",
  other = "other",
}

interface IFormInput {
  email: string;
  name: string;
  subject: SubjectEnum;
  checkbox: boolean;
  message: string;
}

function Contact() {
  const [characters, setCharacters] = React.useState(0);
  const [userEmail, setUserEmail] = React.useState("");
  const [subject, setSubject] = React.useState("bugdet");

  const {
    register,
    formState: { errors },
  } = useForm<IFormInput>();

  const handleEmail = (event: any) => {
    setUserEmail(event.target.value);
  };

  const handleSubject = (event: any) => {
    setSubject(event.target.value);
  };

  return (
    <div
      id="scrollspyHeading4"
      className="contact d-flex justify-content-center position-relative gray-bg-2 py-5"
    >
      <div className="col-10 col-lg-8 my-5" style={{ zIndex: "5" }}>
        <div className="text-center text-lg-start">
          <h1 className="text-center">Fale conosco</h1>
          <p className="fst-italic text-center">
            Quer mandar algum feedback ou trabalhar conosco? Entre em contato!
          </p>
        </div>

        <form
          className="d-flex flex-lg-row flex-column justify-content-center"
          id="contact"
          target="_blank"
          action={`https://formsubmit.co/${
            subject === "carreira"
              ? "jobs@seeliefy.com"
              : "contato@seeliefy.com"
          }`}
          method="POST"
        >
          <div className="col-lg-6 me-lg-5">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail" className="form-label">
                Seu e-mail
              </label>
              <input
                type="email"
                placeholder="Exemplo: contato@seeliefy.com"
                className="form-control gray-bg-2"
                id="exampleInputEmail"
                {...register("email", {
                  required: true,
                  minLength: 10,
                  maxLength: 50,
                  onChange: handleEmail,
                })}
              />
              {errors.email && (
                <p role="alert" className="ms-3" style={{ color: "#ff0f0f" }}>
                  Esse campo precisa ser preenchido
                </p>
              )}
            </div>

            <input type="hidden" name="_cc" value={userEmail}></input>

            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">
                Seu nome
              </label>
              <input
                type="text"
                placeholder="Exemplo: Seeliefy"
                className="form-control gray-bg-2"
                id="exampleInputName"
                {...register("name", {
                  required: true,
                  minLength: 3,
                  maxLength: 50,
                })}
              />
              {errors.name?.type === "required" && (
                <p role="alert" className="ms-3" style={{ color: "#ff0f0f" }}>
                  Esse campo precisa ser preenchido
                </p>
              )}
            </div>

            <div className="mb-3 col-12 col-lg-6">
              <label htmlFor="exempleSelectSubject" className="form-label">
                Assunto
              </label>
              <select
                id="exempleSelectSubject"
                className="form-select gray-bg-2"
                aria-label="Selecione o assunto"
                {...(register("subject"), { onchange: handleSubject })}
                onChange={handleSubject}
              >
                <option value="bugdet">Orçamento</option>
                <option value="carreira">Trabalhe conosco</option>
                <option value="sugestoes">Sugestões</option>
                <option value="outros">Outros</option>
              </select>
            </div>

            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                {...register("checkbox", { required: true })}
              />
              <label
                className="form-check-label fst-italic"
                htmlFor="flexCheckDefault"
              >
                Ao selecionar esta caixa, você nos autoriza a compartilhar seu
                e-mail conosco.
              </label>
              {errors.checkbox && (
                <p role="alert" style={{ color: "#ff0f0f" }}>
                  Essa caixa precisa ser assinalado
                </p>
              )}
            </div>
          </div>

          <div className="col-lg-4">
            <label htmlFor="messageBox" className="form-label invisible">
              Escreva sua mensagem
            </label>
            <textarea
              id="messageBox"
              className="form-control gray-bg-2 h-50"
              placeholder="Digite sua mensagem aqui"
              {...register("message", {
                required: true,
                maxLength: 1000,
                onChange(event) {
                  setCharacters(event.target.value.length);
                },
              })}
            ></textarea>
            <p
              className="text-end"
              style={{
                color:
                  characters > 1000 ? "#ff0f0f" : "rgb(255, 255, 255, 40%)",
              }}
            >
              {characters}/1000
            </p>
            {errors.message?.type === "required" && (
              <p role="alert" className="ms-3" style={{ color: "#ff0f0f" }}>
                Esse campo precisa ser preenchido
              </p>
            )}
            <input
              type="submit"
              className="btn border-black fst-italic py-3 mt-3 w-100"
              value="Enviar mensagem"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
