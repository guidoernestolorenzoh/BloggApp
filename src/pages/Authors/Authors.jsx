import {
  Avatar,
  Description,
  Label
} from "@heroui/react";
import { Persons, PencilToLine, HeartFill } from "@gravity-ui/icons";
import { followers } from "../../utils";
import Follow from "../../components/Follow";



const Authors = () => {
  return (
    <div className="flex flex-col ml-10">
      <h1 className="text-4xl font-semibold mt-2">Authors</h1>
      <p className="mt-6 text-justify text-lg">
        Aquí están nuestros autores, puedes seguirlos para q no te pierdas
        ningunos de sus artículos, puede ser que hoy recibas alimento a tu alma.
      </p>

      <div className="flex justify-center items-center">
        <ul className="flex flex-wrap gap-2 mt-4">
          {followers.map((f) => (
            <li
              key={f.id}
              className="flex items-center justify-between  shrink-0 bg-zinc-100 max-w-lg rounded-4xl my-2 mx-4 px-8 py-6 dark:text-gray-300 dark:bg-zinc-900 border bg-linear-to-br from-accent/5 via-surface to-surface-secondary shadow-lg shadow-accent/5 dark:border-accent/10 dark:from-accent/10 dark:via-surface dark:to-accent/8 dark:shadow-accent/5"
            >
              <div className="flex gap-4 items-center">
                <div className="flex flex-col items-center space-y-4">
                  <Avatar className="size-40 rounded-full">
                    <Avatar.Image alt={f.name} src={f.img} />
                    <Avatar.Fallback className="text-3xl">
                      {f.name.charAt(0)}
                    </Avatar.Fallback>
                  </Avatar>
                  <Follow/>
                </div>
                <div className="flex flex-col">
                  <Label className="text-3xl w-64 overflow-hidden text-ellipsis whitespace-nowrap">
                    {f.name}
                  </Label>
                  <Description>{f.email}</Description>
                  <span className="my-2 text-lg">{f.cargo}</span>
                  <div className="flex items-center justify-evenly text-lg gap-2">
                    <div className="flex text-[#5893f1] items-center text-lg gap-2">
                      <Persons />
                      <span className="">5k</span>
                    </div>
                    <div className="flex text-[#EF4444] items-center text-lg gap-2">
                      <HeartFill />
                      <span className="">10k</span>
                    </div>
                    <div className="flex text-[#6d3799] items-center text-lg gap-2">
                      <PencilToLine />
                      <span className="">1k</span>
                    </div>
                  </div>
                  <p className="my-2 text-sm text-justify">{`${f.name} es un siervo de Dios comprometido con compartir el amor de Cristo. A través de sus escritos busca inspirar, enseñar y fortalecer la fe de quienes lo leen.`}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Authors;
