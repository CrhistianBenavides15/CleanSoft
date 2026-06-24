import { Bell, ChevronDown } from "lucide-react";

export default function Topbar() {
  return (
    <header className="bg-white h-20 border-b px-8 flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          ¡Hola, Christian!
        </h1>

        <p className="text-gray-500">
          Aquí está el resumen de tu negocio hoy
        </p>
      </div>

      <div className="flex items-center gap-6">
        <Bell
          size={22}
          className="cursor-pointer text-slate-600"
        />

        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center font-semibold text-blue-600">
            C
          </div>

          <div>
            <p className="font-semibold">
              Christian Julio
            </p>

            <p className="text-sm text-gray-500">
              Administrador
            </p>
          </div>

          <ChevronDown size={18} />
        </div>
      </div>
    </header>
  );
}