import React, { useState } from 'react';
import TaskPage from './Pages/TaskPage';

// ログインの画面処理や画面遷移などを記述
const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div onClick={() => setCount(count + 1)}>
      {count}
      <TaskPage />
    </div>
  );
}

export default App;
