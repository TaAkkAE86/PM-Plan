// Enhanced Translations with more features
const translations = {
    th: {
        pageTitle: "Ford PM PMHV Plan Dashboard",
        today: "วันนี้",
        week: "สัปดาห์",
        month: "เดือน",
        language: "ภาษา:",
        noSchedule: "🎉 ไม่มีตารางงาน PM วันนี้",
        enjoyDay: "ขอให้มีความสุขกับวันหยุด!",
        time: "เวลา:",
        team: "ทีม:",
        coach: "Process Coach:",
        status: "สถานะ:",
        completed: "เสร็จสิ้น",
        pending: "รอดำเนินการ",
        done: "เสร็จสิ้น",
        close: "ปิด",
        notSpecified: "ไม่ระบุ",
        noScheduleDay: "ไม่มีงาน",
        resetAll: "รีเซ็ททั้งหมด",
        confirmReset: "ต้องการรีเซ็ทสถานะทั้งหมดหรือไม่?",
        online: "เชื่อมต่อแล้ว",
        offline: "ออฟไลน์",
        // Enhanced translations
        totalTasks: "งานทั้งหมด",
        completedTasks: "เสร็จแล้ว",
        pendingTasks: "รอดำเนินการ",
        efficiency: "ประสิทธิภาพ",
        export: "ส่งออกข้อมูล",
        settings: "การตั้งค่า",
        darkMode: "โหมดมืด",
        fullscreen: "เต็มจอ",
        search: "ค้นหา",
        filter: "กรอง",
        all: "ทั้งหมด",
        byTeam: "ตามทีม",
        addNote: "เพิ่มหมายเหตุ",
        saveNote: "บันทึกหมายเหตุ",
        cancel: "ยกเลิก",
        enableNotifications: "เปิดการแจ้งเตือน",
        autoRefresh: "รีเฟรชอัตโนมัติ (วินาที)",
        timeFormat: "รูปแบบเวลา",
        taskCompleted: "งานเสร็จสิ้น",
        taskCompletedDesc: "งาน {vehicle} ได้เสร็จสิ้นแล้ว",
        allTasksCompleted: "งานทั้งหมดเสร็จสิ้น",
        allTasksCompletedDesc: "ยินดีด้วย! งานทั้งหมดของวันนี้เสร็จสิ้นแล้ว",
        dataExported: "ส่งออกข้อมูลแล้ว",
        dataExportedDesc: "ข้อมูลได้ถูกส่งออกเรียบร้อยแล้ว",
        connectionRestored: "เชื่อมต่อกลับคืนแล้ว",
        connectionLost: "ขาดการเชื่อมต่อ",
        markComplete: "นำส่งแล้ว",
        loading: "กำลังโหลด...",
        // Days and months
        sun: "อา", mon: "จ", tue: "อ", wed: "พ", thu: "พฤ", fri: "ศ", sat: "ส",
        sunday: "อาทิตย์", monday: "จันทร์", tuesday: "อังคาร", wednesday: "พุธ",
        thursday: "พฤหัสบดี", friday: "ศุกร์", saturday: "เสาร์",
        january: "มกราคม", february: "กุมภาพันธ์", march: "มีนาคม", april: "เมษายน",
        may: "พฤษภาคม", june: "มิถุนายน", july: "กรกฎาคม", august: "สิงหาคม",
        september: "กันยายน", october: "ตุลาคม", november: "พฤศจิกายน", december: "ธันวาคม"
    },
    en: {
        pageTitle: "Ford PM Schedule Dashboard",
        today: "Today", week: "Week", month: "Month", language: "Language:",
        noSchedule: "🎉 No PM Schedule Today", enjoyDay: "Enjoy your day off!",
        time: "Time:", team: "Team:", coach: "Process Coach:", status: "Status:",
        completed: "Completed", pending: "Pending", done: "Done", close: "Close",
        notSpecified: "Not specified", noScheduleDay: "No Schedule",
        resetAll: "Reset All", confirmReset: "Do you want to reset all status?",
        online: "Online", offline: "Offline",
        // Enhanced translations
        totalTasks: "Total Tasks", completedTasks: "Completed", pendingTasks: "Pending",
        efficiency: "Efficiency", export: "Export Data", settings: "Settings",
        darkMode: "Dark Mode", fullscreen: "Fullscreen", search: "Search",
        filter: "Filter", all: "All", byTeam: "By Team", addNote: "Add Note",
        saveNote: "Save Note", cancel: "Cancel", enableNotifications: "Enable Notifications",
        autoRefresh: "Auto Refresh (seconds)", timeFormat: "Time Format",
        taskCompleted: "Task Completed", taskCompletedDesc: "Task {vehicle} has been completed",
        allTasksCompleted: "All Tasks Completed", allTasksCompletedDesc: "Congratulations! All tasks for today are completed",
        dataExported: "Data Exported", dataExportedDesc: "Data has been exported successfully",
        connectionRestored: "Connection Restored", connectionLost: "Connection Lost",
        markComplete: "Mark Complete", loading: "Loading...",
        // Days and months
        sun: "Sun", mon: "Mon", tue: "Tue", wed: "Wed", thu: "Thu", fri: "Fri", sat: "Sat",
        sunday: "Sunday", monday: "Monday", tuesday: "Tuesday", wednesday: "Wednesday",
        thursday: "Thursday", friday: "Friday", saturday: "Saturday",
        january: "January", february: "February", march: "March", april: "April",
        may: "May", june: "June", july: "July", august: "August",
        september: "September", october: "October", november: "November", december: "December"
    }
};

// Toast Notification System - Move to top for availability
function showToast(title, message, type = 'info', duration = 5000) {
    const container = document.getElementById('toastContainer');
    if (!container) {
        console.warn('Toast container not found');
        return;
    }
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icons = {
        success: '✅',
        error: '❌',
        warning: '⚠️',
        info: 'ℹ️'
    };
    
    toast.innerHTML = `
        <div class="toast-icon">${icons[type] || icons.info}</div>
        <div class="toast-content">
            <div class="toast-title">${title}</div>
            <div class="toast-message">${message}</div>
        </div>
        <div class="toast-close" onclick="this.parentElement.remove()">×</div>
    `;
    
    container.appendChild(toast);
    
    // Auto remove
    setTimeout(() => {
        if (toast.parentElement) {
            toast.style.transform = 'translateX(400px)';
            toast.style.opacity = '0';
            setTimeout(() => {
                if (toast.parentElement) {
                    toast.remove();
                }
            }, 300);
        }
    }, duration);
}

