import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function PreviewUnidad({ unidad }) {
  const { auth } = useAuth();

  const { nombre, _id, nivel/* , creador */ } = unidad;

  return (
    <div className="border-b p-5 mt-3 flex flex-col md:flex-row justify-between gap-2">
      <div className="flex items-center gap-2">
        <p className="flex-1 text-xl">
          {nombre}
          <span className="text-sm font-bold ml-2 text-sky-600 uppercase"> {nivel}</span>
        </p>

        {/* {auth._id !== creador && (
          <p className="m-2 p-1 text-xs rounded-lg text-white bg-green-500 font-bold uppercase">
            Colaborador
          </p>
        )} */}
      </div>

      <Link
        to={`${_id}`}
        className="text-gray-600 hover:text-gray-800 uppercase text-sm font-bold"
      >
        Ver Unidad
      </Link>
    </div>
  );
}

export default PreviewUnidad;