import { Link, useParams } from "react-router-dom";
import { ProgramStudi } from "../../utils";

const TenagaPengajar = ({ data }: ProgramStudi) => {
  const { programId } = useParams();

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
      {data.content.map((tenagaPengajar, index) => (
        <div
          key={index}
          className="flex p-4 bg-white border border-gray-200 rounded-xl items-center gap-4 hover:border-teal-500 transition-colors"
        >
          <div className="h-24 w-24 flex-shrink-0 bg-cover rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={tenagaPengajar.img}
              alt={tenagaPengajar.nama}
            />
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-lg font-medium text-gray-900">
              {tenagaPengajar.nama}
            </h4>
            <Link
              to={`/program-studi/${programId}/${tenagaPengajar.slug}`}
              className="inline-flex items-center px-4 py-2 bg-teal-50 text-teal-700 rounded-lg text-sm font-medium hover:bg-teal-100 transition-colors"
            >
              Lebih Lanjut
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TenagaPengajar;