// Enhanced Firebase Manager Class
class FirebaseManager {
    constructor() {
        this.isAvailable = false;
        this.retryCount = 0;
        this.maxRetries = 3;
        this.retryDelay = 1000;
        
        try {
            if (typeof firebase !== 'undefined' && firebase.firestore) {
                this.db = firebase.firestore();
                this.vehicleStatusRef = this.db.collection('vehicleStatus');
                this.notesRef = this.db.collection('vehicleNotes');
                this.analyticsRef = this.db.collection('analytics');
                this.isAvailable = true;
                console.log('Firebase Manager initialized successfully');
                
                // Setup offline persistence
                this.db.enablePersistence({ synchronizeTabs: true })
                    .catch(err => console.warn('Offline persistence failed:', err));
                    
            } else {
                throw new Error('Firebase not available');
            }
        } catch (error) {
            console.warn('Firebase initialization failed:', error);
            this.isAvailable = false;
        }
    }

    async withRetry(operation) {
        for (let i = 0; i <= this.maxRetries; i++) {
            try {
                return await operation();
            } catch (error) {
                if (i === this.maxRetries) throw error;
                await new Promise(resolve => setTimeout(resolve, this.retryDelay * Math.pow(2, i)));
            }
        }
    }

    async saveVehicleStatus(vehicleNumber, status, note = '') {
        if (!this.isAvailable) throw new Error('Firebase not available');
        
        return this.withRetry(async () => {
            const data = {
                status: status,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                vehicleNumber: vehicleNumber,
                completedBy: 'current_user',
                note: note
            };
            
            await this.vehicleStatusRef.doc(vehicleNumber).set(data);
            
            if (status === 'completed') {
                await this.saveAnalytics(vehicleNumber, 'task_completed');
            }
            
            console.log('Status saved successfully for:', vehicleNumber);
        });
    }

    async saveVehicleNote(vehicleNumber, note) {
        if (!this.isAvailable) throw new Error('Firebase not available');
        
        return this.withRetry(async () => {
            await this.notesRef.add({
                vehicleNumber: vehicleNumber,
                note: note,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                createdBy: 'current_user'
            });
            console.log('Note saved for:', vehicleNumber);
        });
    }

    async saveAnalytics(vehicleNumber, action) {
        if (!this.isAvailable) return;
        
        try {
            await this.analyticsRef.add({
                vehicleNumber: vehicleNumber,
                action: action,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                date: new Date().toISOString().split('T')[0],
                user: 'current_user'
            });
        } catch (error) {
            console.warn('Analytics save failed:', error);
        }
    }

    async loadAllVehicleStatus() {
        if (!this.isAvailable) return new Set();
        
        return this.withRetry(async () => {
            const snapshot = await this.vehicleStatusRef.where('status', '==', 'completed').get();
            const completedVehicles = new Set();
            
            snapshot.forEach(doc => {
                completedVehicles.add(doc.data().vehicleNumber);
            });
            
            console.log('Loaded completed vehicles:', completedVehicles.size);
            return completedVehicles;
        });
    }

    listenToStatusChanges(callback) {
        if (!this.isAvailable) return null;
        
        return this.vehicleStatusRef.where('status', '==', 'completed')
            .onSnapshot((snapshot) => {
                const completedVehicles = new Set();
                snapshot.forEach(doc => {
                    completedVehicles.add(doc.data().vehicleNumber);
                });
                callback(completedVehicles);
            }, (error) => {
                console.error('Error listening to changes:', error);
                showToast('Connection Error', 'Lost connection to server', 'error');
            });
    }

    async resetVehicleStatus(vehicleNumber) {
        if (!this.isAvailable) throw new Error('Firebase not available');
        
        return this.withRetry(async () => {
            await this.vehicleStatusRef.doc(vehicleNumber).delete();
            await this.saveAnalytics(vehicleNumber, 'task_reset');
            console.log('Reset status for:', vehicleNumber);
        });
    }

    async resetAllStatus() {
        if (!this.isAvailable) throw new Error('Firebase not available');
        
        return this.withRetry(async () => {
            const snapshot = await this.vehicleStatusRef.get();
            const batch = this.db.batch();
            
            snapshot.docs.forEach(doc => {
                batch.delete(doc.ref);
            });
            
            await batch.commit();
            await this.saveAnalytics('all', 'all_tasks_reset');
            console.log('All status reset successfully');
        });
    }

    async getAnalytics(dateRange = 7) {
        if (!this.isAvailable) return null;
        
        try {
            const endDate = new Date();
            const startDate = new Date();
            startDate.setDate(startDate.getDate() - dateRange);
            
            const snapshot = await this.analyticsRef
                .where('timestamp', '>=', startDate)
                .where('timestamp', '<=', endDate)
                .get();
                
            const analytics = [];
            snapshot.forEach(doc => {
                analytics.push(doc.data());
            });
            
            return analytics;
        } catch (error) {
            console.warn('Analytics load failed:', error);
            return null;
        }
    }
}

// Enhanced Notification Manager
class NotificationManager {
    constructor() {
        this.permission = 'Notification' in window ? Notification.permission : 'denied';
        this.enabled = localStorage.getItem('notificationsEnabled') === 'true';
    }

    async requestPermission() {
        if ('Notification' in window) {
            this.permission = await Notification.requestPermission();
            return this.permission === 'granted';
        }
        return false;
    }

    async show(title, options = {}) {
        if (!this.enabled || this.permission !== 'granted' || !('Notification' in window)) return;

        try {
            const notification = new Notification(title, {
                icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTIiIGZpbGw9IiMwMDMzODciLz4KPGV4dCB4PSIzMiIgeT0iNDAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZm9udC13ZWlnaHQ9IjkwMCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkY8L3RleHQ+Cjwvc3ZnPgo=',
                badge: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTIiIGZpbGw9IiMwMDMzODciLz4KPGV4dCB4PSIzMiIgeT0iNDAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZm9udC13ZWlnaHQ9IjkwMCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkY8L3RleHQ+Cjwvc3ZnPgo=',
                ...options
            });

            setTimeout(() => {
                try {
                    notification.close();
                } catch (e) {
                    console.warn('Could not close notification:', e);
                }
            }, 5000);
            
            return notification;
        } catch (error) {
            console.warn('Notification failed:', error);
        }
    }

    setEnabled(enabled) {
        this.enabled = enabled;
        localStorage.setItem('notificationsEnabled', enabled.toString());
    }
}

