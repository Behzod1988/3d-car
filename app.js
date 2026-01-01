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

// Все детали автомобиля (сгруппированы по видам)
const carParts = {
    // Вид СПЕРЕДИ
    front: [
        {
            id: "front-bumper",
            name: "Передний бампер",
            type: "path",
            color: "#34495e",
            status: "warning",
            description: "Передний бампер с парктрониками",
            price: 420,
            svgPath: "M100,200 Q200,150 300,200 Q200,250 100,200 Z",
            icon: "fas fa-grip-lines"
        },
        {
            id: "headlight-left",
            name: "Левая фара",
            type: "circle",
            color: "#f1c40f",
            status: "broken",
            description: "Левая фара (разбита)",
            price: 280,
            cx: 150,
            cy: 180,
            r: 25,
            icon: "fas fa-lightbulb"
        },
        {
            id: "headlight-right",
            name: "Правая фара",
            type: "circle",
            color: "#f1c40f",
            status: "working",
            description: "Правая фара",
            price: 280,
            cx: 250,
            cy: 180,
            r: 25,
            icon: "fas fa-lightbulb"
        },
        {
            id: "grill",
            name: "Решетка радиатора",
            type: "rect",
            color: "#2c3e50",
            status: "working",
            description: "Хромированная решетка",
            price: 180,
            x: 160,
            y: 150,
            width: 80,
            height: 30,
            rx: 5,
            icon: "fas fa-grip-horizontal"
        },
        {
            id: "hood-front",
            name: "Капот",
            type: "path",
            color: "#3498db",
            status: "working",
            description: "Передняя часть капота",
            price: 600,
            svgPath: "M120,120 Q200,100 280,120 L280,150 Q200,130 120,150 Z",
            icon: "fas fa-car-side"
        },
        {
            id: "fog-light-left",
            name: "Противотуманная фара левая",
            type: "circle",
            color: "#f1c40f",
            status: "working",
            description: "Противотуманная фара",
            price: 120,
            cx: 130,
            cy: 210,
            r: 15,
            icon: "fas fa-lightbulb"
        },
        {
            id: "fog-light-right",
            name: "Противотуманная фара правая",
            type: "circle",
            color: "#f1c40f",
            status: "working",
            description: "Противотуманная фара",
            price: 120,
            cx: 270,
            cy: 210,
            r: 15,
            icon: "fas fa-lightbulb"
        },
        {
            id: "logo",
            name: "Эмблема",
            type: "circle",
            color: "#e74c3c",
            status: "working",
            description: "Фирменная эмблема",
            price: 80,
            cx: 200,
            cy: 165,
            r: 12,
            icon: "fas fa-badge"
        }
    ],

    // Вид СЗАДИ
    rear: [
        {
            id: "rear-bumper",
            name: "Задний бампер",
            type: "path",
            color: "#34495e",
            status: "working",
            description: "Задний бампер с датчиками",
            price: 420,
            svgPath: "M100,200 Q200,150 300,200 Q200,250 100,200 Z",
            icon: "fas fa-grip-lines"
        },
        {
            id: "taillight-left",
            name: "Левый задний фонарь",
            type: "rect",
            color: "#e74c3c",
            status: "working",
            description: "Светодиодный фонарь",
            price: 180,
            x: 90,
            y: 150,
            width: 25,
            height: 50,
            rx: 5,
            icon: "fas fa-traffic-light"
        },
        {
            id: "taillight-right",
            name: "Правый задний фонарь",
            type: "rect",
            color: "#e74c3c",
            status: "working",
            description: "Светодиодный фонарь",
            price: 180,
            x: 285,
            y: 150,
            width: 25,
            height: 50,
            rx: 5,
            icon: "fas fa-traffic-light"
        },
        {
            id: "trunk-lid",
            name: "Крышка багажника",
            type: "path",
            color: "#2980b9",
            status: "working",
            description: "Крышка багажника с гидроусилителем",
            price: 720,
            svgPath: "M120,120 Q200,100 280,120 L280,150 Q200,130 120,150 Z",
            icon: "fas fa-suitcase"
        },
        {
            id: "rear-window",
            name: "Заднее стекло",
            type: "rect",
            color: "#aed6f1",
            status: "working",
            description: "Заднее стекло с обогревом",
            price: 380,
            x: 150,
            y: 130,
            width: 100,
            height: 40,
            rx: 5,
            icon: "fas fa-window-maximize"
        },
        {
            id: "exhaust-left",
            name: "Левый глушитель",
            type: "circle",
            color: "#7f8c8d",
            status: "warning",
            description: "Выхлопная труба (коррозия)",
            price: 220,
            cx: 130,
            cy: 220,
            r: 12,
            icon: "fas fa-smog"
        },
        {
            id: "exhaust-right",
            name: "Правый глушитель",
            type: "circle",
            color: "#7f8c8d",
            status: "working",
            description: "Выхлопная труба",
            price: 220,
            cx: 270,
            cy: 220,
            r: 12,
            icon: "fas fa-smog"
        },
        {
            id: "rear-logo",
            name: "Задняя эмблема",
            type: "circle",
            color: "#e74c3c",
            status: "working",
            description: "Фирменная эмблема",
            price: 80,
            cx: 200,
            cy: 170,
            r: 10,
            icon: "fas fa-badge"
        }
    ],

    // Вид СЛЕВА
    left: [
        {
            id: "left-door-front",
            name: "Передняя левая дверь",
            type: "rect",
            color: "#2980b9",
            status: "warning",
            description: "Дверь водителя (скрипит)",
            price: 650,
            x: 120,
            y: 100,
            width: 80,
            height: 120,
            rx: 5,
            icon: "fas fa-door-open"
        },
        {
            id: "left-door-rear",
            name: "Задняя левая дверь",
            type: "rect",
            color: "#2980b9",
            status: "working",
            description: "Задняя левая дверь",
            price: 650,
            x: 210,
            y: 100,
            width: 80,
            height: 120,
            rx: 5,
            icon: "fas fa-door-closed"
        },
        {
            id: "left-mirror",
            name: "Левое зеркало",
            type: "ellipse",
            color: "#7f8c8d",
            status: "working",
            description: "Электрорегулируемое зеркало",
            price: 150,
            cx: 100,
            cy: 130,
            rx: 10,
            ry: 15,
            icon: "fas fa-mirror"
        },
        {
            id: "left-wheel-front",
            name: "Левое переднее колесо",
            type: "circle",
            color: "#2c3e50",
            status: "working",
            description: "Диск 17\" с шиной",
            price: 320,
            cx: 160,
            cy: 250,
            r: 35,
            icon: "fas fa-tire"
        },
        {
            id: "left-wheel-rear",
            name: "Левое заднее колесо",
            type: "circle",
            color: "#2c3e50",
            status: "replaced",
            description: "Новый диск 17\"",
            price: 320,
            cx: 250,
            cy: 250,
            r: 35,
            icon: "fas fa-tire"
        },
        {
            id: "left-window-front",
            name: "Левое переднее стекло",
            type: "rect",
            color: "#aed6f1",
            status: "working",
            description: "Стекло с тонировкой",
            price: 220,
            x: 125,
            y: 105,
            width: 70,
            height: 50,
            rx: 3,
            icon: "fas fa-window-maximize"
        },
        {
            id: "left-window-rear",
            name: "Левое заднее стекло",
            type: "rect",
            color: "#aed6f1",
            status: "working",
            description: "Стекло с тонировкой",
            price: 220,
            x: 215,
            y: 105,
            width: 70,
            height: 50,
            rx: 3,
            icon: "fas fa-window-maximize"
        },
        {
            id: "left-handle-front",
            name: "Ручка передней двери",
            type: "rect",
            color: "#7f8c8d",
            status: "working",
            description: "Ручка с кнопкой",
            price: 75,
            x: 195,
            y: 150,
            width: 20,
            height: 5,
            rx: 2,
            icon: "fas fa-hand-paper"
        },
        {
            id: "left-handle-rear",
            name: "Ручка задней двери",
            type: "rect",
            color: "#7f8c8d",
            status: "working",
            description: "Ручка с кнопкой",
            price: 75,
            x: 285,
            y: 150,
            width: 20,
            height: 5,
            rx: 2,
            icon: "fas fa-hand-paper"
        }
    ],

    // Вид СПРАВА
    right: [
        {
            id: "right-door-front",
            name: "Передняя правая дверь",
            type: "rect",
            color: "#2980b9",
            status: "working",
            description: "Дверь пассажира",
            price: 650,
            x: 120,
            y: 100,
            width: 80,
            height: 120,
            rx: 5,
            icon: "fas fa-door-closed"
        },
        {
            id: "right-door-rear",
            name: "Задняя правая дверь",
            type: "rect",
            color: "#2980b9",
            status: "working",
            description: "Задняя правая дверь",
            price: 650,
            x: 210,
            y: 100,
            width: 80,
            height: 120,
            rx: 5,
            icon: "fas fa-door-closed"
        },
        {
            id: "right-mirror",
            name: "Правое зеркало",
            type: "ellipse",
            color: "#7f8c8d",
            status: "warning",
            description: "Зеркало (трещина)",
            price: 150,
            cx: 300,
            cy: 130,
            rx: 10,
            ry: 15,
            icon: "fas fa-mirror"
        },
        {
            id: "right-wheel-front",
            name: "Правое переднее колесо",
            type: "circle",
            color: "#2c3e50",
            status: "working",
            description: "Диск 17\" с шиной",
            price: 320,
            cx: 160,
            cy: 250,
            r: 35,
            icon: "fas fa-tire"
        },
        {
            id: "right-wheel-rear",
            name: "Правое заднее колесо",
            type: "circle",
            color: "#2c3e50",
            status: "working",
            description: "Диск 17\" с шиной",
            price: 320,
            cx: 250,
            cy: 250,
            r: 35,
            icon: "fas fa-tire"
        },
        {
            id: "right-window-front",
            name: "Правое переднее стекло",
            type: "rect",
            color: "#aed6f1",
            status: "working",
            description: "Стекло с тонировкой",
            price: 220,
            x: 125,
            y: 105,
            width: 70,
            height: 50,
            rx: 3,
            icon: "fas fa-window-maximize"
        },
        {
            id: "right-window-rear",
            name: "Правое заднее стекло",
            type: "rect",
            color: "#aed6f1",
            status: "working",
            description: "Стекло с тонировкой",
            price: 220,
            x: 215,
            y: 105,
            width: 70,
            height: 50,
            rx: 3,
            icon: "fas fa-window-maximize"
        },
        {
            id: "right-handle-front",
            name: "Ручка передней двери",
            type: "rect",
            color: "#7f8c8d",
            status: "working",
            description: "Ручка с кнопкой",
            price: 75,
            x: 105,
            y: 150,
            width: 20,
            height: 5,
            rx: 2,
            icon: "fas fa-hand-paper"
        },
        {
            id: "right-handle-rear",
            name: "Ручка задней двери",
            type: "rect",
            color: "#7f8c8d",
            status: "working",
            description: "Ручка с кнопкой",
            price: 75,
            x: 195,
            y: 150,
            width: 20,
            height: 5,
            rx: 2,
            icon: "fas fa-hand-paper"
        }
    ],

    // Вид СВЕРХУ
    top: [
        {
            id: "roof",
            name: "Крыша",
            type: "rect",
            color: "#1f618d",
            status: "working",
            description: "Панорамная крыша",
            price: 1200,
            x: 100,
            y: 100,
            width: 200,
            height: 80,
            rx: 10,
            icon: "fas fa-sun"
        },
        {
            id: "sunroof",
            name: "Люк",
            type: "rect",
            color: "#aed6f1",
            status: "broken",
            description: "Электрический люк (не закрывается)",
            price: 450,
            x: 150,
            y: 120,
            width: 100,
            height: 40,
            rx: 5,
            icon: "fas fa-window-maximize"
        },
        {
            id: "windshield-top",
            name: "Лобовое стекло",
            type: "path",
            color: "#87CEEB",
            status: "working",
            description: "Лобовое стекло",
            price: 450,
            svgPath: "M100,100 Q200,80 300,100 L300,120 Q200,100 100,120 Z",
            icon: "fas fa-wind"
        },
        {
            id: "rear-window-top",
            name: "Заднее стекло",
            type: "path",
            color: "#87CEEB",
            status: "working",
            description: "Заднее стекло",
            price: 380,
            svgPath: "M100,180 Q200,200 300,180 L300,160 Q200,180 100,160 Z",
            icon: "fas fa-wind"
        },
        {
            id: "left-door-top",
            name: "Левая сторона",
            type: "rect",
            color: "#3498db",
            status: "working",
            description: "Левая сторона кузова",
            price: 850,
            x: 50,
            y: 120,
            width: 40,
            height: 40,
            rx: 5,
            icon: "fas fa-car-side"
        },
        {
            id: "right-door-top",
            name: "Правая сторона",
            type: "rect",
            color: "#3498db",
            status: "working",
            description: "Правая сторона кузова",
            price: 850,
            x: 310,
            y: 120,
            width: 40,
            height: 40,
            rx: 5,
            icon: "fas fa-car-side"
        },
        {
            id: "hood-top",
            name: "Капот",
            type: "path",
            color: "#2980b9",
            status: "warning",
            description: "Капот (вмятины)",
            price: 600,
            svgPath: "M100,100 Q150,90 200,100 L200,120 Q150,110 100,120 Z",
            icon: "fas fa-car-side"
        },
        {
            id: "trunk-top",
            name: "Багажник",
            type: "path",
            color: "#2980b9",
            status: "working",
            description: "Крышка багажника",
            price: 550,
            svgPath: "M200,100 Q250,90 300,100 L300,120 Q250,110 200,120 Z",
            icon: "fas fa-suitcase"
        },
        {
            id: "antenna",
            name: "Антенна",
            type: "rect",
            color: "#7f8c8d",
            status: "working",
            description: "Спутниковая антенна",
            price: 85,
            x: 250,
            y: 95,
            width: 5,
            height: 15,
            rx: 2,
            icon: "fas fa-satellite-dish"
        }
    ]
};

// Состояние приложения
let appState = {
    selectedPartId: null,
    selectedView: 'front',
    parts: {},
    version: "2.0.0",
    lastModified: new Date().toISOString()
};

// Инициализация данных
function initializeAppState() {
    // Копируем все части по видам
    appState.parts = {};
    for (const view in carParts) {
        appState.parts[view] = carParts[view].map(part => ({ ...part }));
    }
}

// Получить деталь по ID и виду
function getPartById(view, partId) {
    return appState.parts[view]?.find(part => part.id === partId);
}

// Обновить деталь
function updatePart(view, partId, updates) {
    const partsArray = appState.parts[view];
    if (!partsArray) return false;
    
    const index = partsArray.findIndex(part => part.id === partId);
    if (index !== -1) {
        partsArray[index] = { ...partsArray[index], ...updates };
        appState.lastModified = new Date().toISOString();
        
        // Также обновляем деталь во всех других видах, если она существует
        for (const otherView in appState.parts) {
            if (otherView !== view) {
                const otherIndex = appState.parts[otherView]?.findIndex(p => p.id === partId);
                if (otherIndex !== -1) {
                    appState.parts[otherView][otherIndex] = { 
                        ...appState.parts[otherView][otherIndex], 
                        ...updates 
                    };
                }
            }
        }
        
        return true;
    }
    return false;
}

