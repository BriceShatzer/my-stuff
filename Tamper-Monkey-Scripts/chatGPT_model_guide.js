// ==UserScript==
// @name         ChatGPT model chooser
// @namespace    chatgpt.com/
// @version      2026-09-13
// @description  Adds a lower-right guide for choosing ChatGPT models
// @author       https://github.com/BriceShatzer
// @match        https://chatgpt.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=chatgpt.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    if (document.getElementById('chatgpt-model-chooser-root')) return;

    const root = document.createElement('div');
    root.id = 'chatgpt-model-chooser-root';
    const shadow = root.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
        <style>
            #open-button {
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
                width: min(660px, 100%);
                max-height: 90vh;
                overflow: auto;
                padding: 24px;
                border-radius: 16px;
                background: #fff;
                color: #171717;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
            }

            h2 {
                margin: 0 42px 6px 0;
                font-size: 21px;
            }

            h3 {
                margin: 20px 0 8px;
                font-size: 15px;
            }

            .intro, .note {
                margin: 0;
                color: #555;
                font-size: 14px;
                line-height: 1.45;
            }

            .models {
                display: grid;
                gap: 10px;
                margin-top: 14px;
            }

            .model {
                padding: 13px;
                border: 1px solid #e5e5e5;
                border-radius: 10px;
                background: #fafafa;
                font-size: 14px;
                line-height: 1.45;
            }

            .model-name {
                display: flex;
                flex-wrap: wrap;
                align-items: baseline;
                gap: 8px;
                margin-bottom: 5px;
            }

            .model-name strong {
                font-size: 16px;
            }

            .tag {
                color: #666;
                font-size: 12px;
                font-weight: 600;
                text-transform: uppercase;
            }

            .claude {
                color: #8a4b20;
                font-size: 13px;
                font-weight: 600;
            }

            p {
                margin: 0 0 5px;
            }

            .avoid {
                color: #666;
            }

            #close-button {
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

            #close-button:hover {
                background: #eee;
            }

            @media (prefers-color-scheme: dark) {
                #open-button {
                    border-color: rgba(255, 255, 255, 0.2);
                    background: rgba(35, 35, 35, 0.96);
                    color: #fff;
                }

                #modal {
                    background: #212121;
                    color: #f5f5f5;
                }

                .intro, .note, .avoid, .tag {
                    color: #bbb;
                }

                .claude {
                    color: #e7a673;
                }

                .model {
                    border-color: #444;
                    background: #2a2a2a;
                }

                #close-button {
                    color: #ddd;
                }

                #close-button:hover {
                    background: #3a3a3a;
                }
            }
        </style>

        <button id="open-button" type="button" title="Choose a ChatGPT model">
            🤖
        </button>

        <div id="backdrop">
            <section id="modal" role="dialog" aria-modal="true" aria-labelledby="title">
                <button id="close-button" type="button" aria-label="Close">×</button>

                <h2 id="title">Which model should I use?</h2>
                <p class="intro">
                    Start with Terra unless your task clearly fits another model.
                    Use the least powerful model that will reliably do the job.
                </p>

                <div class="models">
                    <article class="model">
                        <div class="model-name">
                            <strong>Astra</strong>
                            <span class="tag">Hardest work</span>
                            <span class="claude">≈ Claude Fable</span>
                        </div>
                        <p><strong>Choose for:</strong> complex end-to-end workflows across code, apps, and research that need sustained reasoning, judgment, multiple steps, and tool use.</p>
                        <p class="avoid"><strong>Skip for:</strong> routine work or narrow requests with a clear answer.</p>
                    </article>

                    <article class="model">
                        <div class="model-name">
                            <strong>Sol</strong>
                            <span class="tag">Complex / open-ended</span>
                            <span class="claude">≈ Claude Opus</span>
                        </div>
                        <p><strong>Choose for:</strong> ambiguous, difficult, or high-value work that needs extra analysis, judgment, or polish—such as complex code changes, deep research, or polished documents.</p>
                        <p class="avoid"><strong>Skip for:</strong> everyday work where Terra can get you a good result faster.</p>
                    </article>

                    <article class="model">
                        <div class="model-name">
                            <strong>Terra</strong>
                            <span class="tag">Everyday default</span>
                            <span class="claude">≈ Claude Sonnet</span>
                        </div>
                        <p><strong>Choose for:</strong> normal coding, drafting, analysis, troubleshooting, and most tasks that need solid reasoning and tool use.</p>
                        <p class="avoid"><strong>Move up to Sol or Astra when:</strong> the work is unusually ambiguous, multi-stage, high-stakes, or needs careful judgment.</p>
                    </article>

                    <article class="model">
                        <div class="model-name">
                            <strong>Luna</strong>
                            <span class="tag">Fast / repeatable</span>
                            <span class="claude">≈ Claude Haiku</span>
                        </div>
                        <p><strong>Choose for:</strong> clear, repeatable, high-volume tasks: extraction, classification, transformation, and structured summaries.</p>
                        <p class="avoid"><strong>Skip for:</strong> vague requests, deep investigation, or complex code changes.</p>
                    </article>
                </div>

                <h3>Reasoning effort</h3>
                <p class="note">
                    Use <strong>Light</strong> for quick, well-scoped tasks;
                    <strong>Medium</strong> for tasks needing planning; and
                    <strong>High / Extra High</strong> for difficult multi-step work with
                    sources, tradeoffs, or important checks.
                </p>

                <p class="note" style="margin-top: 12px;">
                    Claude comparisons are approximate product-positioning equivalents,
                    not benchmark claims or exact feature matches.
                </p>
            </section>
        </div>
    `;

    document.body.append(root);

    const openButton = shadow.getElementById('open-button');
    const backdrop = shadow.getElementById('backdrop');
    const closeButton = shadow.getElementById('close-button');

    const closeModal = () => {
        backdrop.classList.remove('open');
        openButton.focus();
    };

    openButton.addEventListener('click', () => {
        backdrop.classList.add('open');
        closeButton.focus();
    });

    closeButton.addEventListener('click', closeModal);

    backdrop.addEventListener('click', (event) => {
        if (event.target === backdrop) closeModal();
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && backdrop.classList.contains('open')) {
            closeModal();
        }
    });
})();