import { Doctor } from "../types/Doctor";

export const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dra. Yara Mattos",
    imageUrl: "https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg?auto=compress&cs=tinysrgb&w=800",
    crm: "CRM-PE 123456",
    bio: "Dra. Yara Mattos é especialista em mastologia com mais de 15 anos de experiência. Formada pela USP com residência no Hospital das Clínicas, ela é referência no tratamento de câncer de mama.",
    specialties: ["Oncologia Mamária", "Cirurgia Conservadora", "Reconstrução Mamária"],
    socialMedia: {
      linkedin: "https://linkedin.com/in/anabeatrizsilva",
      instagram: "https://instagram.com/dra.anabeatriz"
    }
  },
  {
    id: 2,
    name: "Dr. Eduardo Matos",
    imageUrl: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800",
    crm: "CRM-PE 234567",
    bio: "Dr. Roberto Cardoso é especializado em mastologia e oncologia mamária. Com doutorado pela UNIFESP, dedica-se ao diagnóstico precoce e tratamento personalizado do câncer de mama.",
    specialties: ["Oncologia Mamária", "Mastologia", "Cirurgia Oncológica"],
    socialMedia: {
      linkedin: "https://linkedin.com/in/robertocardoso",
      website: "https://robertocardoso.med.br"
    }
  },
  {
    id: 3,
    name: "Dra. Vanessa Leal",
    imageUrl: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800",
    crm: "CRM-PE 345678",
    bio: "Dra. Carolina Mendes é especialista em mastologia e cirurgia plástica, com foco em reconstrução mamária. Formada pela UFRJ, com especialização no exterior.",
    specialties: ["Reconstrução Mamária", "Mastologia", "Cirurgia Plástica"],
    socialMedia: {
      instagram: "https://instagram.com/dra.carolinamendes",
      linkedin: "https://linkedin.com/in/carolinamendes"
    }
  },
];
