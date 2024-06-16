// components/InviteForm.js
import { FormEvent, useState } from 'react';
import { useSession } from 'next-auth/react';

export default function InviteForm() {
  const { data: session } = useSession();
  const [email, setEmail] = useState('');
  const [inviteLink, setInviteLink] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!session) {
      setMessage('You must be logged in to send invites');
      return;
    }

    try {
      const res = await fetch('/api/invite', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        const data = await res.json();
        setInviteLink(data.inviteLink);
        setMessage('Invite link generated successfully');
        setEmail('');
      } else {
        setMessage('Failed to generate invite link');
      }
    } catch (error) {
      setMessage('An error occurred');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email to invite"
        className="border p-2"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 mt-2">
        Generate Invite Link
      </button>
      {message && <p className="mt-2">{message}</p>}
      {inviteLink && (
        <div className="mt-2">
          <p>Invite Link:</p>
          <a href={inviteLink} className="text-blue-500">{inviteLink}</a>
        </div>
      )}
    </form>
  );
}
