import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'pt-br',
  title: 'Karaokê e Bar',
  description: 'O lugar perfeito para reunir amigos, cantar suas músicas favoritas e criar momentos inesquecíveis.',

  themeConfig: {
    nav: [
      { text: 'Introdução', link: '/introducao' },
      { text: 'Descrição Do Projeto', link: '/descricaoprojeto' },
      { text: 'Diagrama de Caso e Uso', link: '/diagramadecaso' },
      { text: 'Diagrama de Entidade', link: '/diagramaentidade' },
      { text: 'Protótipo de Telas', link: '/prototipodetelas' },
      { text: 'Considerações Finais', link: '/consideracoesfinais' },

      /* {
        text: 'Dropdown Menu',
        items: [
        { text: 'Item A', link: '/item-1' },
        { text: 'Item B', link: '/item-2' },
        { text: 'Item C', link: '/item-3' },
         ],
      },

      */ 
    ],

    sidebar: [
      {
         text: 'Outras Páginas',
        items: [
          { text: 'Introdução', link: '/introducao' },
          { text: 'Descrição Do Projeto', link: '/descricaoprojeto' },
          { text: 'Diagrama de Caso e Uso', link: '/diagramadecaso' },
          { text: 'Diagrama de Entidade', link: '/diagramaentidade' },
          { text: 'Protótipo de Telas', link: '/prototipodetelas' },
          { text: 'Considerações Finais', link: '/consideracoesfinais' },
          
         
          
     
        ],
      },
    ],
  },
});
