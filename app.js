// Данные деталей автомобиля с координатами
const carParts = [
    {
        id: "engine",
        name: "Двигатель",
        color: "#3498db",
        status: "working",
        description: "V6 двигатель 3.0L",
        price: 5000,
        icon: "fas fa-cogs",
        x: 180, y: 120, width: 100, height: 60
    },
    {
        id: "door-front",
        name: "Передняя дверь",
        color: "#2980b9",
        status: "warning",
        description: "Дверь водителя (скрипит)",
        price: 650,
        icon: "fas fa-door-open",
        x: 150, y: 90, width: 50, height: 120
    },
    {
        id: "door-rear",
        name: "Задняя дверь",
        color: "#2980b9",
        status: "working",
        description: "Задняя левая дверь",
        price: 650,
        icon: "fas fa-door-closed",
        x: 200, y: 90, width: 50, height: 120
    },
    {
        id: "wheel-front",
        name: "Переднее колесо",
        color: "#2c3e50",
        status: "working",
        description: "Диск 17\" с шиной",
        price: 320,
        icon: "fas fa-tire",
        x: 130, y: 180, width: 60, height: 60
    },
    {
        id: "wheel-rear",
        name: "Заднее колесо",
        color: "#2c3e50",
        status: "replaced",
        description: "Новый диск 17\"",
        price: 320,
        icon: "fas fa-tire",
        x: 220, y: 180, width: 60, height: 60
    },
    {
        id: "headlight",
        name: "Фара",
        color: "#f1c40f",
        status: "broken",
        description: "Левая фара (разбита)",
        price: 280,
        icon: "fas fa-lightbulb",
        x: 100, y: 70, width: 40, height: 30
    },
    {
        id: "taillight",
        name: "Задний фонарь",
        color: "#e74c3c",
        status: "working",
        description: "Светодиодный фонарь",
        price: 180,
        icon: "fas fa-traffic-light",
        x: 250, y: 70, width: 40, height: 30
    },
    {
        id: "windshield",
        name: "Лобовое стекло",
        color: "#aed6f1",
        status: "working",
        description: "Стекло с обогревом",
        price: 450,
        icon: "fas fa-window-maximize",
        x: 130, y: 60, width: 140, height: 40
    },
    {
        id: "bumper-front",
        name: "Передний бампер",
        color: "#34495e",
        status: "warning",
        description: "Бампер (царапины)",
        price: 420,
        icon: "fas fa-grip-lines",
        x: 110, y: 190, width: 100, height: 20
    },
    {
        id: "bumper-rear",
        name: "Задний бампер",
        color: "#34495e",
        status: "working",
        description: "Задний бампер",
        price: 420,
        icon: "fas fa-grip-lines",
        x: 190, y: 190, width: 100, height: 20
    }
];

// Статусы деталей
const statuses = {
    working: { name: "Исправен", color: "#27ae60", icon: "fas fa-check-circle" },
    warning: { name: "Требует внимания", color: "#f39c12", icon: "fas fa-exclamation-triangle" },
    broken: { name: "Неисправен", color: "#e74c3c", icon: "fas fa-times-circle" },
    replaced: { name: "Заменен", color: "#8e44ad", icon: "fas fa-sync-alt" }
};

// Состояние приложения
let appState = {
    selectedPartId: null,
    parts: [...carParts],
    version: "1.0"
};

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM загружен, инициализируем приложение...');
    initApp();
});

// Основная функция инициализации
function initApp() {
    console.log('Инициализация приложения...');
    
    // Проверяем, есть ли контейнер для автомобиля
    const carContainer = document.getElementById('car-container');
    if (!carContainer) {
        console.error('Не найден контейнер для автомобиля!');
        return;
    }
    
    // Создаем интерактивные зоны
    createInteractiveZones();
    
    // Инициализируем список деталей
    updatePartsList();
    
    // Настраиваем обработчики событий
    setupEventListeners();
    
    // Обновляем статистику
    updateStatistics();
    
    console.log('Приложение успешно инициализировано!');
}

// Создание интерактивных зон поверх изображения
function createInteractiveZones() {
    const container = document.getElementById('car-container');
    
    // Очищаем старые зоны
    const oldZones = document.querySelectorAll('.interactive-zone');
    oldZones.forEach(zone => zone.remove());
    
    // Создаем новые зоны для каждой детали
    appState.parts.forEach(part => {
        const zone = document.createElement('div');
        zone.className = 'interactive-zone';
        zone.dataset.id = part.id;
        
        // Позиционируем зону
        zone.style.left = `${part.x}px`;
        zone.style.top = `${part.y}px`;
        zone.style.width = `${part.width}px`;
        zone.style.height = `${part.height}px`;
        
        // Устанавливаем цвет в зависимости от статуса
        applyStatusStyle(zone, part.status);
        
        // Добавляем обработчик клика
        zone.addEventListener('click', function(e) {
            e.stopPropagation();
            selectPart(part.id);
        });
        
        // Добавляем всплывающую подсказку
        zone.title = `${part.name} - ${statuses[part.status].name}`;
        
        container.appendChild(zone);
    });
}

