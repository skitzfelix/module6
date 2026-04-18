import { Eye, Edit, Trash2, Download } from 'lucide-react';

interface Order {
  id: string;
  customer: string;
  product: string;
  amount: number;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  date: string;
}

const orders: Order[] = [
  { id: 'ORD-001', customer: 'สมชาย ใจดี', product: 'โทรศัพท์มือถือ', amount: 15900, status: 'completed', date: '2026-04-15' },
  { id: 'ORD-002', customer: 'สมหญิง รักษ์ดี', product: 'แท็บเล็ต', amount: 12500, status: 'processing', date: '2026-04-16' },
  { id: 'ORD-003', customer: 'วิชัย มั่นคง', product: 'หูฟังไร้สาย', amount: 3200, status: 'pending', date: '2026-04-17' },
  { id: 'ORD-004', customer: 'ประไพ สุขใจ', product: 'นาฬิกาอัจฉริยะ', amount: 8900, status: 'completed', date: '2026-04-17' },
  { id: 'ORD-005', customer: 'สุรชัย วงศ์ดี', product: 'กล้องดิจิตอล', amount: 22000, status: 'processing', date: '2026-04-18' },
  { id: 'ORD-006', customer: 'อรุณี สว่างไสว', product: 'ลำโพงบลูทูธ', amount: 2500, status: 'completed', date: '2026-04-18' },
];

const statusConfig = {
  pending: { label: 'รอดำเนินการ', color: 'bg-yellow-100 text-yellow-800' },
  processing: { label: 'กำลังดำเนินการ', color: 'bg-blue-100 text-blue-800' },
  completed: { label: 'สำเร็จ', color: 'bg-green-100 text-green-800' },
  cancelled: { label: 'ยกเลิก', color: 'bg-red-100 text-red-800' },
};

export function OrdersTable() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200">
      <div className="p-6 border-b border-slate-200 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-900">คำสั่งซื้อล่าสุด</h3>
          <p className="text-sm text-slate-600">รายการคำสั่งซื้อทั้งหมด {orders.length} รายการ</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Download size={16} />
          <span className="text-sm font-medium">ส่งออกข้อมูล</span>
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="text-left px-6 py-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">รหัสคำสั่งซื้อ</th>
              <th className="text-left px-6 py-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">ลูกค้า</th>
              <th className="text-left px-6 py-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">สินค้า</th>
              <th className="text-left px-6 py-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">จำนวนเงิน</th>
              <th className="text-left px-6 py-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">สถานะ</th>
              <th className="text-left px-6 py-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">วันที่</th>
              <th className="text-left px-6 py-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">การจัดการ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-slate-900">{order.id}</td>
                <td className="px-6 py-4 text-sm text-slate-700">{order.customer}</td>
                <td className="px-6 py-4 text-sm text-slate-700">{order.product}</td>
                <td className="px-6 py-4 text-sm font-medium text-slate-900">
                  ฿{order.amount.toLocaleString()}
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${statusConfig[order.status].color}`}>
                    {statusConfig[order.status].label}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-700">
                  {new Date(order.date).toLocaleDateString('th-TH')}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="ดูรายละเอียด">
                      <Eye size={16} />
                    </button>
                    <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors" title="แก้ไข">
                      <Edit size={16} />
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="ลบ">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4 border-t border-slate-200 flex items-center justify-between">
        <p className="text-sm text-slate-600">แสดง 1-{orders.length} จาก {orders.length} รายการ</p>
        <div className="flex gap-2">
          <button className="px-3 py-2 border border-slate-300 rounded-lg text-sm hover:bg-slate-50 transition-colors disabled:opacity-50" disabled>
            ก่อนหน้า
          </button>
          <button className="px-3 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors">
            1
          </button>
          <button className="px-3 py-2 border border-slate-300 rounded-lg text-sm hover:bg-slate-50 transition-colors">
            ถัดไป
          </button>
        </div>
      </div>
    </div>
  );
}
