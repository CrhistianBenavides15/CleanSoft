import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  ClipboardList,
  Users,
  Shirt,
  FileBarChart,
  Settings,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmar = window.confirm(
      "¿Deseas cerrar sesión?"
    );

    if (confirmar) {
      navigate("/");
    }
  };

  return (
    <aside className="w-20 bg-white border-r flex flex-col items-center py-4">
      <div className="mb-8">
        <img
          src="/Logo.png"
          alt="CleanSoft"
          className="w-12"
        />
      </div>

      <nav className="flex flex-col gap-4 flex-1">
        <button className="p-3 rounded-xl bg-blue-100 text-blue-600">
          <LayoutDashboard size={22} />
        </button>

        <button className="p-3 rounded-xl hover:bg-gray-100">
          <ClipboardList size={22} />
        </button>

        <button className="p-3 rounded-xl hover:bg-gray-100">
          <Users size={22} />
        </button>

        <button className="p-3 rounded-xl hover:bg-gray-100">
          <Shirt size={22} />
        </button>

        <button className="p-3 rounded-xl hover:bg-gray-100">
          <FileBarChart size={22} />
        </button>

        <button className="p-3 rounded-xl hover:bg-gray-100">
          <Settings size={22} />
        </button>
      </nav>

      <button
        onClick={handleLogout}
        className="p-3 rounded-xl hover:bg-red-100 text-red-500 transition-all"
      >
        <LogOut size={22} />
      </button>
    </aside>
  );
}