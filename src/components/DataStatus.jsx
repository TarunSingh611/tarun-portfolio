'use client';

import { useState, useEffect } from 'react';

export default function DataStatus({ portfolioData }) {
  const [status, setStatus] = useState('Loading...');
  const [dataInfo, setDataInfo] = useState(null);

  useEffect(() => {
    if (portfolioData) {
      setStatus('✅ Data Loaded Successfully');
      setDataInfo({
        name: portfolioData.personal?.name,
        title: portfolioData.personal?.title,
        projects: portfolioData.projects?.length || 0,
        experiences: portfolioData.experiences?.length || 0,
        skills: Object.keys(portfolioData.skills || {}).length
      });
    } else {
      setStatus('❌ Failed to Load Data');
    }
  }, [portfolioData]);

  return (
    <div className="fixed top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gray-200 dark:border-gray-700 z-50 max-w-xs">
      <div className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
        Data Status
      </div>
      <div className="text-xs text-gray-600 dark:text-gray-400 mb-3">
        {status}
      </div>
      {dataInfo && (
        <div className="text-xs space-y-1">
          <div>👤 {dataInfo.name}</div>
          <div>💼 {dataInfo.title}</div>
          <div>📁 {dataInfo.projects} Projects</div>
          <div>🏢 {dataInfo.experiences} Experiences</div>
          <div>🛠️ {dataInfo.skills} Skill Categories</div>
        </div>
      )}
      <div className="text-xs text-gray-500 mt-2">
        Check terminal for server logs
      </div>
    </div>
  );
}
