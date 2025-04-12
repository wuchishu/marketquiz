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
        <div className="flex flex-col md:flex-row">
          {/* 側邊欄 */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0 md:pr-4">
            <div className="bg-white shadow rounded-lg overflow-hidden sticky top-4">
              <div className="bg-blue-600 text-white px-4 py-3 font-medium">
                目錄
              </div>
              <div className="divide-y">
                <button className="px-4 py-2 text-left bg-blue-100 text-blue-800 font-medium border-l-4 border-blue-600 block w-full">
                  什麼是 Google Apps Script
                </button>
                <button className="px-4 py-2 text-left text-gray-700 hover:bg-gray-100 block w-full">
                  Apps Script 基礎語法
                </button>
                <button className="px-4 py-2 text-left text-gray-700 hover:bg-gray-100 block w-full">
                  Google 服務整合
                </button>
                <button className="px-4 py-2 text-left text-gray-700 hover:bg-gray-100 block w-full">
                  表單資料處理
                </button>
                <button className="px-4 py-2 text-left text-gray-700 hover:bg-gray-100 block w-full">
                  測驗系統建立
                </button>
                <button className="px-4 py-2 text-left text-gray-700 hover:bg-gray-100 block w-full">
                  工作流自動化
                </button>
                <button className="px-4 py-2 text-left text-gray-700 hover:bg-gray-100 block w-full">
                  實用範例程式碼
                </button>
              </div>
            </div>
          </div>
          
          {/* 主要內容 */}
          <div className="w-full md:w-3/4">
            <div className="bg-white shadow rounded-lg p-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">什麼是 Google Apps Script</h2>
                <p className="text-gray-700 mb-6">
                  Google Apps Script 是一個基於 JavaScript 的開發平台，讓您能夠輕鬆地整合和自動化各種 Google 服務，包括 Gmail、Google Sheets、Forms、Drive、Calendar 等。
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-bold text-gray-800 mb-3">主要特點</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <span className="text-blue-500 mr-2">✓</span> 基於 JavaScript 語法，易於學習
                      </li>
                      <li className="flex items-center">
                        <span className="text-blue-500 mr-2">✓</span> 免費使用，無需安裝特殊軟件
                      </li>
                      <li className="flex items-center">
                        <span className="text-blue-500 mr-2">✓</span> 雲端執行，無需自己管理伺服器
                      </li>
                      <li className="flex items-center">
                        <span className="text-blue-500 mr-2">✓</span> 能夠存取和處理 Google 服務中的數據
                      </li>
                    </ul>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-bold text-gray-800 mb-3">常見應用場景</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <span className="text-blue-500 mr-2">✓</span> 表單回應自動處理
                      </li>
                      <li className="flex items-center">
                        <span className="text-blue-500 mr-2">✓</span> 批量建立文件或表單
                      </li>
                      <li className="flex items-center">
                        <span className="text-blue-500 mr-2">✓</span> 數據自動整理和分析
                      </li>
                      <li className="flex items-center">
                        <span className="text-blue-500 mr-2">✓</span> 電子郵件自動化回覆
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                  <h3 className="font-bold text-gray-800 mb-2">為什麼網路行銷人員應該學習 Apps Script？</h3>
                  <p className="text-gray-700">
                    網路行銷工作經常需要處理大量數據、建立問卷調查、分析結果並生成報告。
                    通過學習 Apps Script，您可以自動化這些重複性工作，節省大量時間，
                    並能夠創建更複雜的客製化工具，提升工作效率。
                  </p>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4">Apps Script 與表單整合</h3>
                <p className="text-gray-700 mb-4">
                  在網路行銷中，Google 表單是收集用戶資料的重要工具。使用 Apps Script，我們可以：
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-800">自動建立表單</h4>
                    <p className="text-gray-700">
                      批量從現有資料創建測驗或調查表單，節省手動創建的時間。
                    </p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-800">自動處理回應</h4>
                    <p className="text-gray-700">
                      當用戶提交表單時，自動處理回應，例如發送確認郵件或更新數據庫。
                    </p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-800">生成自訂報告</h4>
                    <p className="text-gray-700">
                      根據表單回應自動生成圖表、報告或儀表板，幫助數據可視化。
                    </p>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4">基本工作流程</h3>
                <ol className="list-decimal pl-5 space-y-2 text-gray-700 mb-6">
                  <li>在 Google 表單或 Google Sheets 中，點擊「擴充功能」→「Apps Script」</li>
                  <li>在 Apps Script 編輯器中編寫您的代碼</li>
                  <li>使用 Google 服務 API（如 FormApp、SpreadsheetApp）操作 Google 資源</li>
                  <li>保存並運行您的腳本</li>
                  <li>設置觸發器（可選），指定何時自動運行腳本</li>
                </ol>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4">Apps Script 與測驗系統</h3>
                <p className="text-gray-700 mb-4">
                  在教育或培訓環境中，您可以使用 Apps Script 創建完整的測驗系統：
                </p>
                
                <div className="border border-gray-200 rounded-lg p-4 mb-6">
                  <h4 className="font-bold text-gray-800 mb-2">測驗系統功能範例</h4>
                  <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`// 創建一個帶有選擇題的測驗表單
function createQuizForm() {
  // 創建表單並啟用測驗功能
  var form = FormApp.create('網路行銷知識測驗');
  form.setIsQuiz(true);
  
  // 添加問題
  var question = form.addMultipleChoiceItem();
  question.setTitle('下列哪項是 SEO 的主要目標？')
         .setPoints(5) // 設定分數
         .setChoices([
           question.createChoice('增加社交媒體點讚數', false),
           question.createChoice('提高搜尋引擎排名', true),
           question.createChoice('增加付費廣告展示次數', false),
           question.createChoice('減少網站訪問流量', false)
         ]);
  
  // 添加正確答案的解釋
  question.setFeedbackForCorrect(
    FormApp.createFeedback()
      .setText('正確！SEO 的主要目標是提高網站在搜尋引擎的自然排名。')
      .build()
  );
  
  // 添加錯誤答案的解釋
  question.setFeedbackForWrong(
    FormApp.createFeedback()
      .setText('不正確。SEO (搜尋引擎最佳化) 的主要目標是提高網站在搜尋引擎的自然排名。')
      .build()
  );
  
  Logger.log('測驗表單已創建: ' + form.getPublishedUrl());
}`}
                  </pre>
                </div>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                  <p className="text-gray-700">
                    <strong>學習建議：</strong> 如果您是 JavaScript 初學者，建議先學習基本的 JavaScript 語法，再深入研究 Apps Script。
                    您可以從簡單的腳本開始，例如自動處理表單回應或創建簡單的測驗，逐步掌握更複雜的功能。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppScriptPage;