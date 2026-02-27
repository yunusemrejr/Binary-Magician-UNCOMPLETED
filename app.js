// Binary Encoder Pro - Main Application
// Modern vanilla JavaScript implementation

class BinaryEncoderPro {
    constructor() {
        this.currentFormat = 'binary';
        this.history = this.loadHistory();
        this.initializeElements();
        this.attachEventListeners();
        this.updateStats();
    }

    initializeElements() {
        // Input/Output elements
        this.inputText = document.getElementById('input-text');
        this.outputText = document.getElementById('output-text');
        this.formatSelector = document.getElementById('encoding-format');
        
        // Buttons
        this.encodeBtn = document.getElementById('encode-btn');
        this.decodeBtn = document.getElementById('decode-btn');
        this.copyBtn = document.getElementById('copy-btn');
        this.downloadBtn = document.getElementById('download-btn');
        this.clearInputBtn = document.getElementById('clear-input-btn');
        this.swapBtn = document.getElementById('swap-btn');
        this.clearAllBtn = document.getElementById('clear-all-btn');
        this.historyBtn = document.getElementById('history-btn');
        this.clearHistoryBtn = document.getElementById('clear-history-btn');
        
        // Stats elements
        this.inputChars = document.getElementById('input-chars');
        this.inputBytes = document.getElementById('input-bytes');
        this.outputChars = document.getElementById('output-chars');
        
        // History elements
        this.historySection = document.getElementById('history-section');
        this.historyList = document.getElementById('history-list');
        
        // Toast
        this.toast = document.getElementById('toast');
    }

