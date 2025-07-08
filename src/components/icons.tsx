import type { SVGProps } from "react";

export const Icons = {
  Logo: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18.5 7.4c0 .9.2 1.8.6 2.6C18.2 11.2 17.1 12 16 12c-1.4 0-2.8-.8-4-2-1.2-1.2-2.6-2-4-2-1.1 0-2.2.8-3.1 2.6.4-.8.6-1.7.6-2.6-.1-2.9-2.5-5.3-5.4-5.3C.1 2.1 0 2.2 0 2.3c0 1.2.4 2.3 1.2 3.1.8.8 1.9 1.2 3.1 1.2.9 0 1.8-.3 2.6-1 .2.3.4.5.7.7 1.2 1.2 2.6 2 4 2 1.4 0 2.8-.8 4-2 .3-.3.6-.6.8-.9.9.8 2 1.3 3.3 1.3 2.9 0 5.3-2.4 5.3-5.3 0-.1 0-.2-.1-.3-2.9.1-5.3 2.5-5.3 5.4z" />
      <path d="M5.6 13.3c.3 2.9 2.7 5.2 5.6 5.2s5.3-2.3 5.6-5.2H5.6z" />
      <path d="M12 18.5c-1.4 0-2.8.8-4 2s-2.6 2-4 2" />
    </svg>
  ),
  Mail: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  Phone: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  MapPin: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
};
