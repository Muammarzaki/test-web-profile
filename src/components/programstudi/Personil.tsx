import React from "react";
import { ProgramStudi } from "../../utils";

export const Personil = ({ data }: ProgramStudi) => {
  return (
    <div className="flex w-full gap-10">
      {data.content.map((personil, _) => (
        <div
          key={_}
          className="w-80 h-96 border border-slate-500 rounded-xl flex flex-col overflow-hidden relative"
        >
          <img
            src={personil.img}
            alt={personil.nama}
            className="object-cover w-full h-full"
          />
          <div className="absolute w-full bottom-0 p-2">
            <div className="w-full bg-slate-300 rounded-lg px-4 py-3 flex flex-col gap-3">
              <h1 className="text-xl text-slate-600">{personil.nama}</h1>
              <p className="text-sm text-slate-500">{personil.pangkat}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Personil;
