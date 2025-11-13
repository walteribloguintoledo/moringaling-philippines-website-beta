
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { z } from 'zod';

export const dynamic = "force-dynamic";

const donationSchema = z.object({
  donorName: z.string().min(2, 'Name must be at least 2 characters'),
  donorEmail: z.string().email('Please enter a valid email address'),
  donorPhone: z.string().optional(),
  amount: z.number().min(100, 'Minimum donation amount is ₱100').max(100000, 'Maximum donation amount is ₱100,000'),
  paymentMethod: z.enum(['GCash', 'QR_PH']),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate the data
    const validatedData = donationSchema.parse(body);

    // Save to database
    const donation = await prisma.donation.create({
      data: {
        donorName: validatedData.donorName,
        donorEmail: validatedData.donorEmail,
        donorPhone: validatedData.donorPhone || null,
        amount: validatedData.amount,
        currency: 'PHP',
        paymentMethod: validatedData.paymentMethod,
        status: 'pending',
        proofUploaded: false,
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Donation form submitted successfully',
      donationId: donation.id,
    }, { status: 201 });

  } catch (error) {
    console.error('Donation form submission error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json({
        error: 'Validation failed',
        details: error.errors,
      }, { status: 400 });
    }

    return NextResponse.json({
      error: 'Failed to submit donation form',
    }, { status: 500 });
  }
}
