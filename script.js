function showMessage(text) {  
    const messageBox = document.getElementById('message-box');  
    messageBox.innerText = text; // Yozilgan matnni chiqarish  
    messageBox.style.display = 'block'; // Xabarni ko'rsatish  
    
    // Yashirish funksiyasi  
    setTimeout(() => {  
        messageBox.style.display = 'none';  
    }, 2000); // 2 soniyadan keyin yashiradi  
}