// Enhanced Global Variables
let completedVehicles = new Set();
let vehicleNotes = new Map();
let currentSelectedVehicle = null;
let currentView = 'today';
let currentLanguage = localStorage.getItem('language') || 'th'; // Fixed: Load from localStorage
let currentMonth = new Date(2025, 7);
let currentFilter = 'all';
let searchQuery = '';
let firebaseManager = null;
let notificationManager = null;
let unsubscribe = null;
let autoRefreshInterval = null;
let isDarkMode = localStorage.getItem('darkMode') === 'true';
let settings = {
    autoRefresh: parseInt(localStorage.getItem('autoRefresh')) || 30,
    timeFormat: localStorage.getItem('timeFormat') || '12',
    notifications: localStorage.getItem('notificationsEnabled') === 'true'
};

// Enhanced Loading System
function showLoadingOverlay(show) {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) {
        if (show) {
            overlay.classList.add('show');
        } else {
            setTimeout(() => overlay.classList.remove('show'), 500);
        }
    }
}

// Enhanced Connection Status
function updateConnectionStatus(isOnline) {
    const statusElement = document.getElementById('connectionStatus');
    const t = translations[currentLanguage];
    
    if (statusElement) {
        const statusIcon = statusElement.querySelector('.status-icon');
        const statusText = statusElement.querySelector('.status-text');
        
        if (isOnline) {
            statusElement.className = 'connection-status online';
            if (statusIcon) statusIcon.textContent = '●';
            if (statusText) statusText.textContent = t.online;
        } else {
            statusElement.className = 'connection-status offline';
            if (statusIcon) statusIcon.textContent = '●';
            if (statusText) statusText.textContent = t.offline;
        }
    }
}

// Enhanced Statistics System
function updateStatistics() {
    const t = translations[currentLanguage];
    
    // Get today's schedule for statistics
    const todaySchedule = getTodayScheduleData();
    const totalTasks = todaySchedule.length;
    const completed = Math.min(completedVehicles.size, totalTasks);
    const pending = totalTasks - completed;
    const efficiency = totalTasks > 0 ? Math.round((completed / totalTasks) * 100) : 0;
    
    // Update statistics display with safe element checking
    const totalTasksEl = document.getElementById('totalTasks');
    const completedTasksEl = document.getElementById('completedTasks');
    const pendingTasksEl = document.getElementById('pendingTasks');
    const efficiencyEl = document.getElementById('efficiency');
    
    if (totalTasksEl) animateNumber(totalTasksEl, totalTasks);
    if (completedTasksEl) animateNumber(completedTasksEl, completed);
    if (pendingTasksEl) animateNumber(pendingTasksEl, pending);
    if (efficiencyEl) animateNumber(efficiencyEl, efficiency, '%');
    
    // Update labels
    const totalTasksLabel = document.getElementById('totalTasksLabel');
    const completedTasksLabel = document.getElementById('completedTasksLabel');
    const pendingTasksLabel = document.getElementById('pendingTasksLabel');
    const efficiencyLabel = document.getElementById('efficiencyLabel');
    
    if (totalTasksLabel) totalTasksLabel.textContent = t.totalTasks;
    if (completedTasksLabel) completedTasksLabel.textContent = t.completedTasks;
    if (pendingTasksLabel) pendingTasksLabel.textContent = t.pendingTasks;
    if (efficiencyLabel) efficiencyLabel.textContent = t.efficiency;
    
    // Update progress bar
    updateProgressBar(efficiency);
    
    // Check if all tasks completed
    if (totalTasks > 0 && completed === totalTasks && notificationManager) {
        notificationManager.show(t.allTasksCompleted, {
            body: t.allTasksCompletedDesc,
            tag: 'all-completed'
        });
        showToast(t.allTasksCompleted, t.allTasksCompletedDesc, 'success');
    }
}

function getTodayScheduleData() {
    // Check if scheduleData is available
    if (typeof scheduleData === 'undefined') {
        console.warn('scheduleData not available');
        return [];
    }
    
    const todaySchedule = scheduleData.find(day => Object.keys(day).length > 2) || {};
    const timeSlots = Object.keys(todaySchedule).filter(key => 
        key !== 'Date' && key !== 'Day'
    );
    return timeSlots.map(slot => todaySchedule[slot]);
}

function animateNumber(element, target, suffix = '') {
    if (!element) return;
    
    const current = parseInt(element.textContent) || 0;
    if (current === target) return;
    
    const increment = target > current ? 1 : -1;
    const step = Math.max(1, Math.abs(target - current) / 20);
    
    let currentNumber = current;
    const timer = setInterval(() => {
        currentNumber += increment * step;
        if ((increment > 0 && currentNumber >= target) || 
            (increment < 0 && currentNumber <= target)) {
            currentNumber = target;
            clearInterval(timer);
        }
        element.textContent = Math.round(currentNumber) + suffix;
    }, 50);
}

function updateProgressBar(percentage) {
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    if (progressFill) {
        progressFill.style.width = percentage + '%';
    }
    
    if (progressText) {
        const t = translations[currentLanguage];
        progressText.textContent = `${percentage}% ${t.completed}`;
    }
}

// Enhanced LocalStorage functions
function saveCompletedVehicles() {
    try {
        localStorage.setItem('completedVehicles', JSON.stringify([...completedVehicles]));
        localStorage.setItem('lastSaved', new Date().toISOString());
    } catch (error) {
        console.error('Failed to save to localStorage:', error);
    }
}

function loadCompletedVehicles() {
    try {
        const saved = localStorage.getItem('completedVehicles');
        if (saved) {
            completedVehicles = new Set(JSON.parse(saved));
        }
    } catch (error) {
        console.error('Failed to load from localStorage:', error);
        completedVehicles = new Set();
    }
}

// Initialize the enhanced app
document.addEventListener('DOMContentLoaded', async function() {
    showLoadingOverlay(true);
    
    try {
        // Initialize Dark Mode
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            const darkModeBtn = document.getElementById('darkModeBtn');
            if (darkModeBtn) darkModeBtn.textContent = '☀️';
        }
        
        // Initialize Notification Manager
        notificationManager = new NotificationManager();
        
        updateConnectionStatus(false);
        
        // Initialize Firebase Manager with enhanced error handling
        try {
            firebaseManager = new FirebaseManager();
            
            if (firebaseManager.isAvailable) {
                completedVehicles = await firebaseManager.loadAllVehicleStatus();
                
                unsubscribe = firebaseManager.listenToStatusChanges((newCompletedVehicles) => {
                    const previousCount = completedVehicles.size;
                    completedVehicles = newCompletedVehicles;
                    const currentCount = completedVehicles.size;
                    
                    // Show notification for new completions
                    if (currentCount > previousCount && notificationManager && notificationManager.enabled) {
                        const t = translations[currentLanguage];
                        const lastCompleted = [...completedVehicles].pop();
                        notificationManager.show(t.taskCompleted, {
                            body: t.taskCompletedDesc.replace('{vehicle}', lastCompleted || ''),
                            tag: 'task-completed'
                        });
                    }
                    
                    updateStatistics();
                    loadSchedule();
                });
                
                updateConnectionStatus(true);
                showToast(
                    translations[currentLanguage].connectionRestored,
                    'Connected to Ford PM System',
                    'success'
                );
                
            } else {
                throw new Error('Firebase not available');
            }
        } catch (error) {
            console.warn('Using LocalStorage fallback:', error);
            firebaseManager = null;
            loadCompletedVehicles();
            updateConnectionStatus(false);
            showToast(
                translations[currentLanguage].connectionLost,
                'Using offline mode',
                'warning'
            );
        }

        // Setup all event listeners
        setupEventListeners();
        setupAdvancedFeatures();
        
        // Initialize UI
        updateLanguage();
        updateCurrentDate();
        updateStatistics();
        loadSchedule();
        
        // Setup auto-refresh
        setupAutoRefresh();
        
        // Setup settings from localStorage
        applySettings();
        
    } catch (error) {
        console.error('App initialization failed:', error);
        showToast('Initialization Error', 'Failed to start the application', 'error');
    } finally {
        showLoadingOverlay(false);
    }
});

