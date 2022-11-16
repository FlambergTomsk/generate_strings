export const generateString = () => {
    let str = '';
    let range = (start, end) => [...Array(end - start).keys(), end - start].map(n => start + n);
    let A = range(65, 90);   // A-Z
    let a = range(97, 122);  // a-z
    let all = A.concat(a);
    for(let i = 0; i <100; i++){
    str += String.fromCharCode(all[Math.floor(Math.random() * all.length)]); 
    // Берём случайное число, преобразуем в соответствующий символ и добавляем к строке
     }
    return str;
}