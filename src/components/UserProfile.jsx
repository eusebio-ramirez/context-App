import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const UserProfile = () => {
  const { user, setUser } = useContext(UserContext);

  const [message, setMessage] = useState("");

  const onLogin = () => {
    if (user.name === "pepito" && user.password === "123456") {
      setMessage("Has iniciado sesion");
    } else {
      setMessage("Datos invalidos");
    }
  };

  const onReset = () => {
    setUser({ name: "", password: "" });
    setMessage("");
  };

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        onChange={onChange}
        value={user.name}
        placeholder="Ingresa Nombre"
      />
      <input
        type="text"
        name="password"
        onChange={onChange}
        value={user.password}
        placeholder="Ingresa Password"
      />
      <span>{message}</span>
      {message === "Datos invalidos" ? (
        <button onClick={onReset}>Intentar de nuevo</button>
      ) : (
        <button onClick={onLogin}>Iniciar Sesion</button>
      )}
    </div>
  );
};

export default UserProfile;
