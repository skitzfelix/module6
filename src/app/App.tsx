import { useState } from 'react';
import { LoginPage } from './components/LoginPage';
import { UserProfile } from './components/UserProfile';
import { ExecutiveLevelSelector } from './components/ExecutiveLevelSelector';
import { HighLevelDashboard } from './components/HighLevelDashboard';
import { MiddleLevelDashboard } from './components/MiddleLevelDashboard';
import { LowLevelDashboard } from './components/LowLevelDashboard';
import { FileText } from 'lucide-react';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [userRole, setUserRole] = useState<'high' | 'middle' | 'low'>('high');
  const [executiveLevel, setExecutiveLevel] = useState<'high' | 'middle' | 'low'>('high');

  const handleLogin = (name: string, role: 'high' | 'middle' | 'low') => {
    setUsername(name);
    setUserRole(role);
    setExecutiveLevel(role); // ตั้งค่า level ตามสิทธิ์ผู้ใช้
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
    setUserRole('high');
    setExecutiveLevel('high');
  };

  // Show Login Page if not authenticated
  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-8 py-6 sticky top-0 z-10 shadow-sm">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
              <FileText className="text-white" size={28} />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">มอดูล 6: รายงานเชิงบริหารสำหรับผู้บริหาร</h1>
              <p className="text-slate-600">ระบบบริหารภาระงานอัจฉริยะ (Smart Workload Management System)</p>
            </div>
          </div>
          <UserProfile username={username} role={userRole} onLogout={handleLogout} />
        </div>
      </div>

      {/* Main Content */}
      <main className="p-8">
        <ExecutiveLevelSelector selectedLevel={executiveLevel} onLevelChange={setExecutiveLevel} />

        {executiveLevel === 'high' && (
          <div>
            <div className="mb-6 p-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white">
              <h2 className="text-2xl font-bold mb-2">Dashboard สำหรับผู้บริหารระดับสูง</h2>
              <p className="text-white/90">ภาพรวมองค์กร • Strategic Insights • ข้อมูลสรุประดับนโยบาย</p>
            </div>
            <HighLevelDashboard />
          </div>
        )}

        {executiveLevel === 'middle' && (
          <div>
            <div className="mb-6 p-6 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-white">
              <h2 className="text-2xl font-bold mb-2">Dashboard สำหรับผู้บริหารระดับกลาง</h2>
              <p className="text-white/90">ข้อมูลหน่วยงาน • การบริหารจัดการทีม • ประสิทธิภาพกระบวนการ</p>
            </div>
            <MiddleLevelDashboard />
          </div>
        )}

        {executiveLevel === 'low' && (
          <div>
            <div className="mb-6 p-6 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl text-white">
              <h2 className="text-2xl font-bold mb-2">Dashboard สำหรับผู้บริหารระดับต้น</h2>
              <p className="text-white/90">ข้อมูลปฏิบัติการ • ควบคุมงานรายวัน • ติดตามรายละเอียดบุคลากร</p>
            </div>
            <LowLevelDashboard />
          </div>
        )}

        {/* Module Information Footer */}
        <div className="mt-8 bg-white rounded-xl p-6 border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">📋 แหล่งข้อมูลจากมอดูลต่างๆ</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-sm">
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="font-bold text-blue-900 mb-2">มอดูลที่ 1</p>
              <p className="text-blue-700 text-xs">บริหารโครงสร้างภารกิจสนับสนุน</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <p className="font-bold text-green-900 mb-2">มอดูลที่ 2</p>
              <p className="text-green-700 text-xs">จัดสรรงานและบริหารคิวงาน</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <p className="font-bold text-purple-900 mb-2">มอดูลที่ 3</p>
              <p className="text-purple-700 text-xs">วิเคราะห์ภาระงานเชิงกระบวนการ</p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <p className="font-bold text-orange-900 mb-2">มอดูลที่ 4</p>
              <p className="text-orange-700 text-xs">บริหารศักยภาพและอัตรากำลัง</p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg">
              <p className="font-bold text-red-900 mb-2">มอดูลที่ 5</p>
              <p className="text-red-700 text-xs">แจ้งเตือนและควบคุมความเสี่ยงเชิงปฏิบัติการ</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}