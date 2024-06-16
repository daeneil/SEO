// lib/invite.js
import { nanoid } from 'nanoid';
import { prisma } from './prismaDB';

export async function generateInvite(email: string, inviterId: string) {
  const token = nanoid(10);
  const invite = await prisma.invite.create({
    data: {
      email,
      token,
      inviterId,
    },
  });
  return invite;
}