// Enhanced Event Listeners Setup
function setupEventListeners() {
    // View buttons
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentView = this.getAttribute('data-view');
            loadSchedule();
            
            // Analytics
            if (firebaseManager && firebaseManager.isAvailable) {
                firebaseManager.saveAnalytics('navigation', `view_${currentView}`).catch(console.warn);
            }
        });
    });

    // Language toggle with enhanced UX
    const langSwitch = document.getElementById('langSwitch');
    if (langSwitch) {
        langSwitch.addEventListener('click', function() {
            this.classList.toggle('en');
            currentLanguage = currentLanguage === 'th' ? 'en' : 'th';
            localStorage.setItem('language', currentLanguage);
            updateLanguage();
            updateConnectionStatus(firebaseManager && firebaseManager.isAvailable);
            showToast('Language Changed', `Switched to ${currentLanguage.toUpperCase()}`, 'info', 2000);
        });
    }

    // Enhanced header buttons
    const settingsBtn = document.getElementById('settingsBtn');
    if (settingsBtn) {
        settingsBtn.addEventListener('click', showSettings);
    }

    const fullscreenBtn = document.getElementById('fullscreenBtn');
    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', toggleFullscreen);
    }

    const darkModeBtn = document.getElementById('darkModeBtn');
    if (darkModeBtn) {
        darkModeBtn.addEventListener('click', toggleDarkMode);
    }

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') handleSearch();
        });
    }
    
    if (searchBtn) {
        searchBtn.addEventListener('click', handleSearch);
    }

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.getAttribute('data-filter');
            loadSchedule();
        });
    });

    // Setup popup events
    setupPopupEvents();
    
    // Setup keyboard shortcuts
    setupKeyboardShortcuts();
}

// Advanced Features Setup
function setupAdvancedFeatures() {
    // Setup PWA install prompt
    let deferredPrompt;
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        showInstallPrompt();
    });

    // Setup online/offline detection
    window.addEventListener('online', () => {
        updateConnectionStatus(true);
        showToast(
            translations[currentLanguage].connectionRestored,
            'Back online',
            'success',
            3000
        );
    });

    window.addEventListener('offline', () => {
        updateConnectionStatus(false);
        showToast(
            translations[currentLanguage].connectionLost,
            'Working offline',
            'warning',
            3000
        );
    });

    // Setup visibility change
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            if (autoRefreshInterval) {
                clearInterval(autoRefreshInterval);
                autoRefreshInterval = null;
            }
        } else {
            setupAutoRefresh();
            loadSchedule();
        }
    });
}

function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
            switch(e.key) {
                case '1':
                    switchView('today');
                    break;
                case '2':
                    switchView('week');
                    break;
                case '3':
                    switchView('month');
                    break;
                case 'r':
                    if (e.ctrlKey || e.metaKey) {
                        e.preventDefault();
                        loadSchedule();
                        showToast('Refreshed', 'Data refreshed', 'info', 2000);
                    }
                    break;
                case 'f':
                    if (e.ctrlKey || e.metaKey) {
                        e.preventDefault();
                        const searchInput = document.getElementById('searchInput');
                        if (searchInput) searchInput.focus();
                    }
                    break;
                case 'Escape':
                    closeAllModals();
                    break;
            }
        }
    });
}

function switchView(view) {
    document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
    const viewBtn = document.querySelector(`[data-view="${view}"]`);
    if (viewBtn) viewBtn.classList.add('active');
    currentView = view;
    loadSchedule();
}

function closeAllModals() {
    closePopup();
    closeSettings();
    closeNote();
}

// Settings System
function showSettings() {
    const overlay = document.getElementById('settingsOverlay');
    if (overlay) {
        overlay.style.display = 'block';
        
        const notificationToggle = document.getElementById('notificationToggle');
        const autoRefresh = document.getElementById('autoRefresh');
        const timeFormat = document.getElementById('timeFormat');
        
        if (notificationToggle) notificationToggle.checked = settings.notifications;
        if (autoRefresh) autoRefresh.value = settings.autoRefresh;
        if (timeFormat) timeFormat.value = settings.timeFormat;
        
        if (notificationToggle) {
            notificationToggle.onchange = (e) => {
                settings.notifications = e.target.checked;
                localStorage.setItem('notificationsEnabled', e.target.checked);
                if (notificationManager) {
                    notificationManager.setEnabled(e.target.checked);
                    if (e.target.checked) {
                        notificationManager.requestPermission();
                    }
                }
            };
        }
        
        if (autoRefresh) {
            autoRefresh.onchange = (e) => {
                settings.autoRefresh = parseInt(e.target.value);
                localStorage.setItem('autoRefresh', e.target.value);
                setupAutoRefresh();
            };
        }
        
        if (timeFormat) {
            timeFormat.onchange = (e) => {
                settings.timeFormat = e.target.value;
                localStorage.setItem('timeFormat', e.target.value);
                loadSchedule();
            };
        }
    }
}

function closeSettings() {
    const overlay = document.getElementById('settingsOverlay');
    if (overlay) {
        overlay.style.display = 'none';
    }
}

function applySettings() {
    if (notificationManager) {
        notificationManager.setEnabled(settings.notifications);
    }
    setupAutoRefresh();
}

function setupAutoRefresh() {
    if (autoRefreshInterval) {
        clearInterval(autoRefreshInterval);
        autoRefreshInterval = null;
    }
    
    if (settings.autoRefresh > 0 && !document.hidden) {
        autoRefreshInterval = setInterval(() => {
            loadSchedule();
            updateStatistics();
        }, settings.autoRefresh * 1000);
    }
}

