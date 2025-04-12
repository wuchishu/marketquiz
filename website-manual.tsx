function UserManualPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 頁首 */}
      <div className="bg-gradient-to-r from-gray-700 to-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">網路行銷學習平台操作手冊</h1>
          <p className="text-xl max-w-3xl mx-auto">
            完整指南：如何安裝、執行和使用本教學網站
          </p>
        </div>
      </div>

      {/* 內容區域 */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* 目錄 */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">目錄</h2>
            <ul className="space-y-2">
              <li>
                <a href="#intro" className="text-blue-600 hover:underline">1. 網站介紹</a>
              </li>
              <li>
                <a href="#installation" className="text-blue-600 hover:underline">2. 安裝與部署指南</a>
              </li>
              <li>
                <a href="#structure" className="text-blue-600 hover:underline">3. 網站結構說明</a>
              </li>
              <li>
                <a href="#homepage" className="text-blue-600 hover:underline">4. 首頁功能與導航</a>
              </li>
              <li>
                <a href="#exampage" className="text-blue-600 hover:underline">5. 題庫製作教學頁面</a>
              </li>
              <li>
                <a href="#appscriptpage" className="text-blue-600 hover:underline">6. Google Apps Script 教學頁面</a>
              </li>
              <li>
                <a href="#faq" className="text-blue-600 hover:underline">7. 常見問題解答</a>
              </li>
            </ul>
          </div>

          {/* 1. 網站介紹 */}
          <div id="intro" className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. 網站介紹</h2>
            <p className="text-gray-700 mb-4">
              網路行銷學習平台是一個專為初學者設計的多功能教學網站，旨在幫助用戶學習網路行銷知識，
              並掌握如何使用 Google Apps Script 建立網路行銷測驗系統。本站點使用 React.js 框架開發，
              具有良好的用戶體驗和回應式設計。
            </p>
            
            <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">主要功能：</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>網路行銷基礎知識學習（14個主題）</li>
              <li>題庫製作與 Google Forms 整合教學</li>
              <li>Google Apps Script 應用實例</li>
              <li>互動式測驗與學習評估工具</li>
            </ul>
            
            <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">適用對象：</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>網路行銷初學者</li>
              <li>教師或培訓人員（需要製作線上測驗系統）</li>
              <li>希望學習 Google Apps Script 的用戶</li>
              <li>需要建立測驗題庫的行銷專業人士</li>
            </ul>
          </div>

          {/* 2. 安裝與部署指南 */}
          <div id="installation" className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">2. 安裝與部署指南</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">系統需求</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Node.js 16.0 或更高版本</li>
                <li>npm 7.0 或更高版本</li>
                <li>現代瀏覽器（Chrome, Firefox, Safari, Edge 等）</li>
                <li>Google 帳號（用於 Apps Script 教學部分）</li>
              </ul>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">安裝步驟</h3>
              <ol className="list-decimal pl-5 space-y-4 text-gray-700">
                <li>
                  <strong>下載或克隆專案</strong>
                  <pre className="bg-gray-100 p-3 rounded text-sm mt-2 overflow-x-auto">
                    git clone https://github.com/yourusername/marketing-learning-platform.git
                    cd marketing-learning-platform
                  </pre>
                </li>
                <li>
                  <strong>安裝相依套件</strong>
                  <pre className="bg-gray-100 p-3 rounded text-sm mt-2 overflow-x-auto">
                    npm install
                  </pre>
                </li>
                <li>
                  <strong>啟動開發伺服器</strong>
                  <pre className="bg-gray-100 p-3 rounded text-sm mt-2 overflow-x-auto">
                    npm start
                  </pre>
                  <p className="mt-2">這將在本地啟動網站，通常可以通過 <code>http://localhost:3000</code> 訪問。</p>
                </li>
                <li>
                  <strong>建立生產版本（可選）</strong>
                  <pre className="bg-gray-100 p-3 rounded text-sm mt-2 overflow-x-auto">
                    npm run build
                  </pre>
                  <p className="mt-2">這將在 <code>build</code> 目錄中生成優化後的網站文件，可以部署到任何靜態網站託管服務。</p>
                </li>
              </ol>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">部署選項</h3>
              <ul className="space-y-4 text-gray-700">
                <li>
                  <strong>GitHub Pages</strong>
                  <p className="mt-1">適合個人專案或小型教學網站。</p>
                  <pre className="bg-gray-100 p-3 rounded text-sm mt-2 overflow-x-auto">
                    npm run deploy
                  </pre>
                </li>
                <li>
                  <strong>Netlify / Vercel</strong>
                  <p className="mt-1">提供免費託管與持續部署功能，只需連接您的 GitHub 儲存庫。</p>
                </li>
                <li>
                  <strong>Firebase Hosting</strong>
                  <p className="mt-1">Google 的託管服務，支持靜態網站和動態內容。</p>
                  <pre className="bg-gray-100 p-3 rounded text-sm mt-2 overflow-x-auto">
                    npm install -g firebase-tools
                    firebase login
                    firebase init
                    firebase deploy
                  </pre>
                </li>
              </ul>
            </div>
          </div>

          {/* 3. 網站結構說明 */}
          <div id="structure" className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">3. 網站結構說明</h2>
            
            <p className="text-gray-700 mb-4">
              本網站由四個主要 React 組件構成，每個組件負責不同的功能區域：
            </p>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b text-left">檔案名稱</th>
                    <th className="py-2 px-4 border-b text-left">描述</th>
                    <th className="py-2 px-4 border-b text-left">主要功能</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b"><code>website-app.js</code></td>
                    <td className="py-2 px-4 border-b">主應用組件</td>
                    <td className="py-2 px-4 border-b">頁面路由、導航、整體布局</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b"><code>website-homepage.js</code></td>
                    <td className="py-2 px-4 border-b">首頁組件</td>
                    <td className="py-2 px-4 border-b">介紹網站功能、學習主題預覽</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b"><code>website-exam-creation.js</code></td>
                    <td className="py-2 px-4 border-b">題庫製作教學</td>
                    <td className="py-2 px-4 border-b">Excel 題庫製作、Google Forms 整合</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b"><code>website-appscript.js</code></td>
                    <td className="py-2 px-4 border-b">Apps Script 教學</td>
                    <td className="py-2 px-4 border-b">Google Apps Script 應用指南</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="text-gray-700 mb-4">
              各組件之間通過主應用組件中的狀態管理和頁面切換機制協同工作，提供流暢的用戶體驗。
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <p className="text-gray-700">
                <strong>提示：</strong> 如果您想修改或擴展網站功能，可以通過編輯相應的組件文件來實現。
                例如，添加新的網路行銷主題可以在 <code>website-homepage.js</code> 中的相關數組中添加項目。
              </p>
            </div>
          </div>

          {/* 4. 首頁功能與導航 */}
          <div id="homepage" className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">4. 首頁功能與導航</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">首頁主要區域</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  <strong>頂部橫幅</strong> - 歡迎信息和快速訪問按鈕
                </li>
                <li>
                  <strong>功能區塊</strong> - 介紹網站三大核心功能：網路行銷課程、線上測驗、題庫製作
                </li>
                <li>
                  <strong>特色說明</strong> - 網站優勢和特點介紹
                </li>
                <li>
                  <strong>主題預覽</strong> - 網路行銷學習主題列表
                </li>
                <li>
                  <strong>Apps Script 亮點</strong> - 特別介紹 Google Apps Script 功能
                </li>
              </ul>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">導航說明</h3>
              <p className="text-gray-700 mb-4">
                網站採用直觀的導航設計，提供多種方式訪問不同頁面：
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                <li>
                  <strong>頂部導航欄</strong> - 提供主要頁面的快速訪問
                </li>
                <li>
                  <strong>功能區塊按鈕</strong> - 點擊各功能區塊中的按鈕可直接訪問相應頁面
                </li>
                <li>
                  <strong>頁尾快速連結</strong> - 在頁面底部提供常用頁面連結
                </li>
              </ol>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">操作示例</h3>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>訪問題庫製作教學：</strong>
                </p>
                <ol className="list-decimal pl-5 text-gray-700 space-y-2">
                  <li>點擊頂部導航欄中的「題庫製作教學」</li>
                  <li>或點擊首頁功能區塊中「題庫製作與 Apps Script」下方的「了解更多」按鈕</li>
                  <li>或在頁尾快速連結中點擊「題庫製作教學」</li>
                </ol>
              </div>
            </div>
          </div>

          {/* 5. 題庫製作教學頁面 */}
          <div id="exampage" className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">5. 題庫製作教學頁面</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">頁面結構</h3>
              <p className="text-gray-700 mb-4">
                題庫製作教學頁面使用標籤式導航，將完整教學內容分為幾個主要部分：
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><strong>概述</strong> - 介紹教學目標、適用對象和優勢</li>
                <li><strong>步驟 1</strong> - 詳細說明如何準備 Excel/CSV 題庫</li>
                <li><strong>步驟 2</strong> - 教導如何將題庫轉換為 Apps Script 程式碼</li>
                <li><strong>步驟 3</strong> - 在 Google 表單中使用 Apps Script 建立測驗</li>
                <li><strong>進階應用</strong> - 介紹更多高級功能和技巧</li>
              </ul>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">如何使用此頁面</h3>
              <ol className="list-decimal pl-5 space-y-3 text-gray-700">
                <li>
                  <strong>閱讀概述</strong>
                  <p className="mt-1">了解題庫製作的基本流程和優勢。</p>
                </li>
                <li>
                  <strong>按步驟學習</strong>
                  <p className="mt-1">按順序點擊標籤，依照步驟學習完整的題庫製作流程。</p>
                </li>
                <li>
                  <strong>參考範例</strong>
                  <p className="mt-1">頁面中提供了多個程式碼範例和表格樣例，可以作為參考模板。</p>
                </li>
                <li>
                  <strong>實際操作</strong>
                  <p className="mt-1">建議按照教學步驟，邊學習邊實際操作，以加深理解。</p>
                </li>
              </ol>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">實用資源</h3>
              <p className="text-gray-700 mb-3">
                此頁面提供以下實用資源幫助您快速上手：
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Excel 題庫模板下載</li>
                <li>Apps Script 程式碼範例</li>
                <li>常見問題解答</li>
                <li>錯誤排除指南</li>
              </ul>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
                <p className="text-gray-700">
                  <strong>提示：</strong> 如果您是 Excel 或 Google Sheets 的初學者，建議先閱讀步驟 1 中的「題庫設計建議」部分，
                  了解如何正確設計和格式化題庫資料。
                </p>
              </div>
            </div>
          </div>

          {/* 6. Google Apps Script 教學頁面 */}
          <div id="appscriptpage" className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Google Apps Script 教學頁面</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">頁面內容</h3>
              <p className="text-gray-700 mb-4">
                Google Apps Script 教學頁面分為多個章節，涵蓋從基礎到進階的內容：
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><strong>什麼是 Google Apps Script</strong> - 基本介紹和應用場景</li>
                <li><strong>Apps Script 基礎語法</strong> - JavaScript 基礎和 Apps Script 特性</li>
                <li><strong>Google 服務整合</strong> - 如何使用各種 Google 服務的 API</li>
                <li><strong>表單資料處理</strong> - 處理 Google Forms 回應的技巧</li>
                <li><strong>測驗系統建立</strong> - 建立互動式測驗的詳細步驟</li>
                <li><strong>工作流自動化</strong> - 自動化處理資料和任務</li>
                <li><strong>實用範例程式碼</strong> - 可以直接使用的程式碼範例</li>
              </ul>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">如何使用此頁面</h3>
              <ol className="list-decimal pl-5 space-y-3 text-gray-700">
                <li>
                  <strong>使用側邊導航</strong>
                  <p className="mt-1">頁面左側的導航菜單可以直接跳轉到您感興趣的章節。</p>
                </li>
                <li>
                  <strong>複製程式碼範例</strong>
                  <p className="mt-1">所有程式碼區塊都可以直接複製使用，右上角提供複製按鈕。</p>
                </li>
                <li>
                  <strong>按需學習</strong>
                  <p className="mt-1">您可以根據自己的需求選擇相關章節學習，不必按順序閱讀所有內容。</p>
                </li>
                <li>
                  <strong>動手實踐</strong>
                  <p className="mt-1">建議邊學習邊在 Google Apps Script 編輯器中實際操作。</p>
                </li>
              </ol>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">操作環境準備</h3>
              <p className="text-gray-700 mb-3">
                在開始學習 Google Apps Script 之前，請確保您已經準備好以下環境：
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                <li>擁有 Google 帳號</li>
                <li>創建一個 Google 表單（用於練習）</li>
                <li>打開 Google Apps Script 編輯器：
                  <ol className="list-alpha pl-5 mt-2 space-y-1">
                    <li>在 Google 表單/表格中，點擊「擴充功能」→「Apps Script」</li>
                    <li>或直接訪問 <a href="https://script.google.com" target="_blank" className="text-blue-600 hover:underline">script.google.com</a></li>
                  </ol>
                </li>
              </ol>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 mt-4">
                <p className="text-gray-700">
                  <strong>小提示：</strong> 如果您沒有程式設計經驗，建議先從「Apps Script 基礎語法」開始學習，
                  熟悉 JavaScript 的基本概念後再嘗試更進階的應用。
                </p>
              </div>
            </div>
          </div>

          {/* 7. 常見問題解答 */}
          <div id="faq" className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">7. 常見問題解答</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">我可以在本地修改網站內容嗎？</h3>
                <p className="text-gray-700">
                  是的，您可以通過編輯 React 組件文件來修改網站內容。網站使用標準的 React.js 結構，
                  熟悉 React 的開發者可以輕鬆地添加或修改功能。所有頁面組件都位於 <code>src/components</code> 目錄中。
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">我需要懂程式設計才能使用這個網站嗎？</h3>
                <p className="text-gray-700">
                  不需要。雖然網站包含程式設計教學內容，但作為學習者，您可以直接按照教程一步步操作，
                  不需要事先掌握程式設計知識。教學內容設計為初學者友好，會從基礎概念開始講解。
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">我可以將網站內容用於商業用途嗎？</h3>
                <p className="text-gray-700">
                  本網站使用 MIT 許可證，您可以自由地使用、修改和分發網站代碼，包括商業用途。
                  但請注意，網站中使用的第三方資源（如圖像、圖示等）可能有自己的使用條款，請確認這些資源的許可情況。
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">如果我在使用 Google Apps Script 時遇到錯誤怎麼辦？</h3>
                <p className="text-gray-700">
                  Apps Script 教學頁面的最後部分提供了常見錯誤及其解決方案。如果遇到特定錯誤，
                  可以參考 Google 的官方文檔或 Stack Overflow 上的相關討論。您也可以通過頁尾提供的聯繫方式尋求幫助。
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">網站內容會定期更新嗎？</h3>
                <p className="text-gray-700">
                  是的，我們計劃定期更新網站內容，包括添加新的網路行銷主題、更新 Apps Script 教學以跟進最新功能，
                  以及改進現有教學內容。您可以通過 GitHub 儲存庫跟蹤更新情況。
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">我可以離線瀏覽這個網站嗎？</h3>
                <p className="text-gray-700">
                  是的，網站支持漸進式網頁應用（PWA）功能，您可以將網站安裝到設備上進行離線瀏覽。
                  不過，某些功能如 Google Apps Script 範例執行需要網絡連接才能正常工作。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserManualPage;