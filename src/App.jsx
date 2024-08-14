// ----- LocalSrtorage pattern: -----
  
//   import { useState, useEffect } from 'react';
  
// **Функція, яка витягує і повертає значення з локал стореджу ЯКЩО ВОНО ПРИСУТНЄ, а якщо його не має, то повертає якесь дефолтне значення.Це значення буде початковим для стану компонента.

// function getInitialValues() {
//   const savedValues = window.localStorage.getItem("savedValues");
//   return savedValues !== null
//     ? JSON.parse(savedValues)
//     : {
//         good: 0,
//         neutral: 0,
//         bad: 0,
//       };
// }

// **Запис компонента Арр

// export const App () => {

// ** Задаємо стан на компонент і даємо йому початковим значення результат виконання ф - ї з отримання початково значення
  
// const [values, setValues] = useState(getInitialValues);

//   ** Задаємо ефект на стан компонента, у якому записуємо нове значення(після оновлення компоненту) в локал сторедж.
    
//   useEffect(() => {
//     window.localStorage.setItem("savedValues", JSON.stringify(values));
//   }, [values]);

//   ** Повертаємо якусь розмітку
  
//   return (<div> <Component someProp="propValue" /></div>);
// }
// _______________________________________________________________________________________________________________________________