// Сбросить все изменения
function resetToDefault() {
    initializeAppState();
    appState.selectedPartId = null;
    appState.lastModified = new Date().toISOString();
}

// Обновить статистику
function updateStatistics() {
    let total = 0;
    let working = 0;
    let warning = 0;
    let broken = 0;
    let replaced = 0;
    
    // Собираем статистику по всем видам
    for (const view in appState.parts) {
        for (const part of appState.parts[view]) {
            total++;
            switch (part.status) {
                case 'working': working++; break;
                case 'warning': warning++; break;
                case 'broken': broken++; break;
                case 'replaced': replaced++; break;
            }
        }
    }
    
    return { total, working, warning, broken, replaced };
}

// Основной класс приложения
class CarEditorApp {
    constructor() {
        this.selectedPart = null;
        this.selectedView = 'front';
        this.init();
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            initializeAppState();
            this.renderAllViews();
            this.setupEventListeners();
            this.updatePartsList();
            this.updateStatistics();
            this.setActiveView('front');
        });
    }

    // Отрисовка всех видов
    renderAllViews() {
        this.renderView('front', 'car-front');
        this.renderView('rear', 'car-rear');
        this.renderView('left', 'car-left');
        this.renderView('right', 'car-right');
        this.renderView('top', 'car-top');
    }

    // Отрисовка одного вида
    renderView(viewType, svgId) {
        const svg = document.getElementById(svgId);
        if (!svg) return;
        
        svg.innerHTML = '';
        
        // Рисуем контур автомобиля для этого вида
        this.drawCarOutline(svg, viewType);
        
        // Рисуем детали
        const parts = appState.parts[viewType] || [];
        parts.forEach(part => {
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
                element.setAttribute('id', `part-${viewType}-${part.id}`);
                element.setAttribute('class', 'car-part');
                element.setAttribute('fill', part.color);
                element.setAttribute('data-id', part.id);
                element.setAttribute('data-view', viewType);
                element.setAttribute('data-status', part.status);
                
                // Обводка для путей
                if (part.type === 'path') {
                    element.setAttribute('stroke', '#2c3e50');
                    element.setAttribute('stroke-width', '1');
                }
                
                // Стиль статуса
                this.applyStatusStyle(element, part.status);
                
                // Обработчик клика
                element.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.selectPart(viewType, part.id);
                });

                svg.appendChild(element);
            }
        });
    }

    // Рисуем контур автомобиля для каждого вида
    drawCarOutline(svg, viewType) {
        let outline;
        
        switch (viewType) {
            case 'front':
                outline = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                outline.setAttribute('d', 'M80,120 Q200,50 320,120 L320,240 Q200,190 80,240 Z');
                outline.setAttribute('fill', '#ecf0f1');
                outline.setAttribute('stroke', '#bdc3c7');
                outline.setAttribute('stroke-width', '2');
                break;
                
            case 'rear':
                outline = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                outline.setAttribute('d', 'M80,120 Q200,50 320,120 L320,240 Q200,190 80,240 Z');
                outline.setAttribute('fill', '#ecf0f1');
                outline.setAttribute('stroke', '#bdc3c7');
                outline.setAttribute('stroke-width', '2');
                break;
                
            case 'left':
            case 'right':
                outline = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                outline.setAttribute('d', 'M50,100 Q150,80 350,80 Q380,100 350,200 Q150,200 50,180 Z');
                outline.setAttribute('fill', '#ecf0f1');
                outline.setAttribute('stroke', '#bdc3c7');
                outline.setAttribute('stroke-width', '2');
                break;
                
            case 'top':
                outline = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                outline.setAttribute('d', 'M50,100 Q200,80 350,100 L350,180 Q200,200 50,180 Z');
                outline.setAttribute('fill', '#ecf0f1');
                outline.setAttribute('stroke', '#bdc3c7');
                outline.setAttribute('stroke-width', '2');
                break;
        }
        
        if (outline) svg.appendChild(outline);
    }

    // Применение стиля статуса
    applyStatusStyle(element, status) {
        ['working', 'warning', 'broken', 'replaced'].forEach(cls => {
            element.classList.remove(cls);
        });
        
        element.classList.add(status);
        
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
    selectPart(viewType, partId) {
        // Снимаем выделение со всех деталей
        document.querySelectorAll('.car-part').forEach(el => {
            el.classList.remove('selected');
        });
        
        // Снимаем выделение со списка
        document.querySelectorAll('.part-item').forEach(el => {
            el.classList.remove('selected');
        });

        // Выделяем выбранную деталь
        const partElement = document.querySelector(`[data-view="${viewType}"][data-id="${partId}"]`);
        const part = getPartById(viewType, partId);
        
        if (partElement && part) {
            partElement.classList.add('selected');
            this.selectedPart = part;
            this.selectedView = viewType;
            appState.selectedPartId = partId;

            // Переключаем на соответствующий вид
            this.setActiveView(viewType);
            
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
                <i class="fas ${part.icon} fa-2x" style="color: ${part.color}; margin-bottom: 10px;"></i>
                <h4 style="margin: 10px 0; color: #2c3e50;">${part.name}</h4>
                <p>Статус: <strong>${statuses[part.status].name}</strong></p>
                <p>Вид: <strong>${this.getViewName(viewType)}</strong></p>
                ${part.price ? `<p>Цена: <strong>$${part.price}</strong></p>` : ''}
            `;
        }
    }

    // Получить название вида
    getViewName(viewType) {
        const names = {
            'front': 'Спереди',
            'rear': 'Сзади', 
            'left': 'Слева',
            'right': 'Справа',
            'top': 'Сверху'
        };
        return names[viewType] || viewType;
    }

    // Установка активного вида
    setActiveView(viewType) {
        // Обновляем кнопки
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.view === viewType) {
                btn.classList.add('active');
            }
        });
        
        // Обновляем блоки с автомобилями
        document.querySelectorAll('.car-view').forEach(view => {
            view.classList.remove('active');
            if (view.dataset.view === viewType) {
                view.classList.add('active');
            }
        });
        
        this.selectedView = viewType;
    }

    // Обновление панели управления
    updateControlPanel(part) {
        document.getElementById('part-name').value = part.name;
        document.getElementById('part-color').value = part.color;
        document.getElementById('part-description').value = part.description || '';
        document.getElementById('part-price').value = part.price || '';

        // Кнопки статусов
        document.querySelectorAll('.status-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.status === part.status) {
                btn.classList.add('active');
            }
        });

        // Пресеты цветов
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
        // Кнопки выбора вида
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const viewType = e.currentTarget.dataset.view;
                this.setActiveView(viewType);
            });
        });

        // Изменение цвета
        document.getElementById('part-color').addEventListener('input', (e) => {
            this.updatePartColor(e.target.value);
        });

        // Пресеты цветов
        document.querySelectorAll('.color-preset').forEach(preset => {
            preset.addEventListener('click', (e) => {
                const color = e.currentTarget.dataset.color;
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
                updatePart(this.selectedView, this.selectedPart.id, { description: e.target.value });
            }
        });

        // Цена
        document.getElementById('part-price').addEventListener('input', (e) => {
            if (this.selectedPart) {
                const price = e.target.value ? parseInt(e.target.value) : 0;
                updatePart(this.selectedView, this.selectedPart.id, { price: price });
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
                this.renderAllViews();
                this.updatePartsList();
                this.updateStatistics();
                this.selectedPart = null;
                this.setActiveView('front');
                
                document.getElementById('selected-part-info').innerHTML = `
                    <i class="fas fa-mouse-pointer fa-2x" style="color: #3498db; margin-bottom: 10px;"></i>
                    <p>Выберите деталь автомобиля</p>
                    <p class="view-note" style="margin-top: 10px;">Кликните на любую деталь в одном из видов</p>
                `;
                
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
            // Обновляем во всех SVG, где есть эта деталь
            document.querySelectorAll(`[data-id="${this.selectedPart.id}"]`).forEach(el => {
                el.setAttribute('fill', color);
            });
            
            updatePart(this.selectedView, this.selectedPart.id, { color: color });
            this.updatePartsList();
        }
    }

    // Обновление статуса детали
    updatePartStatus(status) {
        if (this.selectedPart) {
            // Обновляем во всех SVG, где есть эта деталь
            document.querySelectorAll(`[data-id="${this.selectedPart.id}"]`).forEach(el => {
                this.applyStatusStyle(el, status);
                el.setAttribute('data-status', status);
            });
            
            updatePart(this.selectedView, this.selectedPart.id, { status: status });
            
            // Обновляем информацию
            const part = getPartById(this.selectedView, this.selectedPart.id);
            document.getElementById('selected-part-info').innerHTML = `
                <i class="fas ${part.icon} fa-2x" style="color: ${part.color}; margin-bottom: 10px;"></i>
                <h4 style="margin: 10px 0; color: #2c3e50;">${part.name}</h4>
                <p>Статус: <strong>${statuses[status].name}</strong></p>
                <p>Вид: <strong>${this.getViewName(this.selectedView)}</strong></p>
                ${part.price ? `<p>Цена: <strong>$${part.price}</strong></p>` : ''}
            `;
            
            this.updatePartsList();
            this.updateStatistics();
        }
    }

    // Обновление списка деталей
    updatePartsList() {
        const partsList = document.getElementById('parts-list');
        partsList.innerHTML = '';

        // Собираем все уникальные детали из всех видов
        const allParts = [];
        const seenIds = new Set();
        
        for (const view in appState.parts) {
            for (const part of appState.parts[view]) {
                if (!seenIds.has(part.id)) {
                    seenIds.add(part.id);
                    allParts.push({
                        ...part,
                        view: view
                    });
                }
            }
        }

        // Сортируем по названию
        allParts.sort((a, b) => a.name.localeCompare(b.name));

        // Рендерим список
        allParts.forEach(item => {
            const status = statuses[item.status];
            const isSelected = item.id === appState.selectedPartId;
            const listItem = document.createElement('div');
            listItem.className = `part-item ${isSelected ? 'selected' : ''}`;
            listItem.dataset.id = item.id;
            listItem.dataset.view = item.view;
            
            listItem.innerHTML = `
                <div class="part-icon" style="background-color: ${item.color};">
                    <i class="${item.icon}"></i>
                </div>
                <div class="part-info">
                    <h4>${item.name}</h4>
                    <div style="display: flex; align-items: center; gap: 10px; margin-top: 5px;">
                        <div class="part-status" style="background-color: ${status.color}20; color: ${status.color};">
                            <i class="${status.icon}"></i> ${status.name}
                        </div>
                        <div style="font-size: 0.8rem; color: #7f8c8d; background: #f8f9fa; padding: 2px 8px; border-radius: 10px;">
                            ${this.getViewName(item.view)}
                        </div>
                    </div>
                    ${item.price ? `<div class="part-price" style="margin-top: 5px; color: #27ae60; font-weight: bold;">$${item.price}</div>` : ''}
                </div>
            `;
            
            listItem.addEventListener('click', () => {
                this.selectPart(item.view, item.id);
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
            const part = getPartById(this.selectedView, this.selectedPart.id);
            alert(`Изменения для "${part.name}" сохранены!\n• Статус: ${statuses[part.status].name}\n• Цвет: ${part.color}\n• Цена: $${part.price}`);
            
            console.log('Сохранено:', {
                part: part,
                view: this.selectedView,
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
        
        const exportFileDefaultName = `автомобиль-5-видов-${new Date().toISOString().split('T')[0]}.json`;
        
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
        
        alert('Данные экспортированы в JSON файл!');
    }
}

// Запуск приложения
const app = new CarEditorApp();
