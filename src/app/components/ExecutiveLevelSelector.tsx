import { Crown, Building2, ClipboardList } from 'lucide-react';

interface ExecutiveLevelSelectorProps {
  selectedLevel: 'high' | 'middle' | 'low';
  onLevelChange: (level: 'high' | 'middle' | 'low') => void;
}

export function ExecutiveLevelSelector({ selectedLevel, onLevelChange }: ExecutiveLevelSelectorProps) {
  const levels = [
    { id: 'high' as const, label: 'ผู้บริหารระดับสูง', icon: Crown, color: 'from-purple-600 to-pink-600' },
    { id: 'middle' as const, label: 'ผู้บริหารระดับกลาง', icon: Building2, color: 'from-blue-600 to-cyan-600' },
    { id: 'low' as const, label: 'ผู้บริหารระดับต้น', icon: ClipboardList, color: 'from-green-600 to-emerald-600' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {levels.map((level) => {
        const Icon = level.icon;
        const isActive = selectedLevel === level.id;

        return (
          <button
            key={level.id}
            onClick={() => onLevelChange(level.id)}
            className={`relative p-6 rounded-xl border-2 transition-all ${
              isActive
                ? 'border-transparent shadow-lg scale-105'
                : 'border-slate-200 hover:border-slate-300 hover:shadow-md'
            }`}
          >
            <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${level.color} ${isActive ? 'opacity-100' : 'opacity-0'} transition-opacity`}></div>
            <div className="relative">
              <div className={`flex items-center gap-3 ${isActive ? 'text-white' : 'text-slate-900'}`}>
                <Icon size={24} />
                <span className="font-bold text-lg">{level.label}</span>
              </div>
              {isActive && (
                <div className="mt-2 text-sm text-white/90">
                  {level.id === 'high' && 'ข้อมูลสรุประดับองค์กร และ Insights'}
                  {level.id === 'middle' && 'ข้อมูลบริหารจัดการหน่วยงาน'}
                  {level.id === 'low' && 'ข้อมูลปฏิบัติการและควบคุมงานรายละเอียด'}
                </div>
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}
