import { ShoppingCart, Package, TruckIcon, CheckCircle } from 'lucide-react';

interface Activity {
  id: string;
  type: 'order' | 'product' | 'shipping' | 'completed';
  title: string;
  description: string;
  time: string;
}

const activities: Activity[] = [
  { id: '1', type: 'order', title: 'คำสั่งซื้อใหม่', description: 'ORD-005 จากสุรชัย วงศ์ดี', time: '5 นาทีที่แล้ว' },
  { id: '2', type: 'completed', title: 'คำสั่งซื้อสำเร็จ', description: 'ORD-004 จัดส่งสำเร็จแล้ว', time: '15 นาทีที่แล้ว' },
  { id: '3', type: 'shipping', title: 'อัพเดทการจัดส่ง', description: 'ORD-002 อยู่ระหว่างจัดส่ง', time: '1 ชั่วโมงที่แล้ว' },
  { id: '4', type: 'product', title: 'สต็อกต่ำ', description: 'แท็บเล็ต iPad Air เหลือ 28 ชิ้น', time: '2 ชั่วโมงที่แล้ว' },
  { id: '5', type: 'order', title: 'คำสั่งซื้อใหม่', description: 'ORD-003 จากวิชัย มั่นคง', time: '3 ชั่วโมงที่แล้ว' },
];

const iconConfig = {
  order: { icon: ShoppingCart, color: 'bg-blue-100 text-blue-600' },
  product: { icon: Package, color: 'bg-purple-100 text-purple-600' },
  shipping: { icon: TruckIcon, color: 'bg-orange-100 text-orange-600' },
  completed: { icon: CheckCircle, color: 'bg-green-100 text-green-600' },
};

export function RecentActivity() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-900">กิจกรรมล่าสุด</h3>
        <p className="text-sm text-slate-600">รายการเคลื่อนไหวในระบบ</p>
      </div>

      <div className="space-y-4">
        {activities.map((activity, index) => {
          const config = iconConfig[activity.type];
          const Icon = config.icon;

          return (
            <div key={activity.id} className="flex items-start gap-4">
              <div className={`p-2 rounded-lg ${config.color} flex-shrink-0`}>
                <Icon size={20} />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-900">{activity.title}</p>
                <p className="text-sm text-slate-600">{activity.description}</p>
                <p className="text-xs text-slate-500 mt-1">{activity.time}</p>
              </div>

              {index < activities.length - 1 && (
                <div className="absolute left-[26px] top-12 w-0.5 h-16 bg-slate-200" style={{ marginTop: index * 96 }} />
              )}
            </div>
          );
        })}
      </div>

      <button className="w-full mt-4 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium">
        ดูทั้งหมด
      </button>
    </div>
  );
}
