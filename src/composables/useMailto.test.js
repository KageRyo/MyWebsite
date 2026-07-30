import { describe, expect, it } from 'vitest'
import { buildMailBody, buildMailSubject, createMailtoUrl } from './useMailto'

const translations = {
  'contact.form.subjectPrefix': 'Contact message from {name}',
  'contact.form.bodyTemplate': 'Name: {name}\nGender: {gender}\nEmail: {email}\n\nMessage:\n{message}',
  'contact.form.male': 'Male'
}

const t = (key, values = {}) =>
  Object.entries(values).reduce(
    (message, [name, value]) => message.replace(`{${name}}`, value),
    translations[key]
  )

describe('mailto helpers', () => {
  const form = { name: 'Ada & Bob', gender: 'male', email: 'ada@example.com', message: '<Hello>' }

  it('builds translated subject and body text', () => {
    expect(buildMailSubject(t, form)).toBe('Contact message from Ada & Bob')
    expect(buildMailBody(t, form)).toContain('Message:\n<Hello>')
  })

  it('encodes user content in a mailto URL', () => {
    const url = createMailtoUrl({ recipient: 'person@example.com', subject: 'A & B', body: '<Hello>' })

    expect(url).toBe('mailto:person%40example.com?subject=A%20%26%20B&body=%3CHello%3E')
  })
})
