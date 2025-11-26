// ------------------------------
// Modal dos cases
// ------------------------------
const cases = {
  1: {
      title: "Landing Page",
      text: "<p>Landing otimizada com formulário, e botão direto para WhatsApp. Ideal para campanhas pagas. Inclui: design, HTML/CSS responsivo, integração básica. Prazo: 4 dias úteis.</p><ul><li>Preço sugerido: R$127.90</li><li>Entrega: 4 dias</li><li>Revisões: 2</li></ul>"
    },
    2: {
      title: "Landing Page Intermediária",
      text: "<p>Site com seções de serviços, galeria, CTA para agendamento pelo WhatsApp e otimização local (SEO local). Inclui: design + implementação básica.</p><ul><li>Preço sugerido: R$237.90</li><li>Entrega: 5 dias</li><li>Revisões: 2</li></ul>"
    },
    3: {
      title: "Brand & Landing Page",
      text: "<p>Pacote: logo + landing promocional para campanhas locais. Inclui banner promocional para redes sociais e integração com WhatsApp.</p><ul><li>Preço sugerido: R$297.90</li><li>Entrega: 7 dias</li><li>Revisões: 2</li></ul>"
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

document.getElementById('caseModal').addEventListener('click', (e) => {
  if (e.target.id === 'caseModal') closeModal();
});

// ------------------------------
// Formulário FormSubmit SEM redirecionar
// ------------------------------

document.getElementById("whatsForm").addEventListener("submit", function(e){
    e.preventDefault(); // impede o redirecionamento

    const form = e.target;
    const success = document.getElementById("successMessage");

    // Envia via AJAX
    fetch("https://formsubmit.co/visualdev2025@gmail.com", {
        method: "POST",
        body: new FormData(form)
    })
    .then(() => {
        // Mostra a mensagem
        success.style.display = "block";

        // Limpa o formulário
        form.reset();

        // Some após 5s
        setTimeout(() => {
            success.style.display = "none";
        }, 5000);
    })
    .catch(() => {
        alert("Ocorreu um erro ao enviar sua mensagem.");
    });
});
