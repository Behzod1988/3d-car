// Данные деталей автомобиля
const carParts = [
    {
        id: "body",
        name: "Кузов",
        color: "#3498db",
        status: "working",
        description: "Основной кузов автомобиля",
        price: 5000,
        icon: "fas fa-car"
    },
    {
        id: "hood",
        name: "Капот",
        color: "#2980b9",
        status: "working",
        description: "Капот двигателя",
        price: 1200,
        icon: "fas fa-car-side"
    },
    {
        id: "trunk",
        name: "Багажник",
        color: "#2980b9",
        status: "working",
        description: "Крышка багажника",
        price: 1100,
        icon: "fas fa-suitcase"
    },
    {
        id: "door-front",
        name: "Передняя дверь",
        color: "#1a5276",
        status: "warning",
        description: "Передняя левая дверь (скрипит)",
        price: 650,
        icon: "fas fa-door-open"
    },
    {
        id: "door-rear",
        name: "Задняя дверь",
        color: "#1a5276",
        status: "working",
        description: "Задняя левая дверь",
        price: 650,
        icon: "fas fa-door-closed"
    },
    {
        id: "windshield",
        name: "Лобовое стекло",
        color: "#aed6f1",
        status: "working",
        description: "Лобовое стекло с обогревом",
        price: 450,
        icon: "fas fa-window-maximize"
    },
    {
        id: "rear-window",
        name: "Заднее стекло",
        color: "#aed6f1",
        status: "working",
        description: "Заднее стекло",
        price: 380,
        icon: "fas fa-window-maximize"
    },
    {
        id: "wheel-front",
        name: "Переднее колесо",
        color: "#2c3e50",
        status: "working",
        description: "Левое переднее колесо R17",
        price: 320,
        icon: "fas fa-tire"
    },
    {
        id: "wheel-rear",
        name: "Заднее колесо",
        color: "#2c3e50",
        status: "replaced",
        description: "Левое заднее колесо R17 (новое)",
        price: 320,
        icon: "fas fa-tire"
    },
    {
        id: "headlight",
        name: "Передняя фара",
        color: "#f1c40f",
        status: "broken",
        description: "Левая фара (разбита)",
        price: 280,
        icon: "fas fa-lightbulb"
    },
    {
        id: "taillight",
        name: "Задний фонарь",
        color: "#e74c3c",
        status: "working",
        description: "Левый задний фонарь",
        price: 180,
        icon: "fas fa-traffic-light"
    },
    {
        id: "mirror",
        name: "Боковое зеркало",
        color: "#7f8c8d",
        status: "working",
        description: "Левое боковое зеркало",
        price: 150,
        icon: "fas fa-mirror"
    },
    {
        id: "bumper-front",
        name: "Передний бампер",
        color: "#34495e",
        status: "warning",
        description: "Передний бампер (царапины)",
        price: 420,
        icon: "fas fa-grip-lines"
    },
    {
        id: "bumper-rear",
        name: "Задний бампер",
        color: "#34495e",
        status: "working",
        description: "Задний бампер",
        price: 420,
        icon: "fas fa-grip-lines"
    },
    {
        id: "grill",
        name: "Решетка радиатора",
        color: "#2c3e50",
        status: "working",
        description: "Передняя решетка",
        price: 180,
        icon: "fas fa-grip-horizontal"
    }
];

// Статусы деталей
const statuses = {
    working: { 
        name: "Исправен", 
        color: "#27ae60", 
        icon: "fas fa-check-circle",
        description: "Деталь в исправном состоянии"
    },
    warning: { 
        name: "Требует внимания", 
        color: "#f39c12", 
        icon: "fas fa-exclamation-triangle",
        description: "Деталь требует проверки или обслуживания"
    },
    broken: { 
        name: "Неисправен", 
        color: "#e74c3c", 
        icon: "fas fa-times-circle",
        description: "Деталь неисправна и требует замены"
    },
    replaced: { 
        name: "Заменен", 
        color: "#8e44ad", 
        icon: "fas fa-sync-alt",
        description: "Деталь была заменена"
    }
};

