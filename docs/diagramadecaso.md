
# Casos de Uso #

## Descrição Caso de Uso Cliente ##
  
Este caso de uso permite que o Cliente realize a reserva de uma sala de karaokê. Para concluir a reserva, é obrigatório selecionar uma playlist, escolher o tamanho da sala e efetuar o pagamento. O cliente também pode realizar ações opcionais relacionadas à reserva, como comprar produtos antecipadamente para consumo no local.

# Atores #

* Cliente

# Pré-condições #

* O cliente deve acessar o sistema.
* Deve haver salas disponíveis para a data e horário desejados.

# Fluxo Principal 

1. O cliente acessa a funcionalidade de reserva de sala.
2. O sistema apresenta os horários e salas disponíveis.
3. O cliente seleciona a data e o horário desejados.
4. O cliente escolhe o tamanho da sala.
5. O cliente seleciona uma playlist.
6. Opcionalmente, o cliente adiciona produtos para consumo no local.
7. O sistema exibe o resumo da reserva e o valor total.
8. O cliente escolhe a forma de pagamento (PIX, cartão de débito ou cartão de crédito).
9. O cliente realiza o pagamento.
10. O sistema confirma o pagamento.
11. O sistema registra a reserva.
12. O sistema exibe uma mensagem de confirmação ao cliente.

# Fluxos Alternativos 

### A1 – Falha no pagamento ###

1 O pagamento não é autorizado ou ocorre um erro na transação.  

1.1 O sistema informa a falha ao cliente.  

1.2 O cliente pode tentar novamente ou escolher outro método de pagamento.  

1.3 Caso o pagamento seja realizado com sucesso, o fluxo retorna ao passo 10.  

1.4 Caso o cliente desista, a reserva não é concluída.

# Pós-condições 

### Em caso de sucesso ###

* A reserva é registrada no sistema.
* O pagamento é registrado.
* O cliente recebe a confirmação da reserva.

### Em caso de falha ###

* Nenhuma reserva é registrada.
* Nenhum horário é bloqueado permanentemente.
* O cliente é informado do motivo da falha.

## **Diagrama de Caso de Uso** ##

![Imagem Diagrama de Entidade](/imagens/Casoeuso.png)

<div style="margin-top:10px;">
  <a
    href="/imagens/Casoeuso.png"
    rel="noopener noreferrer"
    style="
      display:inline-block;
      padding:8px 16px;
      background:#8b5cf6;
      color:white;
      text-decoration:none;
      border-radius:6px;
      font-weight:600;
    "
  >
    🔍 Ampliar imagem
  </a>
</div>



## Descrição Caso de Uso Funcionário ##

Este caso de uso permite que o Funcionário gere relatórios para auxiliar no acompanhamento e gerenciamento das atividades do Karaokê & Bar. O sistema disponibiliza quatro tipos de relatórios: salas agendadas, financeiro de compras, fluxo de agendamentos e fluxo de vendas de produtos.

# Atores

* Funcionário

# Observação

O Funcionário herda todas as funcionalidades disponíveis para o Cliente, podendo também realizar reservas, consultas, cancelamentos, reagendamentos e compras antecipadas de produtos.

# Pré-condições

* O funcionário deve estar autenticado no sistema.
* Devem existir dados registrados para a geração dos relatórios.

# Fluxo Principal

1. O funcionário acessa a funcionalidade de relatórios.
2. O sistema apresenta os tipos de relatórios disponíveis.
3. O funcionário seleciona um dos relatórios:

   * Salas Agendadas;
   * Financeiro de Compras;
   * Fluxo de Agendamentos;
   * Fluxo de Vendas de Produtos.
4. O funcionário define os filtros desejados (período, sala ou outros parâmetros disponíveis).
5. O sistema processa as informações solicitadas.
6. O sistema gera o relatório.
7. O sistema exibe o relatório ao funcionário.
8. O funcionário pode visualizar, imprimir ou exportar o relatório.

# Fluxos Alternativos

### A1 – Nenhum dado encontrado

1 Não existem registros que atendam aos filtros informados.  

1.1 O sistema informa que não foram encontrados dados para o período selecionado.  

1.2 O funcionário pode alterar os filtros.  

1.3 O fluxo retorna ao passo 4 do fluxo principal.  


# Pós-condições

### Em caso de sucesso

* O relatório é gerado e exibido ao funcionário.
* Os dados solicitados ficam disponíveis para consulta, impressão ou exportação.

### Em caso de falha

* Nenhuma alteração é realizada nos dados do sistema.
* O funcionário é informado sobre o motivo da falha.


