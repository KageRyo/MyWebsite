export const CONTACT_EMAIL = 'kageryo@coderyo.com'

export const buildMailSubject = (t, form) =>
  t('contact.form.subjectPrefix', { name: form.name })

export const buildMailBody = (t, form) => {
  const genderKey = `contact.form.${form.gender}`

  return t('contact.form.bodyTemplate', {
    name: form.name,
    gender: t(genderKey),
    email: form.email,
    message: form.message
  })
}

export const createMailtoUrl = ({ recipient = CONTACT_EMAIL, subject, body }) =>
  `mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

export const copyText = async text => {
  if (!navigator.clipboard?.writeText) {
    return false
  }

  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    return false
  }
}
