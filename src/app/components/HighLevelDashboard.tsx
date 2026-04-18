import { TrendingUp, Users, AlertTriangle, Target } from 'lucide-react';
import { StatCard } from './StatCard';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, BarChart, Bar } from 'recharts';

const workloadTrend = [
  { month: 'ม.ค.', workload: 85, efficiency: 92, capacity: 88 },
  { month: 'ก.พ.', workload: 88, efficiency: 90, capacity: 87 },
  { month: 'มี.ค.', workload: 92, efficiency: 88, capacity: 85 },
  { month: 'เม.ย.', workload: 95, efficiency: 85, capacity: 83 },
  { month: 'พ.ค.', workload: 90, efficiency: 89, capacity: 86 },
  { month: 'มิ.ย.', workload: 87, efficiency: 91, capacity: 88 },
];

const departmentPerformance = [
  { dept: 'สำนักงานอธิการบดี', score: 92, workload: 88 },
  { dept: 'กองคลัง', score: 88, workload: 85 },
  { dept: 'กองทะเบียน', score: 85, workload: 92 },
  { dept: 'กองพัฒนานิสิต', score: 90, workload: 80 },
  { dept: 'กองอาคารสถานที่', score: 87, workload: 95 },
];

export function HighLevelDashboard() {
  return (
    <div className="space-y-6">
      {/* Executive Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          title="ประสิทธิภาพองค์กร"
          value="89.2%"
          change={5.3}
          icon={<Target size={20} className="text-purple-600" />}
          color="bg-purple-100"
        />
        <StatCard
          title="ภาระงานเฉลี่ย"
          value="88.5%"
          change={-2.1}
          icon={<TrendingUp size={20} className="text-blue-600" />}
          color="bg-blue-100"
        />
        <StatCard
          title="อัตรากำลังพร้อมใช้"
          value="86.3%"
          change={3.8}
          icon={<Users size={20} className="text-green-600" />}
          color="bg-green-100"
        />
        <StatCard
          title="ความเสี่ยงสูง"
          value="12"
          change={-15.2}
          icon={<AlertTriangle size={20} className="text-red-600" />}
          color="bg-red-100"
        />
      </div>

      {/* Strategic Insights */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-600 p-6 rounded-xl">
        <h3 className="text-lg font-bold text-purple-900 mb-3">📊 Strategic Insights</h3>
        <div className="space-y-2 text-sm text-purple-800">
          <p>• <strong>Critical:</strong> กองทะเบียนมีภาระงาน 92% ใกล้ถึงขีดจำกัด แนะนำเพิ่มอัตรากำลัง 2 ตำแหน่ง</p>
          <p>• <strong>Opportunity:</strong> กองพัฒนานิสิตมีศักยภาพเหลือ 20% สามารถรับภารกิจเพิ่มได้</p>
          <p>• <strong>Risk Alert:</strong> ตรวจพบ 12 กระบวนการมีความเสี่ยงสูง ต้องการการแทรกแซงทันที</p>
        </div>
      </div>

      {/* Main Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">แนวโน้มภาระงานและประสิทธิภาพองค์กร</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={workloadTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" stroke="#64748b" fontSize={12} />
              <YAxis stroke="#64748b" fontSize={12} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="workload" stroke="#3b82f6" name="ภาระงาน" strokeWidth={2} />
              <Line type="monotone" dataKey="efficiency" stroke="#10b981" name="ประสิทธิภาพ" strokeWidth={2} />
              <Line type="monotone" dataKey="capacity" stroke="#f59e0b" name="ศักยภาพ" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">ผลการปฏิบัติงานตามหน่วยงาน</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={departmentPerformance} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis type="number" stroke="#64748b" fontSize={12} />
              <YAxis type="category" dataKey="dept" stroke="#64748b" fontSize={10} width={120} />
              <Tooltip />
              <Legend />
              <Bar dataKey="score" fill="#8b5cf6" name="คะแนนผลงาน" radius={[0, 4, 4, 0]} />
              <Bar dataKey="workload" fill="#3b82f6" name="ภาระงาน %" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Key Metrics Summary */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
        <h3 className="text-lg font-bold text-slate-900 mb-4">สรุปตัวชี้วัดหลักระดับองค์กร</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-sm text-slate-600 mb-2">มอดูลที่ 1: บริหารโครงสร้างภารกิจสนับสนุน</p>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-700">ภารกิจหลักทั้งหมด</span>
                <span className="font-bold text-slate-900">28 ภารกิจ</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-700">ภารกิจที่ครอบคลุม</span>
                <span className="font-bold text-green-600">96.4%</span>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm text-slate-600 mb-2">มอดูลที่ 2-3: จัดสรรงานและวิเคราะห์กระบวนการ</p>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-700">งานค้างเกิน SLA</span>
                <span className="font-bold text-red-600">8.2%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-700">ประสิทธิภาพเฉลี่ย</span>
                <span className="font-bold text-blue-600">89.2%</span>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm text-slate-600 mb-2">มอดูลที่ 4-5: อัตรากำลังและควบคุมความเสี่ยง</p>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-700">อัตราครบถ้วน</span>
                <span className="font-bold text-green-600">94.1%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-700">ความเสี่ยงระดับสูง</span>
                <span className="font-bold text-red-600">12 เรื่อง</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
