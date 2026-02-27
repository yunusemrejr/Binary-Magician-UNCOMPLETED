# Binary Encoder Pro

A modern, professional text encoding and decoding tool built with vanilla JavaScript, HTML5, and CSS3.

## Features

### Multiple Encoding Formats
- **Binary (ASCII/UTF-8)**: Convert text to binary representation
- **Hexadecimal**: Encode text as hexadecimal values
- **Base64**: Standard Base64 encoding
- **URL Encoding**: Percent-encoding for URLs

### Core Functionality
- ✅ Real-time text encoding and decoding
- ✅ Bidirectional conversion (encode ↔ decode)
- ✅ Character and byte statistics
- ✅ Copy to clipboard with one click
- ✅ Download encoded results as text files
- ✅ Conversion history with localStorage persistence
- ✅ Swap input/output functionality
- ✅ Clean, modern, responsive UI

### User Experience
- 🎨 Beautiful gradient design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast, lightweight (no external dependencies)
- 💾 Automatic history saving (last 20 conversions)
- 🔔 Toast notifications for user feedback
- ⌨️ Keyboard shortcuts (Ctrl+Enter to encode)

## Usage

### Basic Encoding
1. Enter your text in the "Input Text" area
2. Select your desired encoding format from the dropdown
3. Click "Encode" button
4. View the encoded result in the "Encoded Output" area

### Decoding
1. Paste encoded text in the "Encoded Output" area
2. Ensure the correct format is selected
3. Click "Decode" button
4. View the decoded text in the "Input Text" area

### Quick Actions
- **Copy**: Copy encoded output to clipboard
- **Download**: Save encoded output as a text file
- **Swap**: Exchange input and output content
- **Clear All**: Reset both input and output fields
- **View History**: Access your recent conversions

## Examples

### Binary Encoding
```
Input:  Hello
Output: 01001000 01100101 01101100 01101100 01101111
```

### Hexadecimal Encoding
```
Input:  Hello
Output: 48 65 6C 6C 6F
```

### Base64 Encoding
```
Input:  Hello
Output: SGVsbG8=
```

### URL Encoding
```
Input:  Hello World!
Output: Hello%20World%21
```

## Technical Details

### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **Vanilla JavaScript**: ES6+ features, no external dependencies
- **LocalStorage API**: For history persistence
- **Clipboard API**: For copy functionality

### Browser Compatibility
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)

### File Structure
```
binary-encoder-pro/
├── index.html          # Main HTML structure
├── styles.css          # All styling and responsive design
├── app.js              # Application logic and encoding functions
├── README.md           # Documentation
└── LICENSE             # MIT License
```

## Features Breakdown

### Encoding Functions
- `textToBinary()`: Converts text to 8-bit binary representation
- `textToHex()`: Converts text to hexadecimal values
- `textToBase64()`: Encodes text using Base64 algorithm
- `textToURL()`: URL-encodes text using percent-encoding

### Decoding Functions
- `binaryToText()`: Converts binary back to text
- `hexToText()`: Converts hexadecimal back to text
- `base64ToText()`: Decodes Base64 encoded text
- `urlToText()`: Decodes URL-encoded text

### Utility Features
- Character and byte counting
- Conversion history management
- Toast notifications
- File download generation
- Clipboard operations

## Development

### Running Locally
Simply open `index.html` in a modern web browser. No build process or server required!

### Customization
The app uses CSS custom properties (variables) for easy theming:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --success-color: #48bb78;
    /* ... more variables */
}
```

## Performance
- **Zero dependencies**: No jQuery, Bootstrap, or other libraries
- **Lightweight**: Total size < 50KB
- **Fast**: Instant encoding/decoding
- **Efficient**: Optimized DOM manipulation

## Privacy
- All processing happens in your browser
- No data is sent to any server
- History is stored locally in your browser
- No tracking or analytics

## License
MIT License - Copyright (c) 2026 Yunus E.V.

## Credits
Created by Yunus E.V. (yunusemrevurgun@hotmail.com)

Modernized and enhanced version of the original "Binary Magician" project.

## Changelog

### Version 2.0 (2026)
- Complete rewrite with modern vanilla JavaScript
- Removed all external dependencies (jQuery, Bootstrap, Bootbox)
- Added multiple encoding formats (Hex, Base64, URL)
- Implemented bidirectional encoding/decoding
- Added conversion history with localStorage
- Modern, responsive UI design
- Copy to clipboard functionality
- Download encoded results
- Toast notifications
- Keyboard shortcuts
- Character/byte statistics
- Mobile-friendly responsive design

### Version 1.0 (2022)
- Original "Binary Magician" release
- Basic binary encoding functionality
- SQL file generation concept
