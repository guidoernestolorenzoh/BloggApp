import { Separator, Button } from "@heroui/react";
import { LogoFacebook } from "@gravity-ui/icons";
import { useState } from "react";
import {LogoYandexMessenger} from '@gravity-ui/icons';

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const emailChurch = "info@gmail.com";
  const phoneChurch = "+1 188 888";

  return (
    <>
      <div className="flex flex-col ml-10">
        <h1 className="text-4xl font-semibold mt-10">Contact us</h1>
        <p className="mt-6 text-justify text-lg">
          ¡Bienvenido! nos alegra que quieras ponerte en contacto con nosotros.
          Este blog es una extensión de nuestro ministerio, y deseamos que sea
          un lugar de bendición y enseñanza. Si tienes preguntas
          sobre algún artículo, quieres saber más acerca de Jesucristo,
          necesitas oración, deseas visitarnos o simplemente quieres saludar,
          estaremos encantados de escucharte.
        </p>
        <Separator className="my-10" />

        <div className="flex">
          <form className="space-y-7 w-1/2" onSubmit={(e) => e.preventDefault()}>
            {/* name */}
            <label className="flex flex-col gap-2 text-sm font-medium text-gray-600">
              <div className="flex gap-1">
                Your Name
                <span className="text-red-500">*</span>
              </div>
              <div className="relative">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Your name"
                  className="inputs-rounded"
                />
              </div>
            </label>

            {/* Email */}
            <label className="flex flex-col gap-2 text-sm font-medium text-gray-600">
              <div className="flex gap-1">
                Your Email
                <span className="text-red-500">*</span>
              </div>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Your email"
                  className="inputs-rounded"
                />
              </div>
            </label>

            {/* Your Message */}
            <label className="flex flex-col gap-2 text-sm font-medium text-gray-600">
              <div className="flex gap-1">
                Your Message
                <span className="text-red-500">*</span>
              </div>
              <div className="relative">              
                <textarea
                  aria-level={4}
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  placeholder="Your message"
                  className="text-area-rounded"
                />
              </div>
            </label>

            {/* button submit */}
            <Button type="submit"> 
              <LogoYandexMessenger/>
              <span>Submit</span>
            </Button>
          </form>
          <Separator orientation="vertical" className="mx-10" />
          {/* EMAIL */}
          <div className="flex flex-col space-y-10 flex-1 mt-5">
            <div className="flex flex-col justify-center items-center">
              <label className="flex items-center">E-Mail</label>
              <span className="font-bold text-lg">{emailChurch}</span>
            </div>
            {/* Phone */}
            <div className="flex flex-col justify-center items-center">
              <label className="flex items-center">Phone</label>
              <span className="font-bold text-lg">{phoneChurch}</span>
            </div>
            {/* Socials */}
            <div className="flex flex-col justify-start items-center">
              <label className="flex items-center">Socials</label>
              <Button className="my-1 px-2 cursor-pointer" variant="ghost">
                <LogoFacebook className="size-6"/>
              </Button>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default ContactUs;
