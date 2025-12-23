import { Button } from "../ui/button";
import { Section } from "../layout/section";
import { MessageCircle } from "lucide-react";

export function CtaSection() {
  // Função para gerar link do WhatsApp com mensagem pré-pronta
  const getWhatsAppLink = (type: "specialist" | "clinic") => {
    const phoneNumber = "5511954926082"; // Número sem o +

    const messages = {
      specialist:
        "Olá! Vim através do site da Vocal Med e gostaria de agendar uma conversa com um especialista para conhecer melhor a plataforma. 👋",
      clinic:
        "Olá! Vim através do site da Vocal Med e gostaria de conhecer os planos para clínicas e equipes médicas. Podemos conversar? 🏥",
    };

    const message = encodeURIComponent(messages[type]);
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <Section id="cta" className="bg-[#1fa093] dark:bg-[#007c79]">
      <div className="flex flex-col items-center gap-8 lg:gap-10 text-center text-white">
        <div className="space-y-4 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/80">
            Pronto para começar?
          </p>
          <h2 className="text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl">
            Descubra um novo ritmo nas suas consultas
          </h2>
          <p className="text-base sm:text-lg text-white/90">
            Reduza o tempo de digitação, aumente o olhar para o paciente e deixe
            a Vocal Med cuidar das notas clínicas e orientações.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button
            variant="primary"
            size="lg"
            className="bg-white text-[#007c79] hover:bg-[#f4f4f4] hover:text-[#007c79]"
            asChild
          >
            <a
              href={getWhatsAppLink("specialist")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <MessageCircle className="h-5 w-5 mr-3" />
              Agendar conversa com especialista
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-[#00a89a] hover:text-white"
            asChild
          >
            <a
              href={getWhatsAppLink("clinic")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <MessageCircle className="h-5 w-5 mr-3" />
              Ver planos para clínicas
            </a>
          </Button>
        </div>
        <p className="text-xs text-white/80">
          Sem compromisso • Ideal para equipes médicas, telemedicina e clínicas.
        </p>
      </div>
    </Section>
  );
}
