# Envio de E-mails Grátis com Node.js e Gmail YT

🚀 **Automatize o envio de e-mails usando Node.js e Gmail sem custos!** Este projeto mostra como utilizar o Gmail API junto com o Node.js para enviar e-mails de forma simples e eficiente. Ele também usa o Docker para facilitar o desenvolvimento e a integração com PostgreSQL.

## 📚 Descrição

Este projeto demonstra como configurar um servidor **Node.js** para enviar e-mails gratuitos usando a API do **Gmail**. Com ele, você pode:
- Automatizar envios de e-mails com Node.js.
- Utilizar PostgreSQL como banco de dados via Docker.
- Aproveitar uma integração simples e escalável.

🔗 [Confira o tutorial completo no GitBook](https://fabios-organization-8.gitbook.io/fabio-yt-email-sender-esm).

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript para backend.
- **Express**: Framework para a criação de servidores web.
- **Nodemailer**: Biblioteca para envio de e-mails via SMTP.
- **Gmail API**: Usada para o envio gratuito de e-mails.
- **PostgreSQL**: Banco de dados relacional.
- **Docker** e **Docker Compose**: Para facilitar o gerenciamento do ambiente de desenvolvimento.

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js v22+
- Docker e Docker Compose
- Conta no Gmail para configurar o envio de e-mails

### Passo a Passo

1. Clone este repositório:
   ```bash
   git clone https://github.com/seuusuario/nome-do-projeto.git
   ```

2. Entre no diretório do projeto:
   ```bash
   cd email-sender-esm
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Configure suas variáveis de ambiente no arquivo `.env`:
   ```bash
   GMAIL_USER=seuemail@gmail.com
   GMAIL_PASS=sua_senha_app
   ```

   > **Nota:** Lembre-se de criar uma senha de aplicativo para o Gmail e permitir o uso de menos segurança na conta.

5. Inicie o PostgreSQL com Docker:
   ```bash
   docker-compose up -d
   ```

6. Inicie o servidor:
   ```bash
   npm run dev
   ```

7. Acesse o projeto em [http://localhost:3000](http://localhost:3000).

---

## 🎯 Funcionalidades

- Envio de e-mails gratuitos usando o Gmail.
- Integração com PostgreSQL para armazenamento de dados.
- Estrutura escalável e pronta para produção.

---

## 📝 Documentação

Confira a documentação completa e tutoriais detalhados no **GitBook**: [Documentação Completa](https://seulink.com).

---

## 🤝 Contribuição

Se quiser contribuir com este projeto:
1. Faça um **fork** do projeto.
2. Crie uma **branch** para a funcionalidade (`git checkout -b feature/MinhaFuncionalidade`).
3. Faça o **commit** das suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`).
4. Faça o **push** para a branch (`git push origin feature/MinhaFuncionalidade`).
5. Abra um **Pull Request**.

---

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---
