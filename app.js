// Данные деталей автомобиля
const carParts = [
    {
        id: "body",
        name: "Кузов",
        type: "rect",
        color: "#3498db",
        status: "working",
        description: "Основной кузов автомобиля",
        price: 5000,
        x: 150,
        y: 100,
        width: 500,
        height: 150,
        rx: 20,
        icon: "fas fa-car"
    },
    {
        id: "windshield",
        name: "Лобовое стекло",
        type: "polygon",
        color: "#87CEEB",
        status: "working",
        description: "Лобовое стекло с подогревом",
        price: 300,
        points: "350,100 450,100 500,150 300,150",
        icon: "fas fa-window-maximize"
    },
    {
        id: "door-front",
        name: "Передняя дверь",
        type: "rect",
        color: "#3498db",
        status: "warning",
        description: "Левая передняя дверь",
        price: 400,
        x: 300,
        y: 150,
        width: 80,
        height: 100,
        icon: "fas fa-door-open"
    },
    {
        id: "door-rear",
        name: "Задняя дверь",
        type: "rect",
        color: "#3498db",
        status: "working",
        description: "Левая задняя дверь",
        price: 400,
        x: 450,
        y: 150,
        width: 80,
        height: 100,
        icon: "fas fa-door-closed"
    },
    {
        id: "wheel-front",
        name: "Переднее колесо",
        type: "circle",
        color: "#2c3e50",
        status: "working",
        description: "Левое переднее колесо 17\"",
        price: 200,
        cx: 280,
        cy: 280,
        r: 40,
        icon: "fas fa-circle"
    },
    {
        id: "wheel-rear",
        name: "Заднее колесо",
        type: "circle",
        color: "#2c3e50",
        status: "replaced",
        description: "Левое заднее колесо 17\" (заменено 01.2024)",
        price: 200,
        cx: 550,
        cy: 280,
        r: 40,
        icon: "fas fa-circle"
    },
    {
        id: "headlight",
        name: "Фара",
        type: "circle",
        color: "#f1c40f",
        status: "broken",
        description: "Левая фара (требует замены)",
        price: 150,
        cx: 200,
        cy: 170,
        r: 20,
        icon: "fas fa-lightbulb"
    },
    {
        id: "taillight",
        name: "Задний фонарь",
        type: "rect",
        color: "#e74c3c",
        status: "working",
        description: "Левый задний фонарь",
        price: 80,
        x: 650,
        y: 150,
        width: 20,
        height: 40,
        rx: 5,
        icon: "fas fa-traffic-light"
    },
    {
        id: "hood",
        name: "Капот",
        type: "polygon",
        color: "#2980b9",
        status: "working",
        description: "Капот двигателя",
        price: 600,
        points: "200,100 350,100 300,150 150,150",
        icon: "fas fa-car-side"
    },
    {
        id: "trunk",
        name: "Багажник",
        type: "polygon",
        color: "#2980b9",
        status: "working",
        description: "Крышка багажника",
        price: 550,
        points: "500,100 650,100 650,150 550,150",
        icon: "fas fa-suitcase"
    },
    {
        id: "mirror",
        name: "Зеркало",
        type: "circle",
        color: "#7f8c8d",
        status: "warning",
        description: "Левое боковое зеркало (люфт)",
        price: 75,
        cx: 250,
        cy: 140,
        r: 12,
        icon: "fas fa-mirror"
    },
    {
        id: "bumper-front",
        name: "Передний бампер",
        type: "rect",
        color: "#34495e",
        status: "working",
        description: "Передний бампер",
        price: 350,
        x: 150,
        y: 250,
        width: 100,
        height: 30,
        rx: 10,
        icon: "fas fa-grip-lines"
    },
    {
        id: "bumper-rear",
        name: "Задний бампер",
        type: "rect",
        color: "#34495e",
        status: "working",
        description: "Задний бампер",
        price: 350,
        x: 550,
        y: 250,
        width: 100,
        height: 30,
        rx: 10,
        icon: "fas fa-grip-lines"
    }
];

