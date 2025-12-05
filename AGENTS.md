# IQS TFG Document Workspace - Agent Configuration

## Overview
This document describes the MCP (Model Context Protocol) servers and AI agents configured for extracting information from various document types in the TFG workspace.

---

## 🖼️ Image Reader MCP Server

### Purpose
Extracts text and structured data from images (PNG, JPG, etc.) using Claude Vision API.

### Location
```
~\.continue\mcp-servers\image-reader\image_reader.py
```

### Conda Environment
- **Name**: `image_reader`
- **Python Path**: `C:\Users\Michael\.conda\envs\image_reader\python.exe`

### Dependencies
```
anthropic
pillow
```

### Usage
```powershell
# Direct execution with specific environment
C:\Users\Michael\.conda\envs\image_reader\python.exe "PATH\TO\image_reader.py" --read "IMAGE.png" "Your prompt"

# Example: Extract mind map data
python test_image_reader.py "NotebookLM Mind Map - entire IQS engineering dept.png"
```

### Configuration
Requires `ANTHROPIC_API_KEY` environment variable.

### Capabilities
- ✅ Extract text from images
- ✅ Parse mind maps and diagrams
- ✅ Handle large images (auto-resize to 4096px max)
- ✅ JPEG compression for API limits

---

## 📄 PDF Reader MCP Server

### Purpose
Extracts text, tables, and structured data from PDF documents.

### Recommended Libraries
```python
# For text extraction
PyPDF2>=3.0.0
pdfplumber>=0.9.0

# For OCR (scanned PDFs)
pdf2image>=1.16.0
pytesseract>=0.3.10

# For table extraction
tabula-py>=2.7.0
camelot-py>=0.11.0
```

### Conda Environment
- **Name**: `document_workspace`
- **Python**: 3.11

### Usage Example
```python
import pdfplumber

def extract_pdf_text(pdf_path):
    with pdfplumber.open(pdf_path) as pdf:
        text = ""
        for page in pdf.pages:
            text += page.extract_text() or ""
    return text

def extract_pdf_tables(pdf_path):
    with pdfplumber.open(pdf_path) as pdf:
        tables = []
        for page in pdf.pages:
            tables.extend(page.extract_tables())
    return tables
```

### Target PDFs in Workspace
```
Fw_ IMPORTANT_ Llistat Temes TFG 2025-26/
├── Temes TFG Grau en Biotecnologia 2025-2026_v1.pdf
├── Temes TFG Grau en Ciències Biomèdiques 2025-2026_v1.pdf
├── Temes TFG Grau en Enginyeria en Tecnologies Industrials 2025-2026_v1.pdf
├── Temes TFG Grau en Enginyeria Química 2025-2026_v1.pdf
└── Temes TFG Grau en Química 2025-2026_v1.pdf
```

---

## 📊 PowerPoint Reader MCP Server

### Purpose
Extracts text, notes, and structure from PowerPoint presentations.

### Recommended Libraries
```python
python-pptx>=0.6.21
```

### Usage Example
```python
from pptx import Presentation

def extract_pptx_content(pptx_path):
    prs = Presentation(pptx_path)
    content = []
    
    for slide_num, slide in enumerate(prs.slides, 1):
        slide_content = {
            "slide": slide_num,
            "shapes": [],
            "notes": ""
        }
        
        for shape in slide.shapes:
            if shape.has_text_frame:
                text = "\n".join([p.text for p in shape.text_frame.paragraphs])
                if text.strip():
                    slide_content["shapes"].append(text)
        
        if slide.has_notes_slide:
            notes = slide.notes_slide.notes_text_frame.text
            slide_content["notes"] = notes
            
        content.append(slide_content)
    
    return content
```

---

## 📝 Word Document Reader MCP Server

### Purpose
Extracts text, tables, and structure from Word documents (.docx).

### Recommended Libraries
```python
python-docx>=0.8.11
```

