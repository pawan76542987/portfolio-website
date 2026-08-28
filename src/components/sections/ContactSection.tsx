'use client';

import React, { useState } from 'react';
import { personalInfo, socialLinks } from '@/data/socials';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '@/components/ui/Icons';
import { Mail, Copy, Check, Send, Sparkles, Phone } from 'lucide-react';
import confetti from 'canvas-confetti';
import styles from './ContactSection.module.css';

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 },
      });
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const copyPhone = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.phone);
      setPhoneCopied(true);
      setTimeout(() => setPhoneCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger local mailto protocol with prefilled content
    const subject = encodeURIComponent(`Project Inquiry / Engineering Discussion — from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || 'N/A'}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const getSocialIcon = (type: string) => {
    switch (type) {
      case 'github':
        return <GithubIcon size={18} />;
      case 'linkedin':
        return <LinkedinIcon size={18} />;
      case 'instagram':
        return <InstagramIcon size={18} />;
      case 'email':
        return <Mail size={18} />;
      default:
        return <Sparkles size={18} />;
    }
  };

  return (
    <section id="contact" className="section" aria-label="Contact and Collaboration">
      <div className="container">
        <SectionHeader
          eyebrow="GET IN TOUCH • COLLABORATION"
          title="Have Something Worth Building?"
          subtitle="Open for software engineering internships, recruiter conversations, and select freelance web development projects."
        />

        <div className={styles.contactLayout}>
          {/* Direct Communication Channels */}
          <div className={styles.channelsColumn}>
            <div className={styles.channelsCard}>
              <div className={styles.cardHeader}>
                <span className={styles.headerLabel}>DIRECT TRANSMISSION</span>
                <Badge variant="status" size="sm">
                  READY TO CONNECT
                </Badge>
              </div>

              {/* Primary Email */}
              <div className={styles.emailBlock}>
                <span className={styles.emailLabel}>PRIMARY EMAIL ADDRESS</span>
                <div className={styles.emailRow}>
                  <a href={`mailto:${personalInfo.email}`} className={styles.emailLink}>
                    <Mail size={18} className={styles.emailIcon} />
                    <span>{personalInfo.email}</span>
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className={styles.copyBtn}
                    aria-label="Copy email address"
                    title="Copy email address"
                  >
                    {copied ? <Check size={16} className={styles.checkIcon} /> : <Copy size={16} />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              {/* Secondary Phone Contact */}
              <div className={styles.emailBlock}>
                <span className={styles.emailLabel}>PHONE TRANSMISSION (SECONDARY)</span>
                <div className={styles.emailRow}>
                  <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className={styles.emailLink}>
                    <Phone size={18} className={styles.emailIcon} />
                    <span>{personalInfo.phone}</span>
                  </a>
                  <button
                    type="button"
                    onClick={copyPhone}
                    className={styles.copyBtn}
                    aria-label="Copy phone number"
                    title="Copy phone number"
                  >
                    {phoneCopied ? <Check size={16} className={styles.checkIcon} /> : <Copy size={16} />}
                    <span>{phoneCopied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              {/* Social Channels */}
              <div className={styles.socialsBlock}>
                <span className={styles.socialsLabel}>NETWORK CHANNELS</span>
                <div className={styles.socialsGrid}>
                  {socialLinks.map((link) => (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialCard}
                    >
                      <span className={styles.socialIcon}>{getSocialIcon(link.type)}</span>
                      <div className={styles.socialInfo}>
                        <span className={styles.socialPlatform}>{link.platform}</span>
                        <span className={styles.socialHandle}>{link.handle}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className={styles.locationBlock}>
                <span className={styles.locLabel}>CURRENT LOCATION</span>
                <span className={styles.locValue}>{personalInfo.location} (Standard IST)</span>
              </div>
            </div>
          </div>

          {/* Interactive Message Dispatch Form */}
          <div className={styles.formColumn}>
            <div className={styles.formCard}>
              <div className={styles.cardHeader}>
                <span className={styles.headerLabel}>MESSAGE DISPATCH</span>
                <span className={styles.secureTag}>MAILTO CLIENT DISPATCH</span>
              </div>

              {submitted ? (
                <div className={styles.successState}>
                  <Check size={36} className={styles.successIcon} />
                  <h3 className={styles.successTitle}>Mail Client Initiated</h3>
                  <p className={styles.successText}>
                    Your default mail client has opened with your inquiry pre-filled. You can also write to <strong>{personalInfo.email}</strong> directly.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Note
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formGrid}>
                    <div className={styles.fieldGroup}>
                      <label htmlFor="contact-name" className={styles.label}>
                        Your Name <span className={styles.required}>*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="Ada Lovelace"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={styles.input}
                      />
                    </div>

                    <div className={styles.fieldGroup}>
                      <label htmlFor="contact-email" className={styles.label}>
                        Your Email <span className={styles.required}>*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="ada@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={styles.input}
                      />
                    </div>
                  </div>

                  <div className={styles.fieldGroup}>
                    <label htmlFor="contact-company" className={styles.label}>
                      Company / Organization <span className={styles.optional}>(Optional)</span>
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      placeholder="Tech Startup / Client / Self"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.fieldGroup}>
                    <label htmlFor="contact-message" className={styles.label}>
                      Message / Objective <span className={styles.required}>*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      placeholder="Tell me about the engineering role, project scope, or idea..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={styles.textarea}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    rightIcon={<Send size={18} />}
                  >
                    Initiate Discussion
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
