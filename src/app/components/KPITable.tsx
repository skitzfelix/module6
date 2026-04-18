import { TrendingUp, TrendingDown, Target } from 'lucide-react';

interface KPI {
  id: string;
  name: string;
  department: string;
  target: number;
  actual: number;
  unit: string;
  period: string;
}

const kpis: KPI[] = [
  { id: '1', name: 'อัตราการเติบโตของรายได้', department: 'การเงิน', target: 15, actual: 18.5, unit: '%', period: 'Q2 2026' },
  { id: '2', name: 'อัตรากำไรสุทธิ', department: 'การเงิน', target: 25, actual: 28.3, unit: '%', period: 'Q2 2026' },
  { id: '3', name: 'ความพึงพอใจของลูกค้า', department: 'บริการ', target: 85, actual: 89.2, unit: '%', period: 'Q2 2026' },
  { id: '4', name: 'อัตราการรักษาพนักงาน', department: 'บุคลากร', target: 90, actual: 87.5, unit: '%', period: 'Q2 2026' },
  { id: '5', name: 'ประสิทธิภาพการผลิต', department: 'ปฏิบัติการ', target: 95, actual: 92.8, unit: '%', period: 'Q2 2026' },
  { id: '6', name: 'ส่วนแบ่งตลาด', department: 'การตลาด', target: 20, actual: 22.4, unit: '%', period: 'Q2 2026' },
];

export function KPITable() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200">
      <div className="p-6 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <Target className="text-blue-600" size={24} />
          <div>
            <h3 className="text-lg font-bold text-slate-900">ตัวชี้วัดผลการดำเนินงาน (KPIs)</h3>
            <p className="text-sm text-slate-600">ผลการดำเนินงานเทียบกับเป้าหมายที่ตั้งไว้</p>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="text-left px-6 py-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">ตัวชี้วัด</th>
              <th className="text-left px-6 py-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">หน่วยงาน</th>
              <th className="text-left px-6 py-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">เป้าหมาย</th>
              <th className="text-left px-6 py-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">ผลงานจริง</th>
              <th className="text-left px-6 py-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">ความสำเร็จ</th>
              <th className="text-left px-6 py-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">งวด</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {kpis.map((kpi) => {
              const achievement = (kpi.actual / kpi.target) * 100;
              const isSuccess = achievement >= 100;

              return (
                <tr key={kpi.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-slate-900">{kpi.name}</p>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-700">{kpi.department}</td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">
                    {kpi.target}{kpi.unit}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-slate-900">
                        {kpi.actual}{kpi.unit}
                      </span>
                      {isSuccess ? (
                        <TrendingUp size={16} className="text-green-600" />
                      ) : (
                        <TrendingDown size={16} className="text-red-600" />
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-slate-200 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full ${isSuccess ? 'bg-green-600' : 'bg-yellow-500'}`}
                          style={{ width: `${Math.min(achievement, 100)}%` }}
                        ></div>
                      </div>
                      <span className={`text-sm font-medium ${isSuccess ? 'text-green-600' : 'text-yellow-600'}`}>
                        {achievement.toFixed(1)}%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">{kpi.period}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
