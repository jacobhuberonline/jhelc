'use client';

import { useState } from 'react';
import { toast } from 'sonner';

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [serviceValue, setServiceValue] = useState('');
  const [preferred, setPreferred] = useState('');
  const [showCustomExtra, setShowCustomExtra] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement; // capture form before async
    setSubmitting(true);

    const formData = new FormData(form);

    const email = (formData.get('email') as string)?.trim();
    const phone = (formData.get('phone') as string)?.trim();

    if (!email) {
      setSubmitting(false);
      toast('Please enter your email address.');
      return;
    }

    if (formData.get('preferred') === 'Phone' && !phone) {
      setSubmitting(false);
      toast('Please provide a phone number or change the preferred contact method to Email.');
      return;
    }

    const res = await fetch('/api/send', { method: 'POST', body: formData });
    setSubmitting(false);

    if (res.ok) {
      form.reset();
      toast('✅ Sent!', {
        description: 'Thanks — I’ll be in touch shortly.',
      });
    } else {
      const { error } = await res.json().catch(() => ({ error: 'Unknown error' }));
      toast('❌ Whoops…', {
        description: typeof error === 'string' ? error : 'Something went wrong. Please try again.',
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 pt-4">
      <div className="space-y-1">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" required />
      </div>

      {/* Email (required) */}
      <div className="space-y-1">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
        />
      </div>

      {/* Phone (optional) */}
      <div className="space-y-1">
        <Label htmlFor="phone">Phone number (optional)</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="555‑123‑4567"
        />
      </div>

      {/* Preferred contact method ‑ required */}
      <div className="space-y-1">
        <Label htmlFor="preferredTrigger">Preferred contact method</Label>
        <Select
          value={preferred}
          onValueChange={setPreferred}
        >
          <SelectTrigger id="preferredTrigger">
            <SelectValue placeholder="Select…" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Email">Email</SelectItem>
            <SelectItem value="Phone">Text</SelectItem>
          </SelectContent>
        </Select>
        {/* hidden input so value reaches the server */}
        <input type="hidden" name="preferred" value={preferred} required />
      </div>

      <div className="space-y-1">
        <Label htmlFor="serviceTrigger">Service</Label>
        <Select
          value={serviceValue}
          onValueChange={setServiceValue}
        >
          <SelectTrigger id="serviceTrigger">
            <SelectValue placeholder="Select a service…" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Hourly yard work">Hourly yard work</SelectItem>
            <SelectItem value="Monthly mowing package">Monthly mowing / trimming</SelectItem>
            <SelectItem value="Both">Both (hourly + monthly)</SelectItem>
          </SelectContent>
        </Select>
        {/* hidden input so value reaches the server */}
        <input type="hidden" name="service" value={serviceValue} required />
      </div>
      {serviceValue === 'Other' && (
        <div className="space-y-1">
          <Label htmlFor="customService">Describe other service</Label>
          <Input
            id="customService"
            name="customService"
            placeholder="e.g., stump removal"
          />
        </div>
      )}
      {(serviceValue === 'Hourly yard work' || serviceValue === 'Both') && (
        <div className="space-y-1">
          <Label>Additional services</Label>
          <div className="space-y-2 pl-1">
            {[
              'Mow, edge, and precision‑trim',
              'Shape hedges & shrubs for curb appeal',
              'Garden‑bed clean‑ups and weed control',
              'Seasonal leaf removal / full‑yard refresh',
              'Alleyway debris & litter clean‑up',
            ].map((text) => (
              <label key={text} className="flex items-center space-x-2">
                <Checkbox name="extras" value={text} />
                <span className="text-sm">{text}</span>
              </label>
            ))}

            {/* “Other” checkbox */}
            <label className="flex items-center space-x-2">
              <Checkbox
                name="extras"
                value="Other"
                onCheckedChange={(checked) => setShowCustomExtra(!!checked)}
              />
              <span className="text-sm">Other</span>
            </label>

            {showCustomExtra && (
              <Input
                name="customExtras"
                placeholder="Describe other service"
                className="ml-6 mt-1"
              />
            )}
          </div>
        </div>
      )}
      <div className="space-y-1">
        <Label htmlFor="address">Address</Label>
        <Input id="address" name="address" placeholder="1234 Magnolia Ave" />
      </div>
      <div className="space-y-1">
        <Label htmlFor="message">Message / additional information</Label>
        <Textarea id="message" name="message" rows={4} required />
      </div>
      <Button type="submit" disabled={submitting}>
        {submitting ? 'Sending…' : 'Send'}
      </Button>
    </form>
  );
}