### Usage Example
```python
from docx import Document

def extract_docx_content(docx_path):
    doc = Document(docx_path)
    content = {
        "paragraphs": [],
        "tables": [],
        "headings": []
    }
    
    for para in doc.paragraphs:
        if para.style.name.startswith('Heading'):
            content["headings"].append({
                "level": para.style.name,
                "text": para.text
            })
        elif para.text.strip():
            content["paragraphs"].append(para.text)
    
    for table in doc.tables:
        table_data = []
        for row in table.rows:
            row_data = [cell.text for cell in row.cells]
            table_data.append(row_data)
        content["tables"].append(table_data)
    
    return content
```

### Target Documents in Workspace
```
TFGs.docx
TFG_Ale&Nat.docx
TFG with Nuria.docx
Reaearch plan_Natalia&Ale TFG_mike.docx
TripAdviser restaurant project .docx
```

---

## 🗺️ Mind Map Parser

### Purpose
Parses FreeMind (.mm) and JSON mind map files to extract hierarchical structure.

### Target Files
```
all iqs engineering mind map.mm          # FreeMind format
NotebookLM Mind Map.json                  # JSON format (from NotebookLM)
NotebookLM Mind Map - entire IQS engineering dept.png  # Image version
```

### FreeMind XML Parser
```python
import xml.etree.ElementTree as ET

def parse_freemind(mm_path):
    tree = ET.parse(mm_path)
    root = tree.getroot()
    
    def parse_node(node):
        result = {
            "text": node.get("TEXT", ""),
            "children": []
        }
        for child in node.findall("node"):
            result["children"].append(parse_node(child))
        return result
    
    map_node = root.find("node")
    return parse_node(map_node) if map_node else {}
```

---

## 🔧 Environment Setup

### Create document_workspace Environment
```powershell
conda create -n document_workspace python=3.11 -y
conda activate document_workspace

# Install core dependencies
pip install anthropic pillow PyPDF2 pdfplumber python-pptx python-docx tabula-py

# For OCR support (optional)
pip install pdf2image pytesseract
```

### VS Code Settings
`.vscode/settings.json`:
```json
{
    "python.defaultInterpreterPath": "C:\\Users\\Michael\\.conda\\envs\\document_workspace\\python.exe",
    "python.condaPath": "C:\\ProgramData\\anaconda3\\Scripts\\conda.exe"
}
```

---

## 📋 Agent Workflow for TFG Mind Map

### Step 1: Extract Mind Map Structure ✅ COMPLETED
1. Parsed `all iqs engineering mind map.mm` (FreeMind XML) for hierarchical categories
2. Extracted 9 main research areas with subtopics
3. Categories: Biomedical, Tissue Engineering, Disease Mechanisms, Enzyme Engineering, Biotechnology, Microbiology, AI/ML, Computational Methods, Pharmacy, Nutrition, Medicinal Chemistry, Chemical Synthesis, Materials, Sustainability, Pollution, Process Engineering, Industrial Engineering, Analytical Methods

### Step 2: Extract TFG Data from PDFs ✅ COMPLETED
1. Read all 5 TFG PDFs from `Fw_ IMPORTANT_ Llistat Temes TFG 2025-26/`
2. Extracted: Title, Description, Supervisor(s)/PI(s), Keywords, Subtopics
3. Data stored in `iqs_tfg_explorer/data.js`

### Step 3: Match TFGs to Mind Map Categories ✅ COMPLETED
1. Used keyword matching and semantic similarity
2. Associated each TFG with its category branch
3. Created 17 research areas with 70+ topics

### Step 4: Generate Expandable Mind Map ✅ COMPLETED (Dec 5, 2025)
1. Created interactive HTML/JS visualization in `iqs_tfg_explorer/`
2. **Two view modes**: Card View and Tree Mind Map View
3. Each node expands to reveal:
   - Category → Topic Title → Supervisors/PIs
   - Click topic to reveal full TFG description in modal
4. Features:
   - Search by topic, keyword, or lecturer name
   - Filter by research category
   - Lecturer directory panel
   - Responsive design

### Step 5: GitHub Repository ✅ COMPLETED (Dec 5, 2025)
1. Created GitHub repository: `mbhaylett23/IQS_TFG_interactive`
2. Initialized git in `iqs_tfg_explorer/` folder
3. Committed all 4 files (app.js, data.js, index.html, styles.css)
4. Pushed to GitHub: https://github.com/mbhaylett23/IQS_TFG_interactive