// Enhanced Dark Mode
function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    
    const darkModeBtn = document.getElementById('darkModeBtn');
    if (darkModeBtn) {
        darkModeBtn.textContent = isDarkMode ? '☀️' : '🌙';
    }
    
    showToast(
        'Theme Changed', 
        `Switched to ${isDarkMode ? 'Dark' : 'Light'} mode`, 
        'info', 
        2000
    );
}

// Enhanced Fullscreen
function toggleFullscreen() {
    try {
        if (!document.fullscreenElement) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen().then(() => {
                    showToast('Fullscreen', 'Entered fullscreen mode', 'info', 2000);
                }).catch(err => {
                    console.warn('Fullscreen failed:', err);
                    showToast('Fullscreen', 'Fullscreen not supported', 'warning', 2000);
                });
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen().then(() => {
                    showToast('Fullscreen', 'Exited fullscreen mode', 'info', 2000);
                }).catch(console.warn);
            }
        }
    } catch (error) {
        console.warn('Fullscreen error:', error);
        showToast('Fullscreen', 'Fullscreen operation failed', 'error', 2000);
    }
}

// Search and Filter System
function handleSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchQuery = searchInput.value.toLowerCase().trim();
        loadSchedule();
        
        if (searchQuery) {
            showToast('Search', `Searching for: ${searchQuery}`, 'info', 2000);
        }
    }
}

function filterScheduleData(scheduleList) {
    if (!scheduleList || scheduleList.length === 0) return scheduleList;
    
    return scheduleList.filter(item => {
        if (searchQuery) {
            const vehicleNumber = item.vehicleNumber || '';
            const details = (typeof pmDetails !== 'undefined' && pmDetails[vehicleNumber]) ? pmDetails[vehicleNumber] : {};
            const teamName = details.team || '';
            const coachName = details.coach || '';
            
            const searchText = `${vehicleNumber} ${teamName} ${coachName}`.toLowerCase();
            if (!searchText.includes(searchQuery)) {
                return false;
            }
        }
        
        if (currentFilter === 'completed') {
            return completedVehicles.has(item.vehicleNumber);
        } else if (currentFilter === 'pending') {
            return !completedVehicles.has(item.vehicleNumber);
        }
        
        return true;
    });
}

