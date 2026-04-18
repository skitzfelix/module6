import { LogOut, User, ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface UserProfileProps {
  username: string;
  role: 'high' | 'middle' | 'low';
  onLogout: () => void;
}

export function UserProfile({ username, role, onLogout }: UserProfileProps) {
  const [isOpen, setIsOpen] = useState(false);

  const roleConfig = {
    high: { label: 'ผู้บริหารระดับสูง', color: 'bg-purple-600' },
    middle: { label: 'ผู้บริหารระดับกลาง', color: 'bg-blue-600' },
    low: { label: 'ผู้บริหารระดับต้น', color: 'bg-green-600' },
  };

  const currentRole = roleConfig[role];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 px-4 py-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
      >
        <div className={`w-10 h-10 rounded-full ${currentRole.color} flex items-center justify-center text-white font-bold`}>
          {username.charAt(0).toUpperCase()}
        </div>
        <div className="text-left hidden md:block">
          <p className="text-sm font-medium text-slate-900">{username}</p>
          <p className="text-xs text-slate-600">{currentRole.label}</p>
        </div>
        <ChevronDown size={16} className={`text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-20">
            <div className="px-4 py-3 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full ${currentRole.color} flex items-center justify-center text-white font-bold text-lg`}>
                  {username.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-medium text-slate-900">{username}</p>
                  <p className="text-xs text-slate-600">{currentRole.label}</p>
                </div>
              </div>
            </div>

            <div className="px-2 py-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  // Add profile action here
                }}
                className="w-full flex items-center gap-3 px-3 py-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <User size={18} />
                <span className="text-sm">โปรไฟล์</span>
              </button>
            </div>

            <div className="border-t border-slate-200 px-2 py-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onLogout();
                }}
                className="w-full flex items-center gap-3 px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <LogOut size={18} />
                <span className="text-sm font-medium">ออกจากระบบ</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
