import { Bell, Search, Calendar } from 'lucide-react';

export function TopHeader() {
  const today = new Date().toLocaleDateString('th-TH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  });

  return (
    <div className="bg-white border-b border-slate-200 px-8 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">โมดูล 6: ระบบรายงานเชิงบริหาร</h2>
          <div className="flex items-center gap-2 mt-1 text-sm text-slate-600">
            <Calendar size={16} />
            <span>{today}</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="ค้นหา..."
              className="pl-10 pr-4 py-2 w-80 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <button className="relative p-2 hover:bg-slate-100 rounded-lg transition-colors">
            <Bell size={20} className="text-slate-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
