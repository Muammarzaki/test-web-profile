import { Link, useParams } from "react-router-dom";
import { ProgramStudi } from "../../utils";

const TenagaPengajar = ({ data }: ProgramStudi) => {
  let { location } = useParams();
  return (
    <div className="w-full flex flex-row flex-wrap gap-4">
      {data.content.map((tenagaPengajar, _) => (
        <div
          key={_}
          className="flex p-2 border border-slate-500 rounded-xl items-center"
        >
          <div className="h-24 w-24 bg-cover rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={tenagaPengajar.img}
              alt={tenagaPengajar.nama}
            />
          </div>
          <div className="ml-2 text-base font-medium text-gray-700">
            <p>{tenagaPengajar.nama}</p>
            <Link
              to={`/${tenagaPengajar.slug}`}
              className="text-sm border border-slate-500"
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
