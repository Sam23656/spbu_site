import React from 'react';
import HomeButton from '../shared/HomeButton';
import './Documents.scss';
import { useTheme } from '../../contexts/ThemeContext';

const Documents: React.FC = () => {
  const { theme } = useTheme();
  
  const documents = [
    {
      id: 1,
      title: 'Постановление Правительства Республики Узбекистан от 30.09.2021 №ПП-4942 «Об организации деятельности филиала федерального государственного бюджетного образовательного учреждения высшего образования "Санкт-Петербургский государственный университет" в г. Ташкенте»',
      link: '/files/Поставновление_Президента_Республики_Узбекистан_Об_организации_деятельности.pdf',
      date: '30.09.2021',
      type: 'Постановление'
    },
    {
      id: 2,
      title: 'Соглашение между Правительством Российской Федерации и Правительством Республики Узбекистан от 19.01.2021 «О создании и функционировании филиала образовательной организации высшего образования Санкт-Петербургского государственного университета в Республике Узбекистан»',
      link: '/files/Межправительственное_соглашение_филиалы_Узбекистан.pdf',
      date: '19.01.2021',
      type: 'Соглашение'
    },
    {
      id: 3,
      title: 'Лицензия на осуществление образовательной деятельности и ведение филиалом образовательной деятельности на русском языке Российской Федерации (№ СТ-18-78)',
      link: '/files/Лицензия.pdf',
      date: '15.03.2022',
      type: 'Лицензия'
    }
  ];

  return (
    <div className={`documents-page ${theme}`}>
      <HomeButton />
      <div className="container">
        <h1 className="page-title">Основные документы</h1>
        
        <div className="documents-list">
          {documents.map((doc) => (
            <div key={doc.id} className="document-item">
              <div className="document-content">
                <div className="document-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="document-info">
                  <div className="document-meta">
                    <span className="document-type">{doc.type}</span>
                    <span className="document-date">{doc.date}</span>
                  </div>
                  <div className="document-title">
                    {doc.title}
                  </div>
                </div>
                <a href={doc.link} className="download-button" download target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Скачать PDF
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Documents;