    attachEventListeners() {
        // Format selector
        this.formatSelector.addEventListener('change', (e) => {
            this.currentFormat = e.target.value;
            this.showToast(`Switched to ${this.getFormatName()} encoding`, 'success');
        });

        // Input text changes
        this.inputText.addEventListener('input', () => this.updateStats());
        this.outputText.addEventListener('input', () => this.updateOutputStats());

        // Button clicks
        this.encodeBtn.addEventListener('click', () => this.encode());
        this.decodeBtn.addEventListener('click', () => this.decode());
        this.copyBtn.addEventListener('click', () => this.copyToClipboard());
        this.downloadBtn.addEventListener('click', () => this.download());
        this.clearInputBtn.addEventListener('click', () => this.clearInput());
        this.swapBtn.addEventListener('click', () => this.swapInputOutput());
        this.clearAllBtn.addEventListener('click', () => this.clearAll());
        this.historyBtn.addEventListener('click', () => this.toggleHistory());
        this.clearHistoryBtn.addEventListener('click', () => this.clearHistory());

        // Enter key to encode
        this.inputText.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'Enter') {
                this.encode();
            }
        });
    }

    // Encoding Functions
    encode() {
        const input = this.inputText.value.trim();
        
        if (!input) {
            this.showToast('Please enter some text to encode', 'error');
            return;
        }

        let output = '';
        
        try {
            switch (this.currentFormat) {
                case 'binary':
                    output = this.textToBinary(input);
                    break;
                case 'hex':
                    output = this.textToHex(input);
                    break;
                case 'base64':
                    output = this.textToBase64(input);
                    break;
                case 'url':
                    output = this.textToURL(input);
                    break;
            }
            
            this.outputText.value = output;
            this.updateOutputStats();
            this.addToHistory(input, output, this.currentFormat, 'encode');
            this.showToast('Text encoded successfully!', 'success');
        } catch (error) {
            this.showToast('Encoding failed: ' + error.message, 'error');
        }
    }

    decode() {
        const input = this.outputText.value.trim();
        
        if (!input) {
            this.showToast('No encoded text to decode', 'error');
            return;
        }

        let output = '';
        
        try {
            switch (this.currentFormat) {
                case 'binary':
                    output = this.binaryToText(input);
                    break;
                case 'hex':
                    output = this.hexToText(input);
                    break;
                case 'base64':
                    output = this.base64ToText(input);
                    break;
                case 'url':
                    output = this.urlToText(input);
                    break;
            }
            
            this.inputText.value = output;
            this.updateStats();
            this.showToast('Text decoded successfully!', 'success');
        } catch (error) {
            this.showToast('Decoding failed: ' + error.message, 'error');
        }
    }

    // Binary encoding/decoding
    textToBinary(text) {
        return text.split('').map(char => {
            return char.charCodeAt(0).toString(2).padStart(8, '0');
        }).join(' ');
    }

    binaryToText(binary) {
        const binaryArray = binary.trim().split(/\s+/);
        return binaryArray.map(bin => {
            return String.fromCharCode(parseInt(bin, 2));
        }).join('');
    }

    // Hexadecimal encoding/decoding
    textToHex(text) {
        return text.split('').map(char => {
            return char.charCodeAt(0).toString(16).toUpperCase().padStart(2, '0');
        }).join(' ');
    }

    hexToText(hex) {
        const hexArray = hex.trim().split(/\s+/);
        return hexArray.map(h => {
            return String.fromCharCode(parseInt(h, 16));
        }).join('');
    }

    // Base64 encoding/decoding
    textToBase64(text) {
        return btoa(unescape(encodeURIComponent(text)));
    }

    base64ToText(base64) {
        return decodeURIComponent(escape(atob(base64)));
    }

    // URL encoding/decoding
    textToURL(text) {
        return encodeURIComponent(text);
    }

    urlToText(url) {
        return decodeURIComponent(url);
    }

    // Utility Functions
    updateStats() {
        const text = this.inputText.value;
        const charCount = text.length;
        const byteCount = new Blob([text]).size;
        
        this.inputChars.textContent = `${charCount} character${charCount !== 1 ? 's' : ''}`;
        this.inputBytes.textContent = `${byteCount} byte${byteCount !== 1 ? 's' : ''}`;
    }

    updateOutputStats() {
        const text = this.outputText.value;
        const charCount = text.length;
        
        this.outputChars.textContent = `${charCount} character${charCount !== 1 ? 's' : ''}`;
    }

    copyToClipboard() {
        const text = this.outputText.value;
        
        if (!text) {
            this.showToast('Nothing to copy', 'error');
            return;
        }

        navigator.clipboard.writeText(text).then(() => {
            this.showToast('Copied to clipboard!', 'success');
        }).catch(() => {
            // Fallback method
            this.outputText.select();
            document.execCommand('copy');
            this.showToast('Copied to clipboard!', 'success');
        });
    }

    download() {
        const text = this.outputText.value;
        
        if (!text) {
            this.showToast('Nothing to download', 'error');
            return;
        }

        const formatName = this.getFormatName().toLowerCase().replace(/\s+/g, '_');
        const filename = `encoded_${formatName}_${Date.now()}.txt`;
        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        this.showToast('File downloaded successfully!', 'success');
    }

    clearInput() {
        this.inputText.value = '';
        this.updateStats();
        this.showToast('Input cleared', 'success');
    }

    clearAll() {
        this.inputText.value = '';
        this.outputText.value = '';
        this.updateStats();
        this.updateOutputStats();
        this.showToast('All fields cleared', 'success');
    }

    swapInputOutput() {
        const temp = this.inputText.value;
        this.inputText.value = this.outputText.value;
        this.outputText.value = temp;
        this.updateStats();
        this.updateOutputStats();
        this.showToast('Input and output swapped', 'success');
    }

    // History Management
    addToHistory(input, output, format, action) {
        const historyItem = {
            id: Date.now(),
            input: input.substring(0, 100),
            output: output.substring(0, 100),
            format: format,
            action: action,
            timestamp: new Date().toLocaleString()
        };

        this.history.unshift(historyItem);
        
        // Keep only last 20 items
        if (this.history.length > 20) {
            this.history = this.history.slice(0, 20);
        }

        this.saveHistory();
        this.renderHistory();
    }

    loadHistory() {
        try {
            const saved = localStorage.getItem('binaryEncoderHistory');
            return saved ? JSON.parse(saved) : [];
        } catch {
            return [];
        }
    }

    saveHistory() {
        try {
            localStorage.setItem('binaryEncoderHistory', JSON.stringify(this.history));
        } catch (error) {
            console.error('Failed to save history:', error);
        }
    }

    renderHistory() {
        if (this.history.length === 0) {
            this.historyList.innerHTML = '<p class="empty-state">No conversion history yet. Start encoding to see your history here!</p>';
            return;
        }

        this.historyList.innerHTML = this.history.map(item => `
            <div class="history-item" data-id="${item.id}">
                <div class="history-item-header">
                    <span class="history-format">${this.getFormatName(item.format)} - ${item.action}</span>
                    <span class="history-time">${item.timestamp}</span>
                </div>
                <div class="history-content">
                    ${item.input} → ${item.output}
                </div>
            </div>
        `).join('');

        // Add click listeners to history items
        document.querySelectorAll('.history-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const id = parseInt(e.currentTarget.dataset.id);
                this.loadHistoryItem(id);
            });
        });
    }

    loadHistoryItem(id) {
        const item = this.history.find(h => h.id === id);
        if (item) {
            this.inputText.value = item.input;
            this.outputText.value = item.output;
            this.formatSelector.value = item.format;
            this.currentFormat = item.format;
            this.updateStats();
            this.updateOutputStats();
            this.showToast('History item loaded', 'success');
            this.toggleHistory();
        }
    }

    toggleHistory() {
        const isVisible = this.historySection.style.display !== 'none';
        this.historySection.style.display = isVisible ? 'none' : 'block';
        
        if (!isVisible) {
            this.renderHistory();
            this.historyBtn.textContent = '✕ Close History';
        } else {
            this.historyBtn.textContent = '📜 View History';
        }
    }

    clearHistory() {
        if (confirm('Are you sure you want to clear all conversion history?')) {
            this.history = [];
            this.saveHistory();
            this.renderHistory();
            this.showToast('History cleared', 'success');
        }
    }

    // Toast Notifications
    showToast(message, type = 'success') {
        this.toast.textContent = message;
        this.toast.className = `toast ${type} show`;
        
        setTimeout(() => {
            this.toast.classList.remove('show');
        }, 3000);
    }

    getFormatName(format = this.currentFormat) {
        const names = {
            'binary': 'Binary (ASCII/UTF-8)',
            'hex': 'Hexadecimal',
            'base64': 'Base64',
            'url': 'URL Encoding'
        };
        return names[format] || format;
    }
}

// Initialize the application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new BinaryEncoderPro();
});