// Состояние приложения
let appState = {
    selectedPartId: null,
    parts: [...carParts],
    version: "1.0"
};

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    console.log('Страница загружена. Инициализация приложения...');
    initApp();
});

// Основная функция инициализации
function initApp() {
    console.log('Инициализация приложения...');
    
    // Настраиваем обработчики для SVG элементов
    setupSvgClickHandlers();
    
    // Инициализируем список деталей
    updatePartsList();
    
    // Настраиваем обработчики событий
    setupEventListeners();
    
    // Обновляем статусы SVG элементов
    updateSvgStatuses();
    
    console.log('Приложение успешно инициализировано! Всего деталей:', appState.parts.length);
}

// Настройка обработчиков клика для SVG элементов
function setupSvgClickHandlers() {
    // Находим все детали в SVG
    const svgParts = document.querySelectorAll('.car-part');
    console.log('Найдено SVG элементов:', svgParts.length);
    
    svgParts.forEach(svgPart => {
        const partId = svgPart.getAttribute('data-id');
        console.log('Настройка обработчика для:', partId);
        
        // Добавляем обработчик клика
        svgPart.addEventListener('click', function(e) {
            console.log('Клик по SVG элементу:', partId);
            e.stopPropagation();
            selectPart(partId);
        });
        
        // Добавляем курсор и подсказку
        svgPart.style.cursor = 'pointer';
        svgPart.title = `Кликните для выбора`;
    });
}

// Выбор детали
function selectPart(partId) {
    console.log('Выбор детали:', partId);
    
    // Снимаем выделение со всех SVG элементов
    document.querySelectorAll('.car-part').forEach(svgPart => {
        svgPart.classList.remove('selected');
    });
    
    // Снимаем выделение со списка
    document.querySelectorAll('.part-item').forEach(item => {
        item.classList.remove('selected');
    });
    
    // Находим деталь
    const part = appState.parts.find(p => p.id === partId);
    if (!part) {
        console.error('Деталь не найдена:', partId);
        return;
    }
    
    // Выделяем SVG элемент
    const svgElement = document.querySelector(`[data-id="${partId}"]`);
    if (svgElement) {
        svgElement.classList.add('selected');
    }
    
    // Выделяем в списке
    const listItem = document.querySelector(`.part-item[data-id="${partId}"]`);
    if (listItem) {
        listItem.classList.add('selected');
        listItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    
    // Обновляем состояние
    appState.selectedPartId = partId;
    
    // Обновляем панель управления
    updateControlPanel(part);
    
    // Обновляем информацию
    updatePartInfo(part);
}

// Обновление панели управления
function updateControlPanel(part) {
    console.log('Обновление панели для:', part.name);
    
    document.getElementById('part-name').value = part.name;
    document.getElementById('part-color').value = part.color;
    document.getElementById('part-description').value = part.description || '';
    document.getElementById('part-price').value = part.price || '';
    
    // Обновляем кнопки статусов
    document.querySelectorAll('.status-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.status === part.status) {
            btn.classList.add('active');
        }
    });
}

