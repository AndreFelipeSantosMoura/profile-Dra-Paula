// Função para rastrear cliques no WhatsApp
export const trackWhatsAppClick = (location) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click', {
      'event_category': 'WhatsApp',
      'event_label': location,
      'value': 1
    });
  }
};