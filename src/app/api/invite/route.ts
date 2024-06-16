// pages/api/invite.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { generateInvite } from '@/lib/invite';
  
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });
  if (!session || !session.user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const { email } = req.body;

  try {
    const invite = await generateInvite(email, session.user.id);
    const inviteLink = `${process.env.NEXTAUTH_URL}/register?token=${invite.token}`;
    return res.status(200).json({ inviteLink });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