// Применение стиля статуса к элементу
function applyStatusStyle(element, status) {
    // Удаляем старые классы статусов
    element.classList.remove('working', 'warning', 'broken', 'replaced');
    
    // Добавляем новый класс
    element.classList.add(status);
    
    // Устанавливаем цвет фона в зависимости от статуса
    const colors = {
        'working': 'rgba(39, 174, 96, 0.3)',
        'warning': 'rgba(243, 156, 18, 0.3)',
        'broken': 'rgba(231, 76, 60, 0.3)',
        'replaced': 'rgba(142, 68, 173, 0.3)'
    };
    
    element.style.backgroundColor = colors[status] || 'rgba(52, 152, 219, 0.3)';
    element.style.borderColor = colors[status] || 'rgba(52, 152, 219, 0.5)';
}

// Выбор детали
function selectPart(partId) {
    console.log('Выбрана деталь:', partId);
    
    // Снимаем выделение со всех зон
    document.querySelectorAll('.interactive-zone').forEach(zone => {
        zone.classList.remove('selected');
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
    
    // Выделяем зону
    const zone = document.querySelector(`.interactive-zone[data-id="${partId}"]`);
    if (zone) {
        zone.classList.add('selected');
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
                <h4 style="margin: 0 0 5px 0; color: #2c3e50;">${part.name}</h4>
                <div style="display: flex; align-items: center; gap: 10px;">
                    <span style="background: ${status.color}20; color: ${status.color}; padding: 3px 10px; border-radius: 12px;">
                        <i class="${status.icon}"></i> ${status.name}
                    </span>
                    ${part.price ? `<span style="color: #27ae60; font-weight: bold;">$${part.price}</span>` : ''}
                </div>
            </div>
        </div>
    `;
}

// Обновление списка деталей
function updatePartsList() {
    const partsList = document.getElementById('parts-list');
    if (!partsList) return;
    
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
                    <span class="part-status" style="background: ${status.color}20; color: ${status.color};">
                        <i class="${status.icon}"></i> ${status.name}
                    </span>
                    ${part.price ? `<span style="color: #27ae60; font-weight: bold;">$${part.price}</span>` : ''}
                </div>
            </div>
        `;
        
        item.addEventListener('click', () => selectPart(part.id));
        partsList.appendChild(item);
    });
}

// Обновление статистики
function updateStatistics() {
    // Можно добавить статистику позже
}

// Настройка обработчиков событий
function setupEventListeners() {
    console.log('Настройка обработчиков событий...');
    
    // Изменение цвета
    const colorInput = document.getElementById('part-color');
    if (colorInput) {
        colorInput.addEventListener('input', function(e) {
            updatePartColor(e.target.value);
        });
    }
    
    // Пресеты цветов
    document.querySelectorAll('.color-preset').forEach(btn => {
        btn.addEventListener('click', function() {
            const color = this.dataset.color;
            if (colorInput) {
                colorInput.value = color;
                updatePartColor(color);
            }
        });
    });
    
    // Кнопки статусов
    document.querySelectorAll('.status-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            updatePartStatus(this.dataset.status);
        });
    });
    
    // Описание
    const descriptionInput = document.getElementById('part-description');
    if (descriptionInput) {
        descriptionInput.addEventListener('input', function(e) {
            updatePartDescription(e.target.value);
        });
    }
    
    // Цена
    const priceInput = document.getElementById('part-price');
    if (priceInput) {
        priceInput.addEventListener('input', function(e) {
            updatePartPrice(parseInt(e.target.value) || 0);
        });
    }
    
    // Кнопка сохранения
    const saveBtn = document.getElementById('save-btn');
    if (saveBtn) {
        saveBtn.addEventListener('click', saveChanges);
    }
    
    // Клик по изображению (снятие выделения)
    const carImage = document.getElementById('car-image');
    if (carImage) {
        carImage.addEventListener('click', function(e) {
            // Если клик не по интерактивной зоне, снимаем выделение
            if (!e.target.classList.contains('interactive-zone')) {
                clearSelection();
            }
        });
    }
}

// Очистка выделения
function clearSelection() {
    appState.selectedPartId = null;
    
    document.querySelectorAll('.interactive-zone').forEach(zone => {
        zone.classList.remove('selected');
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
    if (!appState.selectedPartId) return;
    
    const part = appState.parts.find(p => p.id === appState.selectedPartId);
    if (part) {
        part.color = color;
        
        // Обновляем зону
        const zone = document.querySelector(`.interactive-zone[data-id="${part.id}"]`);
        if (zone) {
            zone.style.backgroundColor = color + '4D'; // Добавляем прозрачность
            zone.style.borderColor = color;
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
    if (!appState.selectedPartId) return;
    
    const part = appState.parts.find(p => p.id === appState.selectedPartId);
    if (part) {
        part.status = status;
        
        // Обновляем зону
        const zone = document.querySelector(`.interactive-zone[data-id="${part.id}"]`);
        if (zone) {
            applyStatusStyle(zone, status);
        }
        
        // Обновляем кнопки
        document.querySelectorAll('.status-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.status === status) {
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

// Экспорт данных
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

// Инициализируем приложение
console.log('Загружен скрипт app.js');
