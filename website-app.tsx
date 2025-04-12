function App() {
  const [currentPage, setCurrentPage] = React.useState('home');

  // 首頁元件定義
  function HomePage() {
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
        </div>
      </div>
    );
  }
  
  // 測驗製作頁面元件定義
  function ExamCreationPage() {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* 頁首 */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">從 Excel 題庫生成 Google 表單測驗</h1>
            <p className="text-xl max-w-2xl mx-auto">
              完整教學：如何設計標準化題庫並使用 Apps Script 建立互動式測驗
            </p>
          </div>
        </div>

        {/* 內容區 */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">題庫製作流程概述</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-2">1</span>
                  準備題庫資料（Excel/CSV）
                </h3>
                <p className="text-gray-700 mb-2">
                  使用 Excel 或 Google Sheets 創建標準化題庫：
                </p>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  <li>設計表格包含題號、主題、難度、題型、題目等欄位</li>
                  <li>在「正確答案」欄位中標記正確選項（A、B、C 或 D）</li>
                  <li>添加解釋以提供學習者回饋</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-2">2</span>
                  轉換為 Google Apps Script 程式碼
                </h3>
                <p className="text-gray-700 mb-2">
                  將題庫數據轉換為可執行的 Apps Script 程式碼：
                </p>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  <li>使用 Python 腳本或 ChatGPT 協助格式轉換</li>
                  <li>確保程式碼格式正確，特別是中文字符的處理</li>
                  <li>設置表單為測驗模式（Quiz mode）</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-2">3</span>
                  使用 Apps Script 建立表單
                </h3>
                <p className="text-gray-700 mb-2">
                  在 Google 表單中執行程式碼：
                </p>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  <li>開啟 Google 表單，進入 Apps Script 編輯器</li>
                  <li>貼上生成的程式碼並執行</li>
                  <li>授權必要的權限，查看結果</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-700 mb-4">想了解詳細步驟和進階技巧？</p>
              <button
                onClick={() => setCurrentPage('exam-creation-details')}
                className="px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition"
              >
                查看完整教學
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Apps Script 教學頁面元件定義
  function AppScriptPage() {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* 頁首 */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Google Apps Script 應用教學</h1>
            <p className="text-xl max-w-3xl mx-auto">
              學習如何使用 Google Apps Script 自動化工作流程，處理表單數據，打造測驗系統
            </p>
          </div>
        </div>

        {/* 內容區域 */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Google Apps Script 入門</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">什麼是 Apps Script？</h3>
              <p className="text-gray-700 mb-4">
                Google Apps Script 是一個基於 JavaScript 的開發平台，讓您能夠輕鬆地整合和自動化各種 Google 服務，
                包括 Gmail、Google Sheets、Forms、Drive、Calendar 等。它是網路行銷人員的強大工具，可以幫助自動化
                數據處理、表單創建和內容生成等任務。
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-bold text-gray-800 mb-2">主要優勢</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• 無需伺服器，直接在 Google 雲端運行</li>
                    <li>• 免費使用，無需額外軟體</li>
                    <li>• 可整合所有 Google 服務</li>
                    <li>• 基於 JavaScript，易於學習</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-bold text-gray-800 mb-2">網路行銷應用</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• 自動處理表單回應</li>
                    <li>• 生成自定義報告</li>
                    <li>• 建立互動式測驗</li>
                    <li>• 自動發送電子郵件</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <p className="text-gray-700">
                  <strong>適合初學者：</strong> 即使您沒有程式設計經驗，也可以從基本功能開始，
                  逐步學習更複雜的應用。本教學將引導您從零開始，掌握 Apps Script 在網路行銷中的應用。
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-gray-700 mb-4">想探索更多 Google Apps Script 的功能和應用？</p>
              <button
                onClick={() => setCurrentPage('appscript-details')}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
              >
                查看完整教學
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 頁面元件
  const pages = {
    home: HomePage,
    'exam-creation': ExamCreationPage,
    appscript: AppScriptPage
  };
  
  // 導航項目
  const navItems = [
    { id: 'home', label: '首頁' },
    { id: 'exam-creation', label: '題庫製作教學' },
    { id: 'appscript', label: 'Apps Script 教學' }
  ];
  
  // 渲染頁面元件
  function renderCurrentPage() {
    const PageComponent = pages[currentPage];
    if (PageComponent) {
      return <PageComponent />;
    }
    return <HomePage />;
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* 導航欄 */}
      <header className="bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between py-4">
            {/* 網站標誌 */}
            <div className="flex items-center">
              <span className="text-xl font-bold">網路行銷學習平台</span>
            </div>
            
            {/* 主導航 */}
            <nav className="flex items-center">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`px-4 py-2 ${
                    currentPage === item.id 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-700'
                  } rounded-md ml-2`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>
      
      {/* 頁面內容 */}
      <main className="flex-grow">
        {renderCurrentPage()}
      </main>
      
      {/* 頁尾 */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-4">網路行銷學習平台</h3>
              <p className="text-gray-400">
                提供網路行銷學習資源、測驗系統和技術教學，幫助學習者掌握網路行銷知識和技能。
              </p>
            </div>
            
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-lg font-bold mb-4">快速連結</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button 
                    onClick={() => setCurrentPage('home')}
                    className="hover:text-white"
                  >
                    首頁
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setCurrentPage('exam-creation')}
                    className="hover:text-white"
                  >
                    題庫製作教學
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setCurrentPage('appscript')}
                    className="hover:text-white"
                  >
                    Apps Script 教學
                  </button>
                </li>
              </ul>
            </div>
            
            <div className="w-full md:w-1/3">
              <h3 className="text-lg font-bold mb-4">聯絡我們</h3>
              <p className="text-gray-400 mb-2">有任何問題或建議？歡迎聯絡我們！</p>
              <p className="text-gray-400">
                Email: contact@example.com
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 網路行銷學習平台. 版權所有.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;