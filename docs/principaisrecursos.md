
# REQUISITOS FUNCIONAIS #

|Referência|Descrição|
| :-: | :-: |
|**RF01**|**Cadastro de Usuários** **-** O sistema deve permitir o cadastro de usuários com informações completas, incluindo: nome, data de nascimento, telefone, endereço, CPF, email, senha e tipo . O sistema deve validar dados obrigatórios e evitar duplicidade de cadastro.|
|**RF02**|**Reserva de Sala -** O sistema deve permitir que os usuários realizem reserva de sala (selecionando o tipo da sala sendo pequena média ou grande), informar a quantidade de pessoas, data e horário da reserva, informar se há presença de menores na reserva, informar a playlist e validação de disponibilidade em tempo real. Além disso, o sistema deve permitir o re-agendamento do espaço para uma nova data, bem como o seu cancelamento e informar o motivo do cancelamento da reserva.|
|**RF03**|**Pagamento da reserva** **-** O sistema deve permitir que o usuário realizem o pagamento da reserva da sala, informar o valor total da reserva disponibilizar a forma de pagamento, status do pagamento, a data da confirmação e  também informar parcelas do pagamento se a caso optar por tal opção|
|**RF04**|**Compra antecipada de produto -**  O sistema deve permitir que o usuário realize reserva de produtos durante a reserva da sala bem como informar o nome do produto, o preço do produto, a categoria , a quantidade e se o produto produto é alcoólico a caso da ausência de menores dentro da reserva da sala |
|**RF05**|**Emissão de relatório -**  O sistema deve permitir que o usuário de tipo funcionário emita relatórios mensais sendo eles de fluxo de agendamento, fluxo de vendas de produtos, financeiro de compras e também de salas reservadas|
|**RF06**|**Atualização de preços -** O sistema deve permitir que o usuário de tipo funcionário atualize os preços dos produtos dentro da reserva bem como o preço da reserva de cada tipo de sala (pequena, média ou grande).|
|**RF07**|**Registro de vendas presenciais -** O sistema deve permitir que o usuário de tipo funcionário registre a venda de insumos presenciais bem como quantidade, tipo e valores. |
|**RF08**|**Cancelamento com reembolso** - O sistema deve permitir que o usuário efetue o cancelamento da reserva da sala, constando com uma área para a justificação de cancelamento de tal reserva (em até 48h de prazo) para efetuar o reembolso da reserva. |
|**RF09**|**Bloqueio de vendas de bebidas alcoólicas** - O sistema deve bloquear o acesso a bebidas alcoólicas na reserva de produtos antecipados para os usuários que informarem a presença de menores de idade na reserva da sala. |
|**RF10**|**Inclusão de novos produtos** - O sistema deve permitir que o usuário de tipo funcionário inclua novos produtos na área de reserva de produtos antecipados. |


## **REQUISITOS NÃO FUNCIONAIS**  ## 

|**Referência**|**Descrição**|
| :-: | :-: |
|**RNF01**|**Desempenho** - O sistema deve possuir uma resposta a requisições ao usuário de até 2 segundos por operações comuns (consultas, reservas, pagamentos), mesmo com múltiplos acessos simultâneos.|
|**RNF02**|**Segurança -** O sistema deve permitir a proteção de dados dos sócios por meio da autenticação segura, bem como seguir as normas da LGPD (Lei Geral de Proteção de Dados), criptografia de dados sensíveis e controle de acesso baseado em perfis (Sócio e administrador).|
|**RNF03**|**Backup -** O sistema deve realizar rotinas automáticas de cópia de segurança (backup) diariamente, de forma a garantir a integridade de todos os dados cruciais do negócio. Isso inclui o cadastro completo de usuários, históricos e logs de reservas de salas e produtos, registros financeiros de pagamentos e parcelamentos, além das tabelas de parametrização de preços. |
|**RNF04**|**Usabilidade -** O sistema deve possuir uma interface intuitiva e responsiva, permitindo que usuários com conhecimentos básicos de informática consigam se localizar no sistema bem como navegar por ele. Para realizar reservas, pagamentos e consultas com facilidade, sem necessidade de treinamento avançado|
|**RNF05**|**Integração -** O sistema deve ter integração com API 's de pagamento como pix e cartão de crédito.|
|**RNF06**|**Exclusividade** - O sistema deve restringir o acesso ao espaço de convivência e a compra de produtos no bar apenas para clientes que possuam uma reserva ativa no dia e horário corrente. |
|**RNF07**|**Disponibilidade -** O sistema deve estar disponível para acesso dos usuários e funcionários por pelo menos 99,5% do tempo (uptime), operando 24 horas por dia, 7 dias por semana. |
|**RNF08**|**Compatibilidade -** O sistema deve ser responsivo e compatível com os principais navegadores web do mercado (Google Chrome, Mozilla Firefox, Microsoft Edge e Safari), tanto em dispositivos desktop quanto em dispositivos móveis (smartphones e tablets). |
|**RNF09**|**Escalabilidade -** O sistema deve ser capaz de suportar o aumento do volume de dados de reservas, cadastros e relatórios financeiros ao longo do tempo, mantendo o tempo de resposta estipulado sem perda de eficiência. |
|**RNF10**|**Manutenibilidade -** O sistema deve ser desenvolvido utilizando uma arquitetura modular e código documentado, facilitando a correção de eventuais falhas (bugs) e a implementação de futuras melhorias ou novas regras de negócio. |

