
        // Global variables
        let completedVehicles = new Set();
        let currentSelectedVehicle = null;
        let currentView = 'today';
        let currentLanguage = 'th';
        let currentMonth = new Date(2025, 7); // August 2025

        // Initialize the app
        document.addEventListener('DOMContentLoaded', function() {
            setupEventListeners();
            updateLanguage();
            updateCurrentDate();
            loadSchedule();
        });

        function setupEventListeners() {
            // View buttons
            // ในส่วน setupEventListeners() เพิ่มการจัดการสำหรับปุ่ม week
document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all buttons
        document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        // Set current view
        currentView = this.getAttribute('data-view');
        
        // ถ้าเป็น month view ให้ reset ไปที่เดือนปัจจุบัน
        if (currentView === 'month') {
            currentMonth = new Date(); // reset to current month
        }
        
        // Load appropriate schedule
        loadSchedule();
    });
});


            // Language toggle
            document.getElementById('langSwitch').addEventListener('click', function() {
                this.classList.toggle('en');
                currentLanguage = currentLanguage === 'th' ? 'en' : 'th';
                updateLanguage();
            });

            setupPopupEvents();
        }

        function updateLanguage() {
            const t = translations[currentLanguage];
            
            // Update static elements
            document.getElementById('pageTitle').textContent = t.pageTitle;
            document.getElementById('btnToday').textContent = t.today;
            document.getElementById('btnWeek').textContent = t.week;
            document.getElementById('btnMonth').textContent = t.month;
            document.getElementById('langLabel').textContent = t.language;
            document.getElementById('langText').textContent = currentLanguage.toUpperCase();
            document.getElementById('btnDone').textContent = t.done;
            document.getElementById('btnClose').textContent = t.close;

            // Update current date
            updateCurrentDate();
            
            // Reload schedule to apply language changes
            loadSchedule();
        }

        function updateCurrentDate() {
            const now = new Date();
            const t = translations[currentLanguage];
            
            let dateStr;
            if (currentLanguage === 'th') {
                const thaiDate = now.toLocaleDateString('th-TH', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    weekday: 'long'
                });
                dateStr = thaiDate;
            } else {
                const englishDate = now.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    weekday: 'long'
                });
                dateStr = englishDate;
            }
            
            document.getElementById('currentDate').textContent = dateStr;
        }

        function loadSchedule() {
            const container = document.getElementById('scheduleContainer');
            
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
            // For demo purposes, use the first date in the schedule data
            const demoDate = "08/01/2025";
            const todaySchedule = scheduleData.find(day => day.Date === demoDate);
            
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

            timeSlots.forEach(timeSlot => {
                const vehicleNumber = todaySchedule[timeSlot];
                const timeSlotDiv = createTimeSlotCard(timeSlot, vehicleNumber);
                scheduleGrid.appendChild(timeSlotDiv);
            });

            container.innerHTML = '';
            container.appendChild(scheduleGrid);
        }

        function loadWeekSchedule(container) {
    const weekView = document.createElement('div');
    weekView.className = 'week-view';

    const t = translations[currentLanguage];
    const dayNames = currentLanguage === 'th' 
        ? [t.sun, t.mon, t.tue, t.wed, t.thu, t.fri, t.sat]
        : [t.sun, t.mon, t.tue, t.wed, t.thu, t.fri, t.sat];

    // คำนวณสัปดาห์ปัจจุบัน
    const today = new Date();
    const startOfWeek = new Date(today);
    
    // หาวันอาทิตย์ที่เป็นจุดเริ่มต้นของสัปดาห์
    const dayOfWeek = today.getDay(); // 0 = อาทิตย์, 1 = จันทร์, ...
    startOfWeek.setDate(today.getDate() - dayOfWeek);

    // สร้าง 7 วันในสัปดาห์
    for (let i = 0; i < 7; i++) {
        const currentDate = new Date(startOfWeek);
        currentDate.setDate(startOfWeek.getDate() + i);
        
        // สร้าง date string ในรูปแบบ MM/DD/YYYY
        const dateStr = `${String(currentDate.getMonth() + 1).padStart(2, '0')}/${String(currentDate.getDate()).padStart(2, '0')}/${currentDate.getFullYear()}`;
        const dayData = scheduleData.find(day => day.Date === dateStr);
        
        const dayDiv = document.createElement('div');
        dayDiv.className = 'week-day';
        
        // เช็คว่าเป็นวันปัจจุบันหรือไม่
        const isToday = currentDate.toDateString() === today.toDateString();
        if (isToday) dayDiv.classList.add('today');

        const dayHeader = document.createElement('div');
        dayHeader.className = 'week-day-header';
        
        // แสดงชื่อวันและวันที่
        const dayName = dayNames[i];
        const dayNumber = currentDate.getDate();
        const monthName = currentLanguage === 'th' 
            ? getThaiMonthName(currentDate.getMonth())
            : getEnglishMonthName(currentDate.getMonth());
        
        dayHeader.innerHTML = `
            <div style="font-size: 1em; margin-bottom: 5px;">${dayName}</div>
            <div style="font-size: 0.9em; opacity: 0.8;">${dayNumber} ${monthName}</div>
        `;

        dayDiv.appendChild(dayHeader);

        // เพิ่มข้อมูลตารางงานถ้ามี
        if (dayData) {
            const timeSlots = Object.keys(dayData).filter(key => 
                key !== 'Date' && key !== 'Day'
            );

            timeSlots.forEach(timeSlot => {
                const vehicleNumber = dayData[timeSlot];
                const vehicleCard = createCompactVehicleCard(vehicleNumber, timeSlot);
                dayDiv.appendChild(vehicleCard);
            });
        } else {
            // แสดงข้อความเมื่อไม่มีตารางงาน
            const noScheduleDiv = document.createElement('div');
            noScheduleDiv.style.cssText = `
                text-align: center;
                color: #bdc3c7;
                font-style: italic;
                margin-top: 20px;
                padding: 20px;
            `;
            noScheduleDiv.textContent = currentLanguage === 'th' ? 'ไม่มีงาน' : 'No Schedule';
            dayDiv.appendChild(noScheduleDiv);
        }

        weekView.appendChild(dayDiv);
    }

    container.innerHTML = '';
    container.appendChild(weekView);
}

