# Gestão 1 Consultoria — site institucional

Site de uma consultoria empresarial, feito para apresentar os serviços e levar o visitante a agendar uma conversa pelo WhatsApp.

## O que o site tem

- **Início** com a proposta da consultoria e chamada para ação
- **Sobre**, **Serviços**, **Portfólio** e **Depoimentos**
- **Agendamento:** o visitante escolhe o serviço, a data e o horário, e o site abre o WhatsApp com a mensagem pronta
- **Contato** com e-mail, WhatsApp e mapa
- Botão flutuante de WhatsApp e layout adaptado para celular

## Tecnologias

| Camada | Tecnologia |
| --- | --- |
| Interface | React 19 + TypeScript |
| Build | Vite |
| Estilo | Tailwind CSS e componentes Radix UI / shadcn |
| Animações | Framer Motion |
| Servidor | Node.js + Express (serve o site já compilado) |

## Como rodar

```bash
pnpm install
pnpm dev          # modo desenvolvimento
pnpm build        # gera a versão de produção em dist/
pnpm start        # sobe o servidor Express
```

## Autor

**Bernardo Ghenov Paiva** · [LinkedIn](https://www.linkedin.com/in/bernardo-ghenov-paiva-0b834b284)
