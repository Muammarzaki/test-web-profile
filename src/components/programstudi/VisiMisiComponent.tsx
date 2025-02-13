import React from "react";
import {ProgramStudi} from "../../utils/index";

export const VisiMisiComponent = ({ data }: ProgramStudi) => {
  return (
    <div>
      <div className="w-full rounded-xl border border-slate-500 p-4 text-xl font-semibold">
        {data.content.visi}
      </div>
      <div className="w-full mt-10">
        <h1 className="text-3xl">Misi Kami</h1>
        <div className="flex flex-col gap-5 mt-5">
          {data.content.misi.map((misi, _) => (
            <div key={_} className="border border-slate-500 p-3 rounded-xl">
              <h1 className="text-lg font-medium">{misi.judul}</h1>
              <p className="text-sm">{misi.isi}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full mt-10">
        <h1 className="text-3xl">Tujuan Kami</h1>
        <div className="flex flex-col gap-5 mt-5">
          {data.content.tujuan.map((tujuan, _) => (
            <div key={_} className="border border-slate-500 p-3 rounded-xl ">
              <h1 className="text-lg font-medium ">{tujuan.judul}</h1>
              <p className="text-sm">{tujuan.isi}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisiMisiComponent;
