import { Package, Edit, Trash2, Plus } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: string;
  stock: number;
  price: number;
  sales: number;
  image: string;
}

const products: Product[] = [
  { id: 'PRD-001', name: 'โทรศัพท์มือถือ Samsung Galaxy S24', category: 'อิเล็กทรอนิกส์', stock: 45, price: 15900, sales: 234, image: '📱' },
  { id: 'PRD-002', name: 'แท็บเล็ต iPad Air', category: 'อิเล็กทรอนิกส์', stock: 28, price: 21900, sales: 156, image: '💻' },
  { id: 'PRD-003', name: 'หูฟังไร้สาย AirPods Pro', category: 'เครื่องเสียง', stock: 67, price: 8900, sales: 445, image: '🎧' },
  { id: 'PRD-004', name: 'นาฬิกาอัจฉริยะ Apple Watch', category: 'อุปกรณ์สวมใส่', stock: 34, price: 12900, sales: 298, image: '⌚' },
  { id: 'PRD-005', name: 'ลำโพงบลูทูธ JBL', category: 'เครื่องเสียง', stock: 89, price: 3500, sales: 567, image: '🔊' },
];

export function ProductsTable() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200">
      <div className="p-6 border-b border-slate-200 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-900">รายการสินค้า</h3>
          <p className="text-sm text-slate-600">จัดการสินค้าทั้งหมด {products.length} รายการ</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
          <Plus size={16} />
          <span className="text-sm font-medium">เพิ่มสินค้าใหม่</span>
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="text-left px-6 py-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">สินค้า</th>
              <th className="text-left px-6 py-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">หมวดหมู่</th>
              <th className="text-left px-6 py-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">สต็อก</th>
              <th className="text-left px-6 py-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">ราคา</th>
              <th className="text-left px-6 py-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">ยอดขาย</th>
              <th className="text-left px-6 py-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">การจัดการ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-2xl">
                      {product.image}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">{product.name}</p>
                      <p className="text-xs text-slate-500">{product.id}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-slate-700">{product.category}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    product.stock > 50 ? 'bg-green-100 text-green-800' :
                    product.stock > 20 ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {product.stock} ชิ้น
                  </span>
                </td>
                <td className="px-6 py-4 text-sm font-medium text-slate-900">
                  ฿{product.price.toLocaleString()}
                </td>
                <td className="px-6 py-4 text-sm text-slate-700">{product.sales} รายการ</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="แก้ไข">
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
    </div>
  );
}
