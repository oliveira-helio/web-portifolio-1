# 🎯 Guia Rápido de Personalização

## ⚡ Primeiros Passos (5 minutos)

### 1. Dados Pessoais (js/data.js)

**Atualize suas informações:**

- Nome e cargo
- Skills e níveis de proficiência
- Projetos com links reais
- Histórico profissional

### 2. Links Sociais (index.html)

**Linha 44-47:** Atualize seus links:

```html
<a href="https://github.com/SEU-USER" target="_blank">GitHub</a>
<a href="https://linkedin.com/in/SEU-USER" target="_blank">LinkedIn</a>
<a href="https://twitter.com/SEU-USER" target="_blank">Twitter</a>
<a href="mailto:SEU-EMAIL@example.com">Email</a>
```

### 3. Informações de Contato (index.html)

**Linha 138-150:** Atualize contatos:

```html
<span>seu-email@example.com</span>
<span>+55 (11) 99999-9999</span>
<span>Sua Cidade, Brasil</span>
```

### 4. Meta Tags (index.html)

**Linha 5-7:** Atualize SEO:

```html
<meta name="description" content="Sua descrição" />
<meta name="author" content="Seu Nome" />
<title>Seu Nome - Backend Developer</title>
```

## 🎨 Personalizações de Estilo

### Cores (css/styles.css - linha 12-22)

```css
--primary-color: #00ff88; /* Verde tecnológico */
--secondary-color: #0066ff; /* Azul moderno */
--accent: #ff0055; /* Rosa destaque */
```

**Sugestões de paletas:**

- **Azul profissional**: `#00D4FF`, `#0066CC`, `#FF00AA`
- **Roxo criativo**: `#9D4EDD`, `#5A189A`, `#00FFB7`
- **Vermelho intenso**: `#FF0055`, `#CC0044`, `#00FFAA`

## 📊 Adicionando Novos Projetos (js/data.js)

```javascript
{
    title: 'Nome do Projeto',
    description: 'Descrição detalhada',
    icon: '🚀', // Emoji do projeto
    tags: ['Node.js', 'MongoDB', 'Docker'],
    category: 'api', // api, microservices ou database
    github: 'https://github.com/user/repo',
    demo: 'https://demo.com'
}
```

## 👔 Adicionando Experiência (js/data.js)

```javascript
{
    date: '2024 - Presente',
    title: 'Seu Cargo',
    company: 'Nome da Empresa',
    description: 'O que você fez, conquistas, tecnologias...'
}
```

## 🔧 Adicionando Skills (js/data.js)

```javascript
{
    name: 'Nome da Tecnologia',
    icon: '🔥', // Emoji representativo
    level: 85, // 0-100
    description: 'Breve descrição'
}
```

## 🖼️ Adicionando sua Foto

1. Adicione sua foto na pasta `images/profile.jpg`
2. No `index.html` (linha ~84), substitua:

```html
<!-- Antes -->
<div class="image-placeholder">
  <i class="fas fa-user-tie"></i>
</div>

<!-- Depois -->
<img
  src="images/profile.jpg"
  alt="Seu Nome"
  style="width: 250px; height: 250px; border-radius: 50%; 
            box-shadow: 0 20px 60px rgba(0, 255, 136, 0.3);"
/>
```

## 📱 Formulário de Contato Real

### Opção 1: Formspree (Gratuito)

1. Cadastre-se em https://formspree.io/
2. No `index.html`, atualize o form:

```html
<form action="https://formspree.io/f/SEU-ID" method="POST">
  <!-- campos do formulário -->
</form>
```

### Opção 2: EmailJS

1. Cadastre-se em https://www.emailjs.com/
2. Adicione antes do `</body>`:

```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script>
  emailjs.init("SUA-PUBLIC-KEY");
</script>
```

## 🚀 Deploy no GitHub Pages

### Passo a Passo:

1. **Crie um repositório no GitHub**

   - Nome: `seu-usuario.github.io` (para site principal)
   - Ou qualquer nome para subdomínio

2. **Faça upload dos arquivos**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/seu-usuario/seu-repo.git
   git push -u origin main
   ```

3. **Ative GitHub Pages**

   - Settings > Pages
   - Source: `main` branch
   - Folder: `/ (root)`
   - Save

4. **Acesse seu site**
   - URL: `https://seu-usuario.github.io/nome-repo/`
   - Aguarde 2-5 minutos para propagar

## 🔍 Checklist Final

- [ ] Atualizei meu nome e cargo
- [ ] Atualizei todos os links sociais
- [ ] Adicionei meus projetos reais
- [ ] Atualizei minhas skills
- [ ] Coloquei meu histórico profissional
- [ ] Atualizei informações de contato
- [ ] Personalizei as cores (opcional)
- [ ] Adicionei minha foto (opcional)
- [ ] Testei em diferentes dispositivos
- [ ] Fiz deploy no GitHub Pages

## 💡 Dicas Profissionais

1. **Use números**: "Otimizou performance em 60%"
2. **Seja específico**: Mencione tecnologias e resultados
3. **Mantenha atualizado**: Adicione novos projetos regularmente
4. **Links funcionais**: Teste todos os links antes de publicar
5. **SEO**: Preencha bem as meta tags
6. **Performance**: Otimize imagens (< 200KB)
7. **Teste**: Veja em mobile, tablet e desktop

## 🎓 Melhorias Futuras

- Adicionar blog (Jekyll/Hugo)
- Integrar Google Analytics
- Adicionar certificações
- Seção de depoimentos
- Blog de artigos técnicos
- Dark/Light mode toggle
- Internacionalização (PT/EN)

## 📞 Precisa de Ajuda?

Erros comuns e soluções:

- **404 no GitHub Pages**: Verifique nome do branch
- **CSS não carrega**: Cheque caminhos relativos
- **JavaScript não funciona**: Veja Console (F12)
- **Mobile quebrado**: Teste responsividade

---

**Tempo estimado de personalização: 15-30 minutos**

Boa sorte com seu novo portfólio! 🚀
