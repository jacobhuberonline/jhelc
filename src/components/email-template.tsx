import React from "react";

export interface EmailTemplateProps {
  name: string;
  service: string;
  phone: string;
  contactMethod: string;
  address: string;
  extras?: string[];
  message?: string;
}

const EmailTemplate = ({
  name,
  service,
  phone,
  contactMethod,
  address,
  extras = [],
  message = "",
}: EmailTemplateProps) => (
  <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.5" }}>
    <h2>New quote request</h2>

    <p>
      <strong>Name:</strong> {name}
    </p>
    <p>
      <strong>Preferred Contact Method:</strong> {contactMethod}
    </p>
    <p>
      <strong>Phone Number:</strong> {phone}
    </p>
    <p>
      <strong>Address:</strong> {address}
    </p>
    <p>
      <strong>Service:</strong> {service}
    </p>

    {extras.length > 0 && (
      <p>
        <strong>Extras:</strong> {extras.join(", ")}
      </p>
    )}

    {message && (
      <p>
        <strong>Message:</strong>
        <br />
        {message}
      </p>
    )}
  </div>
);

export default EmailTemplate;
export { EmailTemplate };