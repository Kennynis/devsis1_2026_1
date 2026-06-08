
# Casos de Uso #

## Descrição ##
  
Este caso de uso permite que o Cliente realize a reserva de uma sala de karaokê. Para concluir a reserva, é obrigatório selecionar uma playlist, escolher o tamanho da sala e efetuar o pagamento. O cliente também pode realizar ações opcionais relacionadas à reserva, como comprar produtos antecipadamente para consumo no local.

## Atores ##

* Cliente

## Pré-condições ##

* O cliente deve acessar o sistema.
* Deve haver salas disponíveis para a data e horário desejados.

## Fluxo Principal ##

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

## Fluxos Alternativos ##

### A1 – Falha no pagamento ###

9a. O pagamento não é autorizado ou ocorre um erro na transação.

9a1. O sistema informa a falha ao cliente.
9a2. O cliente pode tentar novamente ou escolher outro método de pagamento.
9a3. Caso o pagamento seja realizado com sucesso, o fluxo retorna ao passo 10.
9a4. Caso o cliente desista, a reserva não é concluída.

### A2 – Tamanho da sala não selecionado

4a. O cliente tenta prosseguir sem escolher o tamanho da sala.

4a1. O sistema informa que a escolha do tamanho da sala é obrigatória.
4a2. O cliente seleciona o tamanho da sala.
4a3. O fluxo retorna ao passo 5.

## Pós-condições ##

### Em caso de sucesso ###

* A reserva é registrada no sistema.
* O pagamento é registrado.
* O cliente recebe a confirmação da reserva.

### Em caso de falha ###

* Nenhuma reserva é registrada.
* Nenhum horário é bloqueado permanentemente.
* O cliente é informado do motivo da falha.

# **Diagrama de Caso de Uso** #

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

Outro caso de uso importante é a geração de relatórios pelo funcionário. Ele pode gerar quatro tipos de relatórios: de salas agendadas, financeiro de compras, fluxo de agendamento e fluxo de vendas de produtos. É importante ressaltar que o funcionário herda todas as funções que podem ser realizadas pelo cliente.


