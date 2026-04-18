import { Users, Clock, TrendingUp, AlertCircle } from 'lucide-react';
import { StatCard } from './StatCard';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell } from 'recharts';

const teamWorkload = [
  { name: 'งานธุรการ', assigned: 45, completed: 38, pending: 7, overdue: 2 },
  { name: 'งานการเงิน', assigned: 32, completed: 30, pending: 2, overdue: 0 },
  { name: 'งานบุคคล', assigned: 28, completed: 22, pending: 4, overdue: 2 },
  { name: 'งานอาคาร', assigned: 38, completed: 31, pending: 5, overdue: 2 },
];

const staffCapacity = [
  { name: 'เต็มศักยภาพ (>90%)', value: 35, color: '#ef4444' },
  { name: 'ปกติ (70-90%)', value: 45, color: '#3b82f6' },
  { name: 'พร้อมรับงาน (<70%)', value: 20, color: '#10b981' },
];

const processEfficiency = [
  { process: 'ขออนุมัติเบิกจ่าย', time: 2.5, target: 3, efficiency: 120 },
  { process: 'จัดซื้อจัดจ้าง', time: 5.2, target: 5, efficiency: 96 },
  { process: 'จัดทำรายงาน', time: 1.8, target: 2, efficiency: 111 },
  { process: 'ประชุมประจำเดือน', time: 3.5, target: 3, efficiency: 86 },
];

export function MiddleLevelDashboard() {
  return (
    <div className="space-y-6">
      {/* Department Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          title="บุคลากรทั้งหมด"
          value="45"
          change={2.3}
          icon={<Users size={20} className="text-blue-600" />}
          color="bg-blue-100"
        />
        <StatCard
          title="งานที่กำลังดำเนินการ"
          value="143"
          change={-5.2}
          icon={<Clock size={20} className="text-orange-600" />}
          color="bg-orange-100"
        />
        <StatCard
          title="ประสิทธิภาพหน่วยงาน"
          value="88.5%"
          change={3.1}
          icon={<TrendingUp size={20} className="text-green-600" />}
          color="bg-green-100"
        />
        <StatCard
          title="งานเกินกำหนด"
          value="6"
          change={-25.0}
          icon={<AlertCircle size={20} className="text-red-600" />}
          color="bg-red-100"
        />
      </div>

      {/* Action Items */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-600 p-6 rounded-xl">
        <h3 className="text-lg font-bold text-blue-900 mb-3">🎯 สิ่งที่ต้องดำเนินการ</h3>
        <div className="space-y-2 text-sm text-blue-800">
          <p>• <strong>ด่วน:</strong> งานธุรการมีงานค้าง 7 รายการ ควรจัดสรรทรัพยากรเพิ่มเติม</p>
          <p>• <strong>ติดตาม:</strong> กระบวนการประชุมประจำเดือนมีประสิทธิภาพ 86% ต่ำกว่าเป้าหมาย</p>
          <p>• <strong>โอกาส:</strong> งานการเงินมีศักยภาพเหลือ สามารถรับงานเพิ่มได้</p>
        </div>
      </div>

      {/* Main Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">ภาระงานตามทีม (มอดูลที่ 2: จัดสรรงานและบริหารคิวงาน)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={teamWorkload}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="name" stroke="#64748b" fontSize={11} />
              <YAxis stroke="#64748b" fontSize={12} />
              <Tooltip />
              <Legend />
              <Bar dataKey="completed" fill="#10b981" name="เสร็จแล้ว" stackId="a" radius={[0, 0, 0, 0]} />
              <Bar dataKey="pending" fill="#3b82f6" name="กำลังทำ" stackId="a" radius={[0, 0, 0, 0]} />
              <Bar dataKey="overdue" fill="#ef4444" name="เกินกำหนด" stackId="a" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">สถานะศักยภาพบุคลากร (มอดูลที่ 4: บริหารศักยภาพและอัตรากำลัง)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={staffCapacity}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {staffCapacity.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Process Performance Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200">
        <div className="p-6 border-b border-slate-200">
          <h3 className="text-lg font-bold text-slate-900">ประสิทธิภาพกระบวนการ (มอดูลที่ 3: วิเคราะห์ภาระงานเชิงกระบวนการ)</h3>
          <p className="text-sm text-slate-600">เปรียบเทียบเวลาทำงานจริงกับเป้าหมาย</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left px-6 py-4 text-xs font-semibold text-slate-600 uppercase">กระบวนการ</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-slate-600 uppercase">เวลาจริง (วัน)</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-slate-600 uppercase">เป้าหมาย (วัน)</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-slate-600 uppercase">ประสิทธิภาพ</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-slate-600 uppercase">สถานะ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {processEfficiency.map((proc) => (
                <tr key={proc.process} className="hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">{proc.process}</td>
                  <td className="px-6 py-4 text-sm text-slate-700">{proc.time}</td>
                  <td className="px-6 py-4 text-sm text-slate-700">{proc.target}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-slate-200 rounded-full h-2 overflow-hidden max-w-[120px]">
                        <div
                          className={`h-full ${proc.efficiency >= 100 ? 'bg-green-600' : 'bg-yellow-500'}`}
                          style={{ width: `${Math.min(proc.efficiency, 100)}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-slate-900">{proc.efficiency}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                      proc.efficiency >= 100 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {proc.efficiency >= 100 ? 'ผ่านเกณฑ์' : 'ต้องปรับปรุง'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Team Summary */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
        <h3 className="text-lg font-bold text-slate-900 mb-4">สรุปข้อมูลหน่วยงาน</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-sm text-slate-600 mb-3">มอดูลที่ 1: บริหารโครงสร้างภารกิจสนับสนุน</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-700">ภารกิจรับผิดชอบ</span>
                <span className="font-bold">7 ภารกิจ</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-700">กระบวนการทั้งหมด</span>
                <span className="font-bold">24 กระบวนการ</span>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm text-slate-600 mb-3">มอดูลที่ 2: จัดสรรงานและบริหารคิวงาน</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-700">รอดำเนินการ</span>
                <span className="font-bold text-orange-600">18 งาน</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-700">เฉลี่ย/วัน</span>
                <span className="font-bold">8.5 งาน</span>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm text-slate-600 mb-3">มอดูลที่ 5: แจ้งเตือนและควบคุมความเสี่ยง</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-700">เตือนความเสี่ยง</span>
                <span className="font-bold text-red-600">3 เรื่อง</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-700">ระดับความเสี่ยง</span>
                <span className="font-bold text-yellow-600">ปานกลาง</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
