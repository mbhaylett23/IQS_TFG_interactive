// IQS TFG Explorer - Interactive Application

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initApp();
});

function initApp() {
    // Update statistics
    updateStats();
    
    // Render research areas (card view)
    renderResearchAreas();
    
    // Render tree mind map
    renderTreeMindMap();
    
    // Render lecturers
    renderLecturers();
    
    // Setup event listeners
    setupEventListeners();
    
    // Setup view toggle
    setupViewToggle();
}

// ===== View Toggle =====
function setupViewToggle() {
    const viewButtons = document.querySelectorAll('.view-btn');
    
    viewButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            viewButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const view = btn.dataset.view;
            
            if (view === 'cards') {
                document.getElementById('mindMapContainer').classList.add('active');
                document.getElementById('treeMindMapContainer').classList.remove('active');
            } else if (view === 'mindmap') {
                document.getElementById('mindMapContainer').classList.remove('active');
                document.getElementById('treeMindMapContainer').classList.add('active');
            }
        });
    });
}

// ===== Tree Mind Map =====
function renderTreeMindMap() {
    const container = document.getElementById('treeBranches');
    if (!container) return;
    
    container.innerHTML = '';
    
    researchData.areas.forEach(area => {
        const branch = createTreeBranch(area);
        container.appendChild(branch);
    });
}

function createTreeBranch(area) {
    const div = document.createElement('div');
    div.className = 'tree-branch';
    div.dataset.category = getCategoryFromArea(area.id);
    div.dataset.areaId = area.id;
    
    const topicsHTML = area.topics.map(topic => {
        // Show ALL supervisors, not just first 2
        const supervisorChips = topic.supervisors.map(sup => {
            const shortName = sup.replace('Dr. ', '').replace('Dra. ', '').split(' ').slice(0, 2).join(' ');
            return `<span class="supervisor-chip"><span class="pi-icon">👨‍🔬</span>${shortName}</span>`;
        }).join('');

        return `
            <div class="topic-node" onclick="openTopicModal('${area.id}', '${topic.id}')">
                <div class="topic-node-title">${topic.title}</div>
                <div class="topic-node-supervisors">
                    ${supervisorChips}
                </div>
            </div>
        `;
    }).join('');
    
    div.innerHTML = `
        <div class="branch-header" onclick="toggleTreeBranch('${area.id}')">
            <div class="branch-title-group">
                <span class="branch-icon">${area.icon}</span>
                <span class="branch-title">${area.name}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 10px;">
                <span class="branch-count">${area.topics.length}</span>
                <button class="branch-toggle">▼</button>
            </div>
        </div>
        <div class="branch-content">
            ${topicsHTML}
        </div>
    `;
    
    return div;
}

function toggleTreeBranch(areaId) {
    const branch = document.querySelector(`.tree-branch[data-area-id="${areaId}"]`);
    if (branch) {
        branch.classList.toggle('expanded');
    }
}

// Make globally available
window.toggleTreeBranch = toggleTreeBranch;

// ===== Statistics =====
function updateStats() {
    let totalTopics = 0;
    researchData.areas.forEach(area => {
        totalTopics += area.topics.length;
    });
    
    document.getElementById('totalTopics').textContent = totalTopics;
    document.getElementById('totalLecturers').textContent = researchData.lecturers.length;
    document.getElementById('totalAreas').textContent = researchData.areas.length;
    
    // Animate numbers
    animateNumbers();
}

function animateNumbers() {
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const target = parseInt(stat.textContent);
        let current = 0;
        const increment = target / 30;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.textContent = target;
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(current);
            }
        }, 30);
    });
}

