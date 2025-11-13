
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Send, CheckCircle } from 'lucide-react';

interface MembershipFormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  cityProvince: string;
  reasonForJoining: string;
  membershipType: 'Individual' | 'Organization';
}

export function MembershipForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<MembershipFormData>({
    defaultValues: {
      membershipType: 'Individual'
    }
  });

  const onSubmit = async (data: MembershipFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/membership', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit membership application');
      }

      setIsSubmitted(true);
      reset();
      toast({
        title: "Application submitted successfully!",
        description: "We'll review your application and contact you soon.",
      });

    } catch (error) {
      console.error('Membership form error:', error);
      toast({
        title: "Error submitting application",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Application Submitted!</h3>
        <p className="text-gray-600 mb-6">
          Thank you for your interest in joining our community. We'll review your application 
          and contact you within 2-3 business days.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
        >
          Submit Another Application
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Personal Information */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Personal Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              id="fullName"
              {...register('fullName', { 
                required: 'Full name is required',
                minLength: { value: 2, message: 'Name must be at least 2 characters' }
              })}
              placeholder="Enter your full name"
              className={errors.fullName ? 'border-red-500' : ''}
            />
            {errors.fullName && (
              <p className="text-sm text-red-600">{errors.fullName.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Please enter a valid email address'
                }
              })}
              placeholder="Enter your email address"
              className={errors.email ? 'border-red-500' : ''}
            />
            {errors.email && (
              <p className="text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-2 mt-4">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            type="tel"
            {...register('phone', { 
              required: 'Phone number is required',
              minLength: { value: 10, message: 'Please enter a valid phone number' }
            })}
            placeholder="Enter your phone number"
            className={errors.phone ? 'border-red-500' : ''}
          />
          {errors.phone && (
            <p className="text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Address Information */}
      <div className="bg-blue-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Address Information</h3>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="address">Complete Address *</Label>
            <Textarea
              id="address"
              rows={3}
              {...register('address', { 
                required: 'Address is required',
                minLength: { value: 10, message: 'Please provide a complete address' }
              })}
              placeholder="Enter your complete address (Street, Barangay, Municipality/City)"
              className={errors.address ? 'border-red-500' : ''}
            />
            {errors.address && (
              <p className="text-sm text-red-600">{errors.address.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="cityProvince">City/Province *</Label>
            <Input
              id="cityProvince"
              {...register('cityProvince', { 
                required: 'City/Province is required'
              })}
              placeholder="e.g., Manila, NCR or Cebu, Cebu"
              className={errors.cityProvince ? 'border-red-500' : ''}
            />
            {errors.cityProvince && (
              <p className="text-sm text-red-600">{errors.cityProvince.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* Membership Type */}
      <div className="bg-purple-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Membership Type</h3>
        
        <RadioGroup
          defaultValue="Individual"
          onValueChange={(value) => setValue('membershipType', value as 'Individual' | 'Organization')}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-2 p-4 border rounded-lg cursor-pointer hover:bg-purple-100 transition-colors">
              <RadioGroupItem value="Individual" id="individual" />
              <Label htmlFor="individual" className="flex-1 cursor-pointer">
                <div>
                  <div className="font-medium">Individual Membership</div>
                  <div className="text-sm text-gray-600">For personal interest and home cultivation</div>
                </div>
              </Label>
            </div>

            <div className="flex items-center space-x-2 p-4 border rounded-lg cursor-pointer hover:bg-purple-100 transition-colors">
              <RadioGroupItem value="Organization" id="organization" />
              <Label htmlFor="organization" className="flex-1 cursor-pointer">
                <div>
                  <div className="font-medium">Organization Membership</div>
                  <div className="text-sm text-gray-600">For farms, schools, health centers, NGOs</div>
                </div>
              </Label>
            </div>
          </div>
        </RadioGroup>
      </div>

      {/* Reason for Joining */}
      <div className="bg-green-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Why do you want to join?</h3>
        
        <div className="space-y-2">
          <Label htmlFor="reasonForJoining">Tell us about your interest in moringa *</Label>
          <Textarea
            id="reasonForJoining"
            rows={4}
            {...register('reasonForJoining', { 
              required: 'Please tell us why you want to join',
              minLength: { value: 50, message: 'Please provide more details (at least 50 characters)' }
            })}
            placeholder="Please share your interest in moringa, your goals, and how you hope to contribute to our community..."
            className={errors.reasonForJoining ? 'border-red-500' : ''}
          />
          {errors.reasonForJoining && (
            <p className="text-sm text-red-600">{errors.reasonForJoining.message}</p>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-purple-600 hover:bg-purple-700 h-12"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting Application...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Submit Membership Application
          </>
        )}
      </Button>

      <p className="text-sm text-gray-600 text-center">
        * Required fields. Your information will be kept confidential and used only for membership processing.
      </p>
    </form>
  );
}
