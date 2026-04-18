import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'ดีเยี่ยม', value: 45, color: '#10b981' },
  { name: 'ดี', value: 30, color: '#3b82f6' },
  { name: 'ปานกลาง', value: 20, color: '#f59e0b' },
  { name: 'ต้องปรับปรุง', value: 5, color: '#ef4444' },
];

export function PerformanceMetrics() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-900">การประเมินผลการปฏิบัติงาน</h3>
        <p className="text-sm text-slate-600">ระดับผลงานของพนักงาน 450 คน</p>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      <div className="mt-6 grid grid-cols-2 gap-4">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-3">
            <div className="w-4 h-4 rounded" style={{ backgroundColor: item.color }}></div>
            <div>
              <p className="text-sm font-medium text-slate-900">{item.name}</p>
              <p className="text-xs text-slate-600">{item.value}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
