
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password, name } = body;

    if (!email || !password || !name) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Generate verification token
    const verificationToken = crypto.randomBytes(32).toString('hex');
    const tokenExpiry = new Date();
    tokenExpiry.setHours(tokenExpiry.getHours() + 24); // Token expires in 24 hours

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        role: 'user',
        isActive: true,
        emailVerified: false,
        verificationToken,
        verificationTokenExpiry: tokenExpiry,
      }
    });

    // Generate verification URL
    const baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000';
    const verificationUrl = `${baseUrl}/auth/verify-email?token=${verificationToken}`;

    // In production, you would send an actual email here
    // For now, we'll log it to console (in production, replace this with actual email service)
    console.log('='.repeat(80));
    console.log('EMAIL VERIFICATION REQUIRED');
    console.log('='.repeat(80));
    console.log(`To: ${email}`);
    console.log(`Subject: Verify Your Email - Moringaling Philippines Foundation`);
    console.log(`\nHello ${name},\n`);
    console.log('Thank you for registering with Moringaling Philippines Foundation!');
    console.log('\nPlease verify your email address by clicking the link below:');
    console.log(`\n${verificationUrl}\n`);
    console.log('This link will expire in 24 hours.');
    console.log('\nIf you did not create this account, please ignore this email.');
    console.log('='.repeat(80));

    return NextResponse.json({
      message: 'Registration successful! Please check your email to verify your account.',
      requiresVerification: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
      // In development, include the verification URL for testing
      ...(process.env.NODE_ENV === 'development' && { verificationUrl })
    }, { status: 201 });

  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
