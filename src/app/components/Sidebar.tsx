import { Home, ShoppingCart, Package, Users, BarChart3, Settings, FileText, Truck, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface SidebarProps {
  activeModule: string;
  onModuleChange: (module: string) => void;
}

export function Sidebar({ activeModule, onModuleChange }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'ภาพรวมองค์กร', icon: Home },
    { id: 'financial', label: 'รายงานการเงิน', icon: BarChart3 },
    { id: 'sales', label: 'รายงานยอดขาย', icon: ShoppingCart },
    { id: 'operations', label: 'รายงานการดำเนินงาน', icon: Package },
    { id: 'hr', label: 'รายงานบุคลากร', icon: Users },
    { id: 'performance', label: 'รายงานผลการปฏิบัติงาน', icon: Truck },
    { id: 'analytics', label: 'การวิเคราะห์ข้อมูล', icon: FileText },
    { id: 'settings', label: 'ตั้งค่า', icon: Settings },
  ];

  return (
    <div className={`bg-[#1e293b] text-white h-screen transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'} flex flex-col`}>
      <div className="p-4 flex items-center justify-between border-b border-slate-700">
        {!isCollapsed && <h1 className="font-bold text-xl">ระบบรายงานเชิงบริหาร</h1>}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
        >
          {isCollapsed ? <Menu size={20} /> : <X size={20} />}
        </button>
      </div>

      <nav className="flex-1 p-3 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeModule === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onModuleChange(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all ${
                isActive
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
              title={isCollapsed ? item.label : undefined}
            >
              <Icon size={20} />
              {!isCollapsed && <span className="text-sm font-medium">{item.label}</span>}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-700">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold">
            A
          </div>
          {!isCollapsed && (
            <div className="flex-1">
              <p className="text-sm font-medium">ผู้ดูแลระบบ</p>
              <p className="text-xs text-slate-400">admin@system.com</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
