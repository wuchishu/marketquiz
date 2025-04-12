function ExamCreationPage() {
  // 使用普通的變數和函數來簡化代碼
  const tabs = ['intro', 'step1', 'step2', 'step3', 'advanced'];
  const [activeTab, setActiveTab] = React.useState('intro');
  
  function renderTabButton(tabId, label) {
    return (
      <button
        className={`px-4 py-2 font-medium ${
          activeTab === tabId
            ? 'text-green-600 border-b-2 border-green-600'
            : 'text-gray-500 hover:text-gray-700'
        }`}
        onClick={() => setActiveTab(tabId)}
      >
        {label}
      </button>
    );
  }
  
  function renderIntroContent() {
    return (
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">從 Excel 題庫生成 Google 表單測驗</h2>
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">教學目標</h3>
          <ul className="space-y-2 list-disc pl-5 text-gray-600">
            <li>學會如何設計標準化題庫資料表（以 Excel / CSV 格式）</li>
            <li>將題庫資料轉換成 Google Apps Script 程式碼</li>
            <li>使用 Apps Script 建立 Google 表單，並設定正確答案（Quiz 模式）</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">適用對象</h3>
          <p className="text-gray-600 mb-4">
            本教學特別適合以下人士：
          </p>
          <ul className="space-y-2 list-disc pl-5 text-gray-600">
            <li>教師或助教，需要批量建立線上測驗表單</li>
            <li>網路行銷培訓師，想建立知識檢定系統</li>
            <li>企業培訓人員，需要建立員工培訓評估工具</li>
            <li>任何需要大量建立測驗題目的工作者</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-4">為什麼使用這種方法？</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-bold text-gray-800 mb-2">效率提升</h4>
              <p className="text-gray-600">
                手動在 Google 表單建立大量題目非常耗時，透過這個方法可以在幾分鐘內完成數十道題目的建立。
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-bold text-gray-800 mb-2">題庫管理</h4>
              <p className="text-gray-600">
                在 Excel 中維護題庫更加方便，便於編輯、分類和更新。
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-bold text-gray-800 mb-2">分類組織</h4>
              <p className="text-gray-600">
                可以根據主題、難度等因素輕鬆組織題目，建立結構化的測驗。
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-bold text-gray-800 mb-2">重複使用</h4>
              <p className="text-gray-600">
                一次建立的題庫可以重複使用，輕鬆創建不同版本的測驗。
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  function renderStep1Content() {
    return (
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">步驟 1：準備題庫資料</h2>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">題庫格式說明</h3>
          <p className="text-gray-600 mb-4">
            使用 Excel 或 Google Sheets 創建具有以下欄位的表格：
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-3 border-b">題號</th>
                  <th className="py-2 px-3 border-b">主題</th>
                  <th className="py-2 px-3 border-b">難度</th>
                  <th className="py-2 px-3 border-b">題型</th>
                  <th className="py-2 px-3 border-b">題目</th>
                  <th className="py-2 px-3 border-b">選項A</th>
                  <th className="py-2 px-3 border-b">選項B</th>
                  <th className="py-2 px-3 border-b">選項C</th>
                  <th className="py-2 px-3 border-b">選項D</th>
                  <th className="py-2 px-3 border-b">正確答案</th>
                  <th className="py-2 px-3 border-b">解釋</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-3 border-b">1</td>
                  <td className="py-2 px-3 border-b">網路行銷概論</td>
                  <td className="py-2 px-3 border-b">易</td>
                  <td className="py-2 px-3 border-b">概念題</td>
                  <td className="py-2 px-3 border-b">以下哪一項是網路行銷優勢？</td>
                  <td className="py-2 px-3 border-b">成本高</td>
                  <td className="py-2 px-3 border-b">即時互動</td>
                  <td className="py-2 px-3 border-b">傳統為主</td>
                  <td className="py-2 px-3 border-b">地點受限</td>
                  <td className="py-2 px-3 border-b">B</td>
                  <td className="py-2 px-3 border-b">網路行銷具有即時互動、成本低的特性</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className="font-bold text-gray-800 mb-2">檔案格式：</h4>
          <ul className="list-disc pl-5 text-gray-600 mb-4">
            <li>儲存為 .csv 或 .xlsx 檔案</li>
            <li>建議使用 UTF-8 編碼，避免中文顯示問題</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-4">題庫設計建議</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h4 className="font-bold text-gray-800">題目多樣化</h4>
              <p className="text-gray-600">盡量涵蓋不同難度和主題，全面測試學習者的知識掌握程度。</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h4 className="font-bold text-gray-800">選項設計</h4>
              <p className="text-gray-600">錯誤選項應具有合理性，避免過於明顯的錯誤選項。</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h4 className="font-bold text-gray-800">題目清晰</h4>
              <p className="text-gray-600">確保題目表述清晰、無歧義，讓學習者能準確理解題意。</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  function renderStep2Content() {
    return (
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">步驟 2：將題庫轉換為 Google Apps Script</h2>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">轉換方法</h3>
          <p className="text-gray-600 mb-4">
            我們需要將 Excel/CSV 中的每道題目轉換為 Apps Script 程式碼。以下提供幾種方式：
          </p>
          
          <div className="space-y-6">
            <div className="border rounded-lg">
              <div className="bg-gray-100 px-4 py-2 border-b font-medium">轉換後的程式碼範例</div>
              <div className="p-4">
                <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`function buildForm() {
  var form = FormApp.create("網路行銷題庫測驗");
  form.setIsQuiz(true);

  var item1 = form.addMultipleChoiceItem();
  item1.setTitle("網路行銷的主要目的是什麼？");
  item1.setChoices([
    item1.createChoice("開發實體店面", false),
    item1.createChoice("增加印刷廣告量", false),
    item1.createChoice("強化品牌、互動與顧客關係", true),
    item1.createChoice("建立通訊錄", false)
  ]);

  var item2 = form.addMultipleChoiceItem();
  item2.setTitle("下列哪一項不是網路行銷的特性？");
  item2.setChoices([
    item2.createChoice("多元化線上渠道", false),
    item2.createChoice("數據驅動", false),
    item2.createChoice("必須依賴實體通路", true),
    item2.createChoice("個人化與精準定位", false)
  ]);
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  function renderStep3Content() {
    return (
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">步驟 3：在 Google 表單中使用 Apps Script</h2>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">操作步驟</h3>
          <ol className="space-y-6 list-decimal pl-5">
            <li className="pl-2">
              <div className="font-medium text-gray-800">開啟 Google 表單</div>
              <p className="text-gray-600 mt-1">
                前往 forms.google.com 並登入您的 Google 帳號。
              </p>
            </li>
            
            <li className="pl-2">
              <div className="font-medium text-gray-800">建立新表單</div>
              <p className="text-gray-600 mt-1">
                點擊左上角的「+」按鈕建立一個新表單。您可以先輸入一個臨時的標題，稍後會被程式碼覆蓋。
              </p>
            </li>
            
            <li className="pl-2">
              <div className="font-medium text-gray-800">開啟 Apps Script 編輯器</div>
              <p className="text-gray-600 mt-1">
                點擊右上角的三個點「⋮」，選擇【擴充功能】→【Apps Script】。
              </p>
            </li>
            
            <li className="pl-2">
              <div className="font-medium text-gray-800">貼上程式碼</div>
              <p className="text-gray-600 mt-1">
                將步驟 2 中生成的 Apps Script 程式碼貼到編輯器中，覆蓋預設的空白函數。
              </p>
            </li>
            
            <li className="pl-2">
              <div className="font-medium text-gray-800">執行程式碼</div>
              <p className="text-gray-600 mt-1">
                點選工具欄的「執行」按鈕▶️（或按下 Ctrl+Enter），選擇 buildForm 函數執行。
              </p>
            </li>
            
            <li className="pl-2">
              <div className="font-medium text-gray-800">查看結果</div>
              <p className="text-gray-600 mt-1">
                執行完成後，腳本將會創建一個新的 Google 表單，其中包含您所有的測驗題目。您可以在 Google 雲端硬碟中找到這個名為「網路行銷題庫測驗」的表單。
              </p>
            </li>
          </ol>
        </div>
      </div>
    );
  }
  
  function renderAdvancedContent() {
    return (
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">進階應用</h2>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">進階功能介紹</h3>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <h4 className="font-bold text-gray-800">選項隨機排序</h4>
              <p className="text-gray-600 mt-1">
                在測驗中隨機顯示選項順序，避免學生猜測。
              </p>
              <pre className="bg-gray-100 p-3 rounded text-sm mt-2">item1.setShuffleOptions(true);</pre>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h4 className="font-bold text-gray-800">題目解析</h4>
              <p className="text-gray-600 mt-1">
                為答案添加解釋，幫助學生理解為什麼某個選項是正確的。
              </p>
              <pre className="bg-gray-100 p-3 rounded text-sm mt-2">{`item1.setFeedbackForCorrect(
  FormApp.createFeedback()
    .setText("網路行銷具有即時互動、成本低的特性。")
    .build()
);`}</pre>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-800">主題分類</h4>
              <p className="text-gray-600 mt-1">
                按主題分組題目，讓測驗更有結構性。
              </p>
              <pre className="bg-gray-100 p-3 rounded text-sm mt-2">{`form.addPageBreakItem()
  .setTitle("社群媒體行銷");`}</pre>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // 根據當前標籤渲染對應內容
  function renderTabContent() {
    switch(activeTab) {
      case 'intro':
        return renderIntroContent();
      case 'step1':
        return renderStep1Content();
      case 'step2':
        return renderStep2Content();
      case 'step3':
        return renderStep3Content();
      case 'advanced':
        return renderAdvancedContent();
      default:
        return renderIntroContent();
    }
  }
  
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
        {/* 導航標籤 */}
        <div className="flex flex-wrap border-b border-gray-200 mb-8">
          {renderTabButton('intro', '概述')}
          {renderTabButton('step1', '步驟 1：準備題庫')}
          {renderTabButton('step2', '步驟 2：轉換程式碼')}
          {renderTabButton('step3', '步驟 3：建立表單')}
          {renderTabButton('advanced', '進階應用')}
        </div>

        {/* 內容顯示區 */}
        <div className="max-w-4xl mx-auto">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}

export default ExamCreationPage;