
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { z } from 'zod';

export const dynamic = "force-dynamic";

const membershipSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  address: z.string().min(10, 'Please provide a complete address'),
  cityProvince: z.string().min(2, 'City/Province is required'),
  reasonForJoining: z.string().min(50, 'Please provide more details about your interest'),
  membershipType: z.enum(['Individual', 'Organization']),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate the data
    const validatedData = membershipSchema.parse(body);

    // Save to database
    const membershipApplication = await prisma.membershipApplication.create({
      data: {
        fullName: validatedData.fullName,
        email: validatedData.email,
        phone: validatedData.phone,
        address: validatedData.address,
        cityProvince: validatedData.cityProvince,
        reasonForJoining: validatedData.reasonForJoining,
        membershipType: validatedData.membershipType,
        status: 'pending',
      },
    });

    // Send email notification to sales@avasiaonline.com
    try {
      // Note: In a real implementation, you would use a service like SendGrid, Nodemailer, etc.
      // For this demo, we'll just log that an email should be sent
      console.log(`New membership application received:
        ID: ${membershipApplication.id}
        Name: ${validatedData.fullName}
        Email: ${validatedData.email}
        Type: ${validatedData.membershipType}
        Reason: ${validatedData.reasonForJoining}
        
        This should trigger an email to sales@avasiaonline.com`);
      
      // Simulate email sending success
    } catch (emailError) {
      console.error('Email notification failed:', emailError);
      // Continue processing even if email fails
    }

    return NextResponse.json({
      success: true,
      message: 'Membership application submitted successfully',
      applicationId: membershipApplication.id,
    }, { status: 201 });

  } catch (error) {
    console.error('Membership application submission error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json({
        error: 'Validation failed',
        details: error.errors,
      }, { status: 400 });
    }

    return NextResponse.json({
      error: 'Failed to submit membership application',
    }, { status: 500 });
  }
}
