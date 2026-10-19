// 1. Перевірка на IP-адресу
function isIPAddress(ip) {
    const ipRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return ipRegex.test(ip);
}

// 2. Пошук RGBA кольору
function findRGBA(text) {
    // Шукає rgba(число, число, число, число)
    const rgbaRegex = /rgba\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*(0|1|0?\.\d+)\s*\)/i;
    const match = text.match(rgbaRegex);
    return match ? match[0] : null;
}

// 3. Пошук HEX кольору (#ABC або #ABCDEF)
function findHexColor(text) {
    const hexRegex = /#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})\b/;
    const match = text.match(hexRegex);
    return match ? match[0] : null;
}

// 4. Пошук тегів за іменем
function findTags(text, tag) {
    // Створюємо динамічний регулярний вираз для пошуку <tag ...> або </tag>
    const tagRegex = new RegExp(`<${tag}[^>]*>`, 'gi');
    return text.match(tagRegex) || [];
}

// 5. Пошук додатних чисел
function findPosNum(text) {
    // Шукає числа (цілі або дробові), перед якими немає знаку мінус
    const numRegex = /(?<!-)\b\d+(\.\d+)?\b/g;
    const matches = text.match(numRegex);
    // Перетворюємо рядки в числа і фільтруємо нулі, якщо потрібно (зазвичай додатні - це > 0)
    return matches ? matches.map(Number).filter(n => n > 0) : [];
}

// 6. Пошук дат (Формат РРРР-ММ-ДД)
function findDates(text) {
    const dateRegex = /\b\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])\b/g;
    return text.match(dateRegex) || [];
}

// 7. Пошук Email
function findEmail(text) {
    // Спрощена, але робоча регулярка для email
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;
    return text.match(emailRegex) || [];
}