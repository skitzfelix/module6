import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { month: 'ม.ค.', sales: 45000, orders: 120, revenue: 38000 },
  { month: 'ก.พ.', sales: 52000, orders: 145, revenue: 42000 },
  { month: 'มี.ค.', sales: 48000, orders: 132, revenue: 40000 },
  { month: 'เม.ย.', sales: 61000, orders: 168, revenue: 51000 },
  { month: 'พ.ค.', sales: 55000, orders: 152, revenue: 46000 },
  { month: 'มิ.ย.', sales: 67000, orders: 185, revenue: 58000 },
  { month: 'ก.ค.', sales: 59000, orders: 162, revenue: 49000 },
];

export function SalesChart() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-900">ยอดขายรายเดือน</h3>
        <p className="text-sm text-slate-600">สรุปยอดขายและคำสั่งซื้อในช่วง 7 เดือนที่ผ่านมา</p>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
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
          />
          <Legend />
          <Bar dataKey="sales" fill="#3b82f6" name="ยอดขาย (บาท)" radius={[4, 4, 0, 0]} />
          <Bar dataKey="revenue" fill="#8b5cf6" name="รายได้ (บาท)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