### Step 6: Firebase Deployment 🔄 IN PROGRESS (Stopped Dec 5, 2025)
**Status**: Firebase CLI installed, logged in, `firebase init hosting` started

**Where we stopped**:
- Firebase is asking for a unique project ID (6-30 characters)
- Suggested name: `iqs-tfg-explorer` or `iqs-tfg-interactive`

**To resume**:
1. Type a project ID (e.g., `iqs-tfg-explorer`) and press Enter
2. Answer the remaining questions:
   - Public directory: `.` (current directory, since files are in root)
   - Configure as single-page app: `No`
   - Set up automatic builds with GitHub: `Yes`
3. Run `firebase deploy` to publish

**Or restart from scratch**:
```powershell
cd "c:\Users\mbruy\OneDrive - IQS\TFG\iqs_tfg_explorer"
firebase init hosting
```

---

## 🎯 Current Project Status

| Component | Status | Date |
|-----------|--------|------|
| Image Reader MCP | ✅ Complete | - |
| PDF Reader MCP | ✅ Complete | - |
| PPTX Reader MCP | 🔄 Ready to implement | - |
| DOCX Reader MCP | 🔄 Ready to implement | - |
| Mind Map Parser | ✅ Complete | - |
| Data Extraction (data.js) | ✅ Complete | - |
| Expandable Mind Map UI | ✅ Complete | Dec 5, 2025 |
| View Toggle (Cards/Tree) | ✅ Complete | Dec 5, 2025 |
| Supervisor/PI Display | ✅ Complete | Dec 5, 2025 |
| Clickable TFG Descriptions | ✅ Complete | Dec 5, 2025 |
| GitHub Repository | ✅ Complete | Dec 5, 2025 |
| Firebase Deployment | 🔄 In Progress | Dec 5, 2025 |

---

## 🚀 Next Steps: GitHub & Firebase Deployment

### 1. Create GitHub Repository
```powershell
# Navigate to the explorer folder
cd "c:\Users\mbruy\OneDrive - IQS\TFG\iqs_tfg_explorer"

# Initialize git
git init

# Add all files
git add .

# Initial commit
git commit -m "Initial commit: IQS TFG Research Explorer"

# Create repo on GitHub (via web or CLI)
# Then add remote and push
git remote add origin https://github.com/YOUR_USERNAME/iqs-tfg-explorer.git
git branch -M main
git push -u origin main
```

### 2. Firebase Hosting Setup
```powershell
# Install Firebase CLI (if not installed)
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase in project
firebase init hosting

# Select options:
# - Use existing project or create new
# - Public directory: . (current directory)
# - Single-page app: No
# - GitHub automatic deploys: Yes

# Deploy manually
firebase deploy
```

### 3. GitHub Actions for Auto-Deploy
Firebase can be configured to automatically deploy when you push to GitHub:
1. During `firebase init`, select "Set up automatic builds and deploys with GitHub"
2. Firebase will create a GitHub Action workflow
3. Every push to `main` will trigger a new deployment

### 4. Expected Firebase URL
After deployment, the app will be available at:
- `https://YOUR-PROJECT-ID.web.app`
- `https://YOUR-PROJECT-ID.firebaseapp.com`

---

## 📂 Files to Deploy (iqs_tfg_explorer/)

```
iqs_tfg_explorer/
├── index.html      # Main HTML with view toggle
├── styles.css      # CSS with tree mind map styles
├── app.js          # JavaScript with tree rendering
└── data.js         # Research data (70+ topics, 70+ lecturers)
```

---

## 📚 References

- [Anthropic API Documentation](https://docs.anthropic.com/)
- [Model Context Protocol](https://modelcontextprotocol.io/)
- [pdfplumber Documentation](https://github.com/jsvine/pdfplumber)
- [python-pptx Documentation](https://python-pptx.readthedocs.io/)
- [python-docx Documentation](https://python-docx.readthedocs.io/)
- [Firebase Hosting Documentation](https://firebase.google.com/docs/hosting)
- [GitHub Actions for Firebase](https://github.com/FirebaseExtended/action-hosting-deploy)
