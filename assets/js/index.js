 const cases = {
    1: {
      title: "Landing - Curso Fitness",
      text: "<p>Landing otimizada com formulário, sequência de follow-up e botão direto para WhatsApp. Ideal para campanhas pagas. Inclui: design, HTML/CSS responsivo, integração básica. Prazo: 3 dias úteis.</p><ul><li>Preço sugerido: R$497</li><li>Entrega: 3 dias</li><li>Revisões: 2</li></ul>"
    },
    2: {
      title: "Site Institucional - Oficina",
      text: "<p>Site com seções de serviços, galeria, CTA para agendamento pelo WhatsApp e otimização local (SEO local). Inclui: design + implementação básica.</p><ul><li>Preço sugerido: R$650</li><li>Entrega: 5 dias</li><li>Revisões: 3</li></ul>"
    },
    3: {
      title: "Brand & Landing - Açaíteria",
      text: "<p>Pacote: logo + landing promocional para campanhas locais. Inclui banner promocional para redes sociais e integração com WhatsApp.</p><ul><li>Preço sugerido: R$550</li><li>Entrega: 4 dias</li><li>Revisões: 2</li></ul>"
    }
  };

  function openCase(id) {
    const modal = document.getElementById('caseModal');
    document.getElementById('caseBody').innerHTML = `<h2>${cases[id].title}</h2>${cases[id].text}`;
    modal.classList.add('open');
  }
  function closeModal() {
    document.getElementById('caseModal').classList.remove('open');
  }
  // close on backdrop click
  document.getElementById('caseModal').addEventListener('click', (e) => {
    if (e.target.id === 'caseModal') closeModal();
  });