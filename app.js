// Данные деталей автомобиля (реалистичные SVG пути)
const carParts = [
    {
        id: "body",
        name: "Кузов",
        type: "path",
        color: "#3498db",
        status: "working",
        description: "Основной кузов автомобиля",
        price: 8500,
        svgPath: "M150,180 Q250,120 400,120 Q550,120 650,180 L650,280 Q600,320 400,320 Q200,320 150,280 Z",
        icon: "fas fa-car"
    },
    {
        id: "hood",
        name: "Капот",
        type: "path",
        color: "#2980b9",
        status: "working",
        description: "Капот двигателя",
        price: 1200,
        svgPath: "M200,180 Q250,140 400,140 Q550,140 600,180 L600,220 Q550,200 400,200 Q250,200 200,220 Z",
        icon: "fas fa-car-side"
    },
    {
        id: "trunk",
        name: "Багажник",
        type: "path",
        color: "#2980b9",
        status: "working",
        description: "Крышка багажника",
        price: 1100,
        svgPath: "M600,180 Q650,160 650,180 L650,220 Q600,200 550,220 L550,180 Q575,170 600,180",
        icon: "fas fa-suitcase"
    },
    {
        id: "windshield",
        name: "Лобовое стекло",
        type: "path",
        color: "#aed6f1",
        status: "working",
        description: "Лобовое стекло с обогревом",
        price: 450,
        svgPath: "M250,180 Q400,140 550,180 L550,200 Q400,160 250,200 Z",
        icon: "fas fa-window-maximize"
    },
    {
        id: "rear-window",
        name: "Заднее стекло",
        type: "path",
        color: "#aed6f1",
        status: "working",
        description: "Заднее стекло",
        price: 380,
        svgPath: "M550,180 Q600,160 650,180 L650,200 Q600,180 550,200 Z",
        icon: "fas fa-window-maximize"
    },
    {
        id: "door-front",
        name: "Передняя дверь",
        type: "path",
        color: "#1a5276",
        status: "warning",
        description: "Передняя левая дверь (скрипит)",
        price: 650,
        svgPath: "M300,180 L300,280 Q350,280 400,280 L400,180 Q350,180 300,180",
        icon: "fas fa-door-open"
    },
    {
        id: "door-rear",
        name: "Задняя дверь",
        type: "path",
        color: "#1a5276",
        status: "working",
        description: "Задняя левая дверь",
        price: 650,
        svgPath: "M400,180 L400,280 Q450,280 500,280 L500,180 Q450,180 400,180",
        icon: "fas fa-door-closed"
    },
    {
        id: "wheel-front",
        name: "Переднее колесо",
        type: "circle",
        color: "#2c3e50",
        status: "working",
        description: "Левое переднее колесо R17",
        price: 320,
        cx: 280,
        cy: 300,
        r: 40,
        icon: "fas fa-tire"
    },
    {
        id: "wheel-rear",
        name: "Заднее колесо",
        type: "circle",
        color: "#2c3e50",
        status: "replaced",
        description: "Левое заднее колесо R17 (новое)",
        price: 320,
        cx: 520,
        cy: 300,
        r: 40,
        icon: "fas fa-tire"
    },
    {
        id: "headlight",
        name: "Передняя фара",
        type: "ellipse",
        color: "#f1c40f",
        status: "broken",
        description: "Левая фара (разбита)",
        price: 280,
        cx: 220,
        cy: 200,
        rx: 25,
        ry: 15,
        icon: "fas fa-lightbulb"
    },
    {
        id: "taillight",
        name: "Задний фонарь",
        type: "ellipse",
        color: "#e74c3c",
        status: "working",
        description: "Левый задний фонарь",
        price: 180,
        cx: 650,
        cy: 200,
        rx: 20,
        ry: 12,
        icon: "fas fa-traffic-light"
    },
    {
        id: "bumper-front",
        name: "Передний бампер",
        type: "path",
        color: "#34495e",
        status: "warning",
        description: "Передний бампер (царапины)",
        price: 420,
        svgPath: "M180,220 Q250,240 320,220",
        icon: "fas fa-grip-lines"
    },
    {
        id: "bumper-rear",
        name: "Задний бампер",
        type: "path",
        color: "#34495e",
        status: "working",
        description: "Задний бампер",
        price: 420,
        svgPath: "M480,220 Q550,240 620,220",
        icon: "fas fa-grip-lines"
    },
    {
        id: "mirror",
        name: "Боковое зеркало",
        type: "ellipse",
        color: "#7f8c8d",
        status: "working",
        description: "Левое боковое зеркало",
        price: 120,
        cx: 260,
        cy: 180,
        rx: 10,
        ry: 15,
        icon: "fas fa-mirror"
    },
    {
        id: "roof",
        name: "Крыша",
        type: "path",
        color: "#1f618d",
        status: "working",
        description: "Крыша автомобиля",
        price: 950,
        svgPath: "M250,180 Q400,130 550,180",
        icon: "fas fa-car"
    },
    {
        id: "grill",
        name: "Решетка радиатора",
        type: "rect",
        color: "#2c3e50",
        status: "working",
        description: "Передняя решетка",
        price: 180,
        x: 240,
        y: 190,
        width: 120,
        height: 20,
        rx: 5,
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

// Получить деталь по ID
function getPartById(id) {
    return appState.parts.find(part => part.id === id);
}

// Обновить деталь
function updatePart(partId, updates) {
    const index = appState.parts.findIndex(part => part.id === partId);
    if (index !== -1) {
        appState.parts[index] = { ...appState.parts[index], ...updates };
        appState.lastModified = new Date().toISOString();
        return true;
    }
    return false;
}

// Сбросить все изменения
function resetToDefault() {
    appState.parts = carParts.map(part => ({ ...part }));
    appState.selectedPartId = null;
    appState.lastModified = new Date().toISOString();
}

// Основной класс приложения
class CarEditorApp {
    constructor() {
        this.selectedPart = null;
        this.init();
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.renderCar();
            this.setupEventListeners();
            this.updatePartsList();
            this.updateStatistics();
        });
    }

    // Отрисовка автомобиля
    renderCar() {
        const svg = document.getElementById('car-svg');
        svg.innerHTML = '';

        // Сначала рисуем базовый контур автомобиля
        const carOutline = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        carOutline.setAttribute('d', 'M150,180 Q250,120 400,120 Q550,120 650,180 L650,280 Q600,320 400,320 Q200,320 150,280 Z');
        carOutline.setAttribute('fill', '#ecf0f1');
        carOutline.setAttribute('stroke', '#bdc3c7');
        carOutline.setAttribute('stroke-width', '3');
        svg.appendChild(carOutline);

        // Рисуем все детали
        appState.parts.forEach(part => {
            let element;
            
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
                    
                case 'ellipse':
                    element = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
                    element.setAttribute('cx', part.cx);
                    element.setAttribute('cy', part.cy);
                    element.setAttribute('rx', part.rx);
                    element.setAttribute('ry', part.ry);
                    break;
                    
                case 'path':
                    element = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    element.setAttribute('d', part.svgPath);
                    break;
            }

            if (element) {
                element.setAttribute('id', `part-${part.id}`);
                element.setAttribute('class', 'car-part');
                element.setAttribute('fill', part.color);
                element.setAttribute('data-id', part.id);
                element.setAttribute('data-status', part.status);
                
                // Добавляем обводку для путей
                if (part.type === 'path') {
                    element.setAttribute('stroke', '#2c3e50');
                    element.setAttribute('stroke-width', '1');
                }
                
                // Применяем стиль статуса
                this.applyStatusStyle(element, part.status);
                
                // Обработчик клика
                element.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.selectPart(part.id);
                });

                svg.appendChild(element);
            }
        });

        // Добавляем статичные элементы
        this.addStaticCarElements(svg);
    }

    // Добавляем статичные элементы
    addStaticCarElements(svg) {
        // Линия земли
        const ground = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        ground.setAttribute('x1', '100');
        ground.setAttribute('y1', '350');
        ground.setAttribute('x2', '700');
        ground.setAttribute('y2', '350');
        ground.setAttribute('stroke', '#95a5a6');
        ground.setAttribute('stroke-width', '3');
        ground.setAttribute('stroke-dasharray', '10,5');
        svg.appendChild(ground);

        // Тень автомобиля
        const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
        shadow.setAttribute('cx', '400');
        shadow.setAttribute('cy', '360');
        shadow.setAttribute('rx', '280');
        shadow.setAttribute('ry', '25');
        shadow.setAttribute('fill', 'rgba(0,0,0,0.1)');
        shadow.setAttribute('filter', 'blur(8px)');
        svg.appendChild(shadow);
    }

    // Применение стиля статуса
    applyStatusStyle(element, status) {
        // Удаляем старые классы статусов
        ['working', 'warning', 'broken', 'replaced'].forEach(cls => {
            element.classList.remove(cls);
        });
        
        // Добавляем новый класс
        element.classList.add(status);
        
        // Применяем эффекты
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
        // Снимаем выделение
        document.querySelectorAll('.car-part').forEach(el => {
            el.classList.remove('selected');
        });
        document.querySelectorAll('.part-item').forEach(el => {
            el.classList.remove('selected');
        });

        // Выделяем новую деталь
        const partElement = document.querySelector(`[data-id="${partId}"]`);
        const part = getPartById(partId);
        
        if (partElement && part) {
            partElement.classList.add('selected');
            this.selectedPart = part;
            appState.selectedPartId = partId;

            // Обновляем панель управления
            this.updateControlPanel(part);
            
            // Выделяем в списке
            const listItem = document.querySelector(`.part-item[data-id="${partId}"]`);
            if (listItem) {
                listItem.classList.add('selected');
                listItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
            
            // Обновляем информацию
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
            preset.style.borderColor = '';
            preset.style.transform = '';
            if (preset.dataset.color === part.color) {
                preset.classList.add('active');
                preset.style.borderColor = '#3498db';
                preset.style.transform = 'scale(1.1)';
            }
        });
    }

    // Настройка обработчиков событий
    setupEventListeners() {
        // Изменение цвета
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
                const status = e.currentTarget.dataset.status;
                this.updatePartStatus(status);
            });
        });

        // Описание
        document.getElementById('part-description').addEventListener('input', (e) => {
            if (this.selectedPart) {
                updatePart(this.selectedPart.id, { description: e.target.value });
            }
        });

        // Цена
        document.getElementById('part-price').addEventListener('input', (e) => {
            if (this.selectedPart) {
                const price = e.target.value ? parseInt(e.target.value) : 0;
                updatePart(this.selectedPart.id, { price: price });
                this.updatePartsList();
            }
        });

        // Сохранение
        document.getElementById('save-btn').addEventListener('click', () => {
            this.saveChanges();
        });

        // Сброс
        document.getElementById('reset-btn').addEventListener('click', () => {
            if (confirm('Сбросить все изменения к исходным значениям?')) {
                resetToDefault();
                this.renderCar();
                this.updatePartsList();
                this.updateStatistics();
                this.selectedPart = null;
                document.getElementById('selected-part-info').innerHTML = 
                    '<i class="fas fa-mouse-pointer"></i> Кликните на любую деталь автомобиля';
                
                // Сброс панели
                document.getElementById('part-name').value = '';
                document.getElementById('part-description').value = '';
                document.getElementById('part-price').value = '';
                
                // Сброс статусов
                document.querySelectorAll('.status-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
            }
        });

        // Экспорт
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
                this.updatePartsList();
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
                
                // Обновляем информацию
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
            const part = getPartById(this.selectedPart.id);
            alert(`Изменения для "${part.name}" сохранены!\nСтатус: ${statuses[part.status].name}\nЦвет: ${part.color}\nЦена: $${part.price}`);
            
            console.log('Сохранено:', {
                part: part,
                appState: appState,
                timestamp: new Date().toISOString()
            });
        } else {
            alert('Сначала выберите деталь!');
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
        
        const exportFileDefaultName = `автомобиль-детали-${new Date().toISOString().split('T')[0]}.json`;
        
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
        
        alert('Данные экспортированы в JSON файл!');
    }
}

// Запуск приложения
const app = new CarEditorApp();
