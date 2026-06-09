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


# Descrição Caso de Uso #

## Caso de Uso: Realizar Reserva de Sala ##

# Descrição #
  
Será descrito o caso de uso que permite ao cliente realizar a reserva de uma sala de karaokê. Para concluir a reserva, é obrigatório selecionar uma sala disponível, escolher uma playlist e efetuar o pagamento. O cliente também pode realizar ações opcionais relacionadas à reserva, como a compra antecipada de produtos para consumo no loca

# Atores #

* Cliente

# Pré-condições #

* O cliente deve estar cadastrado e autenticado no sistema.
* Deve haver salas disponíveis para a data e horário desejados.


# Fluxo Principal 

1 O cliente acessa a funcionalidade de reserva de sala.
2 O sistema apresenta os horários e salas disponíveis.
3 O cliente seleciona a data e o horário desejados.
4 O cliente informa a quantidade de pessoas.
5 O cliente informa se haverá menores de idade no grupo.
6 O cliente escolhe uma sala disponível compatível com a quantidade de pessoas.
7 O cliente seleciona uma playlist.
8 Opcionalmente, o cliente adiciona produtos para consumo no local.
9 O sistema calcula e exibe o resumo da reserva e o valor total.
10 O cliente escolhe a forma de pagamento (PIX, cartão de débito ou cartão de crédito).
11 O cliente realiza o pagamento.
12 O sistema confirma o pagamento.
13 O sistema registra a reserva.
14 O sistema exibe uma mensagem de confirmação ao cliente.


# Fluxos Alternativos 


### A1 – Falha no pagamento ###
O pagamento não é autorizado ou ocorre um erro na transação.
1.1 O sistema informa a falha ao cliente.  

1.2 O cliente pode tentar novamente ou escolher outro método de pagamento.  

1.3 Caso o pagamento seja realizado com sucesso, o fluxo retorna ao passo 12.  

1.4 Caso o cliente desista, a reserva não é concluída.

### A2 – Presença de menores de idade ###
O cliente informa que haverá menores de idade no grupo.  

1.1 O sistema bloqueia a seleção de bebidas alcoólicas.  

1.2 O cliente pode selecionar apenas produtos permitidos.  

1.3 O fluxo retorna ao passo 8.

# Pós-condições 

### Em caso de sucesso ###

* A reserva é registrada no sistema.
* O pagamento é registrado.
* A sala é reservada para a data e horário selecionados.
* O cliente recebe a confirmação da reserva.

### Em caso de falha ###

* Nenhuma reserva é registrada.
* Nenhum pagamento é registrado.
* Nenhuma sala é reservada.
* O cliente é informado do motivo da falha.


## **Diagrama de Caso de Uso - Funcionário** ##

## Descrição  ##

Será descrito o caso de uso que permite ao funcionário gerar relatórios para auxiliar no acompanhamento e gerenciamento das atividades do Karaokê & Bar. O sistema disponibiliza relatórios relacionados às salas agendadas, ao financeiro de compras, ao fluxo de agendamentos e ao fluxo de vendas de produtos.


# Atores

* Funcionário

# Observação

O funcionário herda todas as funcionalidades disponíveis para o cliente, podendo também realizar reservas, consultas, cancelamentos e compras antecipadas de produtos.

# Pré-condições

* O funcionário deve estar autenticado no sistema.
* Devem existir dados registrados para a geração dos relatórios.


# Fluxo Principal

1 O funcionário acessa a funcionalidade de relatórios.
2 O sistema apresenta os tipos de relatórios disponíveis.
3 O funcionário seleciona um dos relatórios:
* Salas Agendadas;
* Financeiro de Compras;
* Fluxo de Agendamentos;
* Fluxo de Vendas de Produtos.
4 O funcionário define os filtros desejados (período, sala ou outros parâmetros disponíveis).
5 O sistema processa as informações solicitadas.
6 O sistema gera o relatório.
7 O sistema exibe o relatório ao funcionário.
8 O funcionário pode visualizar, imprimir ou exportar o relatório.


# Fluxos Alternativos

### 1 – Nenhum dado encontrado

Não existem registros que atendam aos filtros informados.  

1.1 O sistema informa que não foram encontrados dados para os critérios selecionados.  

1.2 O funcionário pode alterar os filtros.  

1.3 O fluxo retorna ao passo 4 do fluxo principal.  


# Pós-condições

### Em caso de sucesso

* O relatório é gerado e exibido ao funcionário.
* Os dados solicitados ficam disponíveis para consulta, impressão ou exportação.

### Em caso de falha

* Nenhuma alteração é realizada nos dados do sistema.
* O funcionário é informado sobre o motivo da falha.


