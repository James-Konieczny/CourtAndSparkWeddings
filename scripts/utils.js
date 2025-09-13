// Utility functions for safe DOM manipulation
const Utils = {
    // Create element with attributes
    createElement: (tag, attributes = {}, content = null) => {
        const element = document.createElement(tag);
        
        // Set attributes
        Object.keys(attributes).forEach(key => {
            if (key === 'className') {
                element.className = attributes[key];
            } else if (key === 'htmlFor') {
                element.htmlFor = attributes[key];
            } else {
                element.setAttribute(key, attributes[key]);
            }
        });
        
        // Set content
        if (content !== null) {
            if (typeof content === 'string') {
                element.textContent = content;
            } else if (Array.isArray(content)) {
                content.forEach(child => {
                    if (typeof child === 'string') {
                        element.appendChild(document.createTextNode(child));
                    } else {
                        element.appendChild(child);
                    }
                });
            } else {
                element.appendChild(content);
            }
        }
        
        return element;
    },
    
    // Sanitize HTML content
    sanitizeHTML: (html) => {
        // Simple sanitization - in production, use a library like DOMPurify
        const temp = document.createElement('div');
        temp.textContent = html;
        return temp.innerHTML;
    },
    
    // Check if element exists
    elementExists: (id) => {
        return document.getElementById(id) !== null;
    },
    
    // Create document fragment from elements
    createFragment: (elements) => {
        const fragment = document.createDocumentFragment();
        elements.forEach(element => fragment.appendChild(element));
        return fragment;
    }
};