// ฟังก์ชันช่วยสำหรับชื่อเดือนภาษาไทย
function getThaiMonthName(monthIndex) {
    const monthNames = [
        'ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.',
        'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'
    ];
    return monthNames[monthIndex];
}

// ฟังก์ชันช่วยสำหรับชื่อเดือนภาษาอังกฤษ
function getEnglishMonthName(monthIndex) {
    const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    return monthNames[monthIndex];
}


        function loadMonthSchedule(container) {
    const monthView = document.createElement('div');
    monthView.className = 'month-view';

    // ใช้เดือนปัจจุบันแทน currentMonth ถ้าต้องการ
    const displayMonth = currentMonth.getMonth() === 7 && currentMonth.getFullYear() === 2025 
        ? currentMonth 
        : new Date(); // ใช้เดือนปัจจุบันถ้าไม่ใช่เดือนสิงหาคม 2025

    // Month header with navigation
    const monthHeader = document.createElement('div');
    monthHeader.className = 'month-header';

    const monthNav = document.createElement('div');
    monthNav.className = 'month-nav';

    const prevBtn = document.createElement('button');
    prevBtn.className = 'nav-btn';
    prevBtn.textContent = '‹ Previous';
    prevBtn.onclick = () => {
        currentMonth.setMonth(currentMonth.getMonth() - 1);
        loadMonthSchedule(container);
    };

    const nextBtn = document.createElement('button');
    nextBtn.className = 'nav-btn';
    nextBtn.textContent = 'Next ›';
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

    // Month grid
    const monthGrid = document.createElement('div');
    monthGrid.className = 'month-grid';

    // Day headers
    const dayNames = currentLanguage === 'th' 
        ? [t.sun, t.mon, t.tue, t.wed, t.thu, t.fri, t.sat]
        : [t.sun, t.mon, t.tue, t.wed, t.thu, t.fri, t.sat];

    dayNames.forEach(day => {
        const dayHeader = document.createElement('div');
        dayHeader.className = 'month-day-header';
        dayHeader.textContent = day;
        monthGrid.appendChild(dayHeader);
    });

    // Calendar days
    const firstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
    const lastDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    const today = new Date();

    for (let i = 0; i < 42; i++) { // 6 weeks * 7 days
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + i);

        const dayDiv = document.createElement('div');
        dayDiv.className = 'month-day';

        const dayNumber = document.createElement('div');
        dayNumber.className = 'month-day-number';
        dayNumber.textContent = currentDate.getDate();

        if (currentDate.getMonth() !== currentMonth.getMonth()) {
            dayDiv.classList.add('other-month');
        } else if (currentDate.toDateString() === today.toDateString()) {
            dayDiv.classList.add('today'); // ใช้วันปัจจุบันจริง ๆ
        }

        dayDiv.appendChild(dayNumber);

        // Add schedule data if available
        const dateStr = `${String(currentDate.getMonth() + 1).padStart(2, '0')}/${String(currentDate.getDate()).padStart(2, '0')}/${currentDate.getFullYear()}`;
        const dayData = scheduleData.find(day => day.Date === dateStr);

        if (dayData && currentDate.getMonth() === currentMonth.getMonth()) {
            const timeSlots = Object.keys(dayData).filter(key => 
                key !== 'Date' && key !== 'Day'
            );

            timeSlots.slice(0, 3).forEach(timeSlot => { // Show only first 3 slots
                const vehicleNumber = dayData[timeSlot];
                const vehicleCard = createCompactVehicleCard(vehicleNumber, timeSlot);
                dayDiv.appendChild(vehicleCard);
            });

            if (timeSlots.length > 3) {
                const moreDiv = document.createElement('div');
                moreDiv.style.cssText = 'font-size: 0.7em; color: #7f8c8d; text-align: center; margin-top: 2px;';
                moreDiv.textContent = `+${timeSlots.length - 3} more`;
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


        function createTimeSlotCard(timeSlot, vehicleNumber) {
            const timeSlotDiv = document.createElement('div');
            timeSlotDiv.className = 'time-slot';

            const timeLabel = document.createElement('div');
            timeLabel.className = 'time-label';
            timeLabel.textContent = timeSlot;

            const vehicleCard = document.createElement('div');
            vehicleCard.className = 'vehicle-card';
            vehicleCard.onclick = () => showVehicleDetails(vehicleNumber, timeSlot);

            if (completedVehicles.has(vehicleNumber)) {
                vehicleCard.classList.add('completed');
            }

            const vehicleNumberDiv = document.createElement('div');
            vehicleNumberDiv.className = 'vehicle-number';
            vehicleNumberDiv.textContent = vehicleNumber;

            const statusBadge = document.createElement('div');
            statusBadge.className = 'status-badge';
            const t = translations[currentLanguage];
            statusBadge.textContent = completedVehicles.has(vehicleNumber) ? t.completed : t.pending;

            vehicleCard.appendChild(vehicleNumberDiv);
            vehicleCard.appendChild(statusBadge);

            timeSlotDiv.appendChild(timeLabel);
            timeSlotDiv.appendChild(vehicleCard);

            return timeSlotDiv;
        }

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
            vehicleTimeDiv.textContent = timeSlot;

            const statusBadge = document.createElement('div');
            statusBadge.className = 'status-badge';
            const t = translations[currentLanguage];
            statusBadge.textContent = completedVehicles.has(vehicleNumber) ? t.completed : t.pending;

            vehicleCard.appendChild(vehicleNumberDiv);
            vehicleCard.appendChild(vehicleTimeDiv);
            vehicleCard.appendChild(statusBadge);

            return vehicleCard;
        }

        function showVehicleDetails(vehicleNumber, timeSlot) {
            currentSelectedVehicle = { number: vehicleNumber, timeSlot: timeSlot };
            
            const details = pmDetails[vehicleNumber];
            if (!details) {
                alert('ไม่พบข้อมูลรถหมายเลข ' + vehicleNumber);
                return;
            }

            const t = translations[currentLanguage];

            // Update popup content
            document.getElementById('popupVehicleNumber').textContent = vehicleNumber;
            
            const popupDetails = document.getElementById('popupDetails');
            popupDetails.innerHTML = `
                <div class="detail-row">
                    <span class="detail-label">${t.time}</span>
                    <span class="detail-value">${timeSlot}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">${t.team}</span>
                    <span class="detail-value">${details.team || t.notSpecified}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">${t.coach}</span>
                    <span class="detail-value">${details.coach || t.notSpecified}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">${t.status}</span>
                    <span class="detail-value">${completedVehicles.has(vehicleNumber) ? t.completed : t.pending}</span>
                </div>
            `;

            // Show popup
            document.getElementById('popupOverlay').style.display = 'block';
        }

        function setupPopupEvents() {
            // Done button
            document.getElementById('btnDone').addEventListener('click', function() {
                if (currentSelectedVehicle) {
                    markVehicleCompleted(currentSelectedVehicle.number);
                    closePopup();
                }
            });

            // Close button
            document.getElementById('btnClose').addEventListener('click', closePopup);

            // Close on overlay click
            document.getElementById('popupOverlay').addEventListener('click', function(e) {
                if (e.target === this) {
                    closePopup();
                }
            });

            // Close on Escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    closePopup();
                }
            });
        }

        function markVehicleCompleted(vehicleNumber) {
            completedVehicles.add(vehicleNumber);
            
            // Reload current view to update colors
            loadSchedule();
        }

        function closePopup() {
            document.getElementById('popupOverlay').style.display = 'none';
            currentSelectedVehicle = null;
        }
