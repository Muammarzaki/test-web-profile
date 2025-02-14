import React from "react";
import { ProgramStudi } from "../../utils";
import { Phone, Mail, Globe, Clock } from "lucide-react";

export const LayananProdi = ({ data }: ProgramStudi) => {
  return (
    <div className="bg-teal-600 rounded-3xl p-8 text-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Staff Profile Section */}
        <div className="lg:col-span-4">
          <div className="flex flex-col items-center lg:items-start">
            <div className="w-32 h-32 rounded-2xl overflow-hidden mb-4">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
                alt="Staff Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-semibold">Cut Ida Rahmatiana, S.Si</h3>
              <p className="text-teal-100 mt-1">Staf Administrasi Prodi</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="lg:col-span-4 flex flex-col justify-center">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-teal-200" />
              <div>
                <p className="text-sm text-teal-200">Telepon</p>
                <p className="text-white">+62 xxx-xxxx-xxxx</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-teal-200" />
              <div>
                <p className="text-sm text-teal-200">Email</p>
                <p className="text-white">example@email.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Globe className="w-5 h-5 text-teal-200" />
              <div>
                <p className="text-sm text-teal-200">Web Prodi</p>
                <p className="text-white">www.example.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Working Hours */}
        <div className="lg:col-span-4 flex flex-col justify-center">
          <div className="bg-teal-700/50 rounded-2xl p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Clock className="w-5 h-5 text-teal-200" />
              <h4 className="text-lg font-medium">Jam Kerja</h4>
            </div>
            
            <div className="space-y-3">
              <p className="text-teal-100">Senin - Jumat</p>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-teal-200">Pagi</p>
                  <p className="text-white">08.00 - 12.30</p>
                </div>
                <div>
                  <p className="text-sm text-teal-200">Siang</p>
                  <p className="text-white">14.00 - 16.30</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayananProdi;