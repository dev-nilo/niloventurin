// Text for the About, Contact and Privacy pages, once per language. Facts
// that already live in profile.ts (summary, skills, contact links) are not
// repeated here; the pages read them from PROFILE.
//
// The privacy policy describes what the code actually does. If the site
// starts collecting anything (analytics, a form), update it in both
// languages and bump `updated`.

import type { Locale } from "../i18n/locales";
import type { Subpage } from "../site/site";

export interface TextSection {
  title: string;
  paragraphs: string[];
}

export interface PageText {
  title: string;
  description: string;
}

export interface PagesText {
  titles: Record<Subpage, PageText>;
  about: { experienceTitle: string; educationTitle: string; skillsTitle: string };
  contact: {
    reachTitle: string;
    locationTitle: string;
    location: string;
    fitTitle: string;
    fits: string[];
    howTitle: string;
    how: string[];
  };
  privacy: { updated: string; sections: TextSection[] };
}

const EN: PagesText = {
  titles: {
    about: {
      title: "About",
      description:
        "About Nilo Venturin Neto: full-stack software engineer in Vitória, Brazil, with a background in access governance and SOX audits.",
    },
    contact: {
      title: "Contact",
      description:
        "How to contact Nilo Venturin Neto about full-stack roles or freelance web projects: email, LinkedIn and GitHub.",
    },
    privacy: {
      title: "Privacy",
      description: "What this site stores about visitors: one language cookie, a theme setting and the host's server logs.",
    },
  },
  about: { experienceTitle: "Experience", educationTitle: "Education and languages", skillsTitle: "Skills" },
  contact: {
    reachTitle: "Where to reach me",
    locationTitle: "Location and hours",
    location:
      "I'm in Vitória, Espírito Santo, Brazil, on Brasília time (UTC−3), and open to remote work for teams in other time zones. I write and take calls in Portuguese and English.",
    fitTitle: "What to contact me about",
    fits: [
      "Full-time or contract full-stack roles with TypeScript, React, Next.js, Node.js, Java/Spring Boot and PostgreSQL.",
      "Work on access control, approval workflows, audit trails and segregation of duties, where my background in IAM and SOX audits helps.",
      "Freelance web projects: landing pages, business websites, websites with a CMS and custom web apps. The services section lists reference prices and timelines.",
    ],
    howTitle: "What to include",
    how: [
      "For a role: the company, the position, the stack and whether it's remote.",
      "For a freelance project: what you need built, any deadline, and links to sites you like. That's enough to schedule a short briefing, after which I send a quote.",
    ],
  },
  privacy: {
    updated: "Last updated: November 3, 2026.",
    sections: [
      {
        title: "Summary",
        paragraphs: [
          "This is a personal portfolio site. It has no accounts, forms, analytics, advertising or tracking scripts, and it doesn't sell or share data about visitors.",
        ],
      },
      {
        title: "Hosting",
        paragraphs: [
          "The site is hosted on Vercel. Like any web server, Vercel processes technical data for each request, such as your IP address, browser user agent, the page requested and the time, to deliver the page and protect the service from abuse. I don't use these logs to identify or profile visitors. Vercel's own privacy policy covers how it handles them.",
        ],
      },
      {
        title: "Cookies and browser storage",
        paragraphs: [
          "When you pick a language, the site saves a cookie named \"lang\" with your choice (\"pt\" or \"en\") for one year, so the home page opens in that language next time. If you switch between light and dark themes, the choice is saved in your browser's local storage under \"theme\". Both stay in your browser and are only used by this site. Clearing your browser data removes them.",
          "Fonts are served from this site's own domain, so loading a page doesn't contact Google Fonts or any other third party.",
        ],
      },
      {
        title: "Email",
        paragraphs: [
          "If you email me, I use your address and message only to reply to you. I don't add you to mailing lists or share your message. You can ask me to delete our correspondence at any time.",
        ],
      },
      {
        title: "Links to other sites",
        paragraphs: [
          "Links to GitHub, LinkedIn and my side projects lead to sites with their own privacy policies.",
        ],
      },
      {
        title: "Your rights",
        paragraphs: [
          "Under Brazil's General Data Protection Law (LGPD, Law 13.709/2018) you can ask what personal data I hold about you and have it corrected or deleted. Email venturin.nilo@gmail.com and I'll answer within 15 days.",
        ],
      },
    ],
  },
};

