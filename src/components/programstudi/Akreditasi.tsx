import React from "react";
import { FileText, Award } from "lucide-react";
import { ProgramStudi } from "../../utils";

export const Akreditasi = ({ data }: ProgramStudi) => {
  return (
    <div className="p-4 flex flex-row border border-slate-500 rounded-xl justify-between md:items-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">{data.content.akreditasi}</h1>
        <div className="flex flex-col gap-2">
          <div className="flex gap-3 items-center">
            <FileText className="w-5 w-5 flex-shrink-0" />
            <p>{data.content.suratAkreditasi.isi}</p>
          </div>
          <div className="flex gap-3 items-center">
            <FileText className="w-5 w-5 flex-shrink-0" />
            <p>{data.content.expiredSurat}</p>
          </div>
        </div>
      </div>
      <Award className="hidden md:block h-24 w-24 " />
    </div>
  );
};

export default Akreditasi;
