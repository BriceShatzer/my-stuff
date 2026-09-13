// ==UserScript==
// @name         ChatGPT model guide
// @namespace    chatgpt.com/
// @version      2026-09-13
// @description  Adds a lower-right button with a concise ChatGPT model-family guide
// @author       https://github.com/BriceShatzer
// @match        https://chatgpt.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=chatgpt.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    if (document.getElementById('chatgpt-model-guide-root')) return;

    const root = document.createElement('div');
    root.id = 'chatgpt-model-guide-root';
    const shadow = root.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
        <style>
            #button {
                position: fixed;
                right: 16px;
                bottom: 16px;
                z-index: 2147483647;
                padding: 10px 12px;
                border: 1px solid rgba(0, 0, 0, 0.2);
                border-radius: 12px;
                background: rgba(255, 255, 255, 0.95);
                color: #111;
                box-shadow: 0 4px 16px rgba(0, 0, 0, 0.22);
                font: 22px/1 system-ui, sans-serif;
                cursor: pointer;
            }

            #backdrop {
                display: none;
                position: fixed;
                inset: 0;
                z-index: 2147483646;
                align-items: center;
                justify-content: center;
                padding: 20px;
                background: rgba(0, 0, 0, 0.5);
                font-family: system-ui, sans-serif;
            }

            #backdrop.open {
                display: flex;
            }

            #modal {
                position: relative;
                width: min(560px, 100%);
                padding: 24px;
                border-radius: 16px;
                background: #fff;
                color: #171717;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
            }

            h2 {
                margin: 0 36px 16px 0;
                font-size: 20px;
            }

            ul {
                display: grid;
                gap: 10px;
                margin: 0;
                padding: 0;
                list-style: none;
            }

            li {
                padding: 12px;
                border: 1px solid #e5e5e5;
                border-radius: 10px;
                background: #fafafa;
                font-size: 14px;
                line-height: 1.45;
            }

            strong {
                display: block;
                margin-bottom: 2px;
                font-size: 15px;
            }

            .note {
                margin: 16px 0 0;
                color: #555;
                font-size: 13px;
                line-height: 1.4;
            }

            #close {
                position: absolute;
                top: 14px;
                right: 14px;
                border: 0;
                border-radius: 8px;
                padding: 5px 9px;
                background: transparent;
                color: #444;
                font-size: 22px;
                line-height: 1;
                cursor: pointer;
            }

            #close:hover {
                background: #eee;
            }

            @media (prefers-color-scheme: dark) {
                #button {
                    border-color: rgba(255, 255, 255, 0.2);
                    background: rgba(35, 35, 35, 0.96);
                    color: #fff;
                }

                #modal {
                    background: #212121;
                    color: #f5f5f5;
                }

                li {
                    border-color: #444;
                    background: #2a2a2a;
                }

                .note {
                    color: #bbb;
                }

                #close {
                    color: #ddd;
                }

                #close:hover {
                    background: #3a3a3a;
                }
            }
        </style>

        <button id="button" type="button" title="ChatGPT model guide">🤖</button>

        <div id="backdrop">
            <section id="modal" role="dialog" aria-modal="true" aria-labelledby="title">
                <button id="close" type="button" aria-label="Close">×</button>
                <h2 id="title">ChatGPT model families</h2>

                <ul>
                    <li>
                        <strong>Astra</strong>
                        Highest capability. Use it for the most difficult, high-stakes, or long-running work where quality matters more than speed.
                    </li>
                    <li>
                        <strong>Sol</strong>
                        Strong all-purpose model for complex coding, research, analysis, design, and knowledge work.
                    </li>
                    <li>
                        <strong>Terra</strong>
                        Balanced capability, speed, and cost. A sensible choice for everyday work that still needs solid quality.
                    </li>
                    <li>
                        <strong>Luna</strong>
                        Fastest and lowest-cost option. Best for quick, straightforward requests and routine chat.
                    </li>
                </ul>

                <p class="note">
                    Roughly: Astra → Sol → Terra → Luna, from maximum capability to maximum speed/efficiency.
                </p>
            </section>
        </div>
    `;

    document.body.append(root);

    const button = shadow.getElementById('button');
    const backdrop = shadow.getElementById('backdrop');
    const close = shadow.getElementById('close');

    const closeModal = () => {
        backdrop.classList.remove('open');
        button.focus();
    };

    button.addEventListener('click', () => {
        backdrop.classList.add('open');
        close.focus();
    });

    close.addEventListener('click', closeModal);

    backdrop.addEventListener('click', (event) => {
        if (event.target === backdrop) closeModal();
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closeModal();
    });
})();