// Обновление информации о детали
function updatePartInfo(part) {
    const status = statuses[part.status];
    const infoDiv = document.getElementById('part-info');
    
    infoDiv.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: center; gap: 15px;">
            <div style="width: 40px; height: 40px; background: ${part.color}; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white;">
                <i class="${part.icon}"></i>
            </div>
            <div style="text-align: left;">
                <h4 style="margin: 0 0 5px 0; color: white;">${part.name}</h4>
                <div style="display: flex; align-items: center; gap: 10px;">
                    <span style="background: ${status.color}20; color: white; padding: 3px 10px; border-radius: 12px;">
                        <i class="${status.icon}"></i> ${status.name}
                    </span>
                    ${part.price ? `<span style="color: #2ecc71; font-weight: bold;">$${part.price}</span>` : ''}
                </div>
            </div>
        </div>
    `;
}

// Обновление списка деталей
function updatePartsList() {
    const partsList = document.getElementById('parts-list');
    if (!partsList) {
        console.error('Не найден элемент parts-list!');
        return;
    }
    
    partsList.innerHTML = '';
    
    appState.parts.forEach(part => {
        const status = statuses[part.status];
        const isSelected = part.id === appState.selectedPartId;
        
        const item = document.createElement('div');
        item.className = `part-item ${isSelected ? 'selected' : ''}`;
        item.dataset.id = part.id;
        
        item.innerHTML = `
            <div class="part-icon" style="background: ${part.color};">
                <i class="${part.icon}"></i>
            </div>
            <div style="flex: 1;">
                <h4>${part.name}</h4>
                <div style="display: flex; align-items: center; gap: 10px; margin-top: 5px;">
                    <span class="part-status" style="background: ${status.color}20; color: ${status.color}; padding: 2px 8px; border-radius: 12px;">
                        <i class="${status.icon}"></i> ${status.name}
                    </span>
                    ${part.price ? `<span style="color: #27ae60; font-weight: bold;">$${part.price}</span>` : ''}
                </div>
            </div>
        `;
        
        item.addEventListener('click', () => {
            console.log('Клик по элементу списка:', part.id);
            selectPart(part.id);
        });
        
        partsList.appendChild(item);
    });
    
    console.log('Список деталей обновлен. Элементов:', appState.parts.length);
}

// Обновление статусов SVG элементов
function updateSvgStatuses() {
    appState.parts.forEach(part => {
        const svgElement = document.querySelector(`[data-id="${part.id}"]`);
        if (svgElement) {
            // Удаляем старые классы статусов
            svgElement.classList.remove('working', 'warning', 'broken', 'replaced');
            
            // Добавляем класс текущего статуса
            svgElement.classList.add(part.status);
            
            // Применяем стили в зависимости от статуса
            if (part.status === 'warning') {
                svgElement.style.animation = 'pulse 2s infinite';
            } else if (part.status === 'broken') {
                svgElement.style.opacity = '0.6';
                svgElement.style.strokeDasharray = '5,5';
            } else {
                svgElement.style.animation = '';
                svgElement.style.opacity = '1';
                svgElement.style.strokeDasharray = '';
            }
        }
    });
}

// Настройка обработчиков событий
function setupEventListeners() {
    console.log('Настройка обработчиков событий...');
    
    // Изменение цвета через color picker
    const colorInput = document.getElementById('part-color');
    if (colorInput) {
        colorInput.addEventListener('input', function(e) {
            console.log('Изменение цвета:', e.target.value);
            updatePartColor(e.target.value);
        });
    }
    
    // Пресеты цветов
    document.querySelectorAll('.color-preset').forEach(preset => {
        preset.addEventListener('click', function() {
            const color = this.getAttribute('data-color');
            console.log('Выбор пресета цвета:', color);
            if (colorInput) {
                colorInput.value = color;
                updatePartColor(color);
            }
        });
    });
    
    // Кнопки статусов
    document.querySelectorAll('.status-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const status = this.getAttribute('data-status');
            console.log('Изменение статуса на:', status);
            updatePartStatus(status);
        });
    });
    
    // Описание
    const descriptionInput = document.getElementById('part-description');
    if (descriptionInput) {
        descriptionInput.addEventListener('input', function(e) {
            console.log('Изменение описания');
            updatePartDescription(e.target.value);
        });
    }
    
    // Цена
    const priceInput = document.getElementById('part-price');
    if (priceInput) {
        priceInput.addEventListener('input', function(e) {
            const price = parseInt(e.target.value) || 0;
            console.log('Изменение цены:', price);
            updatePartPrice(price);
        });
    }
    
    // Кнопка сохранения
    const saveBtn = document.getElementById('save-btn');
    if (saveBtn) {
        saveBtn.addEventListener('click', function() {
            console.log('Сохранение изменений');
            saveChanges();
        });
    }
    
    // Клик по пустому месту (снятие выделения)
    document.addEventListener('click', function(e) {
        // Если клик не по детали и не по элементу списка
        if (!e.target.classList.contains('car-part') && 
            !e.target.closest('.part-item') &&
            !e.target.classList.contains('color-preset') &&
            !e.target.classList.contains('status-btn')) {
            clearSelection();
        }
    });
}

// Очистка выделения
function clearSelection() {
    console.log('Очистка выделения');
    
    appState.selectedPartId = null;
    
    document.querySelectorAll('.car-part').forEach(svgPart => {
        svgPart.classList.remove('selected');
    });
    
    document.querySelectorAll('.part-item').forEach(item => {
        item.classList.remove('selected');
    });
    
    document.getElementById('part-info').innerHTML = `
        <i class="fas fa-mouse-pointer"></i> Выберите деталь автомобиля
    `;
    
    document.getElementById('part-name').value = '';
    document.getElementById('part-description').value = '';
    document.getElementById('part-price').value = '';
}

// Обновление цвета детали
function updatePartColor(color) {
    if (!appState.selectedPartId) {
        alert('Сначала выберите деталь!');
        return;
    }
    
    console.log('Обновление цвета для детали', appState.selectedPartId, 'на', color);
    
    const part = appState.parts.find(p => p.id === appState.selectedPartId);
    if (part) {
        part.color = color;
        
        // Обновляем SVG элемент
        const svgElement = document.querySelector(`[data-id="${part.id}"]`);
        if (svgElement) {
            svgElement.setAttribute('fill', color);
        }
        
        // Обновляем иконку в списке
        const listItem = document.querySelector(`.part-item[data-id="${part.id}"] .part-icon`);
        if (listItem) {
            listItem.style.background = color;
        }
        
        // Обновляем информацию
        updatePartInfo(part);
    }
}

// Обновление статуса детали
function updatePartStatus(status) {
    if (!appState.selectedPartId) {
        alert('Сначала выберите деталь!');
        return;
    }
    
    console.log('Обновление статуса для детали', appState.selectedPartId, 'на', status);
    
    const part = appState.parts.find(p => p.id === appState.selectedPartId);
    if (part) {
        part.status = status;
        
        // Обновляем SVG элемент
        const svgElement = document.querySelector(`[data-id="${part.id}"]`);
        if (svgElement) {
            // Удаляем старые классы статусов
            svgElement.classList.remove('working', 'warning', 'broken', 'replaced');
            
            // Добавляем новый класс
            svgElement.classList.add(status);
            
            // Применяем анимации и стили
            if (status === 'warning') {
                svgElement.style.animation = 'pulse 2s infinite';
            } else if (status === 'broken') {
                svgElement.style.opacity = '0.6';
                svgElement.style.strokeDasharray = '5,5';
            } else {
                svgElement.style.animation = '';
                svgElement.style.opacity = '1';
                svgElement.style.strokeDasharray = '';
            }
        }
        
        // Обновляем кнопки
        document.querySelectorAll('.status-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-status') === status) {
                btn.classList.add('active');
            }
        });
        
        // Обновляем список
        updatePartsList();
        
        // Обновляем информацию
        updatePartInfo(part);
    }
}

// Обновление описания
function updatePartDescription(description) {
    if (!appState.selectedPartId) return;
    
    const part = appState.parts.find(p => p.id === appState.selectedPartId);
    if (part) {
        part.description = description;
    }
}

// Обновление цены
function updatePartPrice(price) {
    if (!appState.selectedPartId) return;
    
    const part = appState.parts.find(p => p.id === appState.selectedPartId);
    if (part) {
        part.price = price;
        updatePartsList();
        updatePartInfo(part);
    }
}

// Сохранение изменений
function saveChanges() {
    if (!appState.selectedPartId) {
        alert('Сначала выберите деталь для сохранения!');
        return;
    }
    
    const part = appState.parts.find(p => p.id === appState.selectedPartId);
    if (part) {
        alert(`Изменения для "${part.name}" сохранены!\nСтатус: ${statuses[part.status].name}\nЦвет: ${part.color}\nЦена: $${part.price}`);
        console.log('Сохраненные данные:', appState);
    }
}

// Экспорт данных (опционально)
function exportData() {
    const data = JSON.stringify(appState, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'car-parts-data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    URL.revokeObjectURL(url);
}

// Инициализация
console.log('Скрипт app.js загружен');
