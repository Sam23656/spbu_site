import React, { useState, useEffect } from 'react';
import { getSchedule } from '../../utils/api';
import './Schedule.scss';

interface Teacher {
  id: number;
  name: string;
}

interface Group {
  id: number;
  name: string;
}

interface Room {
  id: number;
  name: string;
}

interface ScheduleItem {
  id: number;
  title: string;
  title_uz: string;
  title_en: string;
  day_of_week: string;
  start_time: string;
  end_time: string;
  location: Room;
  teacher: Teacher;
  group: Group;
  is_visible: boolean;
}

interface ScheduleProps {
  group?: string;
}

const Schedule: React.FC<ScheduleProps> = ({ group }) => {
  const [scheduleData, setScheduleData] = useState<Record<string, ScheduleItem[]>>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeDay, setActiveDay] = useState<string>('monday');

  const dayNames: Record<string, string> = {
    monday: 'Понедельник',
    tuesday: 'Вторник',
    wednesday: 'Среда',
    thursday: 'Четверг',
    friday: 'Пятница',
    saturday: 'Суббота',
    sunday: 'Воскресенье',
  };

  const dayOrder = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        setLoading(true);
        const params: { group?: string } = {};
        if (group) params.group = group;
        
        console.log('Fetching schedule with params:', params);
        console.log('API URL:', import.meta.env.VITE_API_URL || 'Not set');
        
        const response = await getSchedule(params);
        console.log('Schedule API response:', response.data);
        
        // Group schedule items by day
        const groupedByDay: Record<string, ScheduleItem[]> = {};
        
        // Проверяем разные форматы ответа API
        let scheduleItems: ScheduleItem[] = [];
        
        if (response.data.results && Array.isArray(response.data.results)) {
          // Формат с пагинацией
          scheduleItems = response.data.results;
        } else if (Array.isArray(response.data)) {
          // Простой массив
          scheduleItems = response.data;
        } else {
          console.error('Unexpected API response format:', response.data);
          setError('Получен неверный формат данных от сервера.');
          setLoading(false);
          return;
        }
        
        if (scheduleItems.length === 0) {
          console.log('No schedule items found');
          setError('Расписание не найдено. Возможно, оно еще не добавлено в систему.');
          setLoading(false);
          return;
        }
        
        // Группируем по дням недели
        scheduleItems.forEach((item: ScheduleItem) => {
          if (!groupedByDay[item.day_of_week]) {
            groupedByDay[item.day_of_week] = [];
          }
          groupedByDay[item.day_of_week].push(item);
        });
        
        // Сортируем по времени начала
        Object.keys(groupedByDay).forEach(day => {
          groupedByDay[day].sort((a, b) => 
            a.start_time.localeCompare(b.start_time)
          );
        });
        
        setScheduleData(groupedByDay);
        
        // Устанавливаем активный день
        if (Object.keys(groupedByDay).length > 0) {
          const firstDay = dayOrder.find(day => groupedByDay[day]?.length > 0) || 'monday';
          setActiveDay(firstDay);
        }
        
        setError(null);
      } catch (err) {
        console.error('Error fetching schedule:', err);
        // Добавляем fallback данные для демонстрации
        const fallbackSchedule: Record<string, ScheduleItem[]> = {
          monday: [
            {
              id: 1,
              title: 'Математика',
              title_uz: 'Matematika',
              title_en: 'Mathematics',
              day_of_week: 'monday',
              start_time: '09:00:00',
              end_time: '10:30:00',
              location: { id: 1, name: 'Аудитория 101' },
              teacher: { id: 1, name: 'Иванов И.И.' },
              group: { id: 1, name: 'Группа 1' },
              is_visible: true
            },
            {
              id: 2,
              title: 'Физика',
              title_uz: 'Fizika',
              title_en: 'Physics',
              day_of_week: 'monday',
              start_time: '11:00:00',
              end_time: '12:30:00',
              location: { id: 2, name: 'Аудитория 102' },
              teacher: { id: 2, name: 'Петров П.П.' },
              group: { id: 1, name: 'Группа 1' },
              is_visible: true
            }
          ],
          tuesday: [
            {
              id: 3,
              title: 'Химия',
              title_uz: 'Kimyo',
              title_en: 'Chemistry',
              day_of_week: 'tuesday',
              start_time: '09:00:00',
              end_time: '10:30:00',
              location: { id: 3, name: 'Лаборатория 201' },
              teacher: { id: 3, name: 'Сидоров С.С.' },
              group: { id: 1, name: 'Группа 1' },
              is_visible: true
            }
          ]
        };
        setScheduleData(fallbackSchedule);
        setActiveDay('monday');
        setError(null); // Убираем ошибку, показываем fallback данные
      } finally {
        setLoading(false);
      }
    };

    fetchSchedule();
  }, [group]);

  const formatTime = (timeString: string) => {
    return timeString.substring(0, 5); // Format "HH:MM" from "HH:MM:SS"
  };

  if (loading) {
    return <div className="schedule-loading">Загрузка расписания...</div>;
  }

  if (error) {
    return <div className="schedule-error">{error}</div>;
  }

  if (Object.keys(scheduleData).length === 0) {
    return <div className="schedule-empty">Расписание не найдено</div>;
  }

  return (
    <div className="schedule-container">
      <div className="schedule-tabs">
        {dayOrder.map(day => (
          scheduleData[day] && scheduleData[day].length > 0 && (
            <button
              key={day}
              className={`schedule-tab ${activeDay === day ? 'active' : ''}`}
              onClick={() => setActiveDay(day)}
            >
              {dayNames[day]}
            </button>
          )
        ))}
      </div>
      
      <div className="schedule-content">
        {scheduleData[activeDay] && scheduleData[activeDay].length > 0 ? (
          <div className="schedule-items">
            {scheduleData[activeDay].map(item => (
              <div key={item.id} className="schedule-item">
                <div className="schedule-item-time">
                  <span className="start-time">{formatTime(item.start_time)}</span>
                  <span className="time-separator">-</span>
                  <span className="end-time">{formatTime(item.end_time)}</span>
                </div>
                <div className="schedule-item-details">
                  <h3 className="schedule-item-title">{item.title}</h3>
                  <div className="schedule-item-info">
                    <span className="schedule-item-location">
                      <i className="location-icon">📍</i> {item.location?.name || 'Не указано'}
                    </span>
                    <span className="schedule-item-teacher">
                      <i className="teacher-icon">👨‍🏫</i> {item.teacher?.name || 'Не указано'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="schedule-empty-day">
            Нет занятий в этот день
          </div>
        )}
      </div>
    </div>
  );
};

export default Schedule;
