# **Introdução** # 
### <a name="_9fkjqfsjvxr"></a>**Objetivo Geral**
Desenvolver e implementar um sistema web para gerenciar reservas de salas, divulgar o estabelecimento e facilitar o controle operacional do Karaokê & Bar.
### <a name="_3ei21yk0xabt"></a>**Objetivos Específicos**
- Desenvolver um website para o Karaokê & Bar no prazo de até 6 meses, contendo informações sobre o estabelecimento, opção de reservas online (incluindo a compra antecipada de itens para consumo), localização do estabelecimento, informações de contato e uma breve história do local.
- Permitir que os clientes realizem pagamentos online por meio de PIX, cartão de crédito ou cartão de débito, garantindo a confirmação da reserva após validação do pagamento. 
- Implementar, até a conclusão do projeto, uma área administrativa destinada aos funcionários do estabelecimento, na qual seja possível acessar e gerenciar informações referentes às:
  - Reservas de salas;
  - Produtos disponíveis para consumo no local;
  - Cadastros de salas, clientes e produtos; 
  - Geração e monitoramento de relatórios gerenciais.
- Realizar a divulgação do website por meio de redes sociais e ferramentas de tráfego pago, de modo a atrair mais clientes.
- Promover um treinamento pré-implementação: que envolve capacitação da equipe em atendimento de qualidade e adequação ao novo sistema.


**Público-alvo**

Este documento destina-se a todas as partes interessadas envolvidas no desenvolvimento, implementação e uso do software Karaokê & Bar. Isso inclui membros da equipe de desenvolvimento, gerentes de projeto, clientes, usuários finais e outras partes interessadas relevantes.

**Minimundo Karaokê e Bar**

O Karaokê & Bar deseja implementar um sistema para gerenciar suas operações administrativas, agendamentos de salas e vendas de produtos. O estabelecimento opera com um modelo de exclusividade: o acesso ao espaço de convivência e a compra de produtos no bar são restritos a clientes com reservas ativas, e **o uso do karaokê é obrigatório para utilização de todas as salas e uso completo do bar**. 

Para facilitar a gestão do espaço, a empresa busca um sistema que permita o **cadastro de usuários clientes e usuários administradores, sendo que o cadastro de ambos deve ter** informações pessoais, incluindo um identificador único, nome, CPF, endereço, data de nascimento, telefone, e-mail e senha. 

O sistema inclui um portal para os clientes, no qual eles podem:

- **Reservar salas** para encontros ou eventos pequenos, as quais possuem obrigatoriamente equipamentos de karaokê e espaço de convivência confortável. Para isso deve ser informado para que data será a reserva, o horário de início e término de uso, a quantidade de pessoas e se haverá ou não a presença de menores de idade. Além disso, a empresa oferece, no momento da reserva, a opção de selecionar previamente uma playlist pré-definida pelo espaço ou a opção de inserir um link externo para uma playlist personalizada.
- **Fazer compras de produtos** para consumo no local no dia da reserva**,** podendo ser comidas ou bebidas. 
- **Fazer o pagamento de suas reservas** via PIX, cartão de crédito ou débito, com a opção de parcelamento para cartões. Os clientes só garantem a reserva após a confirmação do pagamento.

Para facilitar no momento da reserva, o sistema calcula **automaticamente o valor total da reserva** com base na sala escolhida, no tempo de utilização (em horas) e nos produtos selecionados pelo cliente.

A empresa possui **três tipos diferentes de salas** disponíveis para reserva, sendo elas: 

- Pequena (até 5 pessoas), 
- Média (até 12 pessoas) e 
- Grande (até 25 pessoas). 

O sistema **controla o status de cada sala**, as distinguindo entre disponível, ocupada ou em manutenção. Para organização, o sistema confere que cada reserva esteja associada a um único cliente e a uma única sala, preservando assim, o lazer de cada pessoa e evitando conflitos.

Para garantir a segurança de todos, a venda de bebidas alcoólicas, tanto no sistema quanto presencialmente em caixa, será proibida se o usuário marcar a opção de que terá a presença de menores de idade no grupo. 

Para garantir uma confiança maior aos clientes**,** a empresa Karaokê & Bar oferece a opção de cancelamento da reserva, que pode ser feita com a opção de reembolso total apenas quando realizado com no máximo 48 horas de antecedência da data marcada, mediante apresentação de atestado médico ou qualquer outra justificativa legal. Também há a possibilidade de cancelamento sem reembolso, quando não apresentada justificativa pelo cliente.

Por fim, o sistema garante que os administradores tenham acesso a **funcionalidades de gerenciamento, as quais incluem:**

- Verificar os status das salas;
- Fazer a consulta de detalhes das reservas (como playlist, snacks escolhidos e bebidas escolhidas);
- Registrar a venda de produtos consumidos presencialmente pelos clientes durante a utilização das salas;
- Ferramentas para gerar relatórios mensais de agendamentos;
- Ferramentas para gerar relatórios mensais de vendas de produtos;
- Atualizar os valores dos itens incluídos no sistema;
- Incluir novos produtos no sistema.

Este sistema busca otimizar a gestão do Karaokê & Bar, facilitar o fluxo de reservas, melhorar a experiência dos clientes e garantir uma administração e gestão financeira eficiente e transparente.