// ===== Render Research Areas =====
function renderResearchAreas(filter = 'all', searchTerm = '') {
    const container = document.getElementById('mindMapContainer');
    container.innerHTML = '';
    
    let filteredAreas = researchData.areas;
    
    // Apply category filter
    if (filter !== 'all') {
        filteredAreas = filteredAreas.filter(area => 
            area.id === filter || 
            area.id.includes(filter) ||
            getCategoryFromArea(area.id) === filter
        );
    }
    
    // Apply search filter
    if (searchTerm) {
        filteredAreas = filteredAreas.map(area => {
            const filteredTopics = area.topics.filter(topic => 
                matchesSearch(topic, searchTerm) ||
                topic.supervisors.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()))
            );
            
            if (filteredTopics.length > 0 || 
                area.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                return { ...area, topics: filteredTopics };
            }
            return null;
        }).filter(area => area !== null);
    }
    
    if (filteredAreas.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <div class="no-results-icon">🔍</div>
                <h3>No results found</h3>
                <p>Try adjusting your search or filter criteria</p>
            </div>
        `;
        return;
    }
    
    filteredAreas.forEach((area, index) => {
        const areaElement = createAreaElement(area, index === 0);
        container.appendChild(areaElement);
    });
}

function getCategoryFromArea(areaId) {
    const categoryMap = {
        'biomedical': 'biomedical',
        'tissue-regen': 'biomedical',
        'disease': 'biomedical',
        'enzyme': 'biotechnology',
        'biotech': 'biotechnology',
        'micro-genomics': 'biotechnology',
        'ai': 'ai',
        'computational': 'ai',
        'pharmacy': 'pharmacy',
        'nutrition': 'pharmacy',
        'medicinal-chem': 'chemistry',
        'chem-synth': 'chemistry',
        'materials': 'chemistry',
        'sustainability': 'sustainability',
        'pollution': 'sustainability',
        'process-eng': 'engineering',
        'industrial-eng': 'engineering',
        'analytical': 'engineering'
    };
    return categoryMap[areaId] || 'other';
}

function createAreaElement(area, expanded = false) {
    const div = document.createElement('div');
    div.className = `research-area ${expanded ? 'expanded' : ''} fade-in`;
    div.dataset.category = getCategoryFromArea(area.id);
    div.dataset.areaId = area.id;
    
    div.innerHTML = `
        <div class="area-header" onclick="toggleArea('${area.id}')">
            <div class="area-title-group">
                <span class="area-icon">${area.icon}</span>
                <h2 class="area-title">${area.name}</h2>
            </div>
            <div style="display: flex; align-items: center; gap: 15px;">
                <span class="area-count">${area.topics.length} topics</span>
                <button class="area-toggle">▼</button>
            </div>
        </div>
        <div class="area-content">
            <p style="color: var(--text-muted); margin-bottom: 20px;">${area.description}</p>
            <div class="topics-grid">
                ${area.topics.map(topic => createTopicCard(topic, area)).join('')}
            </div>
        </div>
    `;
    
    return div;
}

function createTopicCard(topic, area) {
    const supervisorPreview = topic.supervisors[0] ? topic.supervisors[0].replace('Dr. ', '').replace('Dra. ', '').split(' ')[0] : '';
    
    return `
        <div class="topic-card slide-in" onclick="openTopicModal('${area.id}', '${topic.id}')">
            <h3 class="topic-title">${topic.title}</h3>
            <div class="topic-meta">
                ${topic.keywords.slice(0, 3).map(kw => `<span class="topic-tag">${kw}</span>`).join('')}
            </div>
            ${topic.supervisors.length > 0 ? `
                <div class="topic-supervisor">
                    👨‍🔬 ${supervisorPreview}${topic.supervisors.length > 1 ? ` +${topic.supervisors.length - 1}` : ''}
                </div>
            ` : ''}
        </div>
    `;
}

function toggleArea(areaId) {
    const areaElement = document.querySelector(`[data-area-id="${areaId}"]`);
    if (areaElement) {
        areaElement.classList.toggle('expanded');
    }
}

// ===== Search Functionality =====
function matchesSearch(topic, searchTerm) {
    const term = searchTerm.toLowerCase();
    return (
        topic.title.toLowerCase().includes(term) ||
        topic.description.toLowerCase().includes(term) ||
        topic.keywords.some(kw => kw.toLowerCase().includes(term)) ||
        topic.subtopics.some(st => st.toLowerCase().includes(term))
    );
}

// ===== Render Lecturers =====
function renderLecturers(searchTerm = '') {
    const container = document.getElementById('lecturerList');
    container.innerHTML = '';
    
    let filteredLecturers = researchData.lecturers;
    
    if (searchTerm) {
        filteredLecturers = filteredLecturers.filter(lecturer => 
            lecturer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            lecturer.department.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    
    // Sort by name
    filteredLecturers.sort((a, b) => a.name.localeCompare(b.name));
    
    filteredLecturers.forEach(lecturer => {
        const item = document.createElement('div');
        item.className = 'lecturer-item';
        item.onclick = () => filterByLecturer(lecturer.name);
        
        item.innerHTML = `
            <div class="lecturer-name">${lecturer.name}</div>
            <div class="lecturer-dept">${lecturer.department}</div>
            <div class="lecturer-topics-count">${lecturer.topics} research topics</div>
        `;
        
        container.appendChild(item);
    });
}

function filterByLecturer(lecturerName) {
    // Clear active states
    document.querySelectorAll('.lecturer-item').forEach(item => {
        item.classList.remove('active');
        if (item.querySelector('.lecturer-name').textContent === lecturerName) {
            item.classList.add('active');
        }
    });
    
    // Update search
    const searchInput = document.getElementById('searchInput');
    searchInput.value = lecturerName;
    
    // Re-render with filter
    renderResearchAreas('all', lecturerName);
}

// ===== Modal =====
function openTopicModal(areaId, topicId) {
    const area = researchData.areas.find(a => a.id === areaId);
    const topic = area.topics.find(t => t.id === topicId);

    if (!topic) return;

    // Update modal content
    document.getElementById('modalCategory').textContent = area.name;
    document.getElementById('modalCategory').style.background = `var(--color-${getCategoryFromArea(areaId)})`;
    document.getElementById('modalTitle').textContent = topic.title;

    // Full Description - use fullDescription if available, otherwise fall back to description
    const fullDescElement = document.getElementById('modalFullDescription');
    if (topic.fullDescription) {
        fullDescElement.innerHTML = topic.fullDescription.replace(/\n/g, '<br><br>');
    } else {
        fullDescElement.textContent = topic.description;
    }

    // Objective (if available)
    const objectiveSection = document.getElementById('modalObjectiveSection');
    const objectiveElement = document.getElementById('modalObjective');
    if (topic.objective) {
        objectiveSection.style.display = 'block';
        objectiveElement.innerHTML = topic.objective.replace(/\n/g, '<br><br>');
    } else {
        objectiveSection.style.display = 'none';
    }

    // Methodology (if available)
    const methodologySection = document.getElementById('modalMethodologySection');
    const methodologyElement = document.getElementById('modalMethodology');
    if (topic.methodology) {
        methodologySection.style.display = 'block';
        methodologyElement.innerHTML = topic.methodology.replace(/\n/g, '<br><br>');
    } else {
        methodologySection.style.display = 'none';
    }

    // Subtopics
    document.getElementById('modalSubtopics').innerHTML = topic.subtopics
        .map(st => `<span class="subtopic-item">${st}</span>`)
        .join('');

    // Supervisors - Show ALL supervisors
    document.getElementById('modalSupervisors').innerHTML = topic.supervisors
        .map(sup => {
            const initials = sup.replace('Dr. ', '').replace('Dra. ', '')
                .split(' ')
                .map(n => n[0])
                .join('')
                .substring(0, 2);
            return `
                <div class="supervisor-card">
                    <div class="supervisor-avatar">${initials}</div>
                    <div class="supervisor-info">
                        <span class="supervisor-name">${sup}</span>
                        <span class="supervisor-title">Research Supervisor</span>
                    </div>
                </div>
            `;
        })
        .join('');

    // Keywords
    document.getElementById('modalKeywords').innerHTML = topic.keywords
        .map(kw => `<span class="keyword-tag">${kw}</span>`)
        .join('');

    // Show modal
    document.getElementById('topicModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('topicModal').classList.remove('active');
    document.body.style.overflow = '';
}

// ===== Event Listeners =====
function setupEventListeners() {
    // Search input
    const searchInput = document.getElementById('searchInput');
    let debounceTimer;
    
    searchInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
            renderResearchAreas(activeFilter, e.target.value);
        }, 300);
    });
    
    // Clear search
    document.getElementById('clearSearch').addEventListener('click', () => {
        searchInput.value = '';
        const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
        renderResearchAreas(activeFilter, '');
        
        // Clear lecturer selection
        document.querySelectorAll('.lecturer-item').forEach(item => {
            item.classList.remove('active');
        });
    });
    
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const searchTerm = searchInput.value;
            renderResearchAreas(btn.dataset.filter, searchTerm);
        });
    });
    
    // Modal close
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('topicModal').addEventListener('click', (e) => {
        if (e.target.id === 'topicModal') {
            closeModal();
        }
    });
    
    // Escape key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
    
    // Lecturer search
    document.getElementById('lecturerSearch').addEventListener('input', (e) => {
        renderLecturers(e.target.value);
    });
    
    // Toggle lecturer panel
    document.getElementById('togglePanel').addEventListener('click', () => {
        const panel = document.getElementById('lecturerPanel');
        const button = document.getElementById('togglePanel');
        const list = panel.querySelector('.lecturer-list');
        const search = panel.querySelector('.lecturer-search');
        
        if (list.style.display === 'none') {
            list.style.display = 'block';
            search.style.display = 'block';
            button.textContent = '−';
        } else {
            list.style.display = 'none';
            search.style.display = 'none';
            button.textContent = '+';
        }
    });
}

// ===== Utility Functions =====
function expandAllAreas() {
    document.querySelectorAll('.research-area').forEach(area => {
        area.classList.add('expanded');
    });
}

function collapseAllAreas() {
    document.querySelectorAll('.research-area').forEach(area => {
        area.classList.remove('expanded');
    });
}

// Make functions globally available
window.toggleArea = toggleArea;
window.openTopicModal = openTopicModal;
window.closeModal = closeModal;
window.expandAllAreas = expandAllAreas;
window.collapseAllAreas = collapseAllAreas;
