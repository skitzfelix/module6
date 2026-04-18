import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { department: 'การเงิน', budget: 5000000, actual: 4750000, performance: 95 },
  { department: 'การตลาด', budget: 3500000, actual: 3200000, performance: 91 },
  { department: 'ปฏิบัติการ', budget: 8000000, actual: 7600000, performance: 95 },
  { department: 'บุคลากร', budget: 2500000, actual: 2400000, performance: 96 },
  { department: 'เทคโนโลยี', budget: 4000000, actual: 4100000, performance: 98 },
  { department: 'บริการ', budget: 3000000, actual: 2850000, performance: 95 },
];

export function DepartmentPerformance() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-900">ผลการดำเนินงานตามหน่วยงาน</h3>
        <p className="text-sm text-slate-600">เปรียบเทียบงบประมาณและค่าใช้จ่ายจริง</p>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="department" stroke="#64748b" fontSize={12} />
          <YAxis stroke="#64748b" fontSize={12} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
            }}
            formatter={(value: number) => `฿${value.toLocaleString()}`}
          />
          <Legend />
          <Bar dataKey="budget" fill="#94a3b8" name="งบประมาณ" radius={[4, 4, 0, 0]} />
          <Bar dataKey="actual" fill="#3b82f6" name="ค่าใช้จ่ายจริง" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>

      <div className="mt-6 grid grid-cols-3 gap-4">
        {data.slice(0, 3).map((dept) => (
          <div key={dept.department} className="p-4 bg-slate-50 rounded-lg">
            <p className="text-xs text-slate-600 mb-1">{dept.department}</p>
            <p className="text-lg font-bold text-slate-900">{dept.performance}%</p>
            <p className="text-xs text-green-600">ประสิทธิภาพ</p>
          </div>
        ))}
      </div>
    </div>
  );
}
