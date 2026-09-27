'use strict';
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
menu?.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('open', open);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav?.classList.contains('open')) {
    nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.focus();
  }
});
const form = document.querySelector('#contact-form');
if (form) {
  const config = window.KERK_CONFIG || {};
  const endpoint = /^https:\/\/[^\s]+$/.test(config.formEndpoint || '') ? config.formEndpoint : '';
  const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.contactEmail || '') ? config.contactEmail : '';
  const notice = document.querySelector('#form-notice');
  const button = document.querySelector('#send-button');
  const privacy = document.querySelector('#privacy-note');
  const zone = new URLSearchParams(location.search).get('gebied');
  if ([...form.elements.gebied.options].some(option => option.value === zone)) form.elements.gebied.value = zone;
  if (endpoint || email) {
    button.disabled = false;
    if (endpoint) {
      notice.textContent = 'Vul je gegevens en bericht in. Alle velden zijn verplicht.';
      privacy.textContent = 'Je naam, e-mailadres en bericht worden via onze formulierdienst doorgegeven om je reactie te behandelen.';
    } else {
      button.textContent = 'Open bericht in je mailprogramma ↗';
      notice.textContent = 'Dit formulier maakt een e-mail klaar. Je verzendt die zelf vanuit je mailprogramma.';
      privacy.textContent = 'Je gegevens worden in een e-mail aan ' + email + ' gezet. Controleer die e-mail voordat je hem verzendt.';
    }
  }
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (!form.reportValidity() || form.elements._gotcha.value || (!endpoint && !email)) return;
    const data = new FormData(form);
    const area = form.elements.gebied.selectedOptions[0].textContent;
    if (!endpoint) {
      const body = `Naam: ${data.get('name')}\nE-mailadres: ${data.get('email')}\nDeelgebied: ${area}\n\n${data.get('message')}`;
      location.href = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent('Kerk Koewacht — ' + area)}&body=${encodeURIComponent(body)}`;
      notice.textContent = 'Je mailprogramma wordt geopend. Je bericht is pas verstuurd nadat je het daar zelf verzendt. Opent er niets? Mail dan naar ' + email + '.';
      return;
    }
    button.disabled = true;button.textContent = 'Bezig met versturen…';
    notice.classList.remove('error', 'success');
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' }, signal: controller.signal });
      if (!response.ok) throw new Error('Verzenden mislukt');
      notice.textContent = 'Bedankt! Je bericht is verzonden.';notice.classList.add('success');form.reset();
    } catch {
      notice.textContent = 'Het versturen kon niet worden bevestigd. Je tekst blijft staan. Controleer je verbinding en probeer het opnieuw.';notice.classList.add('error');
    } finally {
      clearTimeout(timeout);button.disabled = false;button.textContent = 'Bericht versturen ↗';
    }
  });
}
