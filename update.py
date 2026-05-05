import json, os

data = {
  'en': { 'title': 'CTO & Founder <span class="text-primary-fixed-dim text-lg">@ Lampeye Studios</span>', 'date': 'August 2025 — Present', 'desc': 'Founding member and Chief Technology Officer, leading technical strategy and studio development operations.' },
  'pt': { 'title': 'CTO e Fundador <span class="text-primary-fixed-dim text-lg">@ Lampeye Studios</span>', 'date': 'Agosto 2025 — Presente', 'desc': 'Membro fundador e Diretor de Tecnologia, liderando a estratégia técnica e as operações de desenvolvimento do estúdio.' },
  'es': { 'title': 'CTO y Fundador <span class="text-primary-fixed-dim text-lg">@ Lampeye Studios</span>', 'date': 'Agosto 2025 — Presente', 'desc': 'Miembro fundador y Director de Tecnología, liderando la estrategia técnica y las operaciones de desarrollo del estudio.' },
  'de': { 'title': 'CTO & Gründer <span class="text-primary-fixed-dim text-lg">@ Lampeye Studios</span>', 'date': 'August 2025 — Heute', 'desc': 'Gründungsmitglied und Chief Technology Officer, leitend in der technischen Strategie und den Entwicklungsabläufen des Studios.' }
}

for lang, entry in data.items():
    path = f'lang/{lang}.json'
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            content = json.load(f)
        content['exp.job0.title'] = entry['title']
        content['exp.job0.date'] = entry['date']
        content['exp.job0.desc'] = entry['desc']
        with open(path, 'w', encoding='utf-8') as f:
            json.dump(content, f, ensure_ascii=False, indent=2)
