import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { month: 'ม.ค.', revenue: 4500000, expenses: 3200000, profit: 1300000 },
  { month: 'ก.พ.', revenue: 5200000, expenses: 3500000, profit: 1700000 },
  { month: 'มี.ค.', revenue: 4800000, expenses: 3300000, profit: 1500000 },
  { month: 'เม.ย.', revenue: 6100000, expenses: 3800000, profit: 2300000 },
  { month: 'พ.ค.', revenue: 5500000, expenses: 3600000, profit: 1900000 },
  { month: 'มิ.ย.', revenue: 6700000, expenses: 4000000, profit: 2700000 },
  { month: 'ก.ค.', revenue: 5900000, expenses: 3700000, profit: 2200000 },
];

export function FinancialChart() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-900">แนวโน้มทางการเงิน</h3>
        <p className="text-sm text-slate-600">รายได้ ค่าใช้จ่าย และกำไรรายเดือน</p>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="month" stroke="#64748b" fontSize={12} />
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
          <Line type="monotone" dataKey="revenue" stroke="#3b82f6" name="รายได้" strokeWidth={2} />
          <Line type="monotone" dataKey="expenses" stroke="#ef4444" name="ค่าใช้จ่าย" strokeWidth={2} />
          <Line type="monotone" dataKey="profit" stroke="#10b981" name="กำไร" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
