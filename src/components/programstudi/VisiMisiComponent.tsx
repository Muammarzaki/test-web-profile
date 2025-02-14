import React from "react";
import { ProgramStudi } from "../../utils/index";
import { Target, Lightbulb, Flag } from "lucide-react";

export const VisiMisiComponent = ({ data }: ProgramStudi) => {
  return (
    <div className="space-y-12">
      {/* Visi Section */}
      <div className="relative">
        <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-600 to-teal-400" />
        <div className="pl-8">
          <div className="flex items-center mb-6">
            <div className="bg-teal-600 p-3 rounded-xl shadow-lg">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="ml-4 text-2xl font-bold text-gray-900">Visi</h2>
          </div>
          <div className="bg-gradient-to-r from-teal-50 to-white border-l-4 border-teal-600 rounded-r-xl p-6 shadow-sm">
            <p className="text-xl text-gray-800 italic leading-relaxed">
              {data.content.visi}
            </p>
          </div>
        </div>
      </div>

      {/* Misi Section */}
      <div className="relative">
        <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 to-yellow-300" />
        <div className="pl-8">
          <div className="flex items-center mb-6">
            <div className="bg-yellow-400 p-3 rounded-xl shadow-lg">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h2 className="ml-4 text-2xl font-bold text-gray-900">Misi</h2>
          </div>
          <div className="grid gap-4">
            {data.content.misi.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-yellow-100"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.judul}
                </h3>
                <p className="text-gray-600">{item.isi}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tujuan Section */}
      <div className="relative">
        <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-600 to-indigo-400" />
        <div className="pl-8">
          <div className="flex items-center mb-6">
            <div className="bg-indigo-600 p-3 rounded-xl shadow-lg">
              <Flag className="w-8 h-8 text-white" />
            </div>
            <h2 className="ml-4 text-2xl font-bold text-gray-900">Tujuan</h2>
          </div>
          <div className="grid gap-4">
            {data.content.tujuan.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-indigo-100 hover:border-indigo-300"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                    <span className="text-indigo-600 font-semibold">{index + 1}</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.judul}
                    </h3>
                    <p className="text-gray-600">{item.isi}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisiMisiComponent;