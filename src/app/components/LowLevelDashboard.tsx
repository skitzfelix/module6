import { User, Clock, CheckCircle, AlertTriangle, Calendar } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  assignee: string;
  status: 'pending' | 'in-progress' | 'review' | 'completed' | 'overdue';
  priority: 'high' | 'medium' | 'low';
  dueDate: string;
  progress: number;
  module: string;
}

const tasks: Task[] = [
  { id: 'T001', title: 'จัดทำรายงานสรุปผลการดำเนินงานประจำเดือน', assignee: 'สมชาย ใจดี', status: 'in-progress', priority: 'high', dueDate: '2026-04-20', progress: 65, module: 'มอดูลที่ 1' },
  { id: 'T002', title: 'ตรวจสอบและอนุมัติใบเบิกค่าใช้จ่าย', assignee: 'สมหญิง รักษ์ดี', status: 'pending', priority: 'high', dueDate: '2026-04-19', progress: 0, module: 'มอดูลที่ 2' },
  { id: 'T003', title: 'ประสานงานการประชุมคณะกรรมการ', assignee: 'วิชัย มั่นคง', status: 'completed', priority: 'medium', dueDate: '2026-04-18', progress: 100, module: 'มอดูลที่ 2' },
  { id: 'T004', title: 'วิเคราะห์ภาระงานของแต่ละหน่วย', assignee: 'ประไพ สุขใจ', status: 'review', priority: 'medium', dueDate: '2026-04-21', progress: 85, module: 'มอดูลที่ 3' },
  { id: 'T005', title: 'จัดทำแผนพัฒนาบุคลากร', assignee: 'สุรชัย วงศ์ดี', status: 'in-progress', priority: 'low', dueDate: '2026-04-25', progress: 40, module: 'มอดูลที่ 4' },
  { id: 'T006', title: 'ตรวจสอบความเสี่ยงกระบวนการจัดซื้อ', assignee: 'อรุณี สว่างไสว', status: 'overdue', priority: 'high', dueDate: '2026-04-17', progress: 50, module: 'มอดูลที่ 5' },
  { id: 'T007', title: 'อัพเดทข้อมูลโครงสร้างหน่วยงาน', assignee: 'มานะ ขยัน', status: 'in-progress', priority: 'medium', dueDate: '2026-04-22', progress: 70, module: 'มอดูลที่ 1' },
  { id: 'T008', title: 'ติดตามงานค้างจากสัปดาห์ที่แล้ว', assignee: 'ชนิดา เพียร', status: 'pending', priority: 'high', dueDate: '2026-04-19', progress: 0, module: 'มอดูลที่ 2' },
];

const staffWorkload = [
  { name: 'สมชาย ใจดี', tasks: 8, completed: 5, pending: 2, overdue: 1, utilization: 85 },
  { name: 'สมหญิง รักษ์ดี', tasks: 6, completed: 5, pending: 1, overdue: 0, utilization: 72 },
  { name: 'วิชัย มั่นคง', tasks: 7, completed: 6, pending: 1, overdue: 0, utilization: 78 },
  { name: 'ประไพ สุขใจ', tasks: 9, completed: 6, pending: 2, overdue: 1, utilization: 92 },
  { name: 'สุรชัย วงศ์ดี', tasks: 5, completed: 4, pending: 1, overdue: 0, utilization: 65 },
  { name: 'อรุณี สว่างไสว', tasks: 10, completed: 6, pending: 3, overdue: 1, utilization: 95 },
];

const statusConfig = {
  pending: { label: 'รอดำเนินการ', color: 'bg-gray-100 text-gray-800' },
  'in-progress': { label: 'กำลังดำเนินการ', color: 'bg-blue-100 text-blue-800' },
  review: { label: 'รอตรวจสอบ', color: 'bg-purple-100 text-purple-800' },
  completed: { label: 'เสร็จสิ้น', color: 'bg-green-100 text-green-800' },
  overdue: { label: 'เกินกำหนด', color: 'bg-red-100 text-red-800' },
};

const priorityConfig = {
  high: { label: 'สูง', color: 'text-red-600' },
  medium: { label: 'กลาง', color: 'text-yellow-600' },
  low: { label: 'ต่ำ', color: 'text-green-600' },
};

export function LowLevelDashboard() {
  return (
    <div className="space-y-6">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="bg-white p-4 rounded-lg border border-slate-200">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="text-orange-600" size={18} />
            <span className="text-xs text-slate-600">รอดำเนินการ</span>
          </div>
          <p className="text-2xl font-bold text-slate-900">12</p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-slate-200">
          <div className="flex items-center gap-2 mb-2">
            <User className="text-blue-600" size={18} />
            <span className="text-xs text-slate-600">กำลังดำเนินการ</span>
          </div>
          <p className="text-2xl font-bold text-slate-900">18</p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-slate-200">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="text-green-600" size={18} />
            <span className="text-xs text-slate-600">เสร็จสิ้นวันนี้</span>
          </div>
          <p className="text-2xl font-bold text-slate-900">8</p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-slate-200">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="text-red-600" size={18} />
            <span className="text-xs text-slate-600">เกินกำหนด</span>
          </div>
          <p className="text-2xl font-bold text-red-600">6</p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-slate-200">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="text-purple-600" size={18} />
            <span className="text-xs text-slate-600">ครบกำหนดวันนี้</span>
          </div>
          <p className="text-2xl font-bold text-purple-600">4</p>
        </div>
      </div>

      {/* Urgent Actions */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-600 p-6 rounded-xl">
        <h3 className="text-lg font-bold text-red-900 mb-3">🚨 การแจ้งเตือนด่วน (มอดูลที่ 5: แจ้งเตือนและควบคุมความเสี่ยงเชิงปฏิบัติการ)</h3>
        <div className="space-y-2 text-sm text-red-800">
          <p>• <strong>T006:</strong> ตรวจสอบความเสี่ยงกระบวนการจัดซื้อ - เกินกำหนด 1 วัน (รับผิดชอบ: อรุณี สว่างไสว)</p>
          <p>• <strong>T002:</strong> อนุมัติใบเบิกค่าใช้จ่าย - ครบกำหนดพรุ่งนี้ ยังไม่เริ่มดำเนินการ</p>
          <p>• <strong>Alert:</strong> อรุณี สว่างไสว มีภาระงาน 95% ใกล้ถึงขีดจำกัด</p>
        </div>
      </div>

      {/* Detailed Task List */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200">
        <div className="p-6 border-b border-slate-200">
          <h3 className="text-lg font-bold text-slate-900">รายละเอียดงานทั้งหมด (มอดูลที่ 2: จัดสรรงานและบริหารคิวงาน)</h3>
          <p className="text-sm text-slate-600">ติดตามและควบคุมการปฏิบัติงานรายบุคคล</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-600 uppercase">รหัส</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-600 uppercase">งาน</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-600 uppercase">ผู้รับผิดชอบ</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-600 uppercase">สถานะ</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-600 uppercase">ความสำคัญ</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-600 uppercase">ครบกำหนด</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-600 uppercase">ความคืบหน้า</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-600 uppercase">มอดูล</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {tasks.map((task) => (
                <tr key={task.id} className={`hover:bg-slate-50 ${task.status === 'overdue' ? 'bg-red-50' : ''}`}>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">{task.id}</td>
                  <td className="px-4 py-3 text-sm text-slate-700 max-w-xs">{task.title}</td>
                  <td className="px-4 py-3 text-sm text-slate-700">{task.assignee}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${statusConfig[task.status].color}`}>
                      {statusConfig[task.status].label}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`text-xs font-bold ${priorityConfig[task.priority].color}`}>
                      {priorityConfig[task.priority].label}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-700">
                    {new Date(task.dueDate).toLocaleDateString('th-TH', { day: 'numeric', month: 'short' })}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-slate-200 rounded-full h-2 min-w-[60px]">
                        <div
                          className={`h-full rounded-full ${task.progress === 100 ? 'bg-green-600' : task.status === 'overdue' ? 'bg-red-600' : 'bg-blue-600'}`}
                          style={{ width: `${task.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-slate-600 min-w-[35px]">{task.progress}%</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600">{task.module}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Staff Workload Detail */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200">
        <div className="p-6 border-b border-slate-200">
          <h3 className="text-lg font-bold text-slate-900">ภาระงานรายบุคคล (มอดูลที่ 4: บริหารศักยภาพและอัตรากำลัง)</h3>
          <p className="text-sm text-slate-600">ติดตามการใช้ศักยภาพของแต่ละบุคลากร</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left px-6 py-4 text-xs font-semibold text-slate-600 uppercase">ชื่อ-นามสกุล</th>
                <th className="text-center px-6 py-4 text-xs font-semibold text-slate-600 uppercase">งานทั้งหมด</th>
                <th className="text-center px-6 py-4 text-xs font-semibold text-slate-600 uppercase">เสร็จแล้ว</th>
                <th className="text-center px-6 py-4 text-xs font-semibold text-slate-600 uppercase">กำลังทำ</th>
                <th className="text-center px-6 py-4 text-xs font-semibold text-slate-600 uppercase">เกินกำหนด</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-slate-600 uppercase">อัตราใช้ศักยภาพ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {staffWorkload.map((staff) => (
                <tr key={staff.name} className="hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">{staff.name}</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-700">{staff.tasks}</td>
                  <td className="px-6 py-4 text-center text-sm text-green-600 font-medium">{staff.completed}</td>
                  <td className="px-6 py-4 text-center text-sm text-blue-600 font-medium">{staff.pending}</td>
                  <td className="px-6 py-4 text-center text-sm text-red-600 font-medium">{staff.overdue}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-slate-200 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full ${staff.utilization >= 90 ? 'bg-red-600' : staff.utilization >= 70 ? 'bg-blue-600' : 'bg-green-600'}`}
                          style={{ width: `${staff.utilization}%` }}
                        ></div>
                      </div>
                      <span className={`text-sm font-medium min-w-[50px] ${staff.utilization >= 90 ? 'text-red-600' : 'text-slate-900'}`}>
                        {staff.utilization}%
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Process Status from Module 3 */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
        <h3 className="text-lg font-bold text-slate-900 mb-4">สถานะกระบวนการ (มอดูลที่ 3: วิเคราะห์ภาระงานเชิงกระบวนการ)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-xs text-blue-600 mb-1">กระบวนการจัดซื้อ</p>
            <p className="text-lg font-bold text-blue-900">5 รายการ</p>
            <p className="text-xs text-blue-700">เวลาเฉลี่ย 4.2 วัน</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <p className="text-xs text-green-600 mb-1">กระบวนการเบิกจ่าย</p>
            <p className="text-lg font-bold text-green-900">12 รายการ</p>
            <p className="text-xs text-green-700">เวลาเฉลี่ย 2.1 วัน</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <p className="text-xs text-purple-600 mb-1">กระบวนการรายงาน</p>
            <p className="text-lg font-bold text-purple-900">8 รายการ</p>
            <p className="text-xs text-purple-700">เวลาเฉลี่ย 1.8 วัน</p>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
            <p className="text-xs text-orange-600 mb-1">กระบวนการประชุม</p>
            <p className="text-lg font-bold text-orange-900">3 รายการ</p>
            <p className="text-xs text-orange-700">เวลาเฉลี่ย 3.5 วัน</p>
          </div>
        </div>
      </div>
    </div>
  );
}
