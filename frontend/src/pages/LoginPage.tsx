import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import hero from "../assets/Fondo.png";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center p-6"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      <div className="w-full max-w-5xl bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden flex">

        {/* Panel izquierdo */}
        <div className="hidden md:flex w-1/2 items-center justify-center bg-gradient-to-br from-blue-100 to-blue-50 p-10">
          <Logo />
        </div>

        {/* Panel derecho */}
        <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-slate-800 text-center">
            Bienvenido de nuevo
          </h2>

          <p className="text-gray-500 text-center mt-2 mb-8">
            Ingresa a tu cuenta para continuar
          </p>

          <form onSubmit={handleLogin} className="space-y-5">
            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="password"
              placeholder="Contraseña"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <div className="flex justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-500">
                <input type="checkbox" />
                Recordarme
              </label>

              <a
                href="#"
                className="text-blue-500 hover:text-blue-700"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-semibold transition-all"
            >
              Iniciar Sesión
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-8">
            © 2026 CleanSoft
          </p>
        </div>
      </div>
    </div>
  );
}