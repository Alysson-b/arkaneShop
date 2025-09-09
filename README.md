# ArkaneShop - Loja de Produtos e Suplementos ficticios

Bem-vindo ao **ArkaneShop**, uma aplicação web completa de e-commerce desenvolvida em **React**, onde os usuários podem navegar por produtos, adicionar itens ao carrinho, pesquisar e filtrar produtos, e finalizar pedidos.

---

## **Descrição do Projeto**

O **ArkaneShop** foi desenvolvido com o objetivo de proporcionar uma experiência de compra online prática e intuitiva. O site possui funcionalidades modernas de um e-commerce, incluindo:

- Barra de navegação com pesquisa de produtos.
- Menu de categorias filtráveis (Camisetas, Bermudas, Regatas, Overaized, Suplementos, Outros).
- Carrinho de compras persistente, que mantém os itens mesmo após recarregar a página.
- Adição de produtos com escolha de quantidade e tamanho.
- Remoção de itens individualmente ou finalização do pedido.
- Indicador visual da quantidade de itens no carrinho.
- Modal de login para usuários.

---

## **Funcionalidades**

1. **Carrinho de Compras**  
   - Adicionar produtos ao carrinho com quantidade e tamanho selecionados.  
   - Persistência do carrinho, mantendo os itens mesmo após recarregar a página.  
   - Finalizar pedido, limpando o carrinho.  
   - Botão de finalizar pedido só aparece quando há itens no carrinho.

2. **Pesquisa e Filtro de Produtos**  
   - Buscar produtos pelo nome.  
   - Filtrar por categorias clicando no menu de produtos.  
   - Fechamento automático do carrinho ao iniciar uma pesquisa ou selecionar uma categoria.

3. **Login e Usuário**  
   - Usuário precisa estar logado para adicionar produtos ao carrinho.  
   - Login simulado com persistência no LOCAL.  
   - Ícones de login e logout dinâmicos de acordo com o estado do usuário.

4. **Layout e Experiência do Usuário**  
   - Carrinho com botão de fechar sempre visível.  
   - Botão de finalizar pedido no rodapé do carrinho.  
   - Cards de produtos exibindo imagem, nome, descrição, preço, tamanho e quantidade.  
   

---

## **Tecnologias Utilizadas**

- **React.js** – Biblioteca JavaScript para construção da interface.    
- **localStorage** – Para persistência do carrinho e estado do usuário.  
- **Font Awesome** – Ícones utilizados para carrinho, usuário e menu.  
- **Vercel** – Hospedagem futura do projeto (opcional).  