// Статусы с описанием
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

// Текущее состояние приложения
let appState = {
    selectedPartId: null,
    parts: [...carParts],
    version: "1.0.0",
    lastModified: new Date().toISOString()
};

// Функция для обновления статистики
function updateStatistics() {
    const stats = {
        total: appState.parts.length,
        working: appState.parts.filter(p => p.status === "working").length,
        warning: appState.parts.filter(p => p.status === "warning").length,
        broken: appState.parts.filter(p => p.status === "broken").length,
        replaced: appState.parts.filter(p => p.status === "replaced").length
    };
    
    return stats;
}

// Функция для получения детали по ID
function getPartById(id) {
    return appState.parts.find(part => part.id === id);
}

// Функция для обновления детали
function updatePart(partId, updates) {
    const index = appState.parts.findIndex(part => part.id === partId);
    if (index !== -1) {
        appState.parts[index] = { ...appState.parts[index], ...updates };
        appState.lastModified = new Date().toISOString();
        return true;
    }
    return false;
}

// Функция для сброса всех изменений
function resetToDefault() {
    appState.parts = [...carParts];
    appState.selectedPartId = null;
    appState.lastModified = new Date().toISOString();
}

// Основной модуль приложения
class CarEditorApp {
    constructor() {
        this.selectedPart = null;
        this.init();
    }

    init() {
        // Инициализация после загрузки DOM
        document.addEventListener('DOMContentLoaded', () => {
            this.renderCar();
            this.setupEventListeners();
            this.updatePartsList();
            this.updateStatistics();
        });
    }

