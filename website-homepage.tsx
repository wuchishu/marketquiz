import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 頁首 Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">網路行銷學習與測驗平台</h1>
          <p className="text-xl mb-8">為初學者打造的完整學習環境，從基礎知識到實務應用</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button onClick={() => {}} className="px-6 py-3 bg-white text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition">
              開始學習
            </button>
            <button onClick={() => {}} className="px-6 py-3 bg-blue-900 text-white rounded-lg font-bold hover:bg-blue-800 transition">
              參加測驗
            </button>
          </div>
        </div>
      </div>

      {/* 主要功能區塊 */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">平台功能與特色</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
              📚
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">網路行銷課程</h3>
            <p className="text-gray-600 mb-4">系統化學習14個網路行銷主題，從基礎到進階知識一應俱全。</p>
            <a href="#" className="text-blue-600 hover:underline font-medium">
              查看課程 →
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
              📝
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">線上測驗系統</h3>
            <p className="text-gray-600 mb-4">透過互動式測驗鞏固所學知識，提供即時反饋和解析。</p>
            <a href="#" className="text-purple-600 hover:underline font-medium">
              參加測驗 →
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
              ⚙️
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">題庫製作與 Apps Script</h3>
            <p className="text-gray-600 mb-4">學習如何建立自己的題庫並使用 Google Apps Script 創建測驗。</p>
            <a href="#" className="text-green-600 hover:underline font-medium">
              了解更多 →
            </a>
          </div>
        </div>
        
        {/* 特色區塊 */}
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">為什麼選擇我們的學習平台？</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="bg-blue-600 text-white p-2 rounded-full mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-1">初學者友善</h3>
                <p className="text-gray-600">專為網路行銷初學者設計的介面和內容，易於理解和操作。</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-600 text-white p-2 rounded-full mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-1">實務導向</h3>
                <p className="text-gray-600">結合理論與實務案例，學習真正在職場上有用的網路行銷技能。</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-600 text-white p-2 rounded-full mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-1">自製測驗工具</h3>
                <p className="text-gray-600">除了學習網路行銷，還能學會如何自己製作線上測驗和表單。</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-600 text-white p-2 rounded-full mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-1">持續更新</h3>
                <p className="text-gray-600">定期更新內容，確保學習最新的網路行銷趨勢和技術。</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* 課程主題預覽 */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">學習主題一覽</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {['網路行銷基礎與特性', '內容行銷策略', '搜尋引擎優化(SEO)', 
              '社群媒體行銷', '付費廣告行銷', '電子郵件行銷',
              '數據分析工具', '客群分析策略', '新興科技應用'].map((topic, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition">
                <p className="font-medium text-gray-800">{topic}</p>
              </div>
            ))}
            <a href="#" className="bg-gray-100 border border-gray-200 rounded-lg p-4 flex items-center justify-center text-blue-600 hover:bg-gray-200 transition">
              查看全部主題 →
            </a>
          </div>
        </div>
        
        {/* 特別功能亮點 */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">自製線上測驗系統</h2>
              <p className="text-gray-600 mb-6">
                除了學習網路行銷知識，本平台還提供完整教學，教你如何：
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="bg-green-500 text-white p-1 rounded-full mr-2 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>設計標準化題庫資料表（Excel/CSV）</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-green-500 text-white p-1 rounded-full mr-2 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>將題庫資料轉換成 Google Apps Script 程式碼</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-green-500 text-white p-1 rounded-full mr-2 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>使用 Apps Script 建立 Google 表單測驗</span>
                </li>
              </ul>
              <a href="#" className="px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition inline-block">
                查看詳細教學
              </a>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="border-b border-gray-200 pb-3 mb-3">
                  <h3 className="font-bold text-gray-800">Google Apps Script 功能</h3>
                </div>
                <pre className="bg-gray-100 p-3 rounded text-sm text-gray-800 overflow-x-auto">
{`function buildForm() {
  var form = FormApp.create("網路行銷測驗");
  form.setIsQuiz(true);
  
  var item = form.addMultipleChoiceItem();
  item.setTitle("網路行銷的主要目的是什麼？");
  item.setChoices([
    item.createChoice("開發實體店面", false),
    item.createChoice("強化品牌與顧客關係", true),
    item.createChoice("增加印刷廣告量", false),
    item.createChoice("建立通訊錄", false)
  ]);
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 頁尾 Call to Action */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">準備好開始學習了嗎？</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            無論你是想提升職場競爭力，還是想學習如何建立自己的線上測驗系統，我們都能幫助你達成目標。
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition">
              開始學習
            </a>
            <a href="#" className="px-6 py-3 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition">
              學習製作測驗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;