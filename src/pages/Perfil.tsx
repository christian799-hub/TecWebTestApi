import {getUser} from "../utils/auth";

export default function Perfil() {

  const user = getUser();

  return (
    <div>

      <h1>
        perfil
      </h1>

      <p>
        Página no encontrada
      </p>

    </div>
  );
}