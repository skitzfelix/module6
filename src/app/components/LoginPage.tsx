import { useState } from 'react';
import { LogIn, User, Lock, Eye, EyeOff } from 'lucide-react';

interface LoginPageProps {
  onLogin: (username: string, role: 'high' | 'middle' | 'low') => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  // ข้อมูล Mock สำหรับ Demo
  const users = [
    { username: 'admin', password: 'admin123', role: 'high' as const, name: 'ผู้บริหารระดับสูง' },
    { username: 'manager', password: 'manager123', role: 'middle' as const, name: 'ผู้บริหารระดับกลาง' },
    { username: 'staff', password: 'staff123', role: 'low' as const, name: 'ผู้บริหารระดับต้น' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      onLogin(user.name, user.role);
    } else {
      setError('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo & Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-4">
            <LogIn className="text-blue-600" size={40} />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">ระบบบริหารภาระงานอัจฉริยะ</h1>
          <p className="text-white/90">Smart Workload Management System</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">เข้าสู่ระบบ</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Input */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                ชื่อผู้ใช้
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="กรุณากรอกชื่อผู้ใช้"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                รหัสผ่าน
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="กรุณากรอกรหัสผ่าน"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
            >
              เข้าสู่ระบบ
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-6 pt-6 border-t border-slate-200">
            <p className="text-xs text-slate-600 mb-3 font-medium">ข้อมูลทดสอบ (Demo):</p>
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2 bg-purple-50 rounded">
                <span className="text-purple-900 font-medium">ผู้บริหารระดับสูง</span>
                <span className="text-purple-700">admin / admin123</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
                <span className="text-blue-900 font-medium">ผู้บริหารระดับกลาง</span>
                <span className="text-blue-700">manager / manager123</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                <span className="text-green-900 font-medium">ผู้บริหารระดับต้น</span>
                <span className="text-green-700">staff / staff123</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-white/80 text-sm">© 2026 มหาวิทยาลัย - ระบบบริหารภาระงานอัจฉริยะ</p>
        </div>
      </div>
    </div>
  );
}