const PT: PagesText = {
  titles: {
    about: {
      title: "Sobre",
      description:
        "Sobre Nilo Venturin Neto: engenheiro de software full-stack em Vitória, ES, com experiência em governança de acessos e auditorias SOX.",
    },
    contact: {
      title: "Contato",
      description:
        "Como falar com Nilo Venturin Neto sobre vagas full-stack ou projetos web como freelancer: e-mail, LinkedIn e GitHub.",
    },
    privacy: {
      title: "Privacidade",
      description:
        "O que este site guarda sobre os visitantes: um cookie de idioma, a preferência de tema e os logs do servidor de hospedagem.",
    },
  },
  about: { experienceTitle: "Experiência", educationTitle: "Formação e idiomas", skillsTitle: "Competências" },
  contact: {
    reachTitle: "Onde me encontrar",
    locationTitle: "Localização e horário",
    location:
      "Estou em Vitória, Espírito Santo, no horário de Brasília (UTC−3), e aberto a trabalho remoto com times em outros fusos. Escrevo e faço reuniões em português e inglês.",
    fitTitle: "Sobre o que falar comigo",
    fits: [
      "Vagas full-stack, CLT ou PJ, com TypeScript, React, Next.js, Node.js, Java/Spring Boot e PostgreSQL.",
      "Trabalhos com controle de acesso, fluxos de aprovação, trilhas de auditoria e segregação de funções, em que minha experiência com IAM e auditorias SOX ajuda.",
      "Projetos web como freelancer: landing pages, sites institucionais, sites com CMS e aplicações web sob medida. A seção de serviços traz preços de referência e prazos.",
    ],
    howTitle: "O que incluir",
    how: [
      "Para uma vaga: a empresa, o cargo, a stack e se é remoto.",
      "Para um projeto freelance: o que você precisa, se há prazo e links de sites de que você gosta. Isso basta para marcarmos um briefing rápido, depois do qual eu envio o orçamento.",
    ],
  },
  privacy: {
    updated: "Última atualização: 3 de novembro de 2026.",
    sections: [
      {
        title: "Resumo",
        paragraphs: [
          "Este é um site de portfólio pessoal. Ele não tem contas, formulários, analytics, anúncios nem scripts de rastreamento, e não vende nem compartilha dados dos visitantes.",
        ],
      },
      {
        title: "Hospedagem",
        paragraphs: [
          "O site é hospedado na Vercel. Como qualquer servidor web, a Vercel trata dados técnicos de cada acesso, como o endereço IP, o navegador, a página pedida e o horário, para entregar a página e proteger o serviço contra abusos. Eu não uso esses registros para identificar ou traçar perfis de visitantes. A política de privacidade da própria Vercel explica como ela os trata.",
        ],
      },
      {
        title: "Cookies e armazenamento no navegador",
        paragraphs: [
          "Quando você escolhe um idioma, o site salva um cookie chamado \"lang\" com a sua escolha (\"pt\" ou \"en\") por um ano, para que a página inicial abra nesse idioma da próxima vez. Se você alterna entre os temas claro e escuro, a escolha fica salva no armazenamento local do navegador, na chave \"theme\". Os dois ficam no seu navegador e só são usados por este site. Limpar os dados do navegador apaga os dois.",
          "As fontes são servidas pelo próprio domínio do site, então abrir uma página não faz nenhuma requisição ao Google Fonts nem a outros terceiros.",
        ],
      },
      {
        title: "E-mail",
        paragraphs: [
          "Se você me mandar um e-mail, uso o seu endereço e a sua mensagem só para responder. Não incluo você em listas de e-mail nem compartilho a sua mensagem. Você pode pedir a qualquer momento que eu apague a nossa conversa.",
        ],
      },
      {
        title: "Links para outros sites",
        paragraphs: [
          "Os links para o GitHub, o LinkedIn e os meus projetos pessoais levam a sites com políticas de privacidade próprias.",
        ],
      },
      {
        title: "Seus direitos",
        paragraphs: [
          "Pela Lei Geral de Proteção de Dados (LGPD, Lei 13.709/2018), você pode perguntar quais dados pessoais seus eu tenho e pedir que sejam corrigidos ou apagados. Escreva para venturin.nilo@gmail.com e eu respondo em até 15 dias.",
        ],
      },
    ],
  },
};

export const PAGES_TEXT: Record<Locale, PagesText> = { pt: PT, en: EN };
