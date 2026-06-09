---
layout: home


hero:
  name: KARAOKÊ
  text: E BAR 
  tagline: <br>Documento de Visão.<br>Nome do Projeto Karaokê & Bar.<br>Data:08/06/2026<br>Nome Integrantes:<br>Arthur F., Ellen J., Eric Z., Ewerton S., Gabriela N., Jasper D.<br>  Organização
  image:
    src: /imagens/logo.png 
    alt: Logo Karaokê & Bar
  actions:
    - theme: brand
      text: Quero Conhecer
      link: /introducao
    - theme: alt
      text: Protótipo de Telas
      link: /prototipodetelas
      
      
---
<style>
/* css para casa o fundo seja branco */
/* root pra definir ass variaveis globais ( nesse caso o brand do botao brand*/
:root { 
  --vp-c-brand-1: #8b5cf6; /* vp cp pra alterar as cores padroes do vitepress*/
  --vp-c-brand-2: #8b5cf6;
  --vp-c-brand-3: #8b5cf6;
}

/* vphero, componente hero do vp, .name variavel definida */
.VPHero .name {
  -webkit-text-fill-color: #8b5cf6 !important; /* igual html/css, webkit pra definir a coloração quando usa gradiant */ /* !important pra ter prioridade*/
}

.VPHero .text {
  color: #facc15 !important;
}

.VPHero .tagline {
  color: #333 !important;
}

/* aqui  o VPbutoon é pro botao do hero .alt variavel igual .name*/
.VPButton.alt {
  border-color: #8b5cf6 !important;
  color: #8b5cf6 !important;
}

/* aqui pra alterar caso o tema esteja em escuro */
.dark .VPHero .name {
  -webkit-text-fill-color: #8b5cf6 !important;
}

.dark .VPHero .text {
  color: #facc15 !important;
}

.dark .VPHero .tagline {
  color: #fff !important;
}

.dark .VPButton.alt {
  border-color: #facc15 !important;
  color: #facc15 !important;
}


/*Tirar limite de tamanho */
.VPHero .image-src {
  max-width: 700px !important;
  max-height: 700px !important;
}
/*aumentar tamanho da img */
.VPHero .image-src {
  width: 580px !important;
  height: auto !important;
}

</style>