// Enhanced Data Export System
async function exportData() {
    try {
        showLoadingOverlay(true);
        
        const t = translations[currentLanguage];
        const todayData = getTodayScheduleData();
        const exportDataObj = {
            timestamp: new Date().toISOString(),
            currentView: currentView,
            statistics: {
                total: todayData.length,
                completed: Math.min(completedVehicles.size, todayData.length),
                pending: Math.max(0, todayData.length - completedVehicles.size),
                efficiency: todayData.length > 0 ? 
                    Math.round((Math.min(completedVehicles.size, todayData.length) / todayData.length) * 100) : 0
            },
            scheduleData: typeof scheduleData !== 'undefined' ? scheduleData : [],
            completedVehicles: [...completedVehicles],
            pmDetails: typeof pmDetails !== 'undefined' ? pmDetails : {}
        };
        
        const blob = new Blob([JSON.stringify(exportDataObj, null, 2)], 
            { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `ford-pm-schedule-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        if (firebaseManager && firebaseManager.isAvailable) {
            await firebaseManager.saveAnalytics('system', 'data_exported');
        }
        
        showToast(t.dataExported, t.dataExportedDesc, 'success');
        
    } catch (error) {
        console.error('Export failed:', error);
        showToast('Export Failed', 'Failed to export data', 'error');
    } finally {
        showLoadingOverlay(false);
    }
}

// Language Update
function updateLanguage() {
    const t = translations[currentLanguage];
    
    const elements = {
        'pageTitle': t.pageTitle,
        'btnToday': t.today,
        'btnWeek': t.week,
        'btnMonth': t.month,
        'langLabel': t.language,
        'resetBtn': t.resetAll,
        'exportBtn': t.export,
        'btnDone': t.markComplete,
        'btnNote': t.addNote,
        'btnClose': t.close,
        'settingsTitle': t.settings,
        'noteTitle': t.addNote,
        'notificationLabel': t.enableNotifications,
        'autoRefreshLabel': t.autoRefresh,
        'timeFormatLabel': t.timeFormat,
        'filterAll': t.all,
        'filterCompleted': t.completed,
        'filterPending': t.pending,
        'filterTeam': t.byTeam
    };
    
    Object.entries(elements).forEach(([id, text]) => {
        const element = document.getElementById(id);
        if (element) {
            const btnText = element.querySelector('.btn-text');
            if (btnText) {
                btnText.textContent = text;
            } else {
                element.textContent = text;
            }
        }
    });
    
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.placeholder = `${t.search}...`;
    }
    
    updateCurrentDate();
    updateStatistics();
    loadSchedule();
}

function updateCurrentDate() {
    const now = new Date();
    const dateElement = document.getElementById('currentDate');
    
    if (dateElement) {
        let dateStr;
        try {
            if (currentLanguage === 'th') {
                dateStr = now.toLocaleDateString('th-TH', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    weekday: 'long'
                });
            } else {
                dateStr = now.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    weekday: 'long'
                });
            }
        } catch (error) {
            dateStr = now.toDateString();
        }
        dateElement.textContent = dateStr;
    }
}

// Schedule Loading
function loadSchedule() {
    const container = document.getElementById('scheduleContainer');
    if (!container) return;
    
    container.classList.add('fadeIn');
    
    switch(currentView) {
        case 'today':
            loadTodaySchedule(container);
            break;
        case 'week':
            loadWeekSchedule(container);
            break;
        case 'month':
            loadMonthSchedule(container);
            break;
    }
}

function loadTodaySchedule(container) {
    if (typeof scheduleData === 'undefined') {
        container.innerHTML = `
            <div class="no-schedule">
                <h2>⚠️ Data Not Available</h2>
                <p>Schedule data is not loaded</p>
            </div>
        `;
        return;
    }

    const todaySchedule = scheduleData.find(day => Object.keys(day).length > 2);
    
    if (!todaySchedule || Object.keys(todaySchedule).length <= 2) {
        const t = translations[currentLanguage];
        container.innerHTML = `
            <div class="no-schedule">
                <h2>${t.noSchedule}</h2>
                <p>${t.enjoyDay}</p>
            </div>
        `;
        return;
    }

    const scheduleGrid = document.createElement('div');
    scheduleGrid.className = 'schedule-grid';

    const timeSlots = Object.keys(todaySchedule).filter(key => 
        key !== 'Date' && key !== 'Day'
    );

    const scheduleItems = timeSlots.map(slot => ({
        timeSlot: slot,
        vehicleNumber: todaySchedule[slot]
    }));

    const filteredItems = filterScheduleData(scheduleItems);

    if (filteredItems.length === 0 && (searchQuery || currentFilter !== 'all')) {
        container.innerHTML = `
            <div class="no-schedule">
                <h2>🔍 No Results Found</h2>
                <p>Try adjusting your search or filter criteria</p>
            </div>
        `;
        return;
    }

    filteredItems.forEach(item => {
        const timeSlotDiv = createTimeSlotCard(item.timeSlot, item.vehicleNumber);
        scheduleGrid.appendChild(timeSlotDiv);
    });

    container.innerHTML = '';
    container.appendChild(scheduleGrid);
}

// Time Slot Card Creation
function createTimeSlotCard(timeSlot, vehicleNumber) {
    const timeSlotDiv = document.createElement('div');
    timeSlotDiv.className = 'time-slot slideIn';

    const timeLabel = document.createElement('div');
    timeLabel.className = 'time-label';
    timeLabel.textContent = formatTime(timeSlot);

    const vehicleCard = document.createElement('div');
    vehicleCard.className = 'vehicle-card';
    vehicleCard.onclick = () => showVehicleDetails(vehicleNumber, timeSlot);

    if (completedVehicles.has(vehicleNumber)) {
        vehicleCard.classList.add('completed');
    }

    const vehicleNumberDiv = document.createElement('div');
    vehicleNumberDiv.className = 'vehicle-number';
    vehicleNumberDiv.textContent = vehicleNumber;

    const teamDiv = document.createElement('div');
    teamDiv.className = 'vehicle-team';
    const details = (typeof pmDetails !== 'undefined' && pmDetails[vehicleNumber]) ? pmDetails[vehicleNumber] : {};
    teamDiv.textContent = details.team || 'N/A';

    const statusBadge = document.createElement('div');
    statusBadge.className = 'status-badge';
    const t = translations[currentLanguage];
    statusBadge.textContent = completedVehicles.has(vehicleNumber) ? t.completed : t.pending;

    vehicleCard.appendChild(vehicleNumberDiv);
    vehicleCard.appendChild(teamDiv);
    vehicleCard.appendChild(statusBadge);

    timeSlotDiv.appendChild(timeLabel);
    timeSlotDiv.appendChild(vehicleCard);

    return timeSlotDiv;
}

function formatTime(timeSlot) {
    if (settings.timeFormat === '12') {
        return timeSlot.replace(/(\d{1,2}):(\d{2})/g, (match, hour, minute) => {
            const h = parseInt(hour);
            const period = h >= 12 ? 'PM' : 'AM';
            const displayHour = h === 0 ? 12 : h > 12 ? h - 12 : h;
            return `${displayHour}:${minute} ${period}`;
        });
    }
    return timeSlot;
}

// Week Schedule Loading  
function loadWeekSchedule(container) {
    if (typeof scheduleData === 'undefined') {
        container.innerHTML = `
            <div class="no-schedule">
                <h2>⚠️ Data Not Available</h2>
                <p>Schedule data is not loaded</p>
            </div>
        `;
        return;
    }

    const weekView = document.createElement('div');
    weekView.className = 'week-view';

    const t = translations[currentLanguage];
    const dayNames = currentLanguage === 'th' 
        ? [t.sun, t.mon, t.tue, t.wed, t.thu, t.fri, t.sat]
        : [t.sun, t.mon, t.tue, t.wed, t.thu, t.fri, t.sat];

    const startDate = new Date(2025, 7, 1);

    for (let i = 0; i < 7; i++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + i);
        
        const dateStr = `${String(currentDate.getMonth() + 1).padStart(2, '0')}/${String(currentDate.getDate()).padStart(2, '0')}/${currentDate.getFullYear()}`;
        const dayData = scheduleData.find(day => day.Date === dateStr);
        
        const dayDiv = document.createElement('div');
        dayDiv.className = 'week-day';
        
        if (isToday(currentDate)) {
            dayDiv.classList.add('today');
        }
        
        const dayHeader = document.createElement('div');
        dayHeader.className = 'week-day-header';
        
        const dayName = dayNames[currentDate.getDay()];
        const dayNumber = currentDate.getDate();
        const monthName = currentLanguage === 'th' 
            ? getThaiMonthName(currentDate.getMonth())
            : getEnglishMonthName(currentDate.getMonth());
        
        dayHeader.innerHTML = `
            <div style="font-size: 1em; margin-bottom: 5px;">${dayName}</div>
            <div style="font-size: 0.9em; opacity: 0.8;">${dayNumber} ${monthName}</div>
        `;

        dayDiv.appendChild(dayHeader);

        if (dayData) {
            const timeSlots = Object.keys(dayData).filter(key => 
                key !== 'Date' && key !== 'Day'
            );

            const scheduleItems = timeSlots.map(slot => ({
                timeSlot: slot,
                vehicleNumber: dayData[slot]
            }));

            const filteredItems = filterScheduleData(scheduleItems);

            filteredItems.forEach(item => {
                const vehicleCard = createCompactVehicleCard(item.vehicleNumber, item.timeSlot);
                dayDiv.appendChild(vehicleCard);
            });
        } else {
            const noScheduleDiv = document.createElement('div');
            noScheduleDiv.style.cssText = `
                text-align: center;
                color: #bdc3c7;
                font-style: italic;
                margin-top: 20px;
                padding: 20px;
            `;
            noScheduleDiv.textContent = t.noScheduleDay;
            dayDiv.appendChild(noScheduleDiv);
        }

        weekView.appendChild(dayDiv);
    }

    container.innerHTML = '';
    container.appendChild(weekView);
}

function isToday(date) {
    const today = new Date();
    return date.toDateString() === today.toDateString();
}

// Month Schedule Loading
function loadMonthSchedule(container) {
    if (typeof scheduleData === 'undefined') {
        container.innerHTML = `
            <div class="no-schedule">
                <h2>⚠️ Data Not Available</h2>
                <p>Schedule data is not loaded</p>
            </div>
        `;
        return;
    }

    const monthView = document.createElement('div');
    monthView.className = 'month-view';

    const monthHeader = document.createElement('div');
    monthHeader.className = 'month-header';

    const monthNav = document.createElement('div');
    monthNav.className = 'month-nav';

    const prevBtn = document.createElement('button');
    prevBtn.className = 'nav-btn';
    prevBtn.innerHTML = '‹ Previous';
    prevBtn.onclick = () => {
        currentMonth.setMonth(currentMonth.getMonth() - 1);
        loadMonthSchedule(container);
    };

    const nextBtn = document.createElement('button');
    nextBtn.className = 'nav-btn';
    nextBtn.innerHTML = 'Next ›';
    nextBtn.onclick = () => {
        currentMonth.setMonth(currentMonth.getMonth() + 1);
        loadMonthSchedule(container);
    };

    const monthTitle = document.createElement('h2');
    const t = translations[currentLanguage];
    const monthNames = currentLanguage === 'th' 
        ? [t.january, t.february, t.march, t.april, t.may, t.june, 
           t.july, t.august, t.september, t.october, t.november, t.december]
        : ['January', 'February', 'March', 'April', 'May', 'June',
           'July', 'August', 'September', 'October', 'November', 'December'];
    
    monthTitle.textContent = `${monthNames[currentMonth.getMonth()]} ${currentMonth.getFullYear()}`;

    monthNav.appendChild(prevBtn);
    monthNav.appendChild(nextBtn);
    monthHeader.appendChild(monthTitle);
    monthHeader.appendChild(monthNav);

    const monthGrid = document.createElement('div');
    monthGrid.className = 'month-grid';

    const dayNames = currentLanguage === 'th' 
        ? [t.sun, t.mon, t.tue, t.wed, t.thu, t.fri, t.sat]
        : [t.sun, t.mon, t.tue, t.wed, t.thu, t.fri, t.sat];

    dayNames.forEach(day => {
        const dayHeader = document.createElement('div');
        dayHeader.className = 'month-day-header';
        dayHeader.textContent = day;
        monthGrid.appendChild(dayHeader);
    });

    const firstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    for (let i = 0; i < 42; i++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + i);

        const dayDiv = document.createElement('div');
        dayDiv.className = 'month-day';

        const dayNumber = document.createElement('div');
        dayNumber.className = 'month-day-number';
        dayNumber.textContent = currentDate.getDate();

        if (currentDate.getMonth() !== currentMonth.getMonth()) {
            dayDiv.classList.add('other-month');
        }

        if (isToday(currentDate)) {
            dayDiv.classList.add('today');
        }

        dayDiv.appendChild(dayNumber);

        const dateStr = `${String(currentDate.getMonth() + 1).padStart(2, '0')}/${String(currentDate.getDate()).padStart(2, '0')}/${currentDate.getFullYear()}`;
        const dayData = scheduleData.find(day => day.Date === dateStr);

        if (dayData && currentDate.getMonth() === currentMonth.getMonth()) {
            const timeSlots = Object.keys(dayData).filter(key => 
                key !== 'Date' && key !== 'Day'
            );

            const scheduleItems = timeSlots.map(slot => ({
                timeSlot: slot,
                vehicleNumber: dayData[slot]
            }));

            const filteredItems = filterScheduleData(scheduleItems);

            filteredItems.slice(0, 3).forEach(item => {
                const vehicleCard = createCompactVehicleCard(item.vehicleNumber, item.timeSlot);
                dayDiv.appendChild(vehicleCard);
            });

            if (filteredItems.length > 3) {
                const moreDiv = document.createElement('div');
                moreDiv.style.cssText = 'font-size: 0.7em; color: #7f8c8d; text-align: center; margin-top: 2px;';
                moreDiv.textContent = `+${filteredItems.length - 3} more`;
                dayDiv.appendChild(moreDiv);
            }
        }

        monthGrid.appendChild(dayDiv);
    }

    monthView.appendChild(monthHeader);
    monthView.appendChild(monthGrid);

    container.innerHTML = '';
    container.appendChild(monthView);
}

// Helper functions
function getThaiMonthName(monthIndex) {
    const monthNames = [
        'ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.',
        'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'
    ];
    return monthNames[monthIndex];
}

function getEnglishMonthName(monthIndex) {
    const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    return monthNames[monthIndex];
}

// Compact Vehicle Card
function createCompactVehicleCard(vehicleNumber, timeSlot) {
    const vehicleCard = document.createElement('div');
    vehicleCard.className = 'vehicle-card compact';
    vehicleCard.onclick = () => showVehicleDetails(vehicleNumber, timeSlot);

    if (completedVehicles.has(vehicleNumber)) {
        vehicleCard.classList.add('completed');
    }

    const vehicleNumberDiv = document.createElement('div');
    vehicleNumberDiv.className = 'vehicle-number';
    vehicleNumberDiv.textContent = vehicleNumber;

    const vehicleTimeDiv = document.createElement('div');
    vehicleTimeDiv.className = 'vehicle-time';
    vehicleTimeDiv.textContent = formatTime(timeSlot);

    const statusBadge = document.createElement('div');
    statusBadge.className = 'status-badge';
    const t = translations[currentLanguage];
    statusBadge.textContent = completedVehicles.has(vehicleNumber) ? t.completed : t.pending;

    vehicleCard.appendChild(vehicleNumberDiv);
    vehicleCard.appendChild(vehicleTimeDiv);
    vehicleCard.appendChild(statusBadge);

    return vehicleCard;
}

// Vehicle Details Popup
function showVehicleDetails(vehicleNumber, timeSlot) {
    currentSelectedVehicle = { number: vehicleNumber, timeSlot: timeSlot };
    
    const details = (typeof pmDetails !== 'undefined' && pmDetails[vehicleNumber]) ? pmDetails[vehicleNumber] : {};
    if (!details || Object.keys(details).length === 0) {
        showToast('Error', `No data found for vehicle ${vehicleNumber}`, 'error');
        return;
    }

    const t = translations[currentLanguage];

    const popupVehicleNumber = document.getElementById('popupVehicleNumber');
    if (popupVehicleNumber) {
        popupVehicleNumber.textContent = vehicleNumber;
    }
    
    const popupDetails = document.getElementById('popupDetails');
    if (popupDetails) {
        const isCompleted = completedVehicles.has(vehicleNumber);
        
        popupDetails.innerHTML = `
            <div class="detail-row">
                <span class="detail-label">🕐 ${t.time}</span>
                <span class="detail-value">${formatTime(timeSlot)}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">👥 ${t.team}</span>
                <span class="detail-value">${details.team || t.notSpecified}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">👨‍💼 ${t.coach}</span>
                <span class="detail-value">${details.coach || t.notSpecified}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">📊 ${t.status}</span>
                <span class="detail-value ${isCompleted ? 'text-success' : 'text-warning'}">
                    ${isCompleted ? '✅ ' + t.completed : '⏳ ' + t.pending}
                </span>
            </div>
        `;
    }

    showActionHistory(vehicleNumber);

    const doneBtn = document.getElementById('btnDone');
    if (doneBtn) {
        doneBtn.style.display = completedVehicles.has(vehicleNumber) ? 'none' : 'flex';
    }

    const popupOverlay = document.getElementById('popupOverlay');
    if (popupOverlay) {
        popupOverlay.style.display = 'block';
    }
}

function showActionHistory(vehicleNumber) {
    const historyContainer = document.getElementById('actionHistory');
    if (!historyContainer) return;

    const history = [
        { action: 'Created', time: '2 hours ago', icon: '📝' },
        { action: 'Assigned', time: '1 hour ago', icon: '👤' }
    ];

    if (completedVehicles.has(vehicleNumber)) {
        history.push({ action: 'Completed', time: 'Just now', icon: '✅' });
    }

    historyContainer.innerHTML = `
        <h4>Recent Activity</h4>
        ${history.map(item => `
            <div class="history-item">
                <div class="history-icon">${item.icon}</div>
                <div class="history-content">
                    <div class="history-action">${item.action}</div>
                    <div class="history-time">${item.time}</div>
                </div>
            </div>
        `).join('')}
    `;
}

// Popup Event Handlers
function setupPopupEvents() {
    const btnDone = document.getElementById('btnDone');
    if (btnDone) {
        btnDone.addEventListener('click', async function() {
            if (currentSelectedVehicle) {
                await markVehicleCompleted(currentSelectedVehicle.number);
                closePopup();
            }
        });
    }

    const btnNote = document.getElementById('btnNote');
    if (btnNote) {
        btnNote.addEventListener('click', function() {
            showNoteModal();
        });
    }

    const btnClose = document.getElementById('btnClose');
    if (btnClose) {
        btnClose.addEventListener('click', closePopup);
    }

    const popupOverlay = document.getElementById('popupOverlay');
    if (popupOverlay) {
        popupOverlay.addEventListener('click', function(e) {
            if (e.target === this) closePopup();
        });
    }
}

// Note System
function showNoteModal() {
    const overlay = document.getElementById('noteOverlay');
    if (overlay) {
        overlay.style.display = 'block';
        const textarea = document.getElementById('noteText');
        if (textarea) {
            textarea.focus();
            const existingNote = vehicleNotes.get(currentSelectedVehicle?.number) || '';
            textarea.value = existingNote;
        }
    }
}

function closeNote() {
    const overlay = document.getElementById('noteOverlay');
    if (overlay) {
        overlay.style.display = 'none';
        const textarea = document.getElementById('noteText');
        if (textarea) textarea.value = '';
    }
}

async function saveNote() {
    const textarea = document.getElementById('noteText');
    const note = textarea?.value.trim();
    
    if (!note || !currentSelectedVehicle) {
        showToast('Error', 'Please enter a note', 'error');
        return;
    }

    try {
        if (firebaseManager && firebaseManager.isAvailable) {
            await firebaseManager.saveVehicleNote(currentSelectedVehicle.number, note);
        }
        
        vehicleNotes.set(currentSelectedVehicle.number, note);
        try {
            localStorage.setItem('vehicleNotes', JSON.stringify([...vehicleNotes]));
        } catch (e) {
            console.warn('Failed to save note to localStorage:', e);
        }
        
        showToast('Note Saved', 'Note has been saved successfully', 'success');
        closeNote();
        
    } catch (error) {
        console.error('Failed to save note:', error);
        showToast('Error', 'Failed to save note', 'error');
    }
}

// Vehicle Completion
async function markVehicleCompleted(vehicleNumber) {
    try {
        completedVehicles.add(vehicleNumber);
        
        const t = translations[currentLanguage];
        
        if (firebaseManager && firebaseManager.isAvailable) {
            await firebaseManager.saveVehicleStatus(vehicleNumber, 'completed');
        } else {
            saveCompletedVehicles();
        }
        
        if (notificationManager && notificationManager.enabled) {
            notificationManager.show(t.taskCompleted, {
                body: t.taskCompletedDesc.replace('{vehicle}', vehicleNumber),
                tag: `completed-${vehicleNumber}`
            });
        }
        
        showToast(t.taskCompleted, `Vehicle ${vehicleNumber} marked as complete`, 'success');
        
        updateStatistics();
        loadSchedule();
        
    } catch (error) {
        console.error('Error marking vehicle completed:', error);
        showToast('Error', 'Failed to mark vehicle as completed', 'error');
        saveCompletedVehicles();
    }
}

// Reset Functions
async function resetVehicleStatus(vehicleNumber) {
    try {
        completedVehicles.delete(vehicleNumber);
        
        if (firebaseManager && firebaseManager.isAvailable) {
            await firebaseManager.resetVehicleStatus(vehicleNumber);
        } else {
            saveCompletedVehicles();
        }
        
        updateStatistics();
        loadSchedule();
        showToast('Reset', `Vehicle ${vehicleNumber} status reset`, 'info');
        
    } catch (error) {
        console.error('Error resetting vehicle status:', error);
        saveCompletedVehicles();
    }
}

async function resetAllStatus() {
    const t = translations[currentLanguage];
    if (!confirm(t.confirmReset)) return;

    try {
        showLoadingOverlay(true);
        
        completedVehicles.clear();
        
        if (firebaseManager && firebaseManager.isAvailable) {
            await firebaseManager.resetAllStatus();
        } else {
            saveCompletedVehicles();
        }
        
        updateStatistics();
        loadSchedule();
        showToast('Reset Complete', 'All vehicle status reset', 'success');
        
    } catch (error) {
        console.error('Error resetting all status:', error);
        showToast('Error', 'Failed to reset all status', 'error');
        saveCompletedVehicles();
    } finally {
        showLoadingOverlay(false);
    }
}

// Utility Functions
function closePopup() {
    const overlay = document.getElementById('popupOverlay');
    if (overlay) {
        overlay.style.display = 'none';
    }
    currentSelectedVehicle = null;
}

function showInstallPrompt() {
    showToast(
        'Install App', 
        'Add Ford PM Dashboard to your home screen for quick access', 
        'info', 
        8000
    );
}





// Cleanup
window.addEventListener('beforeunload', () => {
    if (unsubscribe) unsubscribe();
    if (autoRefreshInterval) clearInterval(autoRefreshInterval);
});

// Export functions for global access
window.resetAllStatus = resetAllStatus;
window.resetVehicleStatus = resetVehicleStatus;
window.exportData = exportData;
window.closeSettings = closeSettings;
window.closeNote = closeNote;
window.saveNote = saveNote;
window.closePopup = closePopup;

// Initialize performance monitoring
if (window.performance && window.performance.mark) {
    window.performance.mark('ford-pm-dashboard-loaded');
}

console.log('🚗 Ford PM Schedule Dashboard v2.0 - Fixed & Ready! 🚗');
