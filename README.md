# 🧩 Bilíngue Blend

**Sistema de Vitrine Digital – Projeto Integrador II (TSI - IFB)**
Desenvolvido por:

* **Alice Gomes Azevedo** — Gerente de Projeto e Desenvolvedora Back-End
* **Beatriz Solange Moraes da Silveira** — Desenvolvedora Front-End
* **Vitória Elizangela Neves Santana** — Desenvolvedora Front-End

---

## 📘 Sobre o Projeto

O **Bilíngue Blend** é um sistema de **vitrine digital** desenvolvido para uma empresa educacional que produz e distribui **materiais bilíngues voltados ao público infantil**.
O projeto tem como foco **apresentar produtos de forma organizada e visualmente atrativa**, permitindo que o usuário explore os itens e envie o pedido diretamente pelo **WhatsApp Business**.

A proposta busca unir **simplicidade, leveza e atendimento humanizado**, sem a necessidade de um e-commerce completo com pagamentos integrados.

---

## 🎯 Objetivos

* Criar uma **vitrine online funcional e intuitiva** para exposição dos produtos.
* Facilitar o processo de compra com **redirecionamento automático para o WhatsApp**.
* **Ampliar a visibilidade** da marca Bilíngue Blend no ambiente digital.
* Garantir uma experiência **lúdica, leve e acessível** para pais e educadores.

---

## 🧠 Metodologia

O desenvolvimento foi baseado em **metodologia ágil**, dividido em **sprints semanais** acompanhadas pelo **Trello**.
As tarefas foram distribuídas entre front-end, back-end e gerenciamento de projeto, com integração constante via GitHub.

---

## 💻 Tecnologias Utilizadas

### Front-End

* **HTML5** — Estrutura e marcação semântica
* **CSS3 / Bootstrap** — Design e responsividade
* **JavaScript (Vanilla)** — Interatividade e manipulação de eventos
* **Figma** — Protótipos e design da interface

### Back-End

* **Node.js** — Estrutura e lógica do servidor
* **MYSQL** — Banco de dados leve e integrado
* 

### Ferramentas de Apoio

* **Trello** — Organização e controle das sprints
* **GitHub** — Versionamento e colaboração em equipe
* **BRModelo** — Modelagem de dados

---

## 🗂️ Funcionalidades da Vitrine

| Código | Descrição                                                       |
| ------ | --------------------------------------------------------------- |
| RF01   | Exibir vitrine com nome, imagem e preço dos produtos            |
| RF02   | Adicionar e remover produtos do carrinho                        |
| RF03   | Calcular automaticamente o total da compra                      |
| RF04   | Gerar mensagem com detalhes do pedido formatada para o WhatsApp |
| RF05   | Redirecionar o usuário ao WhatsApp com a mensagem preenchida    |

### ⚙️ Requisitos Não Funcionais

* Layout responsivo para dispositivos móveis
* Carregamento rápido
* Código limpo e modular
* Compatibilidade com API pública do WhatsApp
* Sem armazenamento de dados sensíveis

---

## 🧾 Banco de Dados

O sistema utiliza o **SQLite** para armazenar os dados de forma leve e eficiente.
O modelo de dados inclui cinco tabelas principais:

| Tabela                | Finalidade                                    |
| --------------------- | --------------------------------------------- |
| **produto**           | Armazena informações dos produtos disponíveis |
| **carrinho**          | Registra os carrinhos criados                 |
| **item_carrinho**     | Relaciona produtos adicionados ao carrinho    |
| **pedido**            | Armazena pedidos finalizados                  |
| **mensagem_whatsapp** | Registra mensagens enviadas via WhatsApp      |

---

## 🧩 Arquitetura do Sistema

Fluxo geral da aplicação:

1. O usuário acessa a vitrine digital;
2. Visualiza os produtos disponíveis;
3. Adiciona ou remove itens do carrinho;
4. O sistema gera automaticamente a mensagem com o pedido;
5. O usuário é redirecionado ao **WhatsApp Business** para finalizar a compra.

---

## 📈 Resultados e Aprendizados

O projeto Bilíngue Blend cumpriu seu propósito principal: criar uma **vitrine digital funcional e interativa**, capaz de apresentar produtos e automatizar o envio de pedidos via WhatsApp.

Durante o desenvolvimento, a equipe aprimorou conhecimentos em:

* **Desenvolvimento web (HTML, CSS, JS e Node.js);**
* **Integração entre front-end e back-end;**
* **Modelagem de banco de dados;**
* **Gestão de tarefas e trabalho colaborativo.**

Apesar de a parte de e-commerce **não ter sido concluída**, a vitrine se mostrou eficiente, leve e totalmente adequada às necessidades do projeto.

---

## 🚀 Repositório

🔗 [GitHub – Projeto Bilíngue Blend](https://github.com/vitoriaeliza78/Projeto-Integrador-II)

---

## 👩‍💻 Equipe

| Nome                                   | Função                        |
| -------------------------------------- | ----------------------------- |
| **Alice Gomes Azevedo**                | Gerente de Projeto e Back-End |
| **Beatriz Solange Moraes da Silveira** | Front-End                     |
| **Vitória Elizangela Neves Santana**   | Front-End                     |

---

## 📚 Referências

O projeto foi fundamentado em conceitos de **Engenharia de Software, Design de Interface, Banco de Dados e Desenvolvimento Web**, com base em autores como Pfleeger, Dennis, Elmasri e Kalbach, além de documentações oficiais de ferramentas como Node.js, MYSQL e Bootstrap.
>>>>>>> 51bf4185430d17acb4ae0faad2fe6f36f20b41f6
