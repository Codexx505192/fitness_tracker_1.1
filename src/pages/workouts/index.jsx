// app/workouts/page.jsx
'use client';
import { useState } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Plus, Dumbbell, Trash2, Play } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Headerr from '@/components/Header/Header';

export default function WorkoutsPage() {
  const router = useRouter();
  const [routines, setRoutines] = useLocalStorage('workout_routines', [
    { id: '1', title: 'Верх тела', exercises: ['Отжимания', 'Подтягивания', 'Брусья'] },
  ]);

  const [routineTitle, setRoutineTitle] = useState('');
  const [exerciseInput, setExerciseInput] = useState('');
  const [currentExercises, setCurrentExercises] = useState([]);

  const handleAddExercise = (e) => {
    e.preventDefault();
    if (!exerciseInput.trim()) return;
    setCurrentExercises([...currentExercises, exerciseInput.trim()]);
    setExerciseInput('');
  };

  const handleSaveRoutine = () => {
    if (!routineTitle.trim() || currentExercises.length === 0) return;
    setRoutines([...routines, { id: Date.now().toString(), title: routineTitle, exercises: currentExercises }]);
    setRoutineTitle('');
    setCurrentExercises([]);
  };

  const handleStartRoutine = (routine) => {
    const formattedExercises = routine.exercises.map((name, index) => ({
      id: `${Date.now()}-${index}`,
      name,
      weight: 0,
      reps: 0,
      completed: false,
    }));
    window.localStorage.setItem('today_workout', JSON.stringify(formattedExercises));
    router.push('/');
  };

  return (
    <main className="container">
      <Headerr/>
      <h1 className="page-title">
        <Dumbbell color="#3b82f6" /> Программы
      </h1>
      <p className="subtitle">Создавайте свои комплексы</p>

      <section className="card" style={{ marginBottom: '24px' }}>
        <h3 style={{ marginBottom: '12px' }}>Новая программа</h3>
        <input
          type="text"
          placeholder="Название (например: День ног)"
          value={routineTitle}
          onChange={(e) => setRoutineTitle(e.target.value)}
          className="input"
          style={{ marginBottom: '8px' }}
        />

        <form onSubmit={handleAddExercise} className="form-row">
          <input
            type="text"
            placeholder="Добавить упражнение..."
            value={exerciseInput}
            onChange={(e) => setExerciseInput(e.target.value)}
            className="input"
          />
          <button type="submit" className="btn btn-secondary">
            <Plus size={20} />
          </button>
        </form>

        {currentExercises.length > 0 && (
          <div className="tags-wrapper">
            {currentExercises.map((item, idx) => (
              <span key={idx} className="tag">{item}</span>
            ))}
          </div>
        )}

        <button
          onClick={handleSaveRoutine}
          disabled={!routineTitle.trim() || currentExercises.length === 0}
          className="btn btn-primary btn-full"
          style={{ marginTop: '8px' }}
        >
          Сохранить программу
        </button>
      </section>

      <div>
        {routines.map((routine) => (
          <div key={routine.id} className="card">
            <div className="card-header">
              <span className="card-title">{routine.title}</span>
              <button
                onClick={() => setRoutines(routines.filter((r) => r.id !== routine.id))}
                style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer' }}
              >
                <Trash2 size={18} />
              </button>
            </div>

            <ul style={{ paddingLeft: '20px', color: '#94a3b8', fontSize: '0.9rem', margin: '8px 0 16px 0' }}>
              {routine.exercises.map((ex, idx) => <li key={idx}>{ex}</li>)}
            </ul>

            <button onClick={() => handleStartRoutine(routine)} className="btn btn-success btn-full">
              <Play size={16} /> Начать эту тренировку
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}