# link de acesso direto a pagina
- https://felipejesus-front.github.io/ui-ux-react-project/



# Download do arquivo figma feito para o projeto:
- https://github.com/felipejesus-front/ui-ux-react-project/raw/main/TesteComuniversePrototipagem.fig


## ℹ️ Como Usar

```bash
# Clone o repositório
$ git clone https://github.com/felipejesus-front/ui-ux-react-project.git
```

```bash
# Instale as dependencias dentro da pasta /ui-ux-react-project
$ npm install

# Rode o server em modo desenvolvedor
$ npm run dev

# O app irá abrir uma tela com a aplicação, Caso não abra, copie o link gerado no terminal e cole no seu navegador. A cada modificação salva a aplicação reiniciará
```

![image](https://user-images.githubusercontent.com/61891985/194900181-00aea072-a0b4-4f2b-8ec0-583f8d700e24.png)


## 🚀 Tecnologias

O projeto foi desenvolvido com as seguintes tecnologias:

> Global

-   [Npm](https://www.npmjs.com/)
-   [VSCode](https://code.visualstudio.com)
-   [Git Bash](https://gitforwindows.org/)

> Frontend Web
-   [ReactJS](https://reactjs.org)
-   [Vite](https://vitejs.dev/)
-   [Tailwindcss](https://tailwindcss.com/)
-   [Radix-UI](https://www.radix-ui.com/)


## ℹ️ Informações sobre o Projeto.

- Para uma estilização mais personalizada, foi utilizada a bibloteca [Tailwindcss](https://tailwindcss.com/) para construir parte a parte o css da aplicação. Não foram usados os [componentes](https://tailwindui.com/components) tailwind

- A maioria dos componentes foram criados do zero, porém, pelo tempo limite, utilizei a biblioteca [Radix-UI](https://www.radix-ui.com/) para alguns componentes específicos porém, só foram importadas as funcionalidades, toda estilização desses componentes foi feita do 0 com o [Tailwindcss](https://tailwindcss.com/). Irei lista-los abaixo:

## O componente para exibir ranking dos amigos
- A parte de Scroll deste componente foi feita com o radix, inclusive eles está sendo renderizado a partir de um objeto com os dados do usuário, basicamente já deixei funcional. lembrando que a estilização foi toda do 0, incluindo a barra de scroll.
- ![image](https://user-images.githubusercontent.com/61891985/194902461-af6563e4-c51f-45ab-b25f-28331a9e5007.png)

## Barra de progresso do card de categorias
- Esta barra já está funcional (estou passando os valores como props, porém isso pode ser facilmente alterado para pegar o dado de um json). Inclusive o label com a porcentagem também é atualizado junto com o valor passado
-![image](https://user-images.githubusercontent.com/61891985/194903458-87561d97-f1c1-43cd-ac69-2fbe1e62d073.png)

## Area com Tabs

- Esta área troca o conteudo conforme a aba selecionada, podendo ser feito um Fetch diferente pra cada parte ou mostrar informações divergentes.

- ![image](https://user-images.githubusercontent.com/61891985/194904002-639401eb-701b-4a1e-896e-eb0464b0d097.png)
 ![image](https://user-images.githubusercontent.com/61891985/194904106-647cdbbf-7e64-4db2-b69f-e9b8692a0ca8.png)

## Todo projeto está responsivo e utilizavel em dispositivos móveis. por enquanto é só isso. Agradeço a atenção e tenha um ótimo dia
