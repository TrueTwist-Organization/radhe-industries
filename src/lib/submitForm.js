import { SITE } from '../constants/site';

const FORM_ENDPOINT = import.meta.env.PROD
  ? '/api/inquiry'
  : `https://formsubmit.co/ajax/${SITE.email}`;

export async function submitForm(formType, fields) {
  const response = await fetch(FORM_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      _subject: `[${formType}] ${SITE.domain}`,
      _template: 'table',
      _captcha: 'false',
      form_type: formType,
      ...fields,
    }),
  });

  let data;
  try {
    data = await response.json();
  } catch {
    throw new Error('Unable to send your request. Please call us directly.');
  }

  if (!response.ok || data.success !== 'true') {
    throw new Error(data.message || 'Unable to send your request. Please try WhatsApp or call us.');
  }

  return data;
}
