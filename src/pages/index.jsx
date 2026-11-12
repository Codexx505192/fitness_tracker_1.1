'use client';
import { useEffect, useState } from 'react';
import { Plus, CheckCircle, Dumbbell } from 'lucide-react';
import { useLocalStorage } from "@/hooks/useLocalStorage";
import Header from "@/components/Header/Header";


export default function Home() {
  const [exercises, setExercises] = useLocalStorage('today_workout', []);

  const [newName, setNewName] = useState('');

  const addExercise = (e) => {
    e.preventDefault();
    if (!newName.trim()) return;
    
    setExercises([...exercises, {
      id: Date.now().toString(),
      name: newName,
      weight: 0,
      reps: 0,
      completed: false,
    }]);
    setNewName('');
  };

  const toggleComplete = (id) => {
    setExercises(exercises.map((ex) => (ex.id === id ? { ...ex, completed: !ex.completed } : ex)));
  };

  const deleteExercise = (id) => {
    setExercises(exercises.filter((ex) => ex.id !== id));
  };

  useEffect(() => {
  document.title = 'Fitness Tracker';
}, []);



  return (
    <main>
      <div className="container">
        <Header />
        
        
        <h1 className="page-title">
          <Dumbbell color="#3b82f6" /> Тренировка сегодня
        </h1>

        <form onSubmit={addExercise} className="form-row">
          <input
            type="text"
            placeholder="Название упражнения..."
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="input"
          />
          <button type="submit" className="btn btn-primary">
            <Plus size={20} />
          </button>
        </form>

        <div>
          {exercises.map((ex) => (
            <div key={ex.id} className={`card ${ex.completed ? 'card-completed' : ''}`}>
              <div className="card-header">
                <span className={`card-title ${ex.completed ? 'strike' : ''}`}>{ex.name}</span>
                <button 
                  onClick={() => toggleComplete(ex.id)} 
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: ex.completed ? '#22c55e' : '#64748b' }}
                >
                  <CheckCircle size={20} />
                </button>
              </div>

              <div className="card-details">
                <div>Вес: <span>{ex.weight} кг</span></div>
                <div>Повторения: <span>{ex.reps}</span></div>
              </div>

              <div className="card-actions">
                <button onClick={() => deleteExercise(ex.id)} className="btn-danger-text">Удалить</button>
              </div>
            </div>
          ))}
          {exercises.length === 0 && <p style={{ textAlign: 'center', color: '#64748b', margin: '32px 0' }}>Список пуст.</p>}
        </div>
      </div>
    </main>
  );
}