import React from 'react';
import './ProgramPage.scss';

interface ProgramInfo {
  backgroundImage?: string;
  backgroundPosition?: string;
  title: string;
  code?: string;
  level?: string;
  form?: string;
  duration?: string;
  department?: string;
  cost?: string;
  description?: string;
  admissionTitle: string;
  admissionText: string[];
  mainCoursesTitle: string;
  mainCourses: string[];
  mainProgramTitle?: string;
  mainProgramPoints: string[];
  teachersTitle?: string;
  teachers?: string[];
}

interface ProgramPageProps {
  programInfo: ProgramInfo;
}

const ProgramPage: React.FC<ProgramPageProps> = ({ programInfo }) => {
  const headerStyle: React.CSSProperties = {
    backgroundImage: programInfo.backgroundImage
      ? `url(${programInfo.backgroundImage})`
      : undefined,
    backgroundPosition: programInfo.backgroundPosition || 'center',
  };

  return (
    <div className="program-page">
      <div className="program-container">
        <div className="program-header" style={headerStyle}>
          <div className="hero-content">
            <div className="page-title-container">
              <span className="page-title-icon">🎓</span>
              <div className="page-title-content">
                <h1 className="page-main-title" data-text={programInfo.title}>
                  {programInfo.title}
                </h1>
                {programInfo.description && (
                  <p className="page-subtitle">{programInfo.description}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Информационная таблица */}
        {(programInfo.cost || programInfo.duration || programInfo.level || programInfo.form || programInfo.department || programInfo.code) && (
          <div style={{
            margin: '20px 0',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              backgroundColor: 'white',
              fontSize: '16px'
            }}>
              <thead>
                <tr style={{
                  backgroundColor: '#2563eb',
                  color: 'white'
                }}>
                  <th style={{
                    padding: '15px 20px',
                    textAlign: 'left',
                    fontWeight: '600',
                    fontSize: '18px'
                  }} colSpan={2}>
                    📋 Основная информация о программе
                  </th>
                </tr>
              </thead>
              <tbody>
                {programInfo.code && (
                  <tr style={{borderBottom: '1px solid #e5e7eb'}}>
                    <td style={{
                      padding: '15px 20px',
                      fontWeight: '600',
                      backgroundColor: '#f9fafb',
                      width: '40%',
                      borderRight: '1px solid #e5e7eb'
                    }}>
                      🔢 Код направления
                    </td>
                    <td style={{
                      padding: '15px 20px',
                      fontSize: '16px',
                      fontWeight: '500'
                    }}>
                      {programInfo.code}
                    </td>
                  </tr>
                )}

                {programInfo.cost && (
                  <tr style={{borderBottom: '1px solid #e5e7eb'}}>
                    <td style={{
                      padding: '15px 20px',
                      fontWeight: '600',
                      backgroundColor: '#f9fafb',
                      borderRight: '1px solid #e5e7eb'
                    }}>
                      💰 Стоимость обучения
                    </td>
                    <td style={{
                      padding: '15px 20px',
                      fontSize: '18px',
                      fontWeight: '600',
                      color: '#059669'
                    }}>
                      {programInfo.cost}
                    </td>
                  </tr>
                )}
                
                {programInfo.duration && (
                  <tr style={{borderBottom: '1px solid #e5e7eb'}}>
                    <td style={{
                      padding: '15px 20px',
                      fontWeight: '600',
                      backgroundColor: '#f9fafb',
                      borderRight: '1px solid #e5e7eb'
                    }}>
                      ⏱️ Продолжительность
                    </td>
                    <td style={{
                      padding: '15px 20px',
                      fontSize: '16px'
                    }}>
                      {programInfo.duration}
                    </td>
                  </tr>
                )}
                
                {programInfo.level && (
                  <tr style={{borderBottom: '1px solid #e5e7eb'}}>
                    <td style={{
                      padding: '15px 20px',
                      fontWeight: '600',
                      backgroundColor: '#f9fafb',
                      borderRight: '1px solid #e5e7eb'
                    }}>
                      🎓 Уровень образования
                    </td>
                    <td style={{
                      padding: '15px 20px',
                      fontSize: '16px'
                    }}>
                      {programInfo.level}
                    </td>
                  </tr>
                )}
                
                {programInfo.form && (
                  <tr style={{borderBottom: '1px solid #e5e7eb'}}>
                    <td style={{
                      padding: '15px 20px',
                      fontWeight: '600',
                      backgroundColor: '#f9fafb',
                      borderRight: '1px solid #e5e7eb'
                    }}>
                      📚 Форма обучения
                    </td>
                    <td style={{
                      padding: '15px 20px',
                      fontSize: '16px'
                    }}>
                      {programInfo.form}
                    </td>
                  </tr>
                )}
                
                {programInfo.department && (
                  <tr>
                    <td style={{
                      padding: '15px 20px',
                      fontWeight: '600',
                      backgroundColor: '#f9fafb',
                      borderRight: '1px solid #e5e7eb'
                    }}>
                      🏛️ Факультет
                    </td>
                    <td style={{
                      padding: '15px 20px',
                      fontSize: '16px'
                    }}>
                      {programInfo.department}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        <div className="program-section">
          <h2>
            <span className="section-icon">📝</span>
            {programInfo.admissionTitle}
          </h2>
          <div className="section-content">
            <ul>
              {programInfo.admissionText.map((text, index) => (
                <li key={index}>{text}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="program-section">
          <h2>
            <span className="section-icon">📚</span>
            {programInfo.mainCoursesTitle}
          </h2>
          <div className="section-content">
            <ul>
              {programInfo.mainCourses.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="program-section">
          <h2>
            <span className="section-icon">🎯</span>
            {programInfo.mainProgramTitle || 'О программе'}
          </h2>
          <div className="section-content">
            {programInfo.mainProgramPoints.map((point, index) => (
              <p key={index}>{point}</p>
            ))}
          </div>
        </div>

        {programInfo.teachersTitle && (
          <div className="program-section">
            <h2>
              <span className="section-icon">👥</span>
              {programInfo.teachersTitle}
            </h2>
            <div className="section-content">
              <ul>
                {programInfo.teachers?.map((teacher, index) => (
                  <li key={index}>{teacher}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgramPage;