 
// test/client.test.js
const { JSDOM } = require('jsdom');
const { expect } = require('chai');

describe('Client-side functionality', () => {
    let window, document;

    before(() => {
        const dom = new JSDOM(`<!DOCTYPE html>
            <html>
                <body>
                    <button id="startQuizBtn">Start Quiz</button>
                </body>
            </html>
        `);
        window = dom.window;
        document = window.document;
    });

    it('should navigate to quiz page on button click', () => {
        const startQuizBtn = document.getElementById('startQuizBtn');
        startQuizBtn.addEventListener('click', () => {
            window.location.href = 'quiz.html'; // Simulate navigation
        });
        
        startQuizBtn.click();
        expect(window.location.href).to.equal('quiz.html');
    });
});
