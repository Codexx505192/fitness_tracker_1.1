// app/stats/page.jsx
'use client';
import { BarChart2, CheckCircle, Flame } from 'lucide-react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import Headerr from '@/components/Header/Header';


export default function StatsPage() {
  const [exercises] = useLocalStorage('today_workout', []);
  const completedCount = exercises.filter((ex) => ex.completed).length;

  return (
    <main className="container">
      <Headerr />

      <h1 className="page-title">
        <BarChart2 color="#3b82f6" /> Статистика
      </h1>
      <p className="subtitle">Ваш прогресс за сегодня</p>

      <div className="stats-grid">
        <div className="stat-box">
          <CheckCircle className="text-green-500 mb-2" size={32} style={{ margin: '0 auto 8px auto', color: '#22c55e' }} />
          <div className="stat-value" style={{ color: '#fff' }}>{completedCount}</div>
          <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Сделано упражнений</span>
        </div>

        <div className="stat-box">
          <Flame className="text-orange-500 mb-2" size={32} style={{ margin: '0 auto 8px auto', color: '#f97316' }} />
          <div className="stat-value" style={{ color: '#fff' }}>{exercises.length}</div>
          <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Всего в плане</span>
        </div>
      </div>
    </main>
  );
}