    // Рендер автомобиля в SVG
    renderCar() {
        const svg = document.getElementById('car-svg');
        svg.innerHTML = ''; // Очищаем SVG

        appState.parts.forEach(part => {
            let element;
            
            // Создаем SVG элемент в зависимости от типа
            switch (part.type) {
                case 'rect':
                    element = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                    element.setAttribute('x', part.x);
                    element.setAttribute('y', part.y);
                    element.setAttribute('width', part.width);
                    element.setAttribute('height', part.height);
                    if (part.rx) element.setAttribute('rx', part.rx);
                    break;
                    
                case 'circle':
                    element = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                    element.setAttribute('cx', part.cx);
                    element.setAttribute('cy', part.cy);
                    element.setAttribute('r', part.r);
                    break;
                    
                case 'polygon':
                    element = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
                    element.setAttribute('points', part.points);
                    break;
            }

            if (element) {
                // Устанавливаем атрибуты
                element.setAttribute('id', `part-${part.id}`);
                element.setAttribute('class', 'car-part');
                element.setAttribute('fill', part.color);
                element.setAttribute('data-id', part.id);
                element.setAttribute('data-status', part.status);
                
                // Добавляем стиль в зависимости от статуса
                this.applyStatusStyle(element, part.status);
                
                // Обработчик клика
                element.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.selectPart(part.id);
                });

                svg.appendChild(element);
            }
        });

        // Добавляем базовые элементы автомобиля (статичные)
        this.addStaticCarElements(svg);
    }

    // Добавляем статичные элементы (рама, линии)
    addStaticCarElements(svg) {
        // Линия земли
        const ground = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        ground.setAttribute('x1', '50');
        ground.setAttribute('y1', '320');
        ground.setAttribute('x2', '750');
        ground.setAttribute('y2', '320');
        ground.setAttribute('stroke', '#95a5a6');
        ground.setAttribute('stroke-width', '2');
        ground.setAttribute('stroke-dasharray', '5,5');
        svg.appendChild(ground);

        // Тень автомобиля
        const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
        shadow.setAttribute('cx', '400');
        shadow.setAttribute('cy', '330');
        shadow.setAttribute('rx', '300');
        shadow.setAttribute('ry', '20');
        shadow.setAttribute('fill', 'rgba(0,0,0,0.1)');
        shadow.setAttribute('filter', 'blur(5px)');
        svg.appendChild(shadow);
    }

    // Применяем стиль в зависимости от статуса
    applyStatusStyle(element, status) {
        // Удаляем предыдущие классы статусов
        ['working', 'warning', 'broken', 'replaced'].forEach(cls => {
            element.classList.remove(cls);
        });
        
        // Добавляем новый класс статуса
        element.classList.add(status);
        
        // Применяем анимацию для предупреждающих статусов
        if (status === 'warning') {
            element.style.animation = 'pulse 2s infinite';
        } else if (status === 'broken') {
            element.style.opacity = '0.6';
            element.style.strokeDasharray = '5,5';
        } else {
            element.style.animation = '';
            element.style.opacity = '1';
            element.style.strokeDasharray = '';
        }
    }

    // Выбор детали
    selectPart(partId) {
        // Убираем выделение со всех деталей
        document.querySelectorAll('.car-part').forEach(el => {
            el.classList.remove('selected');
        });

        // Снимаем выделение со всех элементов списка
        document.querySelectorAll('.part-item').forEach(el => {
            el.classList.remove('selected');
        });

        // Выделяем выбранную деталь
        const partElement = document.querySelector(`[data-id="${partId}"]`);
        const part = getPartById(partId);
        
        if (partElement && part) {
            partElement.classList.add('selected');
            this.selectedPart = part;
            appState.selectedPartId = partId;

            // Обновляем информацию в панели управления
            this.updateControlPanel(part);
            
            // Выделяем соответствующий элемент в списке
            const listItem = document.querySelector(`.part-item[data-id="${partId}"]`);
            if (listItem) {
                listItem.classList.add('selected');
                listItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
            
            // Обновляем информацию в оверлее
            document.getElementById('selected-part-info').innerHTML = `
                <i class="fas ${part.icon}"></i> 
                <strong>${part.name}</strong> - ${statuses[part.status].name}
            `;
        }
    }

    // Обновление панели управления
    updateControlPanel(part) {
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

        // Обновляем пресеты цветов
        document.querySelectorAll('.color-preset').forEach(preset => {
            preset.classList.remove('active');
            if (preset.dataset.color === part.color) {
                preset.classList.add('active');
                preset.style.borderColor = '#3498db';
                preset.style.transform = 'scale(1.1)';
            }
        });
    }

    // Настройка обработчиков событий
    setupEventListeners() {
        // Изменение цвета через color picker
        document.getElementById('part-color').addEventListener('input', (e) => {
            this.updatePartColor(e.target.value);
        });

        // Пресеты цветов
        document.querySelectorAll('.color-preset').forEach(preset => {
            preset.addEventListener('click', (e) => {
                const color = e.target.dataset.color;
                document.getElementById('part-color').value = color;
                this.updatePartColor(color);
            });
        });

        // Кнопки статусов
        document.querySelectorAll('.status-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const status = e.target.dataset.status;
                this.updatePartStatus(status);
            });
        });

        // Описание детали
        document.getElementById('part-description').addEventListener('input', (e) => {
            if (this.selectedPart) {
                updatePart(this.selectedPart.id, { description: e.target.value });
            }
        });

        // Стоимость детали
        document.getElementById('part-price').addEventListener('input', (e) => {
            if (this.selectedPart) {
                const price = e.target.value ? parseInt(e.target.value) : 0;
                updatePart(this.selectedPart.id, { price: price });
                this.updatePartsList();
            }
        });

        // Кнопка сохранения
        document.getElementById('save-btn').addEventListener('click', () => {
            this.saveChanges();
        });

        // Кнопка сброса
        document.getElementById('reset-btn').addEventListener('click', () => {
            if (confirm('Вы уверены, что хотите сбросить все изменения?')) {
                resetToDefault();
                this.renderCar();
                this.updatePartsList();
                this.updateStatistics();
                this.selectedPart = null;
                document.getElementById('selected-part-info').innerHTML = 
                    '<i class="fas fa-mouse-pointer"></i> Выберите деталь автомобиля';
                
                // Сброс панели управления
                document.getElementById('part-name').value = '';
                document.getElementById('part-description').value = '';
                document.getElementById('part-price').value = '';
            }
        });

        // Кнопка экспорта
        document.getElementById('export-btn').addEventListener('click', () => {
            this.exportData();
        });
    }

    // Обновление цвета детали
    updatePartColor(color) {
        if (this.selectedPart) {
            const partElement = document.querySelector(`[data-id="${this.selectedPart.id}"]`);
            if (partElement) {
                partElement.setAttribute('fill', color);
                updatePart(this.selectedPart.id, { color: color });
            }
        }
    }

    // Обновление статуса детали
    updatePartStatus(status) {
        if (this.selectedPart) {
            const partElement = document.querySelector(`[data-id="${this.selectedPart.id}"]`);
            if (partElement) {
                this.applyStatusStyle(partElement, status);
                partElement.setAttribute('data-status', status);
                updatePart(this.selectedPart.id, { status: status });
                
                // Обновляем информацию в оверлее
                const part = getPartById(this.selectedPart.id);
                document.getElementById('selected-part-info').innerHTML = `
                    <i class="fas ${part.icon}"></i> 
                    <strong>${part.name}</strong> - ${statuses[status].name}
                `;
                
                this.updatePartsList();
                this.updateStatistics();
            }
        }
    }

    // Обновление списка деталей
    updatePartsList() {
        const partsList = document.getElementById('parts-list');
        partsList.innerHTML = '';

        appState.parts.forEach(part => {
            const status = statuses[part.status];
            const listItem = document.createElement('div');
            listItem.className = `part-item ${part.id === appState.selectedPartId ? 'selected' : ''}`;
            listItem.dataset.id = part.id;
            
            listItem.innerHTML = `
                <div class="part-icon" style="background-color: ${part.color};">
                    <i class="${part.icon}"></i>
                </div>
                <div class="part-info">
                    <h4>${part.name}</h4>
                    <div class="part-status" style="background-color: ${status.color}20; color: ${status.color};">
                        <i class="${status.icon}"></i> ${status.name}
                    </div>
                    ${part.price ? `<div class="part-price">$${part.price}</div>` : ''}
                </div>
            `;
            
            listItem.addEventListener('click', () => {
                this.selectPart(part.id);
            });
            
            partsList.appendChild(listItem);
        });
    }

    // Обновление статистики
    updateStatistics() {
        const stats = updateStatistics();
        
        document.getElementById('total-parts').textContent = stats.total;
        document.getElementById('working-parts').textContent = stats.working;
        document.getElementById('warning-parts').textContent = stats.warning;
        document.getElementById('broken-parts').textContent = stats.broken;
    }

    // Сохранение изменений
    saveChanges() {
        if (this.selectedPart) {
            // Здесь можно добавить логику сохранения на сервер
            const part = getPartById(this.selectedPart.id);
            alert(`Изменения для "${part.name}" сохранены!\nСтатус: ${statuses[part.status].name}`);
            
            // Логирование в консоль для отладки
            console.log('Сохраненное состояние:', {
                part: part,
                appState: appState,
                timestamp: new Date().toISOString()
            });
        } else {
            alert('Пожалуйста, выберите деталь для сохранения изменений.');
        }
    }

    // Экспорт данных
    exportData() {
        const exportData = {
            ...appState,
            exportDate: new Date().toISOString(),
            statistics: updateStatistics()
        };
        
        const dataStr = JSON.stringify(exportData, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
        
        const exportFileDefaultName = `car-parts-${new Date().toISOString().split('T')[0]}.json`;
        
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
        
        alert('Данные успешно экспортированы в JSON файл!');
    }
}

// Инициализация приложения
const app = new CarEditorApp();
