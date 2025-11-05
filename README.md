# 🚀 Portfolio Backend Developer

Um portfólio moderno e responsivo para desenvolvedores backend, otimizado para GitHub Pages.

## ✨ Características

- **Design Moderno**: Interface com tema dark, gradientes e animações suaves
- **Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Animações Suaves**: Efeitos de scroll, typewriter e transições elegantes
- **Performance Otimizada**: Carregamento rápido e código limpo
- **Fácil Customização**: Estrutura modular e dados centralizados

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3 (Flexbox, Grid, Animations)
- JavaScript (ES6+)
- Font Awesome Icons
- GitHub Pages

## 📁 Estrutura do Projeto

```
static/
│
├── index.html              # Página principal
│
├── css/
│   ├── styles.css         # Estilos principais
│   └── responsive.css     # Media queries e responsividade
│
└── js/
    ├── data.js            # Dados do portfólio (skills, projetos, experiência)
    ├── animations.js      # Efeitos e animações
    └── main.js            # Lógica principal da aplicação
```

## 🚀 Como Usar

### Deploy no GitHub Pages

1. **Fork ou Clone este repositório**

   ```bash
   git clone https://github.com/seu-usuario/portfolio.git
   ```

2. **Personalize seus dados**

   - Edite `js/data.js` com suas informações
   - Atualize links sociais no `index.html`
   - Substitua informações de contato

3. **Commit e Push**

   ```bash
   git add .
   git commit -m "Personalização do portfólio"
   git push origin main
   ```

4. **Ative o GitHub Pages**

   - Vá em Settings > Pages
   - Selecione a branch `main`
   - Selecione a pasta `/ (root)` ou `/static` dependendo da estrutura
   - Clique em Save

5. **Acesse seu site**
   - Seu portfólio estará disponível em: `https://seu-usuario.github.io/nome-do-repo/`

## 🎨 Personalização

### Cores

Edite as variáveis CSS em `css/styles.css`:

```css
:root {
  --primary-color: #00ff88; /* Cor principal */
  --secondary-color: #0066ff; /* Cor secundária */
  --bg-dark: #0a0e27; /* Fundo escuro */
  --accent: #ff0055; /* Cor de destaque */
}
```

### Dados Pessoais

Edite `js/data.js` para atualizar:

- **Skills**: Adicione ou remova habilidades técnicas
- **Projetos**: Inclua seus projetos com descrições e links
- **Experiência**: Atualize seu histórico profissional

### Conteúdo

No `index.html`, atualize:

- Título e descrição no `<head>`
- Links de redes sociais na seção hero
- Informações de contato
- Texto "Sobre Mim"

## 📱 Seções do Portfólio

1. **Home/Hero**: Apresentação com efeito typewriter
2. **Sobre**: Biografia e estatísticas
3. **Skills**: Habilidades técnicas com barras de progresso
4. **Projetos**: Galeria de projetos com filtros
5. **Experiência**: Timeline profissional
6. **Contato**: Formulário e informações de contato

## 🎯 Otimizações

- CSS minimalista e performático
- JavaScript modular e organizado
- Animações otimizadas com CSS
- Lazy loading de imagens
- Scroll suave e responsivo

## 📝 Customizações Avançadas

### Adicionar Imagens

1. Crie uma pasta `images/` na raiz
2. Adicione suas imagens
3. Atualize os caminhos no HTML:
   ```html
   <img src="images/foto.jpg" alt="Descrição" />
   ```

### Adicionar Google Analytics

No `<head>` do `index.html`:

```html
<!-- Google Analytics -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXXXX-X"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "UA-XXXXXXXXX-X");
</script>
```

### Integrar Formulário Real

Substitua o formulário de contato por:

- **Formspree**: https://formspree.io/
- **Netlify Forms**: https://www.netlify.com/products/forms/
- **EmailJS**: https://www.emailjs.com/

## 🐛 Resolução de Problemas

### Site não carrega no GitHub Pages

- Verifique se o repositório é público
- Confirme que o GitHub Pages está ativado
- Aguarde alguns minutos após o deploy

### Estilos não aparecem

- Verifique os caminhos dos arquivos CSS
- Certifique-se de que a estrutura de pastas está correta
- Limpe o cache do navegador (Ctrl + Shift + R)

### JavaScript não funciona

- Abra o Console do navegador (F12)
- Verifique erros no console
- Confirme que todos os arquivos JS estão carregando

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar e modificar como desejar!

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um Fork do projeto
2. Criar uma Branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a Branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📧 Contato

Seu Nome - [@seu_twitter](https://twitter.com/seu_twitter) - email@example.com

Link do Projeto: [https://github.com/seu-usuario/portfolio](https://github.com/seu-usuario/portfolio)

---

⭐ Se este projeto foi útil para você, considere dar uma estrela!

**Desenvolvido com 💚 por [Seu Nome]**
