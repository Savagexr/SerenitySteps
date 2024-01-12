import { PrismaClient } from '@prisma/client';
import { H3Event } from 'h3';
// @ts-expect-error
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export default defineEventHandler(async (event: H3Event) => {
  try {
    const { name, email, password } = await readBody(event);
    if (!email || !name || !password) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Missing info',
      });
    }
    const userExists = await prisma.user.findUnique({
      where:{
        email
      }
    })
    if(userExists){
      throw createError({
        statusCode: 500,
        statusMessage: 'Duplicate email',
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await prisma.user.create({
      data: {
        email,
        hashedPassword,
        name,
      },
    });
    return user;
  } catch (e:any) {
    throw createError({
      statusCode: 500,
      statusMessage: e.statusMessage||'Something went error',
    });
  }
});
