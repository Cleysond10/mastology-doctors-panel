import { Doctor } from "../types/Doctor";

// Mock data for 22 mastology doctors
export const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dra. Ana Beatriz Silva",
    imageUrl: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800",
    crm: "CRM-SP 123456",
    bio: "Dra. Ana Beatriz é especialista em mastologia com mais de 15 anos de experiência. Formada pela USP com residência no Hospital das Clínicas, ela é referência no tratamento de câncer de mama.",
    specialties: ["Oncologia Mamária", "Cirurgia Conservadora", "Reconstrução Mamária"],
    socialMedia: {
      linkedin: "https://linkedin.com/in/anabeatrizsilva",
      instagram: "https://instagram.com/dra.anabeatriz"
    }
  },
  {
    id: 2,
    name: "Dr. Roberto Cardoso",
    imageUrl: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=800",
    crm: "CRM-SP 234567",
    bio: "Dr. Roberto Cardoso é especializado em mastologia e oncologia mamária. Com doutorado pela UNIFESP, dedica-se ao diagnóstico precoce e tratamento personalizado do câncer de mama.",
    specialties: ["Oncologia Mamária", "Mastologia", "Cirurgia Oncológica"],
    socialMedia: {
      linkedin: "https://linkedin.com/in/robertocardoso",
      website: "https://robertocardoso.med.br"
    }
  },
  {
    id: 3,
    name: "Dra. Carolina Mendes",
    imageUrl: "https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg?auto=compress&cs=tinysrgb&w=800",
    crm: "CRM-SP 345678",
    bio: "Dra. Carolina Mendes é especialista em mastologia e cirurgia plástica, com foco em reconstrução mamária. Formada pela UFRJ, com especialização no exterior.",
    specialties: ["Reconstrução Mamária", "Mastologia", "Cirurgia Plástica"],
    socialMedia: {
      instagram: "https://instagram.com/dra.carolinamendes",
      linkedin: "https://linkedin.com/in/carolinamendes"
    }
  },
  {
    id: 4,
    name: "Dr. Marcelo Almeida",
    imageUrl: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800",
    crm: "CRM-SP 456789",
    bio: "Dr. Marcelo Almeida é especialista em mastologia com foco em diagnóstico por imagem. Possui vasta experiência em ressonância magnética das mamas e biópsias guiadas por imagem.",
    specialties: ["Diagnóstico por Imagem", "Biópsia", "Mastologia"],
    socialMedia: {
      linkedin: "https://linkedin.com/in/marceloalmeida",
      website: "https://marceloalmeida.med.br"
    }
  },
  {
    id: 5,
    name: "Dra. Patrícia Oliveira",
    imageUrl: "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=800",
    crm: "CRM-SP 567890",
    bio: "Dra. Patrícia Oliveira é mastologista com especialização em oncogenética. Atua na prevenção e tratamento do câncer de mama hereditário, oferecendo aconselhamento genético.",
    specialties: ["Oncogenética", "Mastologia Preventiva", "Câncer Hereditário"],
    socialMedia: {
      instagram: "https://instagram.com/dra.patriciaoliveira",
      linkedin: "https://linkedin.com/in/patriciaoliveira"
    }
  },
  {
    id: 6,
    name: "Dr. Fernando Santos",
    imageUrl: "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=800",
    crm: "CRM-SP 678901",
    bio: "Dr. Fernando Santos é especialista em mastologia e cirurgia oncológica. Com mais de 20 anos de experiência, é reconhecido por sua habilidade em cirurgias conservadoras.",
    specialties: ["Cirurgia Oncológica", "Oncoplastia", "Mastologia"],
    socialMedia: {
      linkedin: "https://linkedin.com/in/fernandosantos",
      website: "https://fernandosantos.med.br"
    }
  },
  {
    id: 7,
    name: "Dra. Juliana Costa",
    imageUrl: "https://images.pexels.com/photos/5407243/pexels-photo-5407243.jpeg?auto=compress&cs=tinysrgb&w=800",
    crm: "CRM-SP 789012",
    bio: "Dra. Juliana Costa é mastologista com formação em radioterapia. Especialista em tratamentos conservadores e menos invasivos para o câncer de mama.",
    specialties: ["Radioterapia", "Tratamentos Conservadores", "Mastologia"],
    socialMedia: {
      instagram: "https://instagram.com/dra.julianacosta",
      linkedin: "https://linkedin.com/in/julianacosta"
    }
  },
  {
    id: 8,
    name: "Dr. Ricardo Ferreira",
    imageUrl: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800",
    crm: "CRM-SP 890123",
    bio: "Dr. Ricardo Ferreira é especialista em mastologia com foco em oncoplastia. Combina técnicas de cirurgia oncológica e plástica para resultados estéticos e seguros.",
    specialties: ["Oncoplastia", "Cirurgia Mamária", "Reconstrução"],
    socialMedia: {
      linkedin: "https://linkedin.com/in/ricardoferreira",
      website: "https://ricardoferreira.med.br"
    }
  },
  {
    id: 9,
    name: "Dra. Fernanda Lima",
    imageUrl: "https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg?auto=compress&cs=tinysrgb&w=800",
    crm: "CRM-SP 901234",
    bio: "Dra. Fernanda Lima é especialista em mastologia e oncologia clínica. Dedica-se ao tratamento multidisciplinar do câncer de mama, incluindo quimioterapia e hormonioterapia.",
    specialties: ["Oncologia Clínica", "Quimioterapia", "Hormonioterapia"],
    socialMedia: {
      instagram: "https://instagram.com/dra.fernandalima",
      linkedin: "https://linkedin.com/in/fernandalima"
    }
  },
  {
    id: 10,
    name: "Dr. Paulo Rodrigues",
    imageUrl: "https://images.pexels.com/photos/5214970/pexels-photo-5214970.jpeg?auto=compress&cs=tinysrgb&w=800",
    crm: "CRM-SP 012345",
    bio: "Dr. Paulo Rodrigues é mastologista especializado em ultrassonografia mamária e procedimentos minimamente invasivos. Referência em diagnóstico precoce.",
    specialties: ["Ultrassonografia", "Procedimentos Minimamente Invasivos", "Diagnóstico Precoce"],
    socialMedia: {
      linkedin: "https://linkedin.com/in/paulorodrigues",
      website: "https://paulorodrigues.med.br"
    }
  },
  {
    id: 11,
    name: "Dra. Marina Souza",
    imageUrl: "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=800",
    crm: "CRM-SP 987654",
    bio: "Dra. Marina Souza é especialista em mastologia com foco em doenças benignas da mama. Atua na prevenção e tratamento de condições como nódulos, cistos e mastalgia.",
    specialties: ["Doenças Benignas", "Mastologia", "Medicina Preventiva"],
    socialMedia: {
      instagram: "https://instagram.com/dra.marinasouza",
      linkedin: "https://linkedin.com/in/marinasouza"
    }
  },
  {
    id: 12,
    name: "Dr. Lucas Oliveira",
    imageUrl: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800",
    crm: "CRM-SP 876543",
    bio: "Dr. Lucas Oliveira é mastologista com especialização em medicina integrativa. Oferece uma abordagem holística no tratamento do câncer de mama, combinando tratamentos convencionais e complementares.",
    specialties: ["Medicina Integrativa", "Mastologia", "Abordagem Holística"],
    socialMedia: {
      linkedin: "https://linkedin.com/in/lucasoliveira",
      website: "https://lucasoliveira.med.br"
    }
  },
  {
    id: 13,
    name: "Dra. Camila Vieira",
    imageUrl: "https://images.pexels.com/photos/5214949/pexels-photo-5214949.jpeg?auto=compress&cs=tinysrgb&w=800",
    crm: "CRM-SP 765432",
    bio: "Dra. Camila Vieira é especialista em mastologia e oncologia molecular. Pesquisadora ativa, dedica-se à medicina personalizada no tratamento do câncer de mama.",
    specialties: ["Oncologia Molecular", "Medicina Personalizada", "Pesquisa Clínica"],
    socialMedia: {
      instagram: "https://instagram.com/dra.camilavieira",
      linkedin: "https://linkedin.com/in/camilavieira"
    }
  },
  {
    id: 14,
    name: "Dr. André Martins",
    imageUrl: "https://images.pexels.com/photos/5407146/pexels-photo-5407146.jpeg?auto=compress&cs=tinysrgb&w=800",
    crm: "CRM-SP 654321",
    bio: "Dr. André Martins é mastologista com especialização em cirurgia robótica. Pioneiro no uso de tecnologias avançadas para procedimentos menos invasivos e mais precisos.",
    specialties: ["Cirurgia Robótica", "Tecnologias Avançadas", "Cirurgia Minimamente Invasiva"],
    socialMedia: {
      linkedin: "https://linkedin.com/in/andremartins",
      website: "https://andremartins.med.br"
    }
  },
  {
    id: 15,
    name: "Dra. Isabela Santos",
    imageUrl: "https://images.pexels.com/photos/5407236/pexels-photo-5407236.jpeg?auto=compress&cs=tinysrgb&w=800",
    crm: "CRM-SP 543210",
    bio: "Dra. Isabela Santos é mastologista especializada em oncofertilidade. Trabalha para preservar a fertilidade de mulheres jovens durante o tratamento do câncer de mama.",
    specialties: ["Oncofertilidade", "Preservação da Fertilidade", "Mastologia"],
    socialMedia: {
      instagram: "https://instagram.com/dra.isabelasantos",
      linkedin: "https://linkedin.com/in/isabelasantos"
    }
  },
  {
    id: 16,
    name: "Dr. Gustavo Moreira",
    imageUrl: "https://images.pexels.com/photos/6129500/pexels-photo-6129500.jpeg?auto=compress&cs=tinysrgb&w=800",
    crm: "CRM-SP 432109",
    bio: "Dr. Gustavo Moreira é especialista em mastologia com foco em imunoterapia. Desenvolve tratamentos que utilizam o próprio sistema imunológico para combater o câncer de mama.",
    specialties: ["Imunoterapia", "Terapias Inovadoras", "Oncologia"],
    socialMedia: {
      linkedin: "https://linkedin.com/in/gustavomoreira",
      website: "https://gustavomoreira.med.br"
    }
  },
  {
    id: 17,
    name: "Dra. Renata Castro",
    imageUrl: "https://images.pexels.com/photos/8376319/pexels-photo-8376319.jpeg?auto=compress&cs=tinysrgb&w=800",
    crm: "CRM-SP 321098",
    bio: "Dra. Renata Castro é mastologista especializada em cuidados paliativos. Dedica-se a proporcionar qualidade de vida e conforto a pacientes com câncer de mama avançado.",
    specialties: ["Cuidados Paliativos", "Qualidade de Vida", "Suporte Integral"],
    socialMedia: {
      instagram: "https://instagram.com/dra.renatacastro",
      linkedin: "https://linkedin.com/in/renatacastro"
    }
  },
  {
    id: 18,
    name: "Dr. Thiago Alves",
    imageUrl: "https://images.pexels.com/photos/6234600/pexels-photo-6234600.jpeg?auto=compress&cs=tinysrgb&w=800",
    crm: "CRM-SP 210987",
    bio: "Dr. Thiago Alves é mastologista com especialização em radiologia intervencionista. Especialista em biópsias guiadas por imagem e procedimentos minimamente invasivos.",
    specialties: ["Radiologia Intervencionista", "Biópsias Guiadas", "Diagnóstico Avançado"],
    socialMedia: {
      linkedin: "https://linkedin.com/in/thiagoalves",
      website: "https://thiagoalves.med.br"
    }
  },
  {
    id: 19,
    name: "Dra. Bianca Ribeiro",
    imageUrl: "https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg?auto=compress&cs=tinysrgb&w=800",
    crm: "CRM-SP 109876",
    bio: "Dra. Bianca Ribeiro é especialista em mastologia e ginecologia. Atua na saúde integral da mulher, com foco na prevenção e tratamento precoce do câncer de mama.",
    specialties: ["Ginecologia", "Mastologia", "Saúde Integral da Mulher"],
    socialMedia: {
      instagram: "https://instagram.com/dra.biancaribeiro",
      linkedin: "https://linkedin.com/in/biancaribeiro"
    }
  },
  {
    id: 20,
    name: "Dr. Rafael Nunes",
    imageUrl: "https://images.pexels.com/photos/8942425/pexels-photo-8942425.jpeg?auto=compress&cs=tinysrgb&w=800",
    crm: "CRM-SP 098765",
    bio: "Dr. Rafael Nunes é mastologista com especialização em epidemiologia. Atua em pesquisa clínica e programas de rastreamento populacional para câncer de mama.",
    specialties: ["Epidemiologia", "Rastreamento", "Pesquisa Clínica"],
    socialMedia: {
      linkedin: "https://linkedin.com/in/rafaelnunes",
      website: "https://rafaelnunes.med.br"
    }
  },
  {
    id: 21,
    name: "Dra. Vanessa Monteiro",
    imageUrl: "https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=800",
    crm: "CRM-SP 987654",
    bio: "Dra. Vanessa Monteiro é mastologista com foco em reabilitação pós-cirúrgica. Especialista em fisioterapia oncológica e recuperação funcional após cirurgias mamárias.",
    specialties: ["Reabilitação", "Fisioterapia Oncológica", "Recuperação Funcional"],
    socialMedia: {
      instagram: "https://instagram.com/dra.vanessamonteiro",
      linkedin: "https://linkedin.com/in/vanessamonteiro"
    }
  },
  {
    id: 22,
    name: "Dr. Eduardo Pereira",
    imageUrl: "https://images.pexels.com/photos/5215009/pexels-photo-5215009.jpeg?auto=compress&cs=tinysrgb&w=800",
    crm: "CRM-SP 876543",
    bio: "Dr. Eduardo Pereira é especialista em mastologia e medicina nuclear. Atua no diagnóstico e estadiamento do câncer de mama usando técnicas avançadas de imagem molecular.",
    specialties: ["Medicina Nuclear", "Diagnóstico Molecular", "Estadiamento Avançado"],
    socialMedia: {
      linkedin: "https://linkedin.com/in/eduardopereira",
      website: "https://eduardopereira.med.br"
    }
  }
];