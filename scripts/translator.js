// translator.js
document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.querySelector('select');
    const elements       = document.querySelectorAll('[data-i18n-key]');

    window.setLanguage = async function(lang) {
        try {
            const res = await fetch(`lang/${lang}.json?t=${Date.now()}`);
            if (!res.ok) throw new Error(`Não encontrou lang/${lang}.json`);
            const t = await res.json();

            document.querySelectorAll('[data-i18n-key]').forEach(el => {
                const key = el.getAttribute('data-i18n-key');
                if (!key || !(key in t)) return;

                const txt = t[key];         // ex: "Olá, eu sou o {name}"
                if (txt.includes('{name}')) {
                    // pega o seu span existente
                    const span = el.querySelector('.name');
                    const nameHTML = span?.outerHTML ?? '{name}';
                    // injeta o texto trocando o placeholder
                    el.innerHTML = txt.replace('{name}', nameHTML);
                } else {
                    // texto puro
                    if (txt.includes('{name}')) {
                        const span = el.querySelector('.name');
                        const nameHTML = span?.outerHTML ?? '{name}';
                        el.innerHTML = txt.replace('{name}', nameHTML);
                    } else {
                        el.innerHTML = txt;      // <-- agora respeita <strong>, <em>, etc.
                    }
                }
            });

            // título da página (se existir no JSON)
            if (t.title) document.title = t.title;
        } catch (err) {
            console.error('Erro ao carregar traduções:', err);
        }
    }

    // inicial
    window.setLanguage(languageSelect ? languageSelect.value : 'en');

    // troca quando muda o select
    if (languageSelect) {
        languageSelect.addEventListener('change', e => {
            window.setLanguage(e.target.value);
        });